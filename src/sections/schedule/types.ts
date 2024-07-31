export interface ScheduleProps {
  showSchedule: boolean
}

export interface SpeakersTitleProps {
  speakers: SpeakerTitle[]
}

export interface SpeakerTitle {
  image: string
  nome: string
  empresa?: string
}
export interface ScheduleItemProps {
  time: string
  image?: string
  imageAlt?: string
  imageAriaHidden?: boolean
  imageBackground?: string
  title: string
  subtitle?: string
  speakers: SpeakerTitle[]
  details: string
}
export interface DetailsProps extends ScheduleItemProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ScheduleCardImageProps {
  image?: string
  imageAlt?: string
  imageAriaHidden?: boolean
  imageBackground?: string
  speakers: SpeakerTitle[]
}
