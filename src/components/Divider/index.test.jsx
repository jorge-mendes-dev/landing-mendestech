import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Divider from '/src/components/Divider/index.jsx'

describe('Divider', () => {
  it('Should render Divider', () => {
    render(<Divider />)
    expect(screen.getByTestId('divider')).toBeInTheDocument()
  })

  it('renders correctly Divider', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
