import './home.scss'
import FrequentlyAsked from '../../sections/frequently-asked'
import Overview from '../../sections/overview'
import Participation from '../../sections/participation'
import ScrollUp from '../../components/scrollUp'
import { HomeProps } from './types'
import { ParticipationData } from '../../sections/participation/types'
import participationData from '../../json/participationData.json'
import Primer from '../../sections/primer'
import SectionsButtons from '../../sections/sectionsButtons'
import DividerIcons from '../../sections/dividerIcons'
import SectionsCollapsible from '../../sections/sectionsCollapsible'

const participationArray: ParticipationData[] =
  participationData as ParticipationData[]

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
    setShowHandbook,
  } = props
  return (
    <>
      <div className="introduction">
        <Overview style={{ display: showSections ? 'flex' : 'none' }} />
        <div className="participation-container">
          {!!participationArray &&
            !!participationArray.length &&
            participationArray.map((participation, index) => (
              <Participation
                key={`participation-${index}`}
                {...participation}
                style={{ display: showSections ? 'block' : 'none' }}
              />
            ))}
        </div>
      </div>
      <SectionsCollapsible showSchedule={showSchedule} />
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
      {/* <Procramacao showSchedule={showSchedule} /> */}
      {/* <Schedule showSchedule={showSchedule} /> */}
      <DividerIcons />
      {/* <Speakers showSpeakers={showSpeakers} /> */}
      <FrequentlyAsked showFrequentlyAsked={showFrequentlyAsked} />
      <Primer setShowHandbook={setShowHandbook} />
      {/* <InclusionManual setShowManual={setShowManual} /> */}
      {/* <Gallery /> */}
      <ScrollUp />
    </>
  )
}
