import closeBtn from '../../../assets/close.png'
import './speakerDetails.scss'
import { SpeakerDetailsProps } from '../types'
import { useContext, useEffect, useState } from 'react'
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
        height: windowWidth <= 430 ?  windowHeight - headerOffsetHeight : '100vh',
        marginTop: windowWidth <= 430 ? headerOffsetHeight : 0,
      }}
      className={`speaker-details-modal ${isOpen && isTransitionReady ? 'open' : ''}`}
    >
      <div className="speaker-details-container">
        <div className="speaker-details-content">
          <button
            onClick={handleClose}
            className="speaker-details-close-btn"
            aria-label="Fechar"
          >
            <img src={closeBtn} alt="Ícone de Fechar" />
          </button>
          <section className="speaker-details-body">
            <h3 className="speaker-details-name">Sobre {speaker.seuNome}</h3>
            <img
              className="speaker-details-image"
              src={`${import.meta.env.BASE_URL}palestrantes/${speaker.image}`}
              alt={`Foto de ${speaker.seuNome}`}
            />
            <p className="speaker-details-company">{speaker.empresa}</p>
            <p className="speaker-details-description">{speaker?.miniBio}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
