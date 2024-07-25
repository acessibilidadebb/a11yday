import { useContext, useEffect, useRef } from 'react'
import closeBtn from '../../../assets/close.png'
import speakersData from '../../../speakers.json'
import { Speaker } from '../../../types/speakers'
import { DetailsProps } from '../types'
import './details.scss'
import { GlobalContext } from '../../../contexts/globalContext'

export function Details(props: DetailsProps) {
  const { title, speakers, isOpen, setIsOpen } = props
  const { setModalOpen } = useContext(GlobalContext)
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
    setModalOpen(false)
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

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
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

  const ScheduleSpeaker = ({ speaker }: { speaker: Speaker }) => {
    return (
      <div className="schedule-details-body">
        <h4 className="schedule-details-name">Sobre {speaker.seuNome}</h4>
        <img
          className="schedule-details-image"
          src={`${import.meta.env.BASE_URL}/palestrantes/${speaker.image}`}
          alt={`Foto de ${speaker.seuNome}`}
        />
        <p className="schedule-details-company">{speaker.empresa}</p>
        <p className="schedule-details-description">{speaker?.miniBio}</p>
      </div>
    )
  }

  return (
    <div
      aria-hidden={!isOpen}
      onClick={handleOverlayClick}
      className={`schedule-details-modal ${isOpen ? 'open' : ''}`}
    >
      <div className="schedule-details-container" ref={modalRef}>
        <div className="schedule-details-content">
          <button
            onClick={handleClose}
            className="schedule-details-close-btn"
            aria-label="Fechar"
          >
            <img src={closeBtn} alt="Icone de Fechar" />
          </button>
          <header className="schedule-details-header">
            <h3 className="schedule-details-title">{title}</h3>
            <p className="schedule-details-description">{getResumo()}</p>
          </header>
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
      </div>
    </div>
  )
}
