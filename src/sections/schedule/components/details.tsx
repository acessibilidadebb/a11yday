import { useContext } from 'react'
import closeBtn from '../../../assets/close.png'
import speakersData from '../../../speakers.json'
import { Speaker } from '../../../types/speakers'
import { DetailsProps } from '../types'
import './details.scss'
import { GlobalContext } from '../../../contexts/globalContext'

export function Details(props: DetailsProps) {
  const { title, speakers, showDetails, setShowDetails } = props
  const { setModalOpen } = useContext(GlobalContext)
  const handleClose = () => {
    setShowDetails(false)
    setModalOpen(false)
  }
  const speakerDetails = speakers.map((speaker) => ({
    ...speakersData.find(
      (item) =>
        item.seuNome.includes(speaker.nome) ||
        item.apelido.includes(speaker.nome) ||
        (item.seuNome + ' ' + item.apelido).includes(speaker.nome)
    ),
    image: speaker.image,
  }))[0] as Speaker
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }
  return (
    <div
      onClick={handleOverlayClick}
      className={`schedule-details-modal ${showDetails ? 'open' : ''}`}
    >
      <article className="schedule-details-container">
        <div className="schedule-details-content">
          <button
            onClick={handleClose}
            className="schedule-details-close-btn"
            aria-label="Fechar"
          >
            <img src={closeBtn} alt="Icone de Fechar" />
          </button>
          <header className="schedule-details-header">
            <h3 className="schedule-details-title">{title}</h3>
            <p className="schedule-details-description">
              {speakerDetails.resumo}
            </p>
          </header>
          <section className="schedule-details-body">
            <p className="schedule-details-about">Sobre a Palestrante</p>
            <img
              className="schedule-details-image"
              src={`${import.meta.env.BASE_URL}/palestrantes/${speakerDetails.image}`}
              alt={`Foto de ${speakerDetails.seuNome}`}
            />
            <h4 className="schedule-details-name">{speakerDetails.seuNome}</h4>
            <p className="schedule-details-company">{speakerDetails.empresa}</p>
            <p className="schedule-details-description">
              {speakerDetails?.miniBio}
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
