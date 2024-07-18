import './styles.scss'

interface SectionProps {
  showSections: boolean
  setShowSections: React.Dispatch<React.SetStateAction<boolean>>
  showSchedule: boolean
  setShowSchedule: React.Dispatch<React.SetStateAction<boolean>>
  showSpeakers: boolean
  setShowSpeakers: React.Dispatch<React.SetStateAction<boolean>>
  showFrequentlyAsked: boolean
  setShowFrequentlyAsked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sections({
  showSections,
  setShowSections,
  showSchedule,
  setShowSchedule,
  showSpeakers,
  setShowSpeakers,
  showFrequentlyAsked,
  setShowFrequentlyAsked,
}: SectionProps) {
  const resetSections = () => {
    setShowSections(true)
    setShowSchedule(false)
    setShowSpeakers(false)
    setShowFrequentlyAsked(false)    
  }
  const handleClickSchedule = () => {
    resetSections()
    setShowSections(false)
    setShowSchedule(!showSchedule)
  }
  const handleClickSpeakers = () => {
    resetSections()
    setShowSections(false)
    setShowSpeakers(!showSpeakers)
  }
  const handleClickFrequentlyAsked = () => {
    resetSections()
    setShowSections(false)
    setShowFrequentlyAsked(!showFrequentlyAsked)
  }
  return (
    <section id="sections" className={`sections ${!showSections ? 'closed' : ''}`}>
      <button onClick={handleClickSchedule} className='section-button'>
        <div className="section-card">
          <div className="section-card-cover cover-schedule">
            <h3>Programação</h3>
          </div>
          <p>Programação</p>
        </div>
      </button>
      <button onClick={handleClickSpeakers} className='section-button'>
        <div className="section-card">
          <div className="section-card-cover cover-speakers">
            <h3>Palestrantes</h3>
          </div>
          <p>Palestrantes</p>
        </div>
      </button>
      <button onClick={handleClickFrequentlyAsked} className='section-button'>
        <div className="section-card">
          <div className="section-card-cover cover-frequently-asked">
            <h3>Dúvidas frequentes</h3>
          </div>
          <p>Dúvidas frequentes</p>
        </div>
      </button>
    </section>
  )
}
