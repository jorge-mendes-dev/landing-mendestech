import { useEffect, useRef, useState } from 'react'

import { motion, useAnimation } from 'framer-motion'

function useOnScreen(ref = null, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    let currentRef = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIntersecting(entry?.isIntersecting)
      },
      {
        rootMargin
      }
    )
    if (ref && ref?.current) {
      currentRef = ref.current
      observer.observe(currentRef)
    }
    return () => {
      observer.unobserve(currentRef)
    }
  }, [ref, rootMargin])

  return isIntersecting
}

const LazyShow = ({ children, direction = 'left' }) => {
  const controls = useAnimation()
  const rootRef = useRef(null)
  const onScreen = useOnScreen(rootRef, '-100px')

  const getInitialX = () => {
    switch (direction) {
      case 'left':
        return -50
      case 'right':
        return 50
      case 'up':
        return 0
      default:
        return -50
    }
  }

  const getInitialY = () => {
    return direction === 'up' ? 50 : 0
  }

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: 'easeOut'
        }
      })
    }
  }, [onScreen, controls])

  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{
        opacity: 0,
        x: getInitialX(),
        y: getInitialY(),
        scale: 0.95
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export default LazyShow
