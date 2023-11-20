import React from 'react'
import PropTypes from 'prop-types'

const ImageCard = ({ title, image }) => {
  return (
    <>
      <img
        src={image}
        className="w-64 bg-secondary-light dark:bg-zinc-800 border-ternary-light dark:border-ternary-dark shadow rounded p-2 mb-8 hover:shadow-xl cursor-pointer"
        alt={title}
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
