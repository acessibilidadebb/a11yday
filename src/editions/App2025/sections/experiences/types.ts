import { ExperienceItemType } from '../../types/experience'

export interface ScheduleProps {
  showExperiences: boolean
}

export interface ExperienceItemProps extends ExperienceItemType {
}

export interface ExperiencesCardImageProps {
  image?: string
  imageAlt?: string
  imageAriaHidden?: boolean
  imageBackground?: string
}
