import ReactGA from 'react-ga4'
import { GA_ID } from 'config/constants'

const Analytics = () => {
  if (GA_ID) {
   ReactGA.initialize(GA_ID)
  }
}

export default Analytics
