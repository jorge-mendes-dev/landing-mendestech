import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import themeMendesTech from 'assets/styles/themes/themeMendesTech'
import GlobalStyle from 'assets/styles/globalStyles'
import 'assets/styles/main.css'
import PageRoutes from 'routes/routes'

function App() {
  // Ensure dark mode is always applied
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
  }

  return (
    <ThemeProvider theme={themeMendesTech}>
      <GlobalStyle />
      <AnimatePresence>
        <div className="dark:bg-black transition duration-300">
          <PageRoutes />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
