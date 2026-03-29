import { render, screen } from '@testing-library/react'
import code from 'assets/images/code.jpg'
import { expect, it } from 'vitest'
import ImageCard from '/src/components/ImageCard/index.jsx'

describe('ImageCard', () => {
  it('Should render ImageCard', () => {
    render(<ImageCard title={'Testing ImageCard'} image={code} />)

    const img = screen.getByAltText(/Testing ImageCard/i)
    expect(img).toBeInTheDocument()
    // The image prop is the imported image, which resolves to a URL string
    expect(img.getAttribute('src')).toContain('code.jpg')
  })

  it('renders correctly ImageCard', () => {
    const result = render(
      <ImageCard title={'Testing ImageCard'} image={code} />
    )
    expect(result).toMatchSnapshot()
  })
})
