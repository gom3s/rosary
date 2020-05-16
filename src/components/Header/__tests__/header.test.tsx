import React from 'react'
import {render} from '@testing-library/react'

import Header from '../index'
import AuthProvider, {AuthContext} from 'src/context/AuthProvider'
import {BrowserRouter as Router} from 'react-router-dom'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjEyMzQsImV4cCI6MTU4OTUyODUyOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAb3JhcmVwcm9tZS5jb20iLCJpZCI6IjExYWFhMWExLTIzNDUtNjc4OS05OWFhLWEwZWUwMGQwMGFhMCIsImp0aSI6IjI4NzY0NWI3LTU1YmUtNDI3ZS1hMzhkLTQ4MGM3MmE4MzIyMCJ9.VUFJdGqdLvY5Xl-u9dRVggmGAOgm2EnSmIMVwobJpG8'
const Container = () => {
  const {setAuthToken} = React.useContext(AuthContext)
  setAuthToken(token)

  return <Header />
}

const Wrapper = container => (
  <AuthProvider>
    <Router>{container}</Router>
  </AuthProvider>
)

it('should render icon for logged in user', () => {
  const {getByTestId} = render(Wrapper(<Container />))

  expect(getByTestId('logged-user')).toBeTruthy()
})

it('should not render icon for not logged user', () => {
  const {queryByTestId} = render(Wrapper(<Header />))

  expect(queryByTestId('logged-user')).toBeNull()
})
