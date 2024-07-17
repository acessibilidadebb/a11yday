import closeBtn from '../../../assets/close.png'
import speakersData from '../../../speakers.json'
import { Speaker } from '../../../types/speakers'
import { DetailsProps } from "../types"
import './details.scss'

export function Details(props: DetailsProps) {
  const { title, speakers, showDetails, setShowDetails } = props
  const handleClose = () => {
    setShowDetails(false)
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
  return (
    <div className={`details-modal ${showDetails ? 'open' : ''}`}>
      <button onClick={handleClose} className="close-btn" aria-label="Fechar">
        <img src={closeBtn} alt="Icone de Fechar" />
      </button>
      <article className="details-container">
        <header className="details-header">
          <h3 className="details-title">{title}</h3>
          <p className="details-description">{speakerDetails.resumo}</p>
        </header>
        <section className="details-body">
          <h4 className="details-about">Sobre a Palestrante</h4>
          <img
            className="details-image"
            src={`/palestrantes/${speakerDetails.image}`}
            alt={`Foto de ${speakerDetails.seuNome}`}
          />
          <h5 className="details-name">{speakerDetails.seuNome}</h5>
          <p className="details-company">{speakerDetails.empresa}</p>
          <p className="details-description">{speakerDetails?.miniBio}</p>
        </section>
      </article>
    </div>
  )
}
