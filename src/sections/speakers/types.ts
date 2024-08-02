import { Speaker } from "../../types/speakers"

export interface SpeakersProps {
  showSpeakers: boolean
}

export interface SpeakerProps {
  speaker: Speaker
}

export interface SpeakerDetailsProps {
  speaker: Speaker
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onClose: () => void
}
