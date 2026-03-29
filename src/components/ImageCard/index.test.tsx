import { render, screen } from '@testing-library/react'
import code from 'assets/images/code.jpg'
import { expect, it } from 'vitest'
import ImageCard from '/src/components/ImageCard/index.jsx'

describe('ImageCard', () => {
  it('Should render ImageCard', () => {
    render(<ImageCard title={'Testing ImageCard'} image={code} />)

    expect(screen.getByAltText(/Testing ImageCard/i)).toHaveAttribute(
      'src',
      '/src/assets/images/code.jpg'
    )
  })

  it('renders correctly ImageCard', () => {
    const result = render(
      <ImageCard title={'Testing ImageCard'} image={code} />
    )
    expect(result).toMatchSnapshot()
  })
})
