import React from 'react'
import {TopMenu} from '../index'
import {render} from '@testing-library/react'

import {renderWithRouter} from '../../../tools/renderWithRouter'

it('should render login button', () => {
  const {getByText} = renderWithRouter(<TopMenu />)

  expect(getByText('Login')).toBeTruthy()
})

it('should not render login button for logged in user', () => {
  const {queryByText} = renderWithRouter(<TopMenu isLoggedIn={true} />)

  expect(queryByText('Login')).toBeNull()
})
