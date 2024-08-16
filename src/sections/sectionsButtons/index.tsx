import './sectionsButtons.scss'
import { SectionProps } from './types'

export default function SectionsButtons({
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const focusSectionTitle = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement) {
      const sectionTitle = sectionElement.querySelector('h2')
      if (sectionTitle) {
        sectionTitle.setAttribute('tabindex', '-1')
        sectionTitle.focus()
      }
    }
  }
  const handleClickSchedule = () => {
    resetSections()
    setShowSections(false)
    setShowSchedule(!showSchedule)
    scrollToTop()
    focusSectionTitle('schedule')
  }
  const handleClickSpeakers = () => {
    resetSections()
    setShowSections(false)
    setShowSpeakers(!showSpeakers)
    scrollToTop()
    focusSectionTitle('speakers')
  }
  const handleClickFrequentlyAsked = () => {
    resetSections()
    setShowSections(false)
    setShowFrequentlyAsked(!showFrequentlyAsked)
    scrollToTop()
    focusSectionTitle('frequently-asked-questions')
  }
  return (
    <section
      id="sections"
      className={`sections ${!showSections ? 'closed' : ''}`}
    >
      <button
        type="button"
        onClick={handleClickSchedule}
        className="section-button"
      >
        <div className="section-card">
          <div className="section-card-cover cover-schedule">
            <h3>Programação</h3>
          </div>
          <p>Programação</p>
        </div>
      </button>
      <button
        type="button"
        onClick={handleClickSpeakers}
        className="section-button"
      >
        <div className="section-card">
          <div className="section-card-cover cover-speakers">
            <h3>Palestrantes</h3>
          </div>
          <p>Palestrantes</p>
        </div>
      </button>
      <button
        type="button"
        onClick={handleClickFrequentlyAsked}
        className="section-button"
      >
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
