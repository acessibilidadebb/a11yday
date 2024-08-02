import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../contexts/globalContext'
import './speaker.scss'

import { SpeakerProps } from '../types'
import Modal from '../../../components/modal'
import { generateUniqueId } from '../../../utils/functions'

export default function SpeakerItem(props: SpeakerProps) {
  const { speaker } = props
  const [isOpen, setIsOpen] = useState(false)
  const { isModalOpen, setModalOpen } = useContext(GlobalContext)
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
  }

  const DetailsContent = () => {
    return (
      <div className="default_dialog-content">
        <h3 id={titleId} className="speaker-details-name">
          Sobre {speaker.seuNome ? speaker.seuNome : ''}
        </h3>
        <img
          className="speaker-details-image"
          src={`${import.meta.env.BASE_URL}palestrantes/${
            speaker.image ? speaker.image : ''
          }`}
          alt={`Foto de ${speaker.seuNome ? speaker.seuNome : ''}`}
        />
        <p className="speaker-details-company">
          {speaker.empresa ? speaker.empresa : ''}
        </p>
        <p id={descriptionId} className="speaker-details-description">
          {speaker?.miniBio ? speaker?.miniBio : ''}
        </p>
      </div>
    )
  }

  return (
    <div className="speaker-card">
      <img
        className="speaker-card-image"
        src={`${import.meta.env.BASE_URL}palestrantes/${speaker.image}`}
        alt={`Foto de ${speaker.seuNome}`}
      />
      <div className="speaker-card-body">
        <h3>{speaker.seuNome}</h3>
        <p>{speaker.empresa}</p>
        <button
          type="button"
          onClick={handleClick}
          className="speaker-btn"
          title={`Conheça ${speaker.seuNome}`}
          aria-label={`Conheça ${speaker.seuNome}`}
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
