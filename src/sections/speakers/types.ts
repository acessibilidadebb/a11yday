import { Speaker } from "../../types/speakers"

export interface SpeakersProps {
  showSpeakers: boolean
}

export interface SpeakerProps {
  speaker: Speaker
  initialIsStick: boolean
  setInitialIsStick: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SpeakerDetailsProps {
  speaker: Speaker
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  initialIsStick: boolean
  onClose: () => void
}
