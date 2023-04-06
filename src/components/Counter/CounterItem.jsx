import React from 'react'
import PropTypes from 'prop-types'

import { useCountUp } from 'react-countup'

const CounterItem = ({ title, measurement, reference, level }) => {
  useCountUp({ ref: `${reference}`, end: level, duration: 10 })

  return (
    <div className="mb-20 sm:mb-0">
      <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
        <span id={`${reference}`} /> {measurement}
      </h2>
      <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
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
