import ReactGA from 'react-ga'
import { GA_ID } from 'config/constants'

const Analytics = () => {
  ReactGA.initialize(GA_ID)
  ReactGA.pageview(window.location.pathname)
}

export default Analytics
