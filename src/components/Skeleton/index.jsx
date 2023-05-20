import React from 'react'

import * as S from './styled'

const Skeleton = ({ ...props }) => {
  return (
    <S.Wrapper className="container mx-auto" {...props}>
      <section className="py-5 sm:py-10 mt-5 sm:mt-10 border-solid border border-sky-300 p-4 rounded-md">
        <div className="animate-pulse items-center h-full justify-center space-x-5">
          <div className="flex flex-col space-y-3">
            <div className="w-full bg-primary h-24 rounded-md" />
            <div className="w-full bg-primary h-12 rounded-md" />
            <div className="w-full bg-primary h-6 rounded-md" />
            <div className="w-full bg-primary h-6 rounded-md" />
          </div>
        </div>
      </section>
    </S.Wrapper>
  )
}

export default Skeleton
