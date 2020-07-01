import React from 'react'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent, act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {AppRoutes} from '../AppRoutes'
import Hero from '../../../components/Hero'
import {} from '../../../context/AuthProvider'

jest.mock('../../IntentionList', () => () => <div>Intention list</div>)
jest.mock('../../LoginPage', () => () => <div>Login page</div>)
jest.mock('../../AddIntentionPage', () => ({
  AddIntentionPage: () => <div>Add intention page</div>,
}))

let realUseContext: any
let useContextMock: any

beforeEach(() => {
  jest.clearAllMocks()
  // Setup useContext mock
  realUseContext = React.useContext
  useContextMock = React.useContext = jest.fn()
  useContextMock.mockReturnValue({
    isLoggedIn: false,
  })
})
afterEach(() => {
  // Cleanup mock
  React.useContext = realUseContext
})

it('should open login form on login link click', () => {
  const history = createMemoryHistory()
  const {container} = render(
    <Router history={history}>
      <AppRoutes />
    </Router>,
  )

  expect(container.innerHTML).toMatch('Intention list')
})

it('For not logged user: should open login form on add intention button click', () => {
  const history = createMemoryHistory()
  const {container, getByTestId} = render(
    <Router history={history}>
      <Hero />
      <AppRoutes />
    </Router>,
  )

  expect(container.innerHTML).toMatch('Intention list')

  fireEvent.click(getByTestId('add-intention'))

  expect(container.innerHTML).toMatch('Login page')
})

it('For logged user: should open add intention page on add intention button click', () => {
  useContextMock.mockReturnValue({
    isLoggedIn: true,
  })
  const history = createMemoryHistory()
  const {container, getByTestId} = render(
    <Router history={history}>
      <Hero />
      <AppRoutes />
    </Router>,
  )

  expect(container.innerHTML).toMatch('Intention list')

  fireEvent.click(getByTestId('add-intention'))

  expect(container.innerHTML).toMatch('Add intention page')
})
