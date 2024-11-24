import { render, screen } from '@testing-library/react'
import IntroduceMe from '/src/components/IntroduceMe/index.jsx'

describe('IntroduceMe', () => {
  it('renders the title and iframe correctly', () => {
    render(
      <IntroduceMe
        videoId="abcd1234"
        title="Test Video Player"
        autoPlay={false}
      />
    )

    expect(screen.getByText(/Test Video Player/i)).toBeInTheDocument()

    const iframe = screen.getByTitle(/Test Video/i)
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/abcd1234'
    )
  })

  it('renders correctly IntroduceMe', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
