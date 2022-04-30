import { ThemeProvider } from 'styled-components'
import themeMendesTech from 'assets/styles/themes/themeMendesTech'
import GlobalStyle from 'assets/styles/globalStyles'
import PageRoutes from 'routes/routes'

function App() {
  return (
    <ThemeProvider theme={themeMendesTech}>
      <GlobalStyle />
      <PageRoutes />
    </ThemeProvider>
  );
}

export default App
