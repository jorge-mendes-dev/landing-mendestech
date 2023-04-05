import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import themeMendesTech from 'assets/styles/themes/themeMendesTech'
// import GlobalStyle from "assets/styles/globalStyles";
import 'assets/styles/main.css'
import PageRoutes from 'routes/routes'
import { Analytics } from 'components'

function App() {
  return (
    <ThemeProvider theme={themeMendesTech}>
      {/* <GlobalStyle /> */}
      <AnimatePresence>
        <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
          <PageRoutes />
        </div>
      </AnimatePresence>
      <Analytics />
    </ThemeProvider>
  )
}

export default App
