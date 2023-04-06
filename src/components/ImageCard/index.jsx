import React from 'react'
import PropTypes from 'prop-types'

import { getImagePath } from 'utils/generic'

const ImageCard = ({ title, image }) => {
  return (
    <>
      <img
        src={getImagePath(image)}
        className="w-64 bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-md rounded-lg mb-8 cursor-pointer"
        alt={title}
      />
    </>
  )
}

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ImageCard
