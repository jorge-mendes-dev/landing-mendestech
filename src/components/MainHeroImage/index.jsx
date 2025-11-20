import { motion } from 'framer-motion'
import config from 'config'

import jorge from 'assets/images/home.png'

const MainHeroImage = () => {
  const { mainHero } = config
  const { title } = mainHero

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.3
      }
    }
  }

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div
      className="lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2 relative mt-8 lg:mt-0"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-light/10 to-transparent rounded-lg blur-3xl opacity-50 dark:opacity-30 -z-10"
        variants={glowVariants}
      />
      <motion.div
        className="relative h-64 w-full sm:h-80 md:h-96 lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 shadow-card lg:rounded-l-2xl lg:rounded-r-none"
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          className="h-full w-full object-cover object-center lg:object-right rounded-2xl lg:rounded-l-2xl lg:rounded-r-none cursor-pointer"
          src={jorge}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"></div>
      </motion.div>
    </motion.div>
  )
}

export default MainHeroImage
