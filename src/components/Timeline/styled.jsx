import styled from 'styled-components'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export const TimelineWrapper = styled(VerticalTimeline)`
  ::before {
    background: ${({ theme }) => theme.colors.primary};
  }

  .vertical-timeline-element-date {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  .vertical-timeline-element-title {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }

  .vertical-timeline-element-subtitle {
    color: ${({ theme }) => theme.colors.bluehighlight};
  }

  p {
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.font.sizes.sm};
    line-height: ${({ theme }) => theme.font.height.large};
  }
`
export const TimelineElement = styled(VerticalTimelineElement)`
  h3,
  h4
`
