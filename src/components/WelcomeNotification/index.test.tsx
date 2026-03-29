import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import WelcomeNotification from './index'

// Mock the useNotifications hook
vi.mock('hooks/useNotifications', () => ({
  useNotifications: () => ({
    sendNotification: vi.fn().mockResolvedValue(true),
    isSupported: vi.fn().mockReturnValue(true)
  })
}))

describe('WelcomeNotification', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render without crashing', () => {
    const { container } = render(<WelcomeNotification />)
    expect(container).toBeTruthy()
  })

  it('should not render any visible content', () => {
    const { container } = render(<WelcomeNotification />)
    expect(container.firstChild).toBeNull()
  })

  it('should match snapshot', () => {
    const { container } = render(<WelcomeNotification />)
    expect(container).toMatchSnapshot()
  })
})
