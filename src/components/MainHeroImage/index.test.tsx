import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import MainHeroImage from './index'

describe('MainHeroImage', () => {
  it('Should render MainHeroImage', () => {
    render(<MainHeroImage />)
    const element = screen.getByAltText(/Jorge Mendes/i)

    expect(element).toHaveAttribute('src', '/src/assets/images/profile.svg')

    expect(element).toBeInTheDocument()
  })

  it('renders correctly MainHeroImage', () => {
    const result = render(<MainHeroImage />)
    expect(result).toMatchSnapshot()
  })
})
