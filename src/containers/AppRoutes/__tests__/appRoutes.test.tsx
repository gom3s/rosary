import React from 'react'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {AppRoutes} from '../AppRoutes'
import Hero from '../../../components/Hero'
import {LoginWrapper} from 'src/tools/LoginWrapper'
import {AuthProviderStub} from 'src/tools/AuthProviderStub'

jest.mock('../../IntentionList', () => () => <div>Intention list</div>)
jest.mock('../../LoginPage', () => () => <div>Login page</div>)
jest.mock('../../AddIntentionPage', () => ({
  AddIntentionPage: () => <div>Add intention page</div>,
}))

beforeEach(() => {
  jest.clearAllMocks()
})

it('should open login form on login link click', () => {
  const history = createMemoryHistory()
  const {container} = render(
    <LoginWrapper>
      <Router history={history}>
        <AppRoutes />
      </Router>
    </LoginWrapper>,
  )

  expect(container.innerHTML).toMatch('Intention list')
})

it('For not logged user: should open login form on add intention button click', () => {
  const history = createMemoryHistory()
  const {container, getByTestId} = render(
    <AuthProviderStub isAuthenticated={false}>
      <Router history={history}>
        <Hero />
        <AppRoutes />
      </Router>
    </AuthProviderStub>,
  )

  expect(container.innerHTML).toMatch('Intention list')

  fireEvent.click(getByTestId('add-intention'))

  expect(container.innerHTML).toMatch('Login page')
})

it('For logged user: should open add intention page on add intention button click', () => {
  const history = createMemoryHistory()
  const Component = (
    <AuthProviderStub isAuthenticated={true}>
      <Router history={history}>
        <Hero />
        <AppRoutes />
      </Router>
    </AuthProviderStub>
  )
  const {container, getByTestId} = render(Component)

  expect(container.innerHTML).toMatch('Intention list')

  fireEvent.click(getByTestId('add-intention'))

  expect(container.innerHTML).toMatch('Add intention page')
})

it('should open "how it works" page ', () => {
  const history = createMemoryHistory()
  const {container, getByTestId} = render(
    <AuthProviderStub isAuthenticated={false}>
      <Router history={history}>
        <Hero />
        <AppRoutes />
      </Router>
    </AuthProviderStub>,
  )
  fireEvent.click(getByTestId('how-it-works'))

  expect(container.innerHTML).toMatch('How it works')
})
