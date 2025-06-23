export interface Speaker {
  id: number
  name: string
  role: string
  img: string
  bio: string
  expertise: string
  talks: string[]
  publications: string[]
  linkedin?: string
  twitter?: string
  website?: string
}

export interface SpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  speaker: Speaker | null;
}
