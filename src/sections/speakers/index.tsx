import './speakers.scss'

import SpeakerItem from './components/speaker'
import lowVisionMark from '../../assets/low-vision-mark.png'
import speakersData from '../../json/speakersData.json'
import { Speaker } from '../../types/speakers'
import { SpeakersProps } from './types'
import { generateUniqueId } from '../../utils/functions'

const speakers: Speaker[] = speakersData as Speaker[]

export default function Speakers({ showSpeakers }: SpeakersProps) {
  return (
    <section id="speakers" className={`speakers ${showSpeakers ? 'open' : ''}`}>
      <div className="speakers-container">
        <div className="watermark">
          <img
            src={lowVisionMark}
            alt="Marca d'água ícone de Baixa Visão "
            aria-hidden="true"
          />
        </div>
        <div className="speakers-container-header">
          <h2>Palestrantes</h2>
        </div>
        <div className="speakers-content">
          {speakers.map((speaker: Speaker) => {
            return (
              <SpeakerItem
                key={`${generateUniqueId()}`}
                speaker={speaker}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
