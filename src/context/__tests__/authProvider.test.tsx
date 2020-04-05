import React from 'react'
import {render} from '@testing-library/react'

import AuthProvider, {AuthContext} from '../AuthProvider'

let payloadProbe = {}
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJlbWFpbCI6InRlc3RAdGVzdC5wbCIsInJvbGUiOiJST0xFX1VTRVIifQ.qfKooWSjhJsB94ijsvWOpjNcDuS5nJIJaCfNW-rl97k'

const TestComponent = () => {
  const {setAuthToken, payload} = React.useContext(AuthContext)
  setAuthToken(token)
  React.useEffect(() => {
    payloadProbe = payload
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
    id: '1234567890',
    email: 'test@test.pl',
    role: 'ROLE_USER',
  }

  const {container} = render(Wrapper)

  expect(payloadProbe).toEqual(payload)
})
