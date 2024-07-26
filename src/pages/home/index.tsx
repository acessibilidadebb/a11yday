import DividerIcons from '../../sections/dividerIcons'
import FrequentlyAsked from '../../sections/frequently-asked'
import Overview from '../../sections/overview'
import Schedule from '../../sections/schedule'
import SectionsButtons from '../../sections/sectionsButtons'
import Speakers from '../../sections/speakers'
import Watch from '../../sections/watch'
import { HomeProps } from './types'

export default function Home(props: HomeProps) {
  const {
    showSections,
    setShowSections,
    showSchedule,
    setShowSchedule,
    showSpeakers,
    setShowSpeakers,
    showFrequentlyAsked,
    setShowFrequentlyAsked,
  } = props
  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <Overview style={{ display: showSections ? 'flex' : 'none' }} />
        <Watch style={{ display: showSections ? 'flex' : 'none' }} />
      </div>
      <SectionsButtons
        showSections={showSections}
        setShowSections={setShowSections}
        showSchedule={showSchedule}
        setShowSchedule={setShowSchedule}
        showSpeakers={showSpeakers}
        setShowSpeakers={setShowSpeakers}
        showFrequentlyAsked={showFrequentlyAsked}
        setShowFrequentlyAsked={setShowFrequentlyAsked}
      />
      <Schedule showSchedule={showSchedule} />
      <DividerIcons />
      <Speakers showSpeakers={showSpeakers} />
      <FrequentlyAsked showFrequentlyAsked={showFrequentlyAsked} />
    </>
  )
}
