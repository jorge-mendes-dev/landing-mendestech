/**
 * Usage examples for the unified SplashScreen and SplashTemplate components.
 *
 * @remarks
 * This file demonstrates various ways to integrate splash screens into your React application
 * using the `SplashTemplate` and `SplashScreen` components. Each example showcases a different
 * configuration, from default branded splash screens to fully customized content and animations.
 *
 * @example
 * Basic branded splash:
 * ```tsx
 * <SplashTemplate>
 *   <div>Your App Content</div>
 * </SplashTemplate>
 * ```
 *
 * @example
 * Minimal splash with custom text and gradient background:
 * ```tsx
 * <SplashTemplate
 *   splashDuration={1500}
 *   customSplashScreen={(props) => (
 *     <SplashScreen
 *       {...props}
 *       variant="minimal"
 *       text="Welcome"
 *       backgroundColor="bg-gradient-to-br from-blue-600 to-purple-700"
 *       textColor="text-white"
 *       animation="slide-up"
 *     />
 *   )}
 * >
 *   <div>Dashboard</div>
 * </SplashTemplate>
 * ```
 *
 * @example
 * Custom splash with logo/image:
 * ```tsx
 * <SplashTemplate
 *   splashDuration={2000}
 *   customSplashScreen={(props) => (
 *     <SplashScreen variant="custom" backgroundColor="bg-white" animation="fade-scale">
 *       <div>🚀 Loading App</div>
 *     </SplashScreen>
 *   )}
 * >
 *   <div>App with Custom Logo</div>
 * </SplashTemplate>
 * ```
 *
 * @example
 * Wrapping main app content with splash:
 * ```tsx
 * <SplashTemplate className="bg-gray-50" splashDuration={2500} enableContentFadeIn={true}>
 *   <main>Main Application</main>
 * </SplashTemplate>
 * ```
 *
 * @see SplashScreen
 * @see SplashTemplate
 *
 * @guide
 * The `SplashScreen` component supports the following variants and animations:
 * - Variants: 'branded' (default), 'minimal', 'custom'
 * - Animations: 'bounce-in', 'slide-up', 'fade-scale', 'rotate-in', 'none'
 *
 * For full customization, use the `customSplashScreen` prop on `SplashTemplate` and pass
 * your own `SplashScreen` configuration or custom content as children.
 */

import React from 'react'
import SplashTemplate from './SplashTemplate'
import SplashScreen from './SplashScreen'

// Basic usage with default branded splash screen
export const BasicSplashExample: React.FC = () => (
  <SplashTemplate>
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your App Content</h1>
      <p>This content appears after the splash screen completes.</p>
    </div>
  </SplashTemplate>
)

// Custom minimal splash using the unified component
export const CustomMinimalSplashExample: React.FC = () => (
  <SplashTemplate
    splashDuration={1500}
    customSplashScreen={(props) => (
      <SplashScreen
        {...props}
        variant="minimal"
        text="Welcome"
        textSize="text-4xl"
        backgroundColor="bg-gradient-to-br from-blue-600 to-purple-700"
        textColor="text-white"
        animation="slide-up"
      />
    )}
  >
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Custom minimal splash with gradient background.</p>
    </div>
  </SplashTemplate>
)

// Custom content splash with logo/image
export const CustomContentSplashExample: React.FC = () => (
  <SplashTemplate
    splashDuration={2000}
    customSplashScreen={(props) => (
      <SplashScreen
        {...props}
        variant="custom"
        backgroundColor="bg-white"
        animation="fade-scale"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="text-6xl font-bold text-blue-600">🚀</div>
          <h2 className="text-2xl font-semibold text-gray-800">Loading App</h2>
        </div>
      </SplashScreen>
    )}
  >
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">App with Custom Logo</h1>
      <p>This shows a custom splash with emoji and text.</p>
    </div>
  </SplashTemplate>
)

// For wrapping your main app content
export const AppWithSplashExample: React.FC = () => (
  <SplashTemplate
    className="bg-gray-50"
    splashDuration={2500}
    enableContentFadeIn={true}
  >
    {/* Your main app components */}
    <main className="container mx-auto py-8">
      <h1>Main Application</h1>
    </main>
  </SplashTemplate>
)

/*
========================================
UNIFIED SPLASHSCREEN USAGE GUIDE
========================================

The new SplashScreen component combines both branded and minimal splash screens
into one highly customizable component. Here are all the ways to use it:

1. BRANDED SPLASH (Default - shows "F" logo)
   <SplashScreen onFinish={handleFinish} />

2. MINIMAL TEXT SPLASH
   <SplashScreen
     variant="minimal"
     text="Loading..."
     onFinish={handleFinish}
   />

3. CUSTOM CONTENT SPLASH
   <SplashScreen variant="custom" onFinish={handleFinish}>
     <YourCustomContent />
   </SplashScreen>

4. FULL CUSTOMIZATION
   <SplashScreen
     variant="minimal"
     duration={3000}
     text="Welcome to App"
     backgroundColor="bg-gradient-to-r from-purple-500 to-pink-500"
     textColor="text-white"
     textSize="text-5xl"
     fontWeight="font-bold"
     animation="rotate-in"
     className="custom-container-class"
     contentClassName="custom-content-class"
     onFinish={handleFinish}
   />

AVAILABLE ANIMATIONS:
- 'bounce-in' (default for branded)
- 'slide-up' (default for minimal)
- 'fade-scale'
- 'rotate-in'
- 'none'

VARIANTS:
- 'branded': Shows "F" logo (default)
- 'minimal': Shows customizable text
- 'custom': Use with children prop for full control
*/
