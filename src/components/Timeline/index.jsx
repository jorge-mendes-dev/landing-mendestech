import React from 'react'

import { random } from 'utils/generic'
import Icons from 'config/Icons'
import { Divider } from 'components'

import config from 'config'

import * as S from './styled'

const Timeline = () => {
  const { journeyInfo } = config
  const { journey } = journeyInfo

  const iconTheme = {
    background: '#b4ebfc',
    color: '#00bcd4'
  }

  return (
    <section className={`bg-background py-8`} id="timeline">
      <div className={`container mx-auto px-2 pt-4 pb-12`}>
        <h4
          className={`w-full my-2 text-5xl font-bold leading-tight text-center`}
        >
          {journeyInfo.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h4>
        <Divider />
        <p className="mb-4 max-w-2xl text-center text-xl text-gray-500 lg:mx-auto">
          {journeyInfo.description}
        </p>
        <S.TimelineWrapper className="mt-4 vertical-timeline.vertical-timeline-custom-line bg-primary rounded-xl shadow-md p-8">
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
                <div className="bg-white rounded-xl shadow-md p-4">
                  <h3
                    className={`w-full my-2 text-2xl font-bold leading-tight text-primary vertical-timeline-element-title`}
                  >
                    {item.institution}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.position}
                  </h4>
                  <p className="max-w-2xl text-base text-gray-100 lg:mx-auto">
                    {item.description}
                  </p>
                  <p className="mt-1 max-w-2xl text-base text-gray-100 lg:mx-auto">
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
            icon={<Icons.Github />}
          />
        </S.TimelineWrapper>
      </div>
    </section>
  )
}

export default Timeline
