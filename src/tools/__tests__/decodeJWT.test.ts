import decodeJWT from '../decodeJWT'
import {ExpansionPanelActions} from '@material-ui/core'

it('should decode JWT', () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJlbWFpbCI6InRlc3RAdGVzdC5wbCIsInJvbGUiOiJST0xFX1VTRVIifQ.qfKooWSjhJsB94ijsvWOpjNcDuS5nJIJaCfNW-rl97k'
  const payload = {
    id: '1234567890',
    email: 'test@test.pl',
    role: 'ROLE_USER',
  }

  const decoded = decodeJWT(token)

  expect(decoded).toEqual(payload)
})
