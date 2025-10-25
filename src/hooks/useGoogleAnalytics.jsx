import ReactGA from 'react-ga4'

export function useGoogleAnalytics() {
  const sendPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search })
  }

  const sendEvent = (categoryRegister, actionRegister) => {
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
