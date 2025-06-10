import './home.scss'
import FrequentlyAsked from '../../sections/frequently-asked'
import Overview from '../../sections/overview'
import Participation from '../../sections/participation'
import ScrollUp from '../../components/scrollUp'
import { HomeProps } from './types'
import { ParticipationData } from '../../sections/participation/types'
import participationData from '../../json/participationData.json'
import { generateUniqueId } from '../../utils/functions'
import Primer from '../../sections/primer'
import Gallery from '../../sections/gallery'

const participationArray: ParticipationData[] = participationData as ParticipationData[]

export default function Home(props: HomeProps) {
  const {
    showSections,
    showFrequentlyAsked,
    setShowHandbook,
    setShowGallery    
  } = props
  return (
    <>
      <div className='introduction'>
        <Overview style={{ display: showSections ? 'flex' : 'none' }} />
        <div className='participation-container'>
          {!!participationArray && !!participationArray.length && participationArray.map(
            participation => <Participation
            key={generateUniqueId()}
            {...participation}
            style={{ display: showSections ? 'block' : 'none' }}
          />
          )}
        </div>
      </div>
      {/* <SectionsButtons
        showSections={showSections}
        setShowSections={setShowSections}
        showSchedule={showSchedule}
        setShowSchedule={setShowSchedule}
        showSpeakers={showSpeakers}
        setShowSpeakers={setShowSpeakers}
        showFrequentlyAsked={showFrequentlyAsked}
        setShowFrequentlyAsked={setShowFrequentlyAsked}
      /> */}
      {/* <Schedule showSchedule={showSchedule} /> */}
      {/* <DividerIcons /> */}
      {/* <Speakers showSpeakers={showSpeakers} /> */}
      <FrequentlyAsked showFrequentlyAsked={showFrequentlyAsked} />
      <Primer setShowHandbook={setShowHandbook} />
      <Gallery />
      <ScrollUp />
    </>
  )
}
