import { useState } from 'react'
import { SpeakerProps } from '../types'
import './speaker.scss'
import { SpeakerDetails } from './speakerDetails'

export default function SpeakerItem(props: SpeakerProps) {
  const { speaker } = props
  const [showDetails, setShowDetails] = useState(false)
  const handleClick = () => {
    setShowDetails(true)
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
      <SpeakerDetails
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        {...props}
      />
    </article>
  )
}
