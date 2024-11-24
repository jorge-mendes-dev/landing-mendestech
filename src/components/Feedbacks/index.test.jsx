import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Feedbacks from '/src/components/Feedbacks/index.jsx'

describe('Feedbacks', () => {
  it('Should render Feedbacks', () => {
    render(<Feedbacks />)

    expect(screen.getByText(/Feedbacks/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /His ability to quickly identify and solve technical bottlenecks has been a game-changer for our projects. Whether refactoring legacy code or introducing new features, his solutions are both elegant and practical./i
      )
    ).toBeInTheDocument()
  })

  it('renders correctly Feedbacks', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
