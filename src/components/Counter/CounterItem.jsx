import PropTypes from 'prop-types'

import { useCountUp } from 'react-countup'

const CounterItem = ({ title, measurement, reference, level }) => {
  useCountUp({ ref: `${reference}`, end: level, duration: 10 })

  return (
    <div className="mb-12 sm:mb-0 group">
      <div className="relative inline-block">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-3 relative z-10 drop-shadow-lg">
          <span id={`${reference}`} className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent" /> 
          <span className="text-white">{measurement}</span>
        </h2>
        <div className="absolute -inset-2 bg-white/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <span className="font-medium block text-base md:text-lg text-center text-white/90 dark:text-gray-100">
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
