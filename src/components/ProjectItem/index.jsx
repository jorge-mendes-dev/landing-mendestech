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
      className="group cursor-pointer mb-10 sm:mb-0 h-full flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-zinc-800/50 rounded-2xl p-6 shadow-card hover:shadow-card-elevated transition-all duration-300 relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 rounded-2xl"></div>
      
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary-light/0 group-hover:from-primary/20 group-hover:to-primary-light/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      <motion.div
        className={`relative flex flex-col items-center justify-center overflow-hidden rounded-xl mb-6 flex-shrink-0 group/image`}
        variants={imageVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl z-10"></div>
        <img 
          src={image} 
          className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" 
          alt={title} 
        />
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-300 z-10"></div>
      </motion.div>

      {Separator}

      <div className="text-center px-2 flex flex-col flex-grow relative z-10">
        <motion.h3
          className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary mb-4 min-h-[3rem] flex items-center justify-center relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300"></span>
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
