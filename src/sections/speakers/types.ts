import { Speaker } from "../../types/speakers"

export interface SpeakersProps {
  setShowSections: React.Dispatch<React.SetStateAction<boolean>>
  showSpeakers: boolean
  setShowSpeakers: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SpeakerProps {
  speaker: Speaker
}

export interface SpeakerDetailsProps extends SpeakerProps {
  showDetails: boolean
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>
}
