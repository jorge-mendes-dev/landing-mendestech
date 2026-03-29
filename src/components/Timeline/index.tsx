import { Divider } from 'components/index'
import Icons from 'config/Icons'
import { memo } from 'react'
import { random } from 'utils/generic'

import config from 'config/index.json'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Timeline = () => {
  const { journeyInfo } = config
  const { journey, title, description } = journeyInfo

  const iconTheme = {
    background: '#001C43',
    color: '#fff'
  }

  return (
    <section
      className={`bg-background dark:bg-background-dark py-12 md:py-16`}
      id="timeline"
    >
      <div className={`container mx-auto px-2 pt-4 pb-12`}>
        <h4
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
        </h4>
        <Divider />
        <p className="mb-8 max-w-2xl text-center text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark lg:mx-auto leading-relaxed">
          {description}
        </p>

        <VerticalTimeline className="mt-4 vertical-timeline vertical-timeline-custom-line rounded-xl shadow  transition-all duration-300 p-0.5">
          {journey.map((item) => {
            const Icon = Icons[item.icon as keyof typeof Icons]
            return (
              <VerticalTimelineElement
                id="timeline"
                key={random()}
                className={`vertical-timeline-element--${item.icon.toLowerCase()} dark:text-gray-100`}
                contentStyle={{
                  color: iconTheme.color,
                  boxShadow: 'none',
                  background: 'transparent'
                }}
                contentArrowStyle={{
                  borderRight: `8px solid ${iconTheme.color}`
                }}
                date={item.period}
                iconStyle={{
                  background: iconTheme.background,
                  color: iconTheme.color
                }}
                icon={<Icon />}
              >
                <div className="group relative bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-2xl shadow-card hover:shadow-card-hover p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative">
                    <h3 className="w-full my-2 text-xl md:text-2xl font-bold text-primary leading-tight uppercase">
                      {item.institution}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle text-primary font-semibold mt-2 text-lg">
                      {item.position}
                    </h4>
                    <p className="max-w-2xl leading-relaxed font-normal text-text-secondary dark:text-text-secondary-dark mt-4 text-base">
                      {item.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border dark:border-border-dark flex items-center justify-between">
                      <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">
                        {item.location}
                      </p>
                      <a
                        className="text-sm font-semibold text-primary hover:text-primary-light dark:text-primary-light dark:hover:text-primary transition-colors duration-200"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>
            )
          })}
          <VerticalTimelineElement
            iconStyle={{
              background: iconTheme.background,
              color: iconTheme.color
            }}
            icon={<Icons.Computer />}
          />
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default memo(Timeline)
