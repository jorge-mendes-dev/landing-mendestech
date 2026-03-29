import config from 'config/index.json'
import { easeOut, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
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
        ease: easeOut
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
        ease: easeOut
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
            <span className="block text-text-primary dark:text-text-primary-dark">
              {title}
            </span>
            <span className="block text-primary">{subtitle}</span>
          </h1>
        </motion.div>
        <motion.p
          className="mt-8 max-w-2xl mb-10 font-normal text-lg md:text-xl lg:text-2xl text-text-secondary dark:text-text-secondary-dark leading-relaxed drop-shadow-lg"
          variants={itemVariants}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4"
          variants={itemVariants}
        >
          <motion.div
            className="group relative shadow-xl"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-2xl opacity-80 group-hover:opacity-100 blur-md transition duration-300"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <Link
              rel="noreferrer"
              aria-label={primaryAction.text}
              to={primaryAction.href}
              className="relative w-full flex items-center justify-center px-10 py-4 border-none text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-primary to-primary-light shadow-lg hover:from-primary-light hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
            >
              {primaryAction.text}
            </Link>
          </motion.div>
          <motion.div
            className="mt-4 sm:mt-0 shadow"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              target="_blank"
              rel="noreferrer"
              aria-label={secondaryAction.text}
              to={secondaryAction.href}
              className="w-full flex items-center justify-center px-10 py-4 text-lg font-semibold text-center text-text-primary dark:text-text-primary-dark border-2 border-border dark:border-border-dark rounded-2xl bg-background/80 dark:bg-background-dark/60 hover:bg-surface dark:hover:bg-surface-dark hover:border-primary/60 dark:hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
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
