export interface JourneyItem {
  period: string
  institution: string
  position: string
  description: string
  location: string
  icon: string
  url: string
}

export interface JourneyInfoConfig {
  title: string
  description: string
  journey: JourneyItem[]
}
