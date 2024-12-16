import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import HeaderSub from '/src/components/HeaderSub/index.jsx'
import code from 'assets/images/code.jpg'

describe('HeaderSub', () => {
  it('Should render Header', () => {
    render(<HeaderSub title={'Testing HeaderSub'} background={code} />)

    expect(screen.getByText(/Testing HeaderSub/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Testing HeaderSub/i)).toHaveAttribute(
      'src',
      '/src/assets/images/code.jpg'
    )
  })

  it('renders correctly HeaderSub', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
