import React from 'react'
import {Prayer} from '../Prayer'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {UIContext} from 'src/context/UIStateProvider'

// jest.mock('src/')
const intention = {
  id: '2',
  userId: '3',
  title: 'title',
  description: 'desc',
}

const Container = () => {
  const {} = React.useContext(UIContext)

  return (
    <div>
      <Prayer prayerId="1" intention={intention} />
      <button data-testid="pray-start" onClick={() => setAuthToken(token)} />
      <button data-testid="pray-stop" onClick={() => setAuthToken('')} />
    </div>
  )
}

describe('Prayer', () => {
  it('should render', () => {
    const {container} = render(<Container />)

    expect(container.innerHTML).toMatch('Pobierz tajemnicę')
    expect(container.innerHTML).toMatch('Gotowe')
  })

  it('should render save action button disabled', () => {
    const {container} = render(<Container />)
  })
})
