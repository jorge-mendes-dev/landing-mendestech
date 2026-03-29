import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { backToTop } from 'utils/generic'

interface ProjectItemProps {
  title: string
  href: string
  technology: string[]
  image?: string
  type: 'internal' | 'external'
  company: string
  index?: number
}

const Separator: React.FC<{ company: string }> = ({ company }) => {
  return (
    <div className="my-3 flex flex-col items-center">
      <div className="w-10 h-0.5 bg-border dark:bg-border-dark rounded-full mb-2" />
      <span className="text-xs font-medium text-text-secondary dark:text-text-secondary-dark tracking-wide uppercase">
        {company}
      </span>
    </div>
  )
}

const ProjectItem: React.FC<ProjectItemProps> = ({
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

  const Component = (
    <motion.div
      onClick={() => backToTop()}
      className="group cursor-pointer mb-10 sm:mb-0 h-full flex flex-col bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl mb-6 flex-shrink-0"
        variants={imageVariants}
      >
        <img
          src={image}
          className="w-full h-44 object-cover rounded-xl transition-transform duration-400"
          alt={title}
        />
      </motion.div>

      <Separator company={company} />

      <div className="text-center px-2 flex flex-col flex-grow relative z-10">
        <motion.h3
          className="font-semibold text-lg md:text-xl text-text-primary dark:text-text-primary-dark mb-3 min-h-[2.5rem] flex items-center justify-center"
          whileHover={{ scale: 1.03 }}
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
              key={tech + '-' + title + '-' + company}
              className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-primary bg-primary/5 border border-primary/10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.4 + techIndex * 0.1,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{ scale: 1.08, y: -1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <div className="w-full">
      {type === 'external' ? (
        <a href={href} target="_blank" className="block w-full h-full">
          {Component}
        </a>
      ) : (
        <Link to={href} aria-label={title} className="block w-full h-full">
          {Component}
        </Link>
      )}
    </div>
  )
}

export default ProjectItem
