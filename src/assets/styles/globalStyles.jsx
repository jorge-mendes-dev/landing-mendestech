import { createGlobalStyle, keyframes } from 'styled-components'

export const DegradeAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  /* Respect user's reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Enhanced focus visible styles for keyboard navigation */
  *:focus-visible {
    outline: 2px solid #0691c1;
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Remove default focus outline but keep for keyboard navigation */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Specific focus styles for buttons and links */
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid #0691c1;
    outline-offset: 2px;
  }
`
