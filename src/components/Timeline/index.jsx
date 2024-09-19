import React from 'react'

import { Divider } from 'components'
import Icons from 'config/Icons'
import { random } from 'utils/generic'

import config from 'config'

import * as S from './styled'

const Timeline = () => {
  const { journeyInfo } = config
  const { journey, title, description } = journeyInfo

  const iconTheme = {
    background: '#001C43',
    color: '#00bcd4'
  }

  return (
    <section className={`bg-background dark:bg-black py-8`} id="timeline">
      <div className={`container mx-auto px-2 pt-4 pb-12`}>
        <h4
          className={`w-full my-2 text-4xl font-bold leading-tight text-center`}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={
                index % 2 ? 'text-primary' : 'text-border dark:text-white'
              }
            >
              {word}{' '}
            </span>
          ))}
        </h4>
        <Divider />
        <p className="mb-5 max-w-2xl text-center text-xl text-gray-500 dark:text-gray-200 lg:mx-auto">
          {description}
        </p>

        <S.TimelineWrapper className="mt-4 vertical-timeline.vertical-timeline-custom-line rounded-xl shadow bg-gradient-to-tr from-blue-500 via-blue-700 to-blue-900 transition-all duration-300 p-0.5">
          {journey.map((item) => {
            const Icon = Icons[item.icon]
            return (
              <S.TimelineElement
                id="timeline"
                key={random()}
                className={`vertical-timeline-element--${item.icon.toLowerCase()} dark:text-gray-100`}
                contentStyle={{
                  color: `${iconTheme.color}`,
                  boxShadow: 'none',
                  background: 'transparent'
                }}
                contentArrowStyle={{
                  borderRight: `8px solid ${iconTheme.color}`
                }}
                date={item.period}
                iconStyle={{
                  background: `${iconTheme.background}`,
                  color: `${iconTheme.color}`
                }}
                icon={<Icon />}
              >
                <div className="bg-white dark:bg-zinc-900 dark:border-zinc-800 border border-ternary-light rounded-xl shadow p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h3
                    className={`w-full my-2 text-1xl font-bold text-primary leading-tight`}
                  >
                    {item.institution}
                  </h3>
                  <h4 className="text-secondary dark:text-gray-300 leading-9 font-semibold mt-1">
                    {item.position}
                  </h4>
                  <p className="max-w-2xl leading-9 font-thin text-gray-100 dark:text-gray-200 lg:mx-auto">
                    {item.description}
                  </p>
                  <div className="text-right">
                    <p className="mt-1 leading-9 max-w-xl font-light text-gray-100 dark:text-gray-300 lg:mx-auto">
                      {item.location}
                    </p>
                    <a
                      className="mt-3 dark:text-blue-500"
                      href={item.url}
                      target="_blank"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </S.TimelineElement>
            )
          })}
          <S.TimelineElement
            iconStyle={{
              background: iconTheme.background,
              color: iconTheme.color
            }}
            icon={<Icons.Computer />}
          />
        </S.TimelineWrapper>
      </div>
    </section>
  )
}

export default Timeline
