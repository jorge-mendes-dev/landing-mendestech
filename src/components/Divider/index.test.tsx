import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Divider from './index'

describe('Divider', () => {
  it('Should render Divider', () => {
    render(<Divider />)
    expect(screen.getByTestId('divider')).toBeInTheDocument()
  })

  it('renders correctly Divider', () => {
    const result = render(<Divider />)
    expect(result).toMatchSnapshot()
  })
})
