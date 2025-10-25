import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HelmetProvider } from 'react-helmet-async'
import Analytics from 'utils/analytics'

import App from './App'

function render() {
  Analytics()

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  )
}

render()
