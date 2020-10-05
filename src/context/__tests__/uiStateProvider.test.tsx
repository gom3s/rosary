import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import {UIStateProvider, UIContext, defaultValue} from '../UIStateProvider'
import {mockGetObject, mockSetObject} from 'src/tools/repository'

jest.mock('src/tools/repository')

let value = {
  loginRedirect: '',
}

const expected = {
  loginRedirect: '/123/aa/bb',
}

const TestComponent = () => {
  const {loginRedirect, setLoginRedirect, activePrayer} = React.useContext(
    UIContext,
  )

  const updateContex = () => {
    setLoginRedirect(expected.loginRedirect)
  }

  const updatePrayerContex = () => {
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
      <div data-testid="test-prayer-button" onClick={updatePrayerContex}>
        test2
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

it('should use repository for prayer', () => {
  const {getByTestId} = render(Wrapper)
  mockGetObject.mockImplementation(() => jest.fn())
  expect(mockGetObject).toBeCalled()
  // expect(mockGetObject).toBeCalledWith()
})
