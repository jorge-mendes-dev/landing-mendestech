import React from 'react'

import { random } from 'utils/generic'
import Icons from 'config/Icons'
import { Divider } from 'components'

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
        </h4>
        <Divider />
        <p className="mb-4 max-w-2xl text-center text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
          {description}
        </p>

        <S.TimelineWrapper className="mt-4 vertical-timeline.vertical-timeline-custom-line bg-gradient-to-r from-primary to-blue-800 rounded-xl shadow p-8">
          {journey.map((item) => {
            const Icon = Icons[item.icon]
            return (
              <S.TimelineElement
                id="timeline"
                key={random()}
                className={`vertical-timeline-element--${item.icon.toLowerCase()}`}
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
                <div className="bg-white border border-ternary-light rounded-xl shadow p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h3
                    className={`w-full my-2 text-1xl font-bold text-primary leading-tight`}
                  >
                    {item.institution}
                  </h3>
                  <h4 className="text-secondary leading-9 font-semibold mt-1">
                    {item.position}
                  </h4>
                  <p className="max-w-2xl font-thin text-gray-100 lg:mx-auto">
                    {item.description}
                  </p>
                  <p className="mt-1 max-w-xl font-light text-gray-100 lg:mx-auto">
                    {item.location}
                  </p>
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
