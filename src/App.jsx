import { ThemeProvider } from 'styled-components'
import themeMendesTech from 'assets/styles/themes/themeMendesTech'
import GlobalStyle from 'assets/styles/globalStyles'
import 'assets/styles/main.css'
import PageRoutes from 'routes/routes'
import ErrorBoundary from 'components/ErrorBoundary'
import { SplashTemplate, SplashScreen } from 'components'
import logo from 'assets/images/logo.png'

const Splash = () => {
  return (
    <SplashTemplate
      splashDuration={2500}
      enableContentFadeIn={true}
      customSplashScreen={(props) => (
        <SplashScreen
          {...props}
          variant="custom"
          backgroundColor="bg-gradient-to-br from-primary via-primary-600 to-primary-dark dark:from-zinc-950 dark:via-black dark:to-zinc-900"
          animation="fade-scale"
          className="overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/20 dark:bg-primary/30 rounded-full blur-3xl animate-blob"></div>
            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/20 dark:bg-primary-light/20 rounded-full blur-3xl animate-blob"
              style={{ animationDelay: '2s' }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary-dark/20 dark:bg-primary/25 rounded-full blur-3xl animate-blob"
              style={{ animationDelay: '4s' }}
            ></div>

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>

          <div className="relative flex flex-col items-center space-y-8 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 dark:bg-primary/40 rounded-full blur-2xl animate-pulse"></div>

              <div className="absolute inset-0 -m-8">
                <div className="w-48 h-48 border-4 border-white/20 dark:border-primary/30 rounded-full animate-spin-slow"></div>
              </div>

              <img
                src={logo}
                alt="MendesTech"
                className="w-32 h-32 relative z-10 animate-float drop-shadow-2xl"
              />
            </div>

            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-fade-in-up">
                Jorge Mendes
              </h1>
              <p className="text-lg text-white/80 animate-fade-in-up-delayed">
                Building Digital Excellence.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-bounce shadow-lg"></div>
                <div
                  className="w-3 h-3 bg-white rounded-full animate-bounce shadow-lg"
                  style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                  className="w-3 h-3 bg-white rounded-full animate-bounce shadow-lg"
                  style={{ animationDelay: '0.2s' }}
                ></div>
              </div>
            </div>

            <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-progress shadow-lg"></div>
            </div>
          </div>
        </SplashScreen>
      )}
    >
      <div className="dark:bg-black transition duration-300">
        <PageRoutes />
      </div>
    </SplashTemplate>
  )
}

function App() {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={themeMendesTech}>
        <GlobalStyle />
        <Splash />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
