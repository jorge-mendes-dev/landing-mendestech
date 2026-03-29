import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Feedbacks from './index'

describe('Feedbacks', () => {
  it('Should render Feedbacks', () => {
    render(<Feedbacks />)

    expect(screen.getByText(/Feedbacks/i)).toBeInTheDocument()
    // The review text in config/index.json is:
    // "He’s amazing at spotting and fixing technical bottlenecks. Whether he’s refactoring old code or building something new, his solutions are both smart and practical."
    expect(
      screen.getByText(
        /He.?s amazing at spotting and fixing technical bottlenecks. Whether he.?s refactoring old code or building something new, his solutions are both smart and practical./i
      )
    ).toBeInTheDocument()
  })

  it('renders correctly Feedbacks', () => {
    const result = render(<Feedbacks />)
    expect(result).toMatchSnapshot()
  })
})
