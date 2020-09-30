import React from 'react'
import {render} from '@testing-library/react'

import Header from '../index'
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthProviderStub} from 'src/tools/AuthProviderStub'

beforeEach(() => {
  jest.clearAllMocks()
})

beforeEach(() => {
  jest.clearAllMocks()
})

it('should render icon for logged in user', () => {
  const {getByTestId} = render(
    <AuthProviderStub isAuthenticated={true}>
      <Router>
        <Header />
      </Router>
    </AuthProviderStub>,
  )

  expect(getByTestId('logged-user')).toBeTruthy()
})
it.skip('should not render icon for not logged user', () => {
  const {queryByTestId} = render(
    <AuthProviderStub isAuthenticated={false}>
      <Router>
        <Header />
      </Router>
    </AuthProviderStub>,
  )
  const icon = queryByTestId('logged-user')
  expect(icon && icon.getAttribute('hidden')).toBeTruthy()
})
