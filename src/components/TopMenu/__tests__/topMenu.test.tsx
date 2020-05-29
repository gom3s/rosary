import React from 'react'
import {TopMenu} from '../index'
import {render} from '@testing-library/react'

it('should render login button', () => {
  const {getByText} = render(<TopMenu />)

  expect(getByText('Login')).toBeTruthy()
})

it('should not render login button for logged in user', () => {
  const {queryByText} = render(<TopMenu isLoggedIn={true} />)

  expect(queryByText('Login')).toBeNull()
})
