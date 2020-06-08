import React from 'react'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent, act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {AppRoutes} from '../AppRoutes'
import Hero from '../../../components/Hero'

jest.mock('../../IntentionList', () => () => <div>Intention list</div>)
jest.mock('../../LoginPage', () => () => <div>Login page</div>)

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
  const {container, getByText, getByTestId} = render(
    <Router history={history}>
      <Hero />
      <AppRoutes />
    </Router>,
  )

  expect(container.innerHTML).toMatch('Intention list')

  fireEvent.click(getByTestId('add-intention'))

  expect(container.innerHTML).toMatch('Login page')
})
