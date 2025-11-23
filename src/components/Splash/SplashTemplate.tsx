import React, { useEffect, useState, ReactNode } from 'react'
import SplashScreen from './SplashScreen'

interface SplashTemplateProps {
  children: ReactNode
  /** Whether to show splash screen initially */
  showSplash?: boolean
  /** Duration in ms before starting fade out (default: 2000) */
  splashDuration?: number
  /** Additional CSS classes for the content wrapper */
  className?: string
  /** Custom splash screen component to use instead of default */
  customSplashScreen?: React.ComponentType<{
    onFinish: () => void
    duration?: number
  }>
  /** Whether to enable fade-in animation for content after splash */
  enableContentFadeIn?: boolean
}

/**
 * Template component that wraps content with a splash screen
 *
 * @example Basic usage
 * ```tsx
 * <SplashTemplate>
 *   <YourPageContent />
 * </SplashTemplate>
 * ```
 *
 * @example Custom duration and no fade-in
 * ```tsx
 * <SplashTemplate splashDuration={1500} enableContentFadeIn={false}>
 *   <YourPageContent />
 * </SplashTemplate>
 * ```
 *
 * @example Custom splash screen
 * ```tsx
 * <SplashTemplate
 *   customSplashScreen={(props) => <CustomSplash {...props} />}
 *   splashDuration={3000}
 * >
 *   <YourPageContent />
 * </SplashTemplate>
 * ```
 */
const SplashTemplate: React.FC<SplashTemplateProps> = ({
  children,
  showSplash = true,
  splashDuration = 2000,
  className = '',
  customSplashScreen: CustomSplashScreen,
  enableContentFadeIn = true
}) => {
  const [isShowingSplash, setIsShowingSplash] = useState(showSplash)
  const [fadeInContent, setFadeInContent] = useState(false)

  useEffect(() => {
    if (!isShowingSplash && enableContentFadeIn) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => setFadeInContent(true), 100)
      return () => clearTimeout(timer)
    } else if (!isShowingSplash && !enableContentFadeIn) {
      setFadeInContent(true)
    }
  }, [isShowingSplash, enableContentFadeIn])

  const handleSplashFinish = () => {
    setIsShowingSplash(false)
  }

  if (isShowingSplash) {
    const SplashComponent = CustomSplashScreen || SplashScreen
    return (
      <SplashComponent
        onFinish={handleSplashFinish}
        duration={splashDuration}
      />
    )
  }

  return (
    <div
      className={`transition-opacity duration-500 ${
        enableContentFadeIn
          ? fadeInContent
            ? 'opacity-100'
            : 'opacity-0'
          : 'opacity-100'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default SplashTemplate
