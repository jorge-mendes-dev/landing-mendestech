import PropTypes from 'prop-types'

import { Player } from '@lottiefiles/react-lottie-player'

const PlayerAnimation = ({ animation, size = '20vw', ...props }) => {
  return (
    <Player
      style={{ width: size, height: size }}
      src={animation}
      loop
      autoplay
      {...props}
    />
  )
}

PlayerAnimation.propTypes = {
  animation: PropTypes.object.isRequired,
  size: PropTypes.string
}

export default PlayerAnimation
