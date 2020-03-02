import React from 'react'
import ReactDOM from 'react-dom'
import LoginCard from '../LoginCard'

jest.mock('../../../hooks/useRosaryApi')

import {useAuthenticationToken} from '../../../hooks/useRosaryApi'

test('calls submit with the username and password when submitted', async () => {
  const container = document.createElement('div')
  ReactDOM.render(<LoginCard />, container)
  const form = container.querySelector('form')
  const {email, password} = form.elements
  const submit = new Event('submit')

  email.value = 'test@test.pl'
  password.value = 'secret'
  form.dispatchEvent(submit)

  expect(useAuthenticationToken().doRequest).toHaveBeenCalledTimes(1)
  expect(useAuthenticationToken().doRequest).toHaveBeenCalledWith({
    email: 'test@test.pl',
    password: 'secret',
  })
})
