import { render } from '@testing-library/react'
import { expect, it } from 'vitest'
import HomeAbout from '/src/components/HomeAbout/index.jsx'
import { MemoryRouter } from 'react-router-dom'

describe('HomeAbout', () => {
  it('Should render HomeAbout', () => {
    render(
      <MemoryRouter>
        <HomeAbout />
      </MemoryRouter>
    )
  })

  it('renders correctly HomeAbout', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
