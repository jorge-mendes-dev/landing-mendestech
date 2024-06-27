import React from 'react'
import PropTypes from 'prop-types'

const ImageCard = ({ title, image, width, height }) => {
  return (
    <>
      <img
        src={image}
        className="w-64 bg-white dark:bg-zinc-800 border-ternary-light dark:border-ternary-dark shadow rounded-xl p-2 mb-8 hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
        alt={title}
        width={width}
        height={height}
      />
    </>
  )
}

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string
}

ImageCard.defaultProps = {
  image: ''
}

export default ImageCard
