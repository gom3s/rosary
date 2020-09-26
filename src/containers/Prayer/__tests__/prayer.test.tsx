import React from 'react'
import {Prayer} from '../Prayer'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const intention = {
  id: '2',
  userId: '3',
  title: 'title',
  description: 'desc',
}

jest.mock('../../../hooks/useRosaryApi/usePrayRosaryRequest', () => ({
  usePrayRosaryRequest: () => ({
    state: {
      data: {type: 1, rosary: '2', prayer: '3'},
      isLoading: false,
    },
    doRequest: jest.fn(),
  }),
}))

beforeEach(() => {
  jest.resetModules()
})

describe('Prayer', () => {
  it('should render', () => {
    const {container} = render(<Prayer prayerId="1" intention={intention} />)

    expect(container.innerHTML).toMatch('Pobierz tajemnicę')
    expect(container.innerHTML).toMatch('Gotowe')
  })

  it('should render save action button disabled', () => {
    const {getByTestId} = render(<Prayer prayerId="1" intention={intention} />)
    const getButton = getByTestId('pray-get-button')
    const saveButton = getByTestId('pray-save-button')

    expect(getButton).toBeEnabled()
    expect(saveButton).toBeDisabled()

    fireEvent.click(getButton)

    expect(getButton).toBeDisabled()
    expect(saveButton).toBeEnabled()
  })
})
