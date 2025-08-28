import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../../../contexts/globalContext'
import './scheduleitem.scss'

import Modal from '../../../components/modal'
import { SpeakersTitle } from './speakersTitle'
import { Speaker } from '../../../types/speakers'
import speakersData from '../../../json/speakersData.json'
import { ScheduleItemProps } from '../types'
import { generateUniqueId } from '../../../utils/functions'
import ScheduleCardImage from './scheduleCardImage'
import LinkNav from '../../../components/linkNav'
import { ReactComponent as IconFacebook } from '../../../../../assets/facebook.svg'
import { ReactComponent as IconInstagram } from '../../../../../assets/instagram.svg'
import { ReactComponent as IconX } from '../../../../../assets/x-twitter.svg'
import { ReactComponent as IconLinkedin } from '../../../../../assets/linkedin.svg'

export function ScheduleItem(props: ScheduleItemProps) {
  const { time, type, confirmed, title, subtitle, summary, speakerIds, slide } =
    props
  const { isModalOpen, setModalOpen, togglePin } = useContext(GlobalContext)
  const titleId = generateUniqueId()
  const descriptionId = generateUniqueId()
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [speakers, setSpeakers] = useState([] as Speaker[])

  useEffect(() => {
    if (speakerIds?.length) {
      const filteredSpeakers = speakerIds.reduce((acc, id) => {
        const found = speakersData.find((speaker) => speaker.id === id)
        if (found) acc.push(found)
        return acc
      }, [] as Speaker[])
      setSpeakers(filteredSpeakers)
    }
  }, [])

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

  const ScheduleSpeaker = ({ speaker }: { speaker: Speaker }) => {
    return (
      <div className="schedule-details-body">
        <h4 className="schedule-details-name">Sobre {speaker.name}</h4>
        <img
          className="schedule-details-image"
          src={`${import.meta.env.BASE_URL}palestrantes/2025/${speaker.image}`}
          alt={`Foto de ${speaker.name}`}
        />
        <p className="schedule-details-company">{speaker.company}</p>
        <p className="schedule-details-description">{speaker?.miniBio}</p>
        {(speaker.website ||
          speaker.facebook ||
          speaker.instagram ||
          speaker.twitter ||
          speaker.linkedIn) && (
          <div className="speaker-social-icons">
            <h4 className="social-title">Entre em contato</h4>
            <div className="speaker-social-icons-container">
              {speaker.linkedIn && (
                <a
                  href={`https://www.linkedin.com/in/${speaker.linkedIn}`}
                  target="_blank"
                  className="social-link"
                  title={`Linkedin de ${speaker.name}`}
                  aria-label={`Linkedin de ${speaker.name}`}
                >
                  <IconLinkedin className="icon" aria-hidden="true" />
                </a>
              )}
              {speaker.instagram && (
                <a
                  href={`https://www.instagram.com/${speaker.instagram}`}
                  target="_blank"
                  className="social-link"
                  title={`Instagram de ${speaker.name}`}
                  aria-label={`Instagram de ${speaker.name}`}
                >
                  <IconInstagram className="icon" aria-hidden="true" />
                </a>
              )}
              {speaker.facebook && (
                <a
                  href={`https://www.facebook.com/${speaker.facebook}`}
                  target="_blank"
                  className="social-link"
                  title={`Facebook de ${speaker.name}`}
                  aria-label={`Facebook de ${speaker.name}`}
                >
                  <IconFacebook className="icon" aria-hidden="true" />
                </a>
              )}
              {speaker.twitter && (
                <a
                  href={`https://x.com/${speaker.twitter}`}
                  target="_blank"
                  className="social-link"
                  title={`X de ${speaker.name}`}
                  aria-label={`X de ${speaker.name}`}
                >
                  <IconX className="icon" aria-hidden="true" />
                </a>
              )}
              {speaker.website && (
                <a
                  href={speaker.website}
                  target="_blank"
                  className="social-link"
                  title={`Site oficial de ${speaker.name}`}
                  aria-label={`Site oficial de ${speaker.name}`}
                >
                  Site Oficial
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  const Details = () => {
    return (
      <div className="default_dialog-content">
        <div className={`schedule-details-header${speakers.length ? ' border-bottom' : ''}`}>
          <h3 className="schedule-details-title" id={titleId}>
            {title}
          </h3>
          <p className="schedule-details-description" id={descriptionId}>
            {summary}
          </p>
          {!!slide && (
            <p className="schedule-details-footer">
              <LinkNav
                className="link-download"
                title="Download do slide da palestra (Conteúdo Externo)"
                icon="download"
                href={`/${slide}`}
                target="_blank"
              />
            </p>
          )}
        </div>
        {!!speakers.length &&
          speakers.map((speaker, index) => {
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
          type === 'talk' && confirmed ? 'bg-lightgray' : 'bg-lightblue'
        }`}
      >
        <ScheduleCardImage {...props} speakers={speakers} />
        <h3 className="title">
          {!confirmed && type === 'talk' ? 'A confirmar' : title}
        </h3>
        {confirmed && <SpeakersTitle speakers={speakers} />}
        {subtitle && subtitle.length > 0 && <p className="subtitle">{subtitle}</p>}
        {type === 'talk' && confirmed && (
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
