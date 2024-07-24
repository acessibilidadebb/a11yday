import { useContext, useEffect } from 'react'
import { SpeakerProps } from '../types'
import './speaker.scss'
import { GlobalContext } from '../../../contexts/globalContext'

export default function SpeakerItem(props: SpeakerProps) {
  const { speaker, setActiveSpeaker, setIsModalOpen, setInitialIsStick } = props
  const { isSticky, setIsSticky, isModalOpen, setModalOpen } =
    useContext(GlobalContext)

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isModalOpen])

  const handleClick = () => {
    setIsModalOpen(true)
    setActiveSpeaker(speaker)
    setInitialIsStick(isSticky)
    setIsSticky(true)
    setModalOpen(true)
  }

  return (
    <article className="speaker-card">
      <img
        src={`${import.meta.env.BASE_URL}/palestrantes/${speaker.image}`}
        alt={`Foto de ${speaker.seuNome}`}
      />
      <div className="speaker-card-body">
        <h3>{speaker.seuNome}</h3>
        <p>{speaker.empresa}</p>
        <button
          onClick={handleClick}
          className="speaker-btn"
          aria-label={`Conheça ${speaker.seuNome}`}
        >
          Conheça
        </button>
      </div>
    </article>
  )
}
