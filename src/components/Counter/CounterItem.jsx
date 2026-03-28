import { motion, useInView } from 'framer-motion'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useCountUp } from 'react-countup'

const CounterItem = ({ title, measurement, reference, level, index = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useCountUp({
    ref: `${reference}`,
    end: isInView ? level : 0,
    duration: 2,
    enableScrollSpy: true,
    scrollSpyOnce: true
  })

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className="mb-12 sm:mb-0 group"
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div
        className="relative inline-block"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-center text-text-primary dark:text-text-primary-dark mb-3 relative z-10 drop-shadow-lg">
          <span
            id={`${reference}`}
            className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent dark:from-text-primary-dark dark:to-text-secondary-dark"
          />
          <span className="text-text-secondary dark:text-text-secondary-dark">
            {measurement}
          </span>
        </h2>
        <motion.div
          className="absolute -inset-2 bg-white/10 rounded-lg blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.span
        className="font-medium block text-base md:text-lg text-center text-text-secondary dark:text-text-secondary-dark"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
      >
        {title}
      </motion.span>
    </motion.div>
  )
}

CounterItem.propTypes = {
  title: PropTypes.string.isRequired,
  measurement: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  index: PropTypes.number
}

export default CounterItem
