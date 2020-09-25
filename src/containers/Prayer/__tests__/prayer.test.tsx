import React from 'react'
import {Prayer} from '../Prayer'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Prayer', () => {
  it('should render', () => {
    const {container} = render(<Prayer prayerid="1" intention="2" />)

    expect(container.innerHTML).toMatch('Pobierz tajemnicę')
    expect(container.innerHTML).toMatch('Gotowe')
  })
})
