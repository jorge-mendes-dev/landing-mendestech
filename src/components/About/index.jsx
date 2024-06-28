import React from 'react'

import { random } from 'utils/generic'
import { PlayerAnimation } from 'components'

import astronalt from 'utils/JSON/astronalt.json'

import config from 'config'

const About = ({ ...props }) => {
  const { about } = config
  const { paragraphs, list } = about

  return (
    <section
      className={`bg-background dark:bg-zinc-800 container mx-auto mt-12 mb-12`}
      id="about"
      {...props}
    >
      <div className="block sm:flex sm:gap-10 justify-center`">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <PlayerAnimation animation={astronalt} size={'16vw'} />
        </div>
        <div className="font-general-regular bg-white w-full sm:w-3/4 text-left p-6 shadow rounded-xl">
          {paragraphs.map((description) => (
            <p
              key={random()}
              className={`text-gray-600 dark:text-gray mb-6 font-light subpixel-antialiased tracking-light align-baseline leading-relaxed`}
            >
              {description}
            </p>
          ))}
          <div className="text-gray-600 dark:text-gray pl-4 font-light subpixel-antialiased tracking-light align-baseline leading-relaxed">
            <ul className="list-disc">
              {list.map((item) => (
                <li key={random()}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
