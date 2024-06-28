import React from 'react'

import { random } from 'utils/generic'
import { ImageCard, Divider } from 'components'
import Brands from 'config/Brands'

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
        <Divider />
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 p-8 sm:mt-14 gap-2">
          {data.map((client) => {
            const Brand = Brands[client.img]
            return (
              <ImageCard
                title={client.title}
                image={Brand}
                key={random()}
                width={'auto'}
                height={'auto'}
              />
            )
          })}
        </div>
      </div>
    </S.Wrapper>
  )
}

export default ClientsList
