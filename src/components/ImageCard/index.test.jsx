import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import ImageCard from '/src/components/ImageCard/index.jsx'
import code from 'assets/images/code.jpg'

describe('ImageCard', () => {
  it('Should render ImageCard', () => {
    render(<ImageCard title={'Testing ImageCard'} image={code} />)

    expect(screen.getByAltText(/Testing ImageCard/i)).toHaveAttribute(
      'src',
      '/src/assets/images/code.jpg'
    )
  })

  it('renders correctly ImageCard', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
