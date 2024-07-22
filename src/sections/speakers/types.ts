import { Speaker } from "../../types/speakers"

export interface SpeakersProps {
  showSpeakers: boolean
}

export interface SpeakerProps {
  speaker: Speaker
  setActiveSpeaker: React.Dispatch<React.SetStateAction<Speaker>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setInitialIsStick: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SpeakerDetailsProps {
  speaker: Speaker
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  initialIsStick: boolean
  onClose: () => void
}
