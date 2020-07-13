import React from 'react'
import {render} from '@testing-library/react'
import {RosaryIcon} from '../index'

describe('Icons', () => {
  it('should render RosaryIcon', () => {
    const {getByRole} = render(<RosaryIcon />)

    expect(getByRole('img')).toBeTruthy()
  })
})
