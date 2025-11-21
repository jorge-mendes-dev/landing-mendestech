import { motion } from 'framer-motion'
import { Divider, PlayerAnimation } from 'components'
import { Link } from 'react-router-dom'
import { random } from 'utils/generic'

import astronalt_no_bg from 'utils/JSON/astronalt_no_bg.json'

import config from 'config'

import * as S from './styled'

const HomeAbout = ({ ...props }) => {
  const { about } = config
  const { title, paragraphs, primaryAction } = about

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      id="about"
      {...props}
      className="mb-16 p-2 rounded-3xl shadow-card-elevated bg-gradient-to-tr from-primary/10 via-primary-600/10 to-primary-800/10 dark:from-zinc-900/80 dark:via-zinc-800/80 dark:to-zinc-900/80 backdrop-blur-md border border-primary/20 dark:border-primary/30 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <motion.div
        className="w-full h-64 lg:w-1/2 lg:h-auto"
        variants={itemVariants}
      >
        <div className="h-full w-full object-cover">
          <PlayerAnimation animation={astronalt_no_bg} />
        </div>
      </motion.div>
      <motion.div
        className="relative bg-white/90 dark:bg-zinc-900/90 dark:border-zinc-800 backdrop-blur-md rounded-2xl max-w-lg md:max-w-2xl md:z-10 md:shadow-card-elevated md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 border border-white/30 dark:border-gray-800/50 group"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary-light/0 group-hover:from-primary/20 group-hover:to-primary-light/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        <div className="flex flex-col p-8 md:p-12 lg:px-16">
          <motion.h2
            className={`w-full my-4 text-3xl md:text-4xl font-bold leading-tight text-center`}
            variants={itemVariants}
          >
            {title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className={
                  index % 2 ? 'text-primary' : 'text-gray-900 dark:text-white'
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h2>
          <Divider />
          {paragraphs.slice(0, 1).map((description) => (
            <motion.p
              key={random()}
              className={`mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal leading-relaxed`}
              variants={itemVariants}
            >
              {description}
            </motion.p>
          ))}
          <motion.div
            className={`mt-10 flex flex-col items-center justify-center`}
            variants={itemVariants}
          >
            <motion.div
              className="rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 mb-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                rel="noreferrer"
                aria-label={primaryAction.text}
                to={primaryAction.href}
                className={`w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 md:py-4 md:text-lg md:px-10`}
              >
                {primaryAction.text}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-black sm:h-32" />
    </motion.div>
  )
}

export default HomeAbout
