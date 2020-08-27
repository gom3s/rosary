import React from 'react'
import {renderWithRouter} from 'src/tools/renderWithRouter'
import IntentionList from '../IntentionList'
import {fireEvent} from '@testing-library/react'
import {AuthProviderStub} from 'src/tools/AuthProviderStub'

jest.mock('../../../hooks/useRosaryApi', () => ({
  useIntentionList: () => ({
    intentions: [
      {
        id: '123',
        userId: '345',
        title: 'title',
        description: 'desc',
      },
    ],
  }),
}))

it('should handle opening Delete dialog for logged in user', () => {
  const {getByTestId, getByText, debug} = renderWithRouter(
    <AuthProviderStub isAuthenticated={true}>
      <IntentionList />
    </AuthProviderStub>,
  )

  fireEvent.click(getByTestId('delete-intention'))
  
  expect(getByText('Delete intention?')).not.toBeNull()
})
it('should not render delete action for unathorised user', () => {
  const {queryByTestId} = renderWithRouter(
    <AuthProviderStub isAuthenticated={false}>
      <IntentionList />
    </AuthProviderStub>,
  )
  
  expect(queryByTestId('delete-intention')).toBeNull()
})
