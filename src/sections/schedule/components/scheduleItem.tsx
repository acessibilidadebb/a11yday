import { useContext, useEffect, useState } from 'react'
import { ScheduleCardImageProps, ScheduleItemProps } from '../types'
import { Details } from './details'
import { SpeakersTitle } from './speakersTitle'
import './scheduleitem.scss'
import { GlobalContext } from '../../../contexts/globalContext'

export function ScheduleItem(props: ScheduleItemProps) {
  const { time, title, subtitle, speakers, details } = props
  const { isModalOpen, setModalOpen } = useContext(GlobalContext)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isModalOpen])

  const handleClickDetails = () => {
    setShowDetails(true)
    setModalOpen(true)
  }
  const ScheduleCardImage = ({
    speakers,
    image,
    imageAlt,
    imageAriaHidden,
  }: ScheduleCardImageProps) => {
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
      <div className="schedule-card-image">
        {speakers.length ? (
          speakers.map((speaker, index) => {
            const borderRadiusStyle = {
              borderTopLeftRadius: index === 0 ? '10px' : '0',
              borderBottomLeftRadius: index === 0 ? '10px' : '0',
              borderTopRightRadius:
                index === speakers.length - 1 ? '10px' : '0',
              borderBottomRightRadius:
                index === speakers.length - 1 ? '10px' : '0',
            }

            return (
              <img
                key={`speakerCardImage${index}`}
                style={{
                  width: `${100 / speakers.length}%`,
                  ...borderRadiusStyle,
                }}
                aria-hidden={`${!!imageAriaHidden}`}
                src={`${import.meta.env.BASE_URL}palestrantes/${speaker.image}`}
                alt={getAltText()}
              />
            )
          })
        ) : (
          <img
            aria-hidden={`${!!imageAriaHidden}`}
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={getAltText()}
          />
        )}
      </div>
    )
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
        <ScheduleCardImage {...props} />
        <h3 className="title">{title}</h3>
        <SpeakersTitle speakers={speakers} />
        {subtitle && <h4 className="subtitle">{subtitle}</h4>}
        {details && (
          <button
            onClick={handleClickDetails}
            className="details"
            aria-label={`Exibir detalhes da Palestra ${title}`}
          >
            Detalhes da Palestra
          </button>
        )}
      </div>
      {!!speakers.length && (
        <Details isOpen={showDetails} setIsOpen={setShowDetails} {...props} />
      )}
    </article>
  )
}
