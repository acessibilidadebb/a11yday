type ScheduleType = 'block' | 'talk'

export interface ScheduleItemType {
  uuid: string
  type: ScheduleType
  confirmed: boolean
  time: string
  title: string
  subtitle?: string
  summary?: string
  image?: string
  imageAlt?: string
  imageAriaHidden?: boolean
  imageBackground?: string,
  speakerIds?: string[]
  slide?: string
}
