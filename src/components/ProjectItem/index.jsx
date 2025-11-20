import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { backToTop, random } from 'utils/generic'

const ProjectItem = ({
  title,
  href = '#',
  technology,
  image = '',
  type,
  company,
  index = 0
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  }

  const Separator = (
    <motion.div
      className="relative my-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200 dark:border-gray-700" />
      </div>
      <div className="relative flex justify-center">
        <motion.span
          className="inline-flex items-center gap-x-1.5 rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary dark:text-primary-light"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {company}
        </motion.span>
      </div>
    </motion.div>
  )

  const Component = (
    <motion.div
      onClick={() => backToTop()}
      className="group cursor-pointer mb-10 sm:mb-0 h-full flex flex-col bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <motion.div
        className={`flex flex-col items-center justify-center overflow-hidden rounded-xl mb-6 flex-shrink-0`}
        variants={imageVariants}
      >
        <img 
          src={image} 
          className="w-full h-48 object-cover rounded-xl" 
          alt={title} 
        />
      </motion.div>

      {Separator}

      <div className="text-center px-2 flex flex-col flex-grow">
        <motion.h3
          className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary mb-4 min-h-[3rem] flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {technology.map((tech, techIndex) => (
            <motion.span
              key={random()}
              className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 dark:text-primary-light border border-primary/20 dark:border-primary/30"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.4 + techIndex * 0.1,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <div>
      {type === 'external' ? (
        <a href={href} target="_blank">
          {Component}
        </a>
      ) : (
        <Link to={href} aria-label={title}>
          {Component}
        </Link>
      )}
    </div>
  )
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  technology: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string,
  href: PropTypes.string,
  index: PropTypes.number
}

export default ProjectItem
