import { render, screen, waitFor } from '@testing-library/react'
import { expect, it } from 'vitest'
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
    // screen.debug()
  })

  it('should render the image', () => {
    render(<About />)

    const image = screen.getByAltText(/Jorge Mendes/i)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/src/assets/images/jorge_mendes.png')
  })

  it('renders correctly About Me', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
