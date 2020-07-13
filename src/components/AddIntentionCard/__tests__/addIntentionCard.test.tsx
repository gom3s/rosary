import React from 'react'
import {render} from '@testing-library/react'
import {AddIntentionCard} from '../AddIntentionCard'

describe('AddInentionCard', () => {
  it('should render textbox', () => {
    const {getByRole} = render(<AddIntentionCard />)

    expect(getByRole('textbox')).toBeTruthy()
  })
})
