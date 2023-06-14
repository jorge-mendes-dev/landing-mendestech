import React, { useEffect } from 'react'
import ReactGA from 'react-ga'

import { GA_ID } from 'config/constants'

const Analytics = () => {
  const init = () => {
    ReactGA.initialize(`${GA_ID}`)
    ReactGA.pageview(window.location.pathname)
  }

  useEffect(() => {
    init()
  }, [])
}

export default Analytics
