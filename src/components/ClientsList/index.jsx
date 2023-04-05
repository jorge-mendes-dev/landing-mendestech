import React from 'react'

import { random } from 'utils/generic'
import ClientCard from './ClientCard'
import info from 'info'

import * as S from './styled'

const ClientsList = ({ ...props }) => {
  const { clients } = info
  const { title, data } = clients

  return (
    <S.Wrapper {...props} className="container mx-auto">
      <div className="mt-10 sm:mt-20">
        <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary dark:text-primary-light">
          {title}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
          {data.map((client) => (
            <ClientCard
              title={client.title}
              image={client.img}
              key={random()}
            />
          ))}
        </div>
      </div>
    </S.Wrapper>
  )
}

export default ClientsList
