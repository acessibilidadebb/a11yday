import { SpeakerProps } from '../types'
import './speaker.scss'

export default function SpeakerItem(props: SpeakerProps) {
  const { speaker, setActiveSpeaker,setShowDetails } = props
  const handleClick = () => {
    setShowDetails(true)
    setActiveSpeaker(speaker)
  }
  return (
    <article className="speaker-card">
      <img
        src={`/palestrantes/${speaker.image}`}
        alt={`Foto de ${speaker.seuNome}`}
      />
      <div className="speaker-card-body">
        <h3>{speaker.seuNome}</h3>
        <p>{speaker.empresa}</p>
        <button onClick={handleClick} className="speaker-btn">
          Conheça
        </button>
      </div>
    </article>
  )
}
