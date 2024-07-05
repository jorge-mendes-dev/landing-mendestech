import { render, screen } from '@testing-library/react'
import About from '/src/components/About/index.jsx'

describe('About', () => {
  it('renders header on About Me', () => {
    render(<About />)
    const title = screen.getByText(/Jorge Mendes/i)
    expect(title).toBeInTheDocument()
    const headline = screen.getByText(/Discover My Journey/i)
    expect(headline).toBeInTheDocument()
    screen.debug()
  })
})
