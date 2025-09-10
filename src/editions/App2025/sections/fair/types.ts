import { FairItemType } from '../../types/fair'
import { Speaker } from '../../types/speakers'

export interface FairProps {
  showFair: boolean
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
export interface FairItemProps extends FairItemType {
}
export interface DetailsProps extends FairItemProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FairCardImageProps {
  confirmed: boolean
  image?: string
  imageAlt?: string
  imageAriaHidden?: boolean
  imageBackground?: string
  speakers: Speaker[]
}
