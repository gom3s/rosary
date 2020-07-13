import React from 'react'
import {fireEvent} from '@testing-library/react'

import {LoginWrapper} from 'src/tools/LoginWrapper'
import {renderWithRouter} from 'src/tools/renderWithRouter'
import {SideMenu} from '../SideMenu'

describe('sideMenu', () => {
  it('render login option for unauthenticated user ', () => {
    const {getByText, queryByText} = renderWithRouter(
      <LoginWrapper>
        <SideMenu setOpen={jest.fn()} />
      </LoginWrapper>,
    )

    expect(getByText('Zaloguj')).toBeTruthy()
    expect(queryByText('Wyloguj')).toBeNull()
  })

  it('render logout option for authenticated user ', () => {
    const {getByTestId, getByText, queryByText} = renderWithRouter(
      <LoginWrapper>
        <SideMenu setOpen={jest.fn()} />
      </LoginWrapper>,
    )

    fireEvent.click(getByTestId('login'))

    expect(getByText('Wyloguj')).toBeTruthy()
    expect(queryByText('Zaloguj')).toBeNull()
  })

  it('should render add intention link', () => {
    const {getByText} = renderWithRouter(
      <LoginWrapper>
        <SideMenu setOpen={jest.fn()} />
      </LoginWrapper>,
    )
    expect(getByText('Dodaj intencję')).toBeTruthy()
  })
})
