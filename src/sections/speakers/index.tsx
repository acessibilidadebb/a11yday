import lowVisionMark from '../../assets/low-vision-mark.png'
import './styles.scss'

import { Speaker } from '../../types/speakers'
import speakersData from '../../speakers.json'
import { SpeakersProps } from './types'
import SpeakerItem from './components/speaker'
import { useState } from 'react'
import { SpeakerDetails } from './components/speakerDetails'

const speakers: Speaker[] = speakersData as Speaker[]

export default function Speakers({ showSpeakers }: SpeakersProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSpeaker, setActiveSpeaker] = useState({} as Speaker)
  const [ initialIsStick, setInitialIsStick ] = useState(false)
  return (
    <section id="speakers" className={`speakers ${showSpeakers ? 'open' : ''}`}>
      <div className="speakers-container">
        <div className="watermark">
          <img src={lowVisionMark} alt="Marca d'água ícone de Baixa Visão " />
        </div>
        <h2>Palestrantes</h2>
        <div className="speakers-content">
          {speakers.map((speaker: Speaker, index) => {
            return (
              <SpeakerItem
                key={`${index}${speaker.seuEmail}`}
                setIsModalOpen={setIsModalOpen}
                speaker={speaker}
                setActiveSpeaker={setActiveSpeaker}
                setInitialIsStick={setInitialIsStick}
              />
            )
          })}
        </div>
      </div>
      <SpeakerDetails
        speaker={activeSpeaker}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        initialIsStick={initialIsStick}
        onClose={() => {setIsModalOpen(false)}}
      />
    </section>
  )
}
