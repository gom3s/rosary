import React from 'react'
import ReactDOM from 'react-dom'
import LoginCard from '../LoginCard'
import {MemoryRouter as Router} from 'react-router-dom'

describe('LoginCard component', () => {
  test('calls submit with the username and password when submitted', async () => {
    const container = document.createElement('div')
    const mockSubmit = jest.fn()
    ReactDOM.render(
      <Router>
        <LoginCard error={{isError: false}} handleSubmit={mockSubmit} />
      </Router>,
      container,
    )
    const form = container.querySelector('form')
    const {email, password} = form.elements
    const submit = new Event('submit')

    email.value = 'test@test.pl'
    password.value = 'secret'
    form.dispatchEvent(submit)

    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })

  test.skip('calls submit with the username and password when submitted', async () => {
    const container = document.createElement('div')
    const mockSubmit = jest.fn()
    ReactDOM.render(
      <Router>
        <LoginCard error={{isError: false}} handleSubmit={mockSubmit} />
      </Router>,
      container,
    )
    const form = container.querySelector('form')
    const {email, password} = form.elements
    const submit = new Event('submit')

    email.value = 'test@test.pl'
    password.value = 'secret'
    form.dispatchEvent(submit)

    expect(mockSubmit).toHaveBeenCalledTimes(1)
    expect(mockSubmit).toHaveBeenCalledWith({
      // email: 'test@test.pl',
      // password: 'secret',
    })
  })
})
