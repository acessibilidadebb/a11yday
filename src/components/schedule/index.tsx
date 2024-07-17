import './styles.scss'
import scheduleData from './scheduleData.json'

interface SpeakersTitleProps {
  speakers: SpeakerTitle[]
}

interface SpeakerTitle {
  nome: string
  empresa?: string
}
interface ScheduleItemProps {
  time: string
  image: string
  title: string
  subtitle?: string
  speakers: SpeakerTitle[]
  details: string
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
  const ScheduleItem = ({
    time,
    image,
    title,
    subtitle,
    speakers,
    details,
  }: ScheduleItemProps) => {
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
            src={`/${speakers.length ? 'palestrantes/' : ''}${image}`}
            alt="Icone "
          />
          <h3 className="title">{title}</h3>
          <SpeakersTitle speakers={speakers} />
          {subtitle && <h4 className="subtitle">{subtitle}</h4>}
          {details && <button className="details">Detalhes da Palestra</button>}
        </div>
      </article>
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
