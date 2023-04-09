import React from 'react'
import PropTypes from 'prop-types'

const ImageCard = ({ title, image }) => {
  console.log(title, image)
  return (
    <>
      <img
        src={image}
        className="w-64 bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-md rounded-lg mb-8 cursor-pointer"
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
