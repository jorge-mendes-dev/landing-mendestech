import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import themeMendesTech from 'assets/styles/themes/themeMendesTech'
import GlobalStyle from 'assets/styles/globalStyles'
import 'assets/styles/main.css'
import PageRoutes from 'routes/routes'
import ErrorBoundary from 'components/ErrorBoundary'

function App() {
  // Ensure dark mode is always applied
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={themeMendesTech}>
        <GlobalStyle />
        <div className="dark:bg-black transition duration-300">
          <PageRoutes />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
