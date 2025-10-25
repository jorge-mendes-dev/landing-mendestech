import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'

import config from 'config'

const Utilities = () => {
  const { utilities } = config
  const { title } = utilities

  return (
    <section className={`bg-background dark:bg-black py-8`} id="utilities">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h2
          className={`w-full my-2 text-5xl font-bold leading-tight text-center`}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-green-500' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
          <Whatsapp className={`w-12 text-green-500`} />
        </h2>
      </div>
    </section>
  )
}

export default Utilities
