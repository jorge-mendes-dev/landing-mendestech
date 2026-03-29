import { Player } from '@lottiefiles/react-lottie-player'
import { memo } from 'react'

interface PlayerAnimationProps {
  animation: string
  size?: string
}

const PlayerAnimation: React.FC<PlayerAnimationProps> = ({
  animation,
  size = '20vw',
  ...props
}) => {
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

export default memo(PlayerAnimation)
