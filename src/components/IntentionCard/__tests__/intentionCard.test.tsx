import React from 'react'
import IntentionCard from '../IntentionCard'
import {renderWithRouter} from 'src/tools/renderWithRouter'

it('should display delete icon for ADMIN user in detailed view', () => {
  const intention = {
    id: '123',
    userId: '456',
    title: 'title',
  }
  const {getByTestId} = renderWithRouter(
    <IntentionCard intention={intention} showDeleteAction={true} />,
  )

  expect(getByTestId('delete-intention')).not.toBeNull()
})
