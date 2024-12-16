import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import MainHeroImage from '/src/components/MainHeroImage/index.jsx'

describe('MainHeroImage', () => {
  it('Should render MainHeroImage', () => {
    render(<MainHeroImage />)
    const element = screen.getByAltText(/Jorge Mendes/i)

    expect(element).toHaveAttribute('src', '/src/assets/images/profile.svg')

    expect(element).toBeInTheDocument()
  })

  it('renders correctly MainHeroImage', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
