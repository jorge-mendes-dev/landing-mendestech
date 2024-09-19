import PropTypes from 'prop-types'
import React from 'react'

import { useCountUp } from 'react-countup'

const CounterItem = ({ title, measurement, reference, level }) => {
  useCountUp({ ref: `${reference}`, end: level, duration: 10 })

  return (
    <div className="mb-20 sm:mb-0">
      <h2 className="text-6xl font-semibold text-center text-white mb-2">
        <span id={`${reference}`} /> {measurement}
      </h2>
      <span className="font-normal block text-md text-center text-gray-100 dark:text-gray-100">
        {title}
      </span>
    </div>
  )
}

CounterItem.propTypes = {
  title: PropTypes.string.isRequired,
  measurement: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
}

export default CounterItem
