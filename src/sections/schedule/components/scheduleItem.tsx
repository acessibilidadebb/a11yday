import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../contexts/globalContext'
import './scheduleitem.scss'

import Modal from '../../../components/modal'
import { SpeakersTitle } from './speakersTitle'
import { Speaker } from '../../../types/speakers'
import speakersData from '../../../speakers.json'
import { ScheduleCardImageProps, ScheduleItemProps } from '../types'
import { generateUniqueId } from '../../../utils/functions'

export function ScheduleItem(props: ScheduleItemProps) {
  const { time, title, subtitle, speakers, details } = props
  const { isModalOpen, setModalOpen, togglePin } = useContext(GlobalContext)
  const titleId = generateUniqueId()
  const descriptionId = generateUniqueId()
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isModalOpen])

  const handleClickDetails = () => {
    setIsOpen(true)
    setModalOpen(true)
    togglePin(true)
  }
  const ScheduleCardImage = ({
    speakers,
    image,
    imageAlt,
    imageAriaHidden,
    imageBackground,
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
          <div
            className={
              imageBackground?.trim()
                ? `schedule-card-image-bg ${imageBackground}`
                : ''
            }
          >
            <img
              aria-hidden={`${!!imageAriaHidden}`}
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={getAltText()}
            />
          </div>
        )}
      </div>
    )
  }

  const getResumo = () => {
    const foundSpeaker = speakersDetails.find(
      (speaker: Speaker) => speaker.resumo.trim().length
    )
    if (foundSpeaker) {
      const resumo = foundSpeaker.resumo
      if (typeof resumo === 'string') {
        return resumo
      }
    }
    return ''
  }

  const speakersDetails = speakers.map((speaker) => ({
    ...speakersData.find(
      (item) =>
        item.seuNome.includes(speaker.nome) ||
        item.apelido.includes(speaker.nome) ||
        (item.seuNome + ' ' + item.apelido).includes(speaker.nome)
    ),
    image: speaker.image,
  })) as Speaker[]

  const ScheduleSpeaker = ({ speaker }: { speaker: Speaker }) => {
    return (
      <div className="schedule-details-body">
        <h4 className="schedule-details-name">Sobre {speaker.seuNome}</h4>
        <img
          className="schedule-details-image"
          src={`${import.meta.env.BASE_URL}palestrantes/${speaker.image}`}
          alt={`Foto de ${speaker.seuNome}`}
        />
        <p className="schedule-details-company">{speaker.empresa}</p>
        <p className="schedule-details-description">{speaker?.miniBio}</p>
      </div>
    )
  }

  const Details = () => {
    return (
      <div className="default_dialog-content">
        <div className="schedule-details-header">
          <h3 className="schedule-details-title" id={titleId}>
            {title}
          </h3>
          <p className="schedule-details-description" id={descriptionId}>
            {getResumo()}
          </p>
        </div>
        {!!speakersDetails.length &&
          speakersDetails.map((speaker, index) => {
            return (
              <ScheduleSpeaker
                key={`schedulespeaker${index}`}
                speaker={speaker}
              />
            )
          })}
      </div>
    )
  }

  return (
    <div className="schedule-item">
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
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {details && (
          <button
            type="button"
            onClick={handleClickDetails}
            className="details"
            title={`Exibir detalhes da Palestra ${title}`}
            aria-label={`Exibir detalhes da Palestra ${title}`}
            ref={buttonRef}
          >
            Detalhes da Palestra
          </button>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
          setModalOpen(false)
          togglePin(false)
        }}
        titleId={titleId}
        descriptionId={descriptionId}
        focusAfterClosed={buttonRef.current ?? undefined}
      >
        <Details />
      </Modal>
    </div>
  )
}
