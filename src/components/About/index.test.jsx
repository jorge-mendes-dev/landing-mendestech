import { render, screen, waitFor } from '@testing-library/react'
import About from '/src/components/About/index.jsx'

describe('About', () => {
  it('renders header on About Me', async () => {
    render(<About />)

    const title = await waitFor(() => screen.getByText(/Jorge Mendes/i))
    expect(title).toBeInTheDocument()

    const headline = await waitFor(() =>
      screen.getByText(/Discover My Journey/i)
    )
    expect(headline).toBeInTheDocument()

    screen.debug()
  })
})
