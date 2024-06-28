import React from 'react'
import PropTypes from 'prop-types'

import { Divider } from 'components'

import * as S from './styled'

const HeaderSub = ({ title = '', description = '', ...props }) => {
  return (
    <S.Wrapper {...props} className="w-full">
      <div
        className={`w-full h-[520px] bg-code-image bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center bg-black bg-opacity-50`}
      >
        <h1 className="text-white text-center xl:text-5xl text-4xl font-semibold p-2 rounded-sm">
          {title}
        </h1>
        {title && <Divider bgColor={'bg-white'} />}
      </div>
    </S.Wrapper>
  )
}

HeaderSub.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default HeaderSub
