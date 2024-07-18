import closeBtn from '../../../assets/close.png'
import './speakerDetails.scss'
import { SpeakerDetailsProps } from "../types"

export function SpeakerDetails(props: SpeakerDetailsProps) {
  const { speaker, showDetails, setShowDetails } = props
  const handleClose = () => {
    setShowDetails(false)
  }
  return (
    <div className={`speaker-details-modal ${showDetails ? 'open' : ''}`}>
      <button onClick={handleClose} className="close-btn" aria-label="Fechar">
        <img src={closeBtn} alt="Icone de Fechar" />
      </button>
      <div className="speaker-details-container">
        <section className="speaker-details-body">
          <img
            className="speaker-details-image"
            src={`/palestrantes/${speaker.image}`}
            alt={`Foto de ${speaker.seuNome}`}
          />
          <h4 className="speaker-details-name">{speaker.seuNome}</h4>
          <p className="speaker-details-company">{speaker.empresa}</p>
          <p className="speaker-details-description">{speaker?.miniBio}</p>
        </section>
      </div>
    </div>
  )
}
