import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import ClientsList from '/src/components/ClientsList/index.jsx'

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
    // expect(screen.getByAltText(/ESCALA APP/i)).toBeInTheDocument()
  })

  it('should render all Clients List images with correct src', () => {
    render(<ClientsList />)

    expect(screen.getByAltText(/FATEC SÃO ROQUE/i)).toHaveAttribute(
      'src',
      '/src/assets/images/brands/fatec.svg'
    )
    expect(
      screen.getByAltText(/SÃO PAULO - STATE DEPARTMENT OF EDUCATION/i)
    ).toHaveAttribute('src', '/src/assets/images/brands/gov.svg')
    expect(screen.getByAltText(/NOVACIA/i)).toHaveAttribute(
      'src',
      '/src/assets/images/brands/novacia.svg'
    )
    expect(screen.getByAltText(/ATITUDE DIGITAL MEDIA/i)).toHaveAttribute(
      'src',
      '/src/assets/images/brands/atitude.svg'
    )
    expect(screen.getByAltText(/HOTMART/i)).toHaveAttribute(
      'src',
      '/src/assets/images/brands/hotmart.svg'
    )
  })

  it('renders correctly Clients List', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
