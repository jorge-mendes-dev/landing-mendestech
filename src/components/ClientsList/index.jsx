import React from 'react'

import { random } from 'utils/generic'
import { ImageCard } from 'components'

import config from 'config'

import * as S from './styled'

const ClientsList = ({ ...props }) => {
  const { clients } = config
  const { title, data } = clients

  return (
    <S.Wrapper {...props} className="container mx-auto">
      <div className="mt-10 sm:mt-20">
        <h6
          className={`w-full my-2 text-4xl font-bold leading-tight text-center`}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 p-8 sm:mt-14 gap-2">
          {data.map((client) => (
            <ImageCard title={client.title} image={client.img} key={random()} />
          ))}
        </div>
      </div>
    </S.Wrapper>
  )
}

export default ClientsList
