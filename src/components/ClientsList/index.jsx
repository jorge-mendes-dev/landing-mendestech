import { Divider, ImageCard } from 'components'
import Brands from 'config/Brands'
import { random } from 'utils/generic'

import config from 'config'

const ClientsList = ({ ...props }) => {
  const { clients } = config
  const { title, data } = clients

  return (
    <div {...props} className="container mx-auto">
      <div className="mt-10 sm:mt-20">
        <h6
          className={`w-full my-4 text-3xl md:text-4xl font-bold leading-tight text-center`}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={
                index % 2
                  ? 'text-primary'
                  : 'text-text-primary dark:text-text-primary-dark'
              }
            >
              {word}{' '}
            </span>
          ))}
        </h6>
        <Divider />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-12 p-8 sm:mt-16 gap-6 md:gap-8 mb-6">
          {data.map((client, index) => {
            const Brand = Brands[client.img]
            return (
              <ImageCard
                title={client.title}
                image={Brand}
                key={random()}
                width={'auto'}
                height={'auto'}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ClientsList
