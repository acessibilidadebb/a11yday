import { useState } from 'react'
import './styles.scss'

import SpeakerItem from './components/speaker'
import lowVisionMark from '../../assets/low-vision-mark.png'
import speakersData from '../../speakers.json'
import { Speaker } from '../../types/speakers'
import { SpeakersProps } from './types'

speakersData.sort((a, b) => {
  if (a.seuNome < b.seuNome) {
    return -1
  }
  if (a.seuNome > b.seuNome) {
    return 1
  }
  return 0
})

const speakers: Speaker[] = speakersData as Speaker[]

export default function Speakers({ showSpeakers }: SpeakersProps) {
  const [initialIsStick, setInitialIsStick] = useState(false)
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
          {speakers.map((speaker: Speaker, index) => {
            return (
              <SpeakerItem
                key={`${index}${speaker.seuEmail}`}
                speaker={speaker}
                setInitialIsStick={setInitialIsStick}
                initialIsStick={initialIsStick}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
