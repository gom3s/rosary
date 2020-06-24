import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import {UIStateProvider, UIContext, defaultValue} from '../UIStateProvider'

let value = {
  loginRedirect: '',
}

const expected = {
  loginRedirect: '/123/aa/bb',
}

const TestComponent = () => {
  const {loginRedirect, setLoginRedirect} = React.useContext(UIContext)

  const updateContex = () => {
    setLoginRedirect(expected.loginRedirect)
  }

  React.useEffect(() => {
    value.loginRedirect = loginRedirect
  }, [loginRedirect])

  return (
    <>
      ala ma kota
      <div data-testid="button" onClick={updateContex}>
        test
      </div>
    </>
  )
}

const Wrapper = (
  <UIStateProvider>
    <TestComponent />
  </UIStateProvider>
)

it('should change value', () => {
  const {getByTestId} = render(Wrapper)

  expect(value.loginRedirect).toEqual(defaultValue.loginRedirect)

  fireEvent.click(getByTestId('button'))

  expect(value.loginRedirect).toEqual(expected.loginRedirect)
})
