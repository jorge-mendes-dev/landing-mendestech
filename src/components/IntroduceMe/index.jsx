import { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const IntroduceMe = ({ videoId, autoPlay = false, title, ...props }) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}${
    autoPlay ? '?autoplay=1' : ''
  }`
  const iframeRef = useRef(null)
  const defaultHeight = 495
  const [videoHeight, setVideoHeight] = useState(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  )

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
          ? 1.2
          : window.innerWidth > 400
            ? 1.45
            : 1.85
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight
    return setVideoHeight(Math.floor(height * ratio))
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleChangeVideoWidth)
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
          ? 1.2
          : window.innerWidth > 400
            ? 1.45
            : 1.85
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight
    setVideoHeight(Math.floor(height * ratio))
    return function cleanup() {
      window.removeEventListener('resize', handleChangeVideoWidth)
    }
  }, [videoHeight, handleChangeVideoWidth])

  return (
    <div className="bg-background dark:bg-black mt-6" {...props}>
      <div className="relative mb-6">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-blue-700" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-black px-3 text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {title}
          </span>
        </div>
      </div>

      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg object-cover object-center">
        <iframe
          className="object-cover object-center"
          ref={iframeRef}
          title={title}
          width="100%"
          height={`${videoHeight}px`}
          src={videoURL}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

IntroduceMe.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool
}

export default IntroduceMe
