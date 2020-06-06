import React from 'react'
import {AppRoutes} from '../AppRoutes'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent, act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

jest.mock('../../IntentionList', () => () => <div>Intention list</div>)

it('should open login form on login link click', () => {
  const history = createMemoryHistory()
  const {container} = render(
    <Router history={history}>
      <AppRoutes />
    </Router>,
  )

  expect(container.innerHTML).toMatch('Intention list')
})
