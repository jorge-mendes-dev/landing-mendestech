import React from 'react'

import { IntroduceMe } from 'components'
import { random } from 'utils/generic'

import git from 'assets/images/git.jpg'
import jorge from 'assets/images/jorge_mendes.png'
import notebook from 'assets/images/notebook.jpg'

import config from 'config'

const About = ({ ...props }) => {
  const { about, company } = config
  const { subtitle, paragraphs, list, video } = about

  return (
    <div className="bg-background dark:bg-black" {...props}>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 dark:border-blue-700 pb-10">
              <h2 className="font-medium text-gray-500 dark:text-blue-700">
                {company.name}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {subtitle}
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {paragraphs.map((paragraph) => (
                <div key={random()}>
                  <dd className="mt-3 text-sm text-gray-500 dark:text-gray-100">
                    {paragraph}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="mt-10 text-sm text-gray-500 dark:text-gray-100">
              {list.map((item) => (
                <li key={random()}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                src={jorge}
                title={company.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <img
                  src={notebook}
                  title={company.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <img
                  src={git}
                  title={company.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <IntroduceMe videoId={video.id} title={video.title} />
      </div>
    </div>
  )
}

export default About
