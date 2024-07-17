import { useState } from "react"
import { ScheduleItemProps } from "../types"
import { Details } from "./details"
import { SpeakersTitle } from "./speakersTitle"
import './scheduleitem.scss'

export function ScheduleItem(props: ScheduleItemProps) {
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
