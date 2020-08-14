import React from 'react'
import {render, wait} from '@testing-library/react'

import AuthProvider, {AuthContext, IAuthRole} from '../AuthProvider'

let isAuthenticatedProbe = false
let payloadProbe = {
  id: '',
  roles: [IAuthRole.ROLE_UNAUTHORIZED],
  username: '',
}
let hasRoleSpy
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjEyMzQsImV4cCI6MTU4OTUyODUyOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAb3JhcmVwcm9tZS5jb20iLCJpZCI6IjExYWFhMWExLTIzNDUtNjc4OS05OWFhLWEwZWUwMGQwMGFhMCIsImp0aSI6IjI4NzY0NWI3LTU1YmUtNDI3ZS1hMzhkLTQ4MGM3MmE4MzIyMCJ9.VUFJdGqdLvY5Xl-u9dRVggmGAOgm2EnSmIMVwobJpG8'

const TestComponent = () => {
  const {setAuthToken, payload, isAuthenticated, hasRole} = React.useContext(
    AuthContext,
  )
  setAuthToken(token)
  React.useEffect(() => {
    payloadProbe = payload
    hasRoleSpy = hasRole
    isAuthenticatedProbe = isAuthenticated
  }, [payload])

  return <>test</>
}

const Wrapper = (
  <AuthProvider>
    <TestComponent />
  </AuthProvider>
)

it('should decode token and set payload on seAuthToken', () => {
  const payload = {
    iat: 1234,
    exp: 1589528528,
    roles: [IAuthRole.ROLE_ADMIN, IAuthRole.ROLE_USER],
    username: 'test@orareprome.com',
    id: '11aaa1a1-2345-6789-99aa-a0ee00d00aa0',
  }

  render(Wrapper)

  expect(payloadProbe.id).toEqual(payload.id)
  expect(payloadProbe.roles).toEqual(payload.roles)
  expect(payloadProbe.username).toEqual(payload.username)
  // should chek if user has role
  expect(hasRoleSpy(IAuthRole.ROLE_ADMIN)).toBeTruthy()
  expect(hasRoleSpy(IAuthRole.ROLE_UNAUTHORIZED)).toBeFalsy()
})
