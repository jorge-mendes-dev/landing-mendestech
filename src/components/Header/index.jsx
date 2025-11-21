import { motion } from 'framer-motion'
import config from 'config'
import { Link } from 'react-router-dom'

const Header = () => {
  const { mainHero } = config
  const { title, subtitle, description, primaryAction, secondaryAction } =
    mainHero

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <main
      className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 bg-transparent"
      id="header"
    >
      <motion.div
        className="sm:text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="relative inline-block" variants={titleVariants}>
          <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl relative z-10">
            <span className="block xl:inline text-white">
              {title}
            </span>{' '}
            <span className={`block xl:inline text-primary`}>
              {subtitle}
            </span>
          </h1>
        </motion.div>
        <motion.p
          className="mt-6 max-w-2xl mb-8 font-normal text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4"
          variants={itemVariants}
        >
          <motion.div
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-300"
              animate={{
                opacity: [0.75, 1, 0.75]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <Link
              rel="noreferrer"
              aria-label={primaryAction.text}
              to={primaryAction.href}
              className="relative w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 md:py-4 md:text-lg md:px-10"
            >
              {primaryAction.text}
            </Link>
          </motion.div>
          <motion.div
            className="mt-3 sm:mt-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              target="_blank"
              rel="noreferrer"
              aria-label={secondaryAction.text}
              to={secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3.5 text-base font-semibold text-center text-gray-900 dark:text-gray-100 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary/50 dark:hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 md:py-4 md:text-lg md:px-10`}
            >
              {secondaryAction.text}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  )
}

export default Header
