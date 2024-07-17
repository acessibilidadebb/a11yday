import { useState } from 'react'
import './styles.scss'
import closeBtn from '../../assets/close.png'
import scheduleData from './scheduleData.json'
import speakersData from '../../speakers.json'
import { Speaker } from '../../types/speakers'

interface SpeakersTitleProps {
  speakers: SpeakerTitle[]
}

interface SpeakerTitle {
  image: string
  nome: string
  empresa?: string
}
interface ScheduleItemProps {
  time: string
  image?: string
  imageAlt?: string
  title: string
  subtitle?: string
  speakers: SpeakerTitle[]
  details: string
}
interface DetailsProps extends ScheduleItemProps {
  showDetails: boolean
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Schedule() {
  const SpeakersTitle = ({ speakers }: SpeakersTitleProps) => {
    let speakersTitle = ''
    let speakersCompany = ''
    if (Array.isArray(speakers) && speakers.length) {
      speakersTitle += speakers
        .map((speaker) => speaker.nome)
        .filter((str) => str !== '')
        .join(' - ')
      speakersCompany += speakers
        .map((speaker) => speaker.empresa)
        .filter((str) => str !== '')
        .join(' - ')
    }
    return (
      <>
        {speakersTitle && <h4 className="name">{speakersTitle}</h4>}
        <p className="company">{speakersCompany}</p>
      </>
    )
  }
  const ScheduleItem = (props: ScheduleItemProps) => {
    const { time, image, imageAlt, title, subtitle, speakers, details } = props
    const [showDetails, setShowDetails] = useState(false)
    const handleClickDetails = () => {
      setShowDetails(true)
    }
    const getAltText = () => {
      let altText = ''
      if (speakers.length) {
        altText =
          'Foto de ' + speakers.map((speaker) => speaker.nome).join(', ')
      } else {
        altText = imageAlt ?? ''
      }
      return altText
    }
    return (
      <article className="schedule-item">
        <div className="schedule-time">
          <div className="schedule-time-content">{time}</div>
        </div>
        <div
          className={`schedule-card ${
            Array.isArray(speakers) && speakers.length
              ? 'bg-lightgray'
              : 'bg-lightblue'
          }`}
        >
          <img
            className="schedule-card-image"
            src={`/${
              speakers.length ? `palestrantes/${speakers[0].image}` : image
            }`}
            alt={getAltText()}
          />
          <h3 className="title">{title}</h3>
          <SpeakersTitle speakers={speakers} />
          {subtitle && <h4 className="subtitle">{subtitle}</h4>}
          {details && (
            <button
              onClick={handleClickDetails}
              className="details"
              aria-label="Exibir detalhes da Palestra"
            >
              Detalhes da Palestra
            </button>
          )}
        </div>
        {!!speakers.length && (
          <Details
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            {...props}
          />
        )}
      </article>
    )
  }
  const Details = (props: DetailsProps) => {
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
  return (
    <section className="schedule">
      <h2 className="schedule-title">Programação</h2>
      <section>
        <header className="schedule-header">
          <div className="schedule-time">Hora</div>
          <div className="schedule-event">Acontecimento</div>
        </header>
        {scheduleData.map((item) => (
          <ScheduleItem key={item.title} {...item} />
        ))}
      </section>
    </section>
  )
}
