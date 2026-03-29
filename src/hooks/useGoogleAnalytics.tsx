import ReactGA from 'react-ga4'

export function useGoogleAnalytics(): {
  sendPageView: () => void
  sendEvent: (categoryRegister: string, actionRegister: string) => void
} {
  const sendPageView = () => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search
    })
  }

  const sendEvent = (categoryRegister: string, actionRegister: string) => {
    ReactGA.send({
      hitType: 'event',
      eventCategory: `${categoryRegister}`,
      eventAction: `${actionRegister}`
    })
  }

  return {
    sendPageView,
    sendEvent
  }
}
