import closeBtn from '../../../assets/close.png'
import './speakerDetails.scss'
import { SpeakerDetailsProps } from '../types'
import { KeyboardEvent, useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../contexts/globalContext'

export function SpeakerDetails(props: SpeakerDetailsProps) {
  const { speaker, isOpen, setIsOpen, initialIsStick } = props
  const { setIsSticky, headerOffsetHeight, setModalOpen } =
    useContext(GlobalContext)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isTransitionReady, setIsTransitionReady] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsTransitionReady(true)
      }, 100)
    } else {
      setIsTransitionReady(false)
    }
  }, [isOpen])

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
      style={{
        height:
          windowWidth <= 768 ? windowHeight - headerOffsetHeight : '100vh',
        marginTop: windowWidth <= 768 ? headerOffsetHeight : 0,
      }}
      className={`speaker-details-modal ${
        isOpen && isTransitionReady ? 'open' : ''
      }`}
    >
      <div className="speaker-details-container" ref={modalRef}>
        <div className="speaker-details-content">
          <button
            onClick={handleClose}
            className="speaker-details-close-btn"
            aria-label="Fechar"
          >
            <img src={closeBtn} alt="Ícone de Fechar" />
          </button>
          <h3 className="speaker-details-name">Sobre {speaker.seuNome}</h3>
          <img
            className="speaker-details-image"
            src={`${import.meta.env.BASE_URL}palestrantes/${speaker.image}`}
            alt={`Foto de ${speaker.seuNome}`}
          />
          <p className="speaker-details-company">{speaker.empresa}</p>
          <p className="speaker-details-description">{speaker?.miniBio}</p>
        </div>
      </div>
    </div>
  )
}
