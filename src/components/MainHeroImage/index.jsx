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
      {/* Enhanced glow effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary-light/20 to-transparent rounded-lg blur-3xl opacity-50 dark:opacity-30 -z-10"
        variants={glowVariants}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tl from-primary-light/20 via-transparent to-primary/20 rounded-lg blur-2xl opacity-30 dark:opacity-20 -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="relative h-64 w-full sm:h-80 md:h-96 lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 shadow-card lg:rounded-l-2xl lg:rounded-r-none group"
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated border glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary-light/0 to-primary/0 group-hover:from-primary/40 group-hover:via-primary-light/40 group-hover:to-primary/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
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
