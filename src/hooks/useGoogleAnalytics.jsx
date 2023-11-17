import ReactGA from 'react-ga'

export function useGoogleAnalytics() {
  const sendPageView = () => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  const sendEvent = (categoryRegister, actionRegister) => {
    ReactGA.event({
      category: `${categoryRegister}`,
      action: `${actionRegister}`
    })
  }

  return {
    sendPageView,
    sendEvent
  }
}
