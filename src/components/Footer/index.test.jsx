import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Footer from '/src/components/Footer/index.jsx'

describe('Footer', () => {
  it('Should render Footer', () => {
    render(<Footer />)

    expect(screen.getByText(/Github/i)).toBeInTheDocument()
    expect(screen.getByText(/Gmail/i)).toBeInTheDocument()

    const year = new Date().getFullYear()
    const expected = new RegExp(
      `${year} Jorge Mendes \\| React and love\\.`,
      'i'
    )
    expect(screen.getByText(expected)).toBeInTheDocument()
  })

  it('renders correctly Footer', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
