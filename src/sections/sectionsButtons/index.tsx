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
    setTimeout(() => {
      scrollToTop()
      focusSectionTitle('schedule')
    }, 100)
  }

  const handleClickSpeakers = () => {
    resetSections()
    setShowSections(false)
    setShowSpeakers(!showSpeakers)
    setTimeout(() => {
      scrollToTop()
      focusSectionTitle('speakers')
    }, 100)
  }

  const handleClickFrequentlyAsked = () => {
    resetSections()
    setShowSections(false)
    setShowFrequentlyAsked(!showFrequentlyAsked)
    setTimeout(() => {
      scrollToTop()
      focusSectionTitle('frequently-asked-questions')
    }, 100)
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
        title="Programação"
        accessibility-label="Programação"
      >
        <div className="section-card">
          <div className="section-card-cover cover-schedule">
            <h3 aria-hidden="true">Programação</h3>
          </div>
          <p aria-hidden="true">Programação</p>
        </div>
      </button>
      <button
        type="button"
        onClick={handleClickSpeakers}
        className="section-button"
        title="Palestrantes"
        accessibility-label="Palestrantes"
      >
        <div className="section-card">
          <div className="section-card-cover cover-speakers">
            <h3 aria-hidden="true">Palestrantes</h3>
          </div>
          <p aria-hidden="true">Palestrantes</p>
        </div>
      </button>
      <button
        type="button"
        onClick={handleClickFrequentlyAsked}
        className="section-button"
        title="Dúvidas frequentes"
        accessibility-label="Dúvidas frequentes"
      >
        <div className="section-card">
          <div className="section-card-cover cover-frequently-asked">
            <h3 aria-hidden="true">Dúvidas frequentes</h3>
          </div>
          <p aria-hidden="true">Dúvidas frequentes</p>
        </div>
      </button>
    </section>
  )
}
