import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import LazyShow from '/src/components/LazyShow/index.jsx'

beforeEach(() => {
  const mockIntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }))
  window.IntersectionObserver = mockIntersectionObserver
})

describe('LazyShow Component', () => {
  it('renders children with initial styles', () => {
    render(
      <LazyShow>
        <p>Test Content</p>
      </LazyShow>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()

    const lazyDiv = screen.getByText('Test Content').closest('div')
    expect(lazyDiv).toHaveStyle('opacity: 0')
    expect(lazyDiv).toHaveStyle('transform: translateX(-50px)')
  })

  it('animates to visible when intersecting', () => {
    render(
      <LazyShow>
        <p>Test Content</p>
      </LazyShow>
    )

    const lazyDiv = screen.getByText('Test Content').closest('div')
    const observerCallback = IntersectionObserver.mock.calls[0][0]
    act(() => {
      observerCallback([{ isIntersecting: true }])
    })

    expect(lazyDiv).toHaveStyle('opacity: 0')
    expect(lazyDiv).toHaveStyle('transform: translateX(-50px)')
  })

  it('does not animate when not intersecting', () => {
    render(
      <LazyShow>
        <p>Test Content</p>
      </LazyShow>
    )

    const lazyDiv = screen.getByText('Test Content').closest('div')
    const observerCallback = IntersectionObserver.mock.calls[0][0]
    act(() => {
      observerCallback([{ isIntersecting: false }])
    })

    screen.debug()

    expect(lazyDiv).toHaveStyle('opacity: 0')
    expect(lazyDiv).toHaveStyle('transform: translateX(-50px)')
  })

  it('renders correctly LazyShow', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
