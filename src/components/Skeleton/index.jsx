import React from 'react'

import rocket from 'utils/JSON/rocket.json'

import * as S from './styled'

const Skeleton = ({ ...props }) => {
  return (
    <S.Wrapper
      className={`bg-gradient-to-r bg-background dark:bg-black grid gap-y-16 overflow-hidden`}
      {...props}
    >
      <div className="flex items-center justify-center h-screen shadow-lg">
        <S.PlayerAnimation src={rocket} loop autoplay />
      </div>
    </S.Wrapper>
  )
}

export default Skeleton
