export interface HomeProps {
  showSections: boolean
  setShowSections: React.Dispatch<React.SetStateAction<boolean>>
  showSchedule: boolean
  setShowSchedule: React.Dispatch<React.SetStateAction<boolean>>
  showSpeakers: boolean
  setShowSpeakers: React.Dispatch<React.SetStateAction<boolean>>
  showFrequentlyAsked: boolean
  setShowFrequentlyAsked: React.Dispatch<React.SetStateAction<boolean>>
  showHandbook: boolean
  setShowHandbook: React.Dispatch<React.SetStateAction<boolean>>
}
