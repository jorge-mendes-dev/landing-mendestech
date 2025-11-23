/**
 * Props for the `SplashScreen` component.
 *
 * @property onFinish - Callback invoked when the splash screen completes its display and fades out.
 * @property duration - Optional. Time in milliseconds before the splash screen starts fading out. Defaults to 2000ms.
 * @property variant - Optional. Determines the splash screen style. Can be `'branded'`, `'minimal'`, or `'custom'`. Defaults to `'branded'`.
 * @property children - Optional. Custom React node content to display. If provided, overrides the `variant` content.
 * @property text - Optional. Text to display for the `'minimal'` or `'custom'` variant. Defaults to `"Loading..."`.
 * @property backgroundColor - Optional. Tailwind or CSS class for the background color. Defaults to `"bg-white"`.
 * @property textColor - Optional. Tailwind or CSS class for the text color. Defaults to `"text-[var(--bdai-hero)]"`.
 * @property textSize - Optional. Tailwind or CSS class for the text size. Defaults to `"text-2xl"`.
 * @property fontWeight - Optional. Tailwind or CSS class for the font weight. Defaults to `"font-semibold"`.
 * @property animation - Optional. Animation type for the splash content. Can be `'bounce-in'`, `'slide-up'`, `'fade-scale'`, `'rotate-in'`, or `'none'`. Defaults to `'bounce-in'`.
 * @property className - Optional. Additional CSS classes for the splash screen container.
 * @property contentClassName - Optional. Additional CSS classes for the splash screen content.
 */

import React, { useEffect, useState, ReactNode } from 'react'

type SplashVariant = 'branded' | 'minimal' | 'custom'
type AnimationType =
  | 'bounce-in'
  | 'slide-up'
  | 'fade-scale'
  | 'rotate-in'
  | 'none'

interface SplashScreenProps {
  /** Callback when splash completes */
  onFinish: () => void

  /** Duration before fade out starts (default: 2000ms) */
  duration?: number

  /** Splash screen variant */
  variant?: SplashVariant

  /** Custom content (overrides variant) */
  children?: ReactNode

  /** Text content (for minimal variant or custom) */
  text?: string

  /** Background styling */
  backgroundColor?: string

  /** Text color */
  textColor?: string

  /** Text size */
  textSize?: string

  /** Font weight */
  fontWeight?: string

  /** Animation type for content */
  animation?: AnimationType

  /** Additional CSS classes for container */
  className?: string

  /** Additional CSS classes for content */
  contentClassName?: string
}

/**
 * Unified, highly customizable splash screen component
 *
 * @example Branded splash (default)
 * ```tsx
 * <SplashScreen onFinish={() => setShowSplash(false)} />
 * ```
 *
 * @example Minimal text splash
 * ```tsx
 * <SplashScreen
 *   variant="minimal"
 *   text="Welcome"
 *   onFinish={() => setShowSplash(false)}
 * />
 * ```
 *
 * @example Custom content
 * ```tsx
 * <SplashScreen variant="custom" onFinish={() => setShowSplash(false)}>
 *   <img src="/logo.png" alt="Logo" className="w-32 h-32" />
 * </SplashScreen>
 * ```
 */
const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  duration = 2000,
  variant = 'branded',
  children,
  text = 'Loading...',
  backgroundColor = 'bg-white',
  textColor = 'text-[var(--bdai-hero)]',
  textSize = 'text-2xl',
  fontWeight = 'font-semibold',
  animation = 'bounce-in',
  className = '',
  contentClassName = ''
}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Start fade out after duration
    const fadeTimer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    // Call onFinish after fade out completes
    const finishTimer = setTimeout(() => {
      onFinish()
    }, duration + 1000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish, duration])

  // Get animation class
  const getAnimationClass = () => {
    if (animation === 'none') return ''
    return `animate-${animation}`
  }

  // Render content based on variant
  const renderContent = () => {
    // Custom content takes priority
    if (children) {
      return (
        <div className={`${getAnimationClass()} ${contentClassName}`}>
          {children}
        </div>
      )
    }

    // Variant-based content
    switch (variant) {
      case 'branded':
        return (
          <div
            className={`text-[400px] font-black ${textColor} ${getAnimationClass()} ${contentClassName}`}
          >
            F
          </div>
        )

      case 'minimal':
        return (
          <div
            className={`${textSize} ${fontWeight} ${textColor} ${getAnimationClass()} ${contentClassName}`}
          >
            {text}
          </div>
        )

      case 'custom':
      default:
        return (
          <div
            className={`${textSize} ${fontWeight} ${textColor} ${getAnimationClass()} ${contentClassName}`}
          >
            {text}
          </div>
        )
    }
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${backgroundColor} transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ zIndex: 9999 }}
    >
      {renderContent()}
    </div>
  )
}

export default SplashScreen
