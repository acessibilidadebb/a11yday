import { ScheduleItemType } from "../../types/schedule"

export interface ScheduleProps {
  showSchedule: boolean
}

export interface SpeakersTitleProps {
  speakers: SpeakerTitle[]
}

export interface SpeakerTitle {
  image: string
  name: string
  company?: string
  nickname: string
}
export interface ScheduleItemProps extends ScheduleItemType {
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
