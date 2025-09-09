export interface HomeProps {
  showSections: boolean
  setShowSections: React.Dispatch<React.SetStateAction<boolean>>
  showSchedule: boolean
  setShowSchedule: React.Dispatch<React.SetStateAction<boolean>>
  showExperiences: boolean
  setShowExperiences: React.Dispatch<React.SetStateAction<boolean>>
  showSpeakers: boolean
  setShowSpeakers: React.Dispatch<React.SetStateAction<boolean>>
  showFrequentlyAsked: boolean
  setShowFrequentlyAsked: React.Dispatch<React.SetStateAction<boolean>>
  showHandbook: boolean
  setShowHandbook: React.Dispatch<React.SetStateAction<boolean>>
  showManual: boolean
  setShowManual: React.Dispatch<React.SetStateAction<boolean>>
  showGallery: boolean
  setShowGallery: React.Dispatch<React.SetStateAction<boolean>>
}
