import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Header from '/src/components/Header/index.jsx'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  it('Should render Header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText(/Jorge Mendes/i)).toBeInTheDocument()
    expect(screen.getByText(/Senior Developer/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /Experienced web developer with a talent for efficient solutions, building responsive applications with beautiful layouts/i
      )
    ).toBeInTheDocument()
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    expect(screen.getByText(/Resume/i)).toBeInTheDocument()
  })

  it('Should render Header Links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const resumeLink = screen.getByRole('link', { name: /resume/i })
    expect(resumeLink).toBeInTheDocument()
    expect(resumeLink).toHaveAttribute('href', '/')
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noreferrer')

    const aboutLink = screen.getByRole('link', { name: /about me/i })
    expect(aboutLink).toBeInTheDocument()
    expect(aboutLink).toHaveAttribute('href', '/about')
    expect(aboutLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders correctly Header', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
