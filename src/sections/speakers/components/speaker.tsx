import { useContext, useEffect, useState } from 'react'
import { SpeakerProps } from '../types'
import './speaker.scss'
import { GlobalContext } from '../../../contexts/globalContext'
import { SpeakerDetails } from './speakerDetails'

export default function SpeakerItem(props: SpeakerProps) {
  const { speaker, initialIsStick, setInitialIsStick } = props
  const [ isOpen, setIsOpen ] = useState(false)
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
    setIsOpen(true)
    setInitialIsStick(isSticky)
    setIsSticky(true)
    setModalOpen(true)
  }

  return (
    <div className="speaker-card">
      <img
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
        >
          Conheça
        </button>
      </div>
      <SpeakerDetails
        speaker={speaker}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        initialIsStick={initialIsStick}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </div>
  )
}
