import React from 'react'
import {TopMenu} from '../index'

import {renderWithRouter} from 'src/tools/renderWithRouter'

it('should render login button', () => {
  const {getByText} = renderWithRouter(<TopMenu />)

  expect(getByText('Login')).toBeTruthy()
})

it('should not render login button for logged in user', () => {
  const {queryByText} = renderWithRouter(<TopMenu isAuthenticated={true} />)

  expect(queryByText('Login')).toBeNull()
})
