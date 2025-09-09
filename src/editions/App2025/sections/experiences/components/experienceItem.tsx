import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../../../contexts/globalContext'
import './experienceItem.scss'

import Modal from '../../../components/modal'
import { ExperienceItemProps } from '../types'
import { generateUniqueId } from '../../../utils/functions'
import ExperienceCardImage from './experienceCardImage'

export function ExperienceItem(props: ExperienceItemProps) {
  const { title, subtitle, times } = props
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

  const Details = () => {
    return (
      <div className="default_dialog-content">
        <div className="experience-details-header">
          <h3 className="experience-details-title" id={titleId}>
            Detalhes da Vivência
          </h3>
          <h4 className='experience-details-subtitle'>{title}</h4>
          {!!times &&
            times.map((time: string, index: number) => (
              <p className='experience-details-time' key={index}>
                {time}
                {index < times.length - 1 && ', '}
              </p>
            ))}
        </div>
      </div>
    )
  }
  return (
    <div className="experience-item">
      {/* <div className="experience-time"></div> */}
      <div className="experience-card bg-lightblue">
        <ExperienceCardImage {...props} />
        <h3 className="title">Vivência em {title}</h3>
        {subtitle && subtitle.length > 0 && (
          <p className="subtitle">{subtitle}</p>
        )}
        <button
          type="button"
          onClick={handleClickDetails}
          className="details"
          title="Exibir horário das Turmas"
          aria-label="Exibir horário das Turmas"
          ref={buttonRef}
        >
          Horário das Turmas
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
        <Details />
      </Modal>
    </div>
  )
}
