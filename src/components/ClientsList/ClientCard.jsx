import React from 'react'
import PropTypes from 'prop-types'

import { getImagePath } from 'utils/generic'

const ClientCard = ({ title, image }) => {
  return (
    <>
      <img
        src={getImagePath(image)}
        className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
        alt={title}
      />
    </>
  )
}

ClientCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ClientCard
