import lowVisionMark from '../../assets/low-vision-mark.png'
import './styles.scss'

import { Speaker } from '../../types/speakers'
import speakersData from '../../speakers.json'
import { SpeakersProps } from './types'
import SpeakerItem from './components/speaker'

const speakers: Speaker[] = speakersData as Speaker[]

export default function Speakers({
  setShowSections,
  showSpeakers,
  setShowSpeakers,
}: SpeakersProps) {
  return (
    <section id="speakers" className={`speakers ${showSpeakers ? 'open' : ''}`}>
      <div className="watermark">
        <img src={lowVisionMark} alt="Marca d'água ícone de Baixa Visão " />
      </div>
      <h2>Palestrantes</h2>
      <div className="speakers-container">
        {speakers.map((speaker: Speaker, index) => {
          return (
            <SpeakerItem key={`${index}${speaker.seuEmail}`} speaker={speaker} />
          )
        })}
      </div>
    </section>
  )
}
