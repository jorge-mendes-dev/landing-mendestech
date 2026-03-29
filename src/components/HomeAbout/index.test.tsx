import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, it } from 'vitest'
import HomeAbout from './index'

describe('HomeAbout', () => {
  it('Should render HomeAbout', () => {
    render(
      <MemoryRouter>
        <HomeAbout />
      </MemoryRouter>
    )
  })

  it('renders correctly HomeAbout', () => {
    const result = render(
      <MemoryRouter>
        <HomeAbout />
      </MemoryRouter>
    )
    expect(result).toMatchSnapshot()
  })
})
