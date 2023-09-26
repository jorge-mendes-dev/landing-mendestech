import React from 'react'
import PropTypes from 'prop-types'

import { Divider } from 'components'
import figure404 from 'utils/JSON/figure404.json'

import * as S from './styled'

const NotFound = ({ title, ...props }) => (
  <section
    className={`bg-background dark:bg-black py-8`}
    id="notFound"
    {...props}
  >
    <div className={`container max-w-5xl mx-auto m-8`}>
      <h2
        className={`w-full my-2 text-5xl font-bold leading-tight text-center`}
      >
        {title.split(' ').map((word, index) => (
          <span
            key={index}
            className={index % 2 ? 'text-primary' : 'text-border'}
          >
            {word}{' '}
          </span>
        ))}
      </h2>

      <Divider />
      <div className={`flex items-center justify-center flex-wrap p-8 `}>
        <S.PlayerNotFound src={figure404} loop autoplay />
      </div>
    </div>
  </section>
)

NotFound.propTypes = { title: PropTypes.string }
NotFound.defaultProps = { title: 'NotFound' }

export default NotFound
