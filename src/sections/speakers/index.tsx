import lowVisionMark from '../../assets/low-vision-mark.png'
import './styles.scss'

import { Speaker } from '../../types/speakers'
import speakersData from '../../speakers.json'

const speakers: Speaker[] = speakersData as Speaker[]

interface SpeakersProps {
  setShowSections: React.Dispatch<React.SetStateAction<boolean>>
  showSpeakers: boolean
  setShowSpeakers: React.Dispatch<React.SetStateAction<boolean>>
}

interface SpeakerProps {
  speaker: Speaker
}

export default function Speakers({
  setShowSections,
  showSpeakers,
  setShowSpeakers,
}: SpeakersProps) {
  function Speaker({ speaker }: SpeakerProps) {
    return (
      <article className="speaker-card">
        <img
          src={`/palestrantes/${speaker.image}`}
          alt={`Foto de ${speaker.seuNome}`}
        />
        <div className="speaker-card-body">
          <h4>{speaker.seuNome}</h4>
          <p>{speaker.empresa}</p>
          <button className="speaker-btn">Conheça</button>
        </div>
      </article>
    )
  }
  return (
    <section id="speakers" className={`speakers ${showSpeakers ? 'open' : ''}`}>
      <div className="watermark">
        <img src={lowVisionMark} alt="Marca d'água ícone de Baixa Visão " />
      </div>
      <h2>Palestrantes</h2>
      <div className="speakers-container">
        {speakers.map((speaker: Speaker, index) => {
          return (
            <Speaker key={`${index}${speaker.seuEmail}`} speaker={speaker} />
          )
        })}
      </div>
    </section>
  )
}
