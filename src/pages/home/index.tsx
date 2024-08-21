import './home.scss'
import DividerIcons from '../../sections/dividerIcons'
import FrequentlyAsked from '../../sections/frequently-asked'
import Overview from '../../sections/overview'
import Schedule from '../../sections/schedule'
import SectionsButtons from '../../sections/sectionsButtons'
import Speakers from '../../sections/speakers'
import Participation from '../../sections/participation'
import ScrollUp from '../../components/scrollUp'
import { HomeProps } from './types'
import { ParticipationData } from '../../sections/participation/types'
import participationData from '../../json/participationData.json'

const participationArray: ParticipationData[] = participationData as ParticipationData[]

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
      <div className='introduction'>
        <Overview style={{ display: showSections ? 'flex' : 'none' }} />
        <div className='participation-container'>
          {!!participationArray && !!participationArray.length && participationArray.map(
            participation => <Participation
            {...participation}
            style={{ display: showSections ? 'block' : 'none' }}
          />
          )}
        </div>
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
      <ScrollUp />
    </>
  )
}
