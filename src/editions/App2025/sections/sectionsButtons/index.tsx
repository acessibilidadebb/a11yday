import './sectionsButtons.scss'
import { SectionProps } from './types'

export default function SectionsButtons({
  showSections,
  setShowSections,
  showSchedule,
  setShowSchedule,
  showExperiences,
  setShowExperiences,
  setShowFrequentlyAsked,
}: SectionProps) {
  const resetSections = () => {
    setShowSections(true)
    setShowExperiences(false)
    setShowSchedule(false)
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
  const handleClickExperiences = () => {
    resetSections()
    setShowSections(false)
    setShowExperiences(!showExperiences)
    setTimeout(() => {
      scrollToTop()
      focusSectionTitle('experiences')
    }, 100)
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

  return (
    <section
      id="sections-2025"
      className={`sections-2025${!showSections ? ' closed-2025' : ''}`}
    >
      <button
        type="button"
        onClick={handleClickExperiences}
        className="section-button-2025"
        title="Feira e Vivências"
        accessibility-label="Feira e Vivências"
      >
        <div className="section-card-2025">
          <h3 className="title" aria-hidden="true">
            Feira e Vivências
          </h3>
          <h4 className="subtitle">Programação</h4>
          <p className="details" aria-hidden="true">
            24 e 25 de Setembro
          </p>
        </div>
      </button>
      <button
        type="button"
        onClick={handleClickSchedule}
        className="section-button-2025 dark"
        title="Palestras"
        accessibility-label="Palestras"
      >
        <div className="section-card-2025">
          <h3 className="title" aria-hidden="true">
            Palestras
          </h3>
          <h4 className="subtitle">Programação</h4>
          <p className="details" aria-hidden="true">
            25 de Setembro
          </p>
        </div>
      </button>
    </section>
  )
}
