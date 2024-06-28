import React from 'react'
import PropTypes from 'prop-types'

import { Divider } from 'components'

import * as S from './styled'

const HeaderSub = ({ title = 'HeaderSub', description = '', ...props }) => {
  return (
    <S.Wrapper {...props} className="w-full">
      <div
        className={`w-full h-[520px] bg-code-image bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center bg-black bg-opacity-50`}
      >
        <div>
          <h1 className="text-white text-center xl:text-5xl text-4xl font-semibold p-2 rounded-sm">
            {title}
          </h1>
        </div>
        <Divider bgColor={'bg-white'} />
        <div className="w-full mx-auto">
          <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 md:mt-6 xs:mt-4">
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </S.Wrapper>
  )
}

HeaderSub.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default HeaderSub
