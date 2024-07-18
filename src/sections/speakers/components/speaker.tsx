import { useContext } from 'react'
import { SpeakerProps } from '../types'
import './speaker.scss'
import { StickyContext } from '../../../contexts/globalContext'

export default function SpeakerItem(props: SpeakerProps) {
  const { speaker, setActiveSpeaker,setShowDetails, setInitialIsStick } = props
  const { isSticky, setIsSticky } = useContext(StickyContext)
  const handleClick = () => {
    setShowDetails(true)
    setActiveSpeaker(speaker)
    setInitialIsStick(isSticky)
    setIsSticky(true)
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
