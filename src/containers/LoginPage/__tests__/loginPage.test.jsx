import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from '../LoginPage'
import {renderWithRouter} from 'src/tools/renderWithRouter'
import {mockRequest} from 'src/hooks/useRosaryApi/useAuthTokenRequest'

jest.mock('src/hooks/useRosaryApi/useAuthTokenRequest')

test('calls submit with the username and password when submitted', async () => {
  const mockSubmit = jest.fn()
  const {container} = renderWithRouter(<LoginPage />)
  const form = container.querySelector('form')
  const {email, password} = form.elements
  const submit = new Event('submit')
  email.value = 'test@test.pl'
  password.value = 'secret'
  form.dispatchEvent(submit)
  expect(mockRequest).toHaveBeenCalledTimes(1)
  expect(mockRequest).toHaveBeenCalledWith({
    email: 'test@test.pl',
    password: 'secret',
  })
})

// shows error message