import PropTypes from 'prop-types'
import React from 'react'

const ImageCard = ({ title, image = '', width, height }) => {
  return (
    <>
      <img
        src={image}
        className="w-64 bg-zinc-50 dark:bg-zinc-900 border-ternary-light dark:border-ternary-dark shadow rounded-xl p-1 mb-8 hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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

export default ImageCard
