import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../../../contexts/globalContext'
import './fairitem.scss'

import Modal from '../../../components/modal'
import { Speaker } from '../../../types/speakers'
import speakersData from '../../../json/speakersData.json'
import { FairItemProps } from '../types'
import { generateUniqueId } from '../../../utils/functions'
import FairCardImage from './fairCardImage'
import LinkNav from '../../../components/linkNav'

export function FairItem(props: FairItemProps) {
  const { time, type, confirmed, description, title, subtitle, summary, speakerIds, slide } =
    props
  const { isModalOpen, setModalOpen, togglePin } = useContext(GlobalContext)
  const titleId = generateUniqueId()
  const descriptionId = generateUniqueId()
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [speakers, setSpeakers] = useState([] as Speaker[])

  useEffect(() => {
    if (speakerIds?.length) {
      const filteredSpeakers = speakerIds.reduce((acc, id) => {
        const found = speakersData.find((speaker) => speaker.id === id)
        if (found) acc.push(found)
        return acc
      }, [] as Speaker[])
      setSpeakers(filteredSpeakers)
    }
  }, [])

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
        <div className={`fair-details-header${speakers.length ? ' border-bottom' : ''}`}>
          <h3 className="fair-details-title" id={titleId}>
            {title}
          </h3>
          <p className="fair-details-description" id={descriptionId}>
            {description ? description : summary}
          </p>
          {!!slide && (
            <p className="fair-details-footer">
              <LinkNav
                className="link-download"
                title="Download do slide da palestra (Conteúdo Externo)"
                icon="download"
                href={`/${slide}`}
                target="_blank"
              />
            </p>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className="fair-item">
      <div
        className="fair-card bg-lightgray">
        <FairCardImage {...props} speakers={speakers} />
        <h3 className="title">
          {title}
        </h3>
        {subtitle && subtitle.length > 0 && <p className="subtitle">{subtitle}</p>}
        {type === 'talk' && confirmed && (
          <button
            type="button"
            onClick={handleClickDetails}
            className="details"
            title={`Exibir detalhes da Palestra ${title}`}
            aria-label={`Exibir detalhes da Palestra ${title}`}
            ref={buttonRef}
          >
            Detalhes da Palestra
          </button>
        )}
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
