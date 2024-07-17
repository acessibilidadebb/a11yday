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
    if (Array.isArray(speakers) && speakers.length) {
      speakersTitle = speakers
        .map(
          (speaker) =>
            `${speaker.nome}${speaker.empresa ? ` | ${speaker.empresa}` : ''}`
        )
        .join(' - ')
    }
    return <>{speakersTitle && <h4>{speakersTitle}</h4>}</>
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
            src={`/${speakers.length ? 'palestrantes/' : ''}${image}`}
            alt="Icone "
          />
          <div className="schedule-card-content">
            <h3>{title}</h3>
            <SpeakersTitle speakers={speakers} />
            {subtitle && <h4>{subtitle}</h4>}
            {details && (
              <button className="details">Detalhes da Palestra</button>
            )}
          </div>
        </div>
      </article>
    )
  }
  return (
    <section className="schedule">
      <h2>Programação</h2>
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
