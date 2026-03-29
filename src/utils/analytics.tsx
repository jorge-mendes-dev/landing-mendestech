import { GA_ID } from 'config/constants'
import ReactGA from 'react-ga4'

const Analytics = () => {
  if (GA_ID) {
    ReactGA.initialize(GA_ID)
  }
}

export default Analytics
