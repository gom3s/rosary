import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import Header from '../index'
import AuthProvider, {AuthContext} from 'src/context/AuthProvider'
import {BrowserRouter as Router} from 'react-router-dom'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjEyMzQsImV4cCI6MTU4OTUyODUyOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAb3JhcmVwcm9tZS5jb20iLCJpZCI6IjExYWFhMWExLTIzNDUtNjc4OS05OWFhLWEwZWUwMGQwMGFhMCIsImp0aSI6IjI4NzY0NWI3LTU1YmUtNDI3ZS1hMzhkLTQ4MGM3MmE4MzIyMCJ9.VUFJdGqdLvY5Xl-u9dRVggmGAOgm2EnSmIMVwobJpG8'

const Container = () => {
  const {setAuthToken} = React.useContext(AuthContext)

  return (
    <div>
      <Header />
      <button data-testid="login" onClick={() => setAuthToken(token)} />
      <button data-testid="logout" onClick={() => setAuthToken('')} />
    </div>
  )
}

beforeEach(() => {
  jest.clearAllMocks()
})

it('should render icon for logged in user', () => {
  const {getByTestId} = render(
    <AuthProvider>
      <Router>
        <Container />
      </Router>
    </AuthProvider>,
  )

  fireEvent.click(getByTestId('login'))

  expect(getByTestId('logged-user')).toBeTruthy()
})
it.skip('should not render icon for not logged user', () => {
  const {queryByTestId, getByTestId} = render(
    <AuthProvider>
      <Router>
        <Container />
      </Router>
    </AuthProvider>,
  )
  fireEvent.click(getByTestId('login'))
  fireEvent.click(getByTestId('logout'))
  const icon = queryByTestId('logged-user')
  expect(icon && icon.getAttribute('hidden')).toBeTruthy()
})
