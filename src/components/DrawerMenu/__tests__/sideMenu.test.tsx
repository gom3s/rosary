import React from 'react'

import {renderWithRouter} from 'src/tools/renderWithRouter'
import {SideMenu} from '../SideMenu'
import {AuthProviderStub} from 'src/tools/AuthProviderStub'

describe('sideMenu', () => {
  it('render login option for unauthenticated user ', () => {
    const {getByText, queryByText} = renderWithRouter(
      <AuthProviderStub isAuthenticated={false}>
        <SideMenu setOpen={jest.fn()} />
      </AuthProviderStub>,
    )

    expect(getByText('Zaloguj')).toBeTruthy()
    expect(queryByText('Wyloguj')).toBeNull()
  })

  it('render logout option for authenticated user ', () => {
    const {getByText, queryByText} = renderWithRouter(
      <AuthProviderStub isAuthenticated={true}>
        <SideMenu setOpen={jest.fn()} />
      </AuthProviderStub>,
    )

    expect(getByText('Wyloguj')).toBeTruthy()
    expect(queryByText('Zaloguj')).toBeNull()
  })

  it('should render add intention link', () => {
    const {getByText} = renderWithRouter(
      <AuthProviderStub isAuthenticated={false}>
        <SideMenu setOpen={jest.fn()} />
      </AuthProviderStub>,
    )
    expect(getByText('Dodaj intencję')).toBeTruthy()
  })
})
