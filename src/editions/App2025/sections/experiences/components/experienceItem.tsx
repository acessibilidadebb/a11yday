import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../../../contexts/globalContext'
import './scheduleitem.scss'

import Modal from '../../../components/modal'
import { ExperienceItemProps } from '../types'
import { generateUniqueId } from '../../../utils/functions'
import ScheduleCardImage from './scheduleCardImage'

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
        <div className="schedule-details-header">
          <h3 className="schedule-details-title" id={titleId}>
            Detalhes da Vivência
          </h3>
          <p></p>
          <h4>{title}</h4>
          {!!times &&
            times.map((time: string, index: number) => (
              <p key={index}>
                {time}
                {index < times.length - 1 && ', '}
              </p>
            ))}
        </div>
      </div>
    )
  }
  return (
    <div className="schedule-item">
      {/* <div className="schedule-time"></div> */}
      <div className="schedule-card bg-lightblue">
        <ScheduleCardImage {...props} />
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
