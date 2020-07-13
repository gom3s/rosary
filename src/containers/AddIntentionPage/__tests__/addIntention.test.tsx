import React from 'react'
import {render} from '@testing-library/react'
import {AddIntentionPage} from '../AddIntentionPage'

describe('Add intention Page', () => {
  it('should render form', () => {
    const {container} = render(<AddIntentionPage />)

    expect(container).toBeTruthy()
  })

  it('should render add intention card', () => {
    const {getByTestId} = render(<AddIntentionPage />)

    expect(getByTestId('add-intention-card')).toBeTruthy()
  })
})
