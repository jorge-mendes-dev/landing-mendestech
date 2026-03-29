import { render, screen, waitFor } from '@testing-library/react'
import { expect, it } from 'vitest'
import About from '../About'

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
    // The About component uses the imported `jorge` image, which resolves to a URL string
    // We check that the src contains 'perfil.jpeg' (the imported file)
    expect(image.getAttribute('src')).toContain('perfil.jpeg')
  })

  it('renders correctly About Me', () => {
    const result = render(<About />)
    expect(result).toMatchSnapshot()
  })
})
