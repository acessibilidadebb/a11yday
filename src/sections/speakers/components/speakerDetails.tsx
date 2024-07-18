import closeBtn from '../../../assets/close.png'
import './speakerDetails.scss'
import { SpeakerDetailsProps } from '../types'
import { useEffect, useState } from 'react'

export function SpeakerDetails(props: SpeakerDetailsProps) {
  const { speaker, showDetails, setShowDetails } = props
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (showDetails) {
      // Armazenar a posição de rolagem atual e rolar para o topo
      setScrollPosition(window.scrollY)
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden' // Previne rolagem da página principal
    } else {
      // Restaurar a posição de rolagem ao fechar
      document.body.style.overflow = '' // Restaura rolagem da página principal
      window.scrollTo(0, scrollPosition)
    }
  }, [showDetails])

  const handleClose = () => {
    setShowDetails(false)
  }
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }
  return (
    <div
      onClick={handleOverlayClick}
      className={`speaker-details-modal ${showDetails ? 'open' : ''}`}
    >
      <div className="speaker-details-container">
        <div className="speaker-details-content">
        <button onClick={handleClose} className="speaker-details-close-btn" aria-label="Fechar">
          <img src={closeBtn} alt="Ícone de Fechar" />
        </button>
          <section className="speaker-details-body">
            <p className="speaker-details-about">Sobre a pessoa Palestrante</p>
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
    </div>
  )
}
