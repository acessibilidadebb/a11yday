import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../contexts/globalContext'
import './speaker.scss'

import { SpeakerProps } from '../types'
import Modal from '../../../components/modal'
import { generateUniqueId } from '../../../utils/functions'
import { ReactComponent as IconFacebook } from '../../../assets/facebook.svg'
import { ReactComponent as IconInstagram } from '../../../assets/instagram.svg'
import { ReactComponent as IconX } from '../../../assets/x-twitter.svg'
import { ReactComponent as IconLinkedin } from '../../../assets/linkedin.svg'

export default function SpeakerItem(props: SpeakerProps) {
  const { speaker } = props
  const [isOpen, setIsOpen] = useState(false)
  const { isModalOpen, setModalOpen, togglePin } = useContext(GlobalContext)
  const titleId = generateUniqueId()
  const descriptionId = generateUniqueId()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isModalOpen])

  const handleClick = () => {
    setIsOpen(true)
    setModalOpen(true)
    togglePin(true)
  }

  const DetailsContent = () => {
    return (
      <div className="default_dialog-content">
        <h3 id={titleId} className="speaker-details-name">
          Sobre {speaker.name ? speaker.name : ''}
        </h3>
        <img
          className="speaker-details-image"
          src={`${import.meta.env.BASE_URL}palestrantes/${
            speaker.image ? speaker.image : ''
          }`}
          alt={`Foto de ${speaker.name ? speaker.name : ''}`}
        />
        <p className="speaker-details-company">
          {speaker.company ? speaker.company : ''}
        </p>
        <p id={descriptionId} className="speaker-details-description">
          {speaker?.miniBio ? speaker?.miniBio : ''}
        </p>
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
                  href={speaker.linkedIn}
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
                  href={speaker.instagram}
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
                  href={speaker.facebook}
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
                  href={speaker.twitter}
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

  return (
    <div className="speaker-card">
      <img
        className="speaker-card-image"
        src={`${import.meta.env.BASE_URL}palestrantes/${speaker.image}`}
        alt={`Foto de ${speaker.name}`}
      />
      <div className="speaker-card-body">
        <h3>{speaker.name}</h3>
        <p>{speaker.company}</p>
        <button
          type="button"
          onClick={handleClick}
          className="speaker-btn"
          title={`Conheça ${speaker.name}`}
          aria-label={`Conheça ${speaker.name}`}
          ref={buttonRef}
        >
          Conheça
        </button>
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
        <DetailsContent />
      </Modal>
    </div>
  )
}
