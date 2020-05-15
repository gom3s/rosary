import React from 'react'
import {render} from '@testing-library/react'

import Header from '../index'
import AuthProvider, {AuthContext} from 'src/context/AuthProvider'
import {BrowserRouter as Router} from 'react-router-dom'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJlbWFpbCI6InRlc3RAdGVzdC5wbCIsInJvbGUiOiJST0xFX1VTRVIifQ.qfKooWSjhJsB94ijsvWOpjNcDuS5nJIJaCfNW-rl97k'
const Container = () => {
  const {setAuthToken} = React.useContext(AuthContext)
  setAuthToken(token)

  return <Header />
}

const Wrapper = (
  <AuthProvider>
    <Router>
      <Container />
    </Router>
  </AuthProvider>
)

it('should render email of logged in user', () => {
  const {getByText} = render(Wrapper)

  expect(getByText('test@test.pl')).toBeTruthy()
})
