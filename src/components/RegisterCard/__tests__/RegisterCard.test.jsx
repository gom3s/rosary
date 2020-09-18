import React from 'react'
// import ReactDOM from 'react-dom'
import {RegisterCard} from '../RegisterCard'
import {MemoryRouter as Router} from 'react-router-dom'
import {render, fireEvent, act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {usePostUser} from '../../../hooks/useRosaryApi/usePostUser'

const mockRequest = jest.fn()
jest.mock('../../../hooks/useRosaryApi/usePostUser', () => ({
  usePostUser: jest.fn(),
}))
const Component = (
  <Router>
    <RegisterCard />
  </Router>
)

test('calls submit with the username and password when submitted', () => {
  usePostUser.mockImplementation(() => ({
    isLoading: false,
    error: {isError: false},
    postUser: mockRequest,
  }))
  const {container, getByTestId, rerender} = render(Component)
  const form = container.querySelector('form')
  const {email, password, password2} = form.elements
  fireEvent.change(email, {target: {value: 'test@test.pl'}})
  fireEvent.change(password, {target: {value: 'secret'}})
  fireEvent.change(password2, {target: {value: 'secret'}})

  fireEvent.submit(form)

  expect(mockRequest).toHaveBeenCalledTimes(1)
  expect(mockRequest).toHaveBeenCalledWith({
    email: 'test@test.pl',
    password: 'secret',
  })
  rerender(Component)
})

it('should render progress bar', () => {
  usePostUser.mockImplementation(() => ({
    isLoading: true,
    error: {isError: false},
    postUser: jest.fn(),
  }))

  const {getByTestId} = render(Component)

  expect(getByTestId('progressbar')).toBeTruthy()
})

// shows error message

test('shows error message', () => {
  usePostUser.mockImplementation(() => ({
    isLoading: false,
    error: {isError: true, message: 'error message'},
    postUser: mockRequest,
  }))
  const {container, getByTestId, getByText, rerender, debug} = render(Component)
  const form = container.querySelector('form')
  const {email, password, password2} = form.elements
  fireEvent.change(email, {target: {value: 'test@test.pl'}})
  fireEvent.change(password, {target: {value: 'secret'}})
  fireEvent.change(password2, {target: {value: 'secret'}})

  fireEvent.submit(form)
  rerender(Component)

  expect(getByText('error message')).toBeTruthy()
})

test('shows checks if passords match', () => {
  usePostUser.mockImplementation(() => ({
    isLoading: false,
    error: {isError: false},
    postUser: mockRequest,
  }))
  const {container, getByTestId, queryAllByText, rerender, debug} = render(
    Component,
  )
  const form = container.querySelector('form')
  const {email, password, password2} = form.elements

  fireEvent.submit(form)
  rerender(Component)

  expect(queryAllByText('hasła się różnią').length).toEqual(2)
})

// shows sucess page after register
