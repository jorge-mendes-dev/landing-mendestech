import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PlayerAnimation = ({ animation, size, ...props }) => {
  return (
    <S.PlayerAnimation size={size} src={animation} loop autoplay {...props} />
  )
}

PlayerAnimation.propTypes = {
  animation: PropTypes.object.isRequired,
  size: PropTypes.string
}

PlayerAnimation.defaultProps = {
  size: '20vw'
}

export default PlayerAnimation
