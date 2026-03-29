import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import ClientsList from '/src/components/ClientsList/index.tsx'

describe('ClientsList', () => {
  it('Should render the title on Clients List', () => {
    render(<ClientsList />)
    const header = screen.getByRole('heading', { level: 6 })

    expect(header).toHaveTextContent(/Companies/i)
    expect(header).toHaveTextContent(/that/i)
    expect(header).toHaveTextContent(/trust's/i)
    expect(header).toHaveTextContent(/my/i)
    expect(header).toHaveTextContent(/work/i)
  })

  it('should render all Clients List images with correct alt text', () => {
    render(<ClientsList />)

    expect(screen.getByAltText(/FATEC SÃO ROQUE/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(/SÃO PAULO - STATE DEPARTMENT OF EDUCATION/i)
    ).toBeInTheDocument()
    expect(screen.getByAltText(/SRTI/i)).toBeInTheDocument()
    expect(screen.getByAltText(/NOVACIA/i)).toBeInTheDocument()
    expect(screen.getByAltText(/ATITUDE DIGITAL MEDIA/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(
        /FDTE - FOUNDATION FOR THE TECHNOLOGICAL DEVELOPMENT OF ENGINEERING/i
      )
    ).toBeInTheDocument()
    expect(screen.getByAltText(/HOTMART/i)).toBeInTheDocument()
    expect(screen.getByAltText(/ESCALA APP/i)).toBeInTheDocument()
  })

  it('should render all Clients List images with correct src', () => {
    render(<ClientsList />)
    // The image src is the imported SVG, which resolves to a URL string
    expect(
      screen.getByAltText(/FATEC SÃO ROQUE/i).getAttribute('src')
    ).toContain('fatec.svg')
    expect(
      screen
        .getByAltText(/SÃO PAULO - STATE DEPARTMENT OF EDUCATION/i)
        .getAttribute('src')
    ).toContain('gov.svg')
    expect(screen.getByAltText(/NOVACIA/i).getAttribute('src')).toContain(
      'novacia.svg'
    )
    expect(
      screen.getByAltText(/ATITUDE DIGITAL MEDIA/i).getAttribute('src')
    ).toContain('atitude.svg')
    expect(screen.getByAltText(/HOTMART/i).getAttribute('src')).toContain(
      'hotmart.svg'
    )
  })

  it('renders correctly Clients List', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
}) // NOTE: Client data now comes from Zustand store (see configStore.ts)
