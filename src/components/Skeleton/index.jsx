import React from 'react'

import rocket from 'utils/JSON/rocket.json'

import * as S from './styled'

const Skeleton = ({ ...props }) => {
  return (
    <S.Wrapper className={`bg-background dark:bg-black`} {...props}>
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin rounded-full border-primary border-8 h-64 w-64"></div>
      </div>
    </S.Wrapper>
  )
}

export default Skeleton
