import { Speaker } from "../../types/speakers"

export interface SpeakersProps {
  showSpeakers: boolean
}

export interface SpeakerProps {
  speaker: Speaker
  setActiveSpeaker: React.Dispatch<React.SetStateAction<Speaker>>
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SpeakerDetailsProps {
  speaker: Speaker
  showDetails: boolean
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>
}
