import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const ImageCard = ({
  title,
  image = '',
  width = 'auto',
  height = 'auto',
  index = 0
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      className="group relative flex items-center justify-center"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl opacity-0 group-hover:opacity-100 blur"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 shadow-card hover:shadow-card-hover"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={image}
          className="w-full h-auto object-contain filter grayscale group-hover:grayscale-0"
          alt={title}
          width={width}
          height={height}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  index: PropTypes.number
}

export default ImageCard
