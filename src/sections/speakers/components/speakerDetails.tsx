import closeBtn from '../../../assets/close.png'
import './speakerDetails.scss'
import { SpeakerDetailsProps } from '../types'
import { KeyboardEvent, useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '../../../contexts/globalContext'

export function SpeakerDetails(props: SpeakerDetailsProps) {
  const { speaker, isOpen, setIsOpen, initialIsStick } = props
  const { setIsSticky, setModalOpen } =
    useContext(GlobalContext)
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      const modalElement = modalRef.current
      if (modalElement) {
        //add any focusable HTML element you want to include to this string
        const focusableElements = modalElement.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        const handleTabKeyPress = (event: KeyboardEvent) => {
          if (event.key === 'Tab') {
            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault()
              lastElement.focus()
            } else if (
              !event.shiftKey &&
              document.activeElement === lastElement
            ) {
              event.preventDefault()
              firstElement.focus()
            }
          }
        }

        const handleEscapeKeyPress = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            setIsOpen(false)
          }
        }

        modalElement.addEventListener(
          'keydown',
          handleTabKeyPress as unknown as EventListener
        )
        modalElement.addEventListener(
          'keydown',
          handleEscapeKeyPress as unknown as EventListener
        )

        return () => {
          modalElement.removeEventListener(
            'keydown',
            handleTabKeyPress as unknown as EventListener
          )
          modalElement.removeEventListener(
            'keydown',
            handleEscapeKeyPress as unknown as EventListener
          )
        }
      }
    }
  }, [isOpen, setIsOpen])

  const handleClose = () => {
    setIsOpen(false)
    setIsSticky(initialIsStick)
    setModalOpen(false)
  }
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }
  return (
    <div
      aria-hidden={!isOpen}
      onClick={handleOverlayClick}
      className={`speaker-details-modal ${isOpen ? 'open' : ''}`}
    >
      <div className="speaker-details-container" ref={modalRef}>
        <div className="speaker-details-content">
          <button
            type="button"
            onClick={handleClose}
            className="speaker-details-close-btn"
            aria-label="Fechar"
          >
            <img src={closeBtn} alt="Ícone de Fechar" />
          </button>
          <h3 className="speaker-details-name">Sobre {speaker.seuNome ? speaker.seuNome : ''}</h3>
          <img
            className="speaker-details-image"
            src={`${import.meta.env.BASE_URL}palestrantes/${speaker.image ? speaker.image : ''}`}
            alt={`Foto de ${speaker.seuNome ? speaker.seuNome : ''}`}
          />
          <p className="speaker-details-company">{speaker.empresa ? speaker.empresa : ''}</p>
          <p className="speaker-details-description">{speaker?.miniBio ? speaker?.miniBio : ''}</p>
        </div>
      </div>
    </div>
  )
}
