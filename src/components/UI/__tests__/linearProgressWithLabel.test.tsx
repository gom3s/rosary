import React from 'react'
import {render} from '@testing-library/react'
import {LinearProgressWithLabel} from '../LinearProgressWithLabel'

it('should render label', () => {
  const label = '1.0.2'
  const {getByText} = render(<LinearProgressWithLabel label={label} />)

  expect(getByText(label)).toBeTruthy()
})
