import { ThemeProvider } from "styled-components";
import themeDefault from "assets/styles/themes/themeDefault";
import GlobalStyle from "assets/styles/globalStyles";
import PageRoutes from "routes/routes";

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <PageRoutes />
    </ThemeProvider>
  );
}

export default App;
