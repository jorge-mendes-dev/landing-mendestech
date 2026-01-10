import { createGlobalStyle, keyframes, css } from 'styled-components'

export const DegradeAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

export default createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  html {
    font-size: 18px;
    scroll-behavior: smooth;
    background: linear-gradient(120deg, #181c24 0%, #232a34 100%);
    min-height: 100%;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: #e6e9ef;
    background: transparent;
    min-height: 100vh;
    line-height: 1.6;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #4fd1c5;
    text-decoration: none;
    transition: color 0.2s;
    &:hover, &:focus {
      color: #38b2ac;
      text-decoration: underline;
    }
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    transition: box-shadow 0.2s, border-color 0.2s;
  }

  button {
    background: linear-gradient(90deg, #4fd1c5 0%, #0691c1 100%);
    color: #fff;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    box-shadow: 0 2px 8px rgba(79,209,197,0.08);
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
    &:hover, &:focus {
      background: linear-gradient(90deg, #38b2ac 0%, #0691c1 100%);
      box-shadow: 0 4px 16px rgba(79,209,197,0.16);
      transform: translateY(-2px) scale(1.02);
    }
    &:active {
      transform: scale(0.98);
    }
  }

  /* Respect user's reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Enhanced focus visible styles for keyboard navigation */
  *:focus-visible {
    outline: 2px solid #4fd1c5;
    outline-offset: 2px;
    border-radius: 4px;
    box-shadow: 0 0 0 2px #232a34;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Custom scrollbars */
  ::-webkit-scrollbar {
    width: 10px;
    background: #232a34;
  }
  ::-webkit-scrollbar-thumb {
    background: #2d3748;
    border-radius: 8px;
  }
  ::selection {
    background: #4fd1c5;
    color: #fff;
  }
`
