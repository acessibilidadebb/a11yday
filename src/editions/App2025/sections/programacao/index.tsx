import { useEffect, useState } from 'react'
import scheduleJson from '../../json/scheduleData.json'
import speakersData from '../../json/speakersData.json'

import { ScheduleItemType } from '../../types/schedule'
import './programacao.scss'
import { Speaker } from '../../types/speakers'

const scheduleData = scheduleJson as ScheduleItemType[]

const limitText = (text: string | undefined, limit: number) => {
  if (!text) return ''
  if (text.length <= limit) return text
  return `${text.slice(0, limit)}...`
}

export default function Programacao({
  showSchedule,
}: {
  showSchedule: boolean
}) {
  const ProgramacaoItem = ({
    image,
    imageAlt,
    imageAriaHidden,
    imageBackground,
    time,
    title,
    type,
    speakerIds,
    subtitle,
    summary,
  }: ScheduleItemType) => {
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

    return (
      <div className="programacao-item">
        <div className="programacao-time">{time}</div>
        <div
          className={`programacao-item-content ${
            type === 'talk' ? 'bg-white' : ''
          }`}
        >
          {type === 'talk' ? (
            <img
            className='programacao-item-image'
              src={`${import.meta.env.BASE_URL}palestrantes/${
                speakers[0]?.image || 'default-speaker.png'
              }`}
              alt={`Foto de ${speakers[0]?.name}`}
              aria-hidden={imageAriaHidden}
              style={{
                backgroundColor:
                  imageBackground && imageBackground.trim()
                    ? imageBackground
                    : undefined,
              }}
            />
          ) : (
            <div className="programacao-item-icon">
              <img
                src={image}
                alt={imageAlt}
                aria-hidden={imageAriaHidden}
                style={{
                  backgroundColor:
                    imageBackground && imageBackground.trim()
                      ? imageBackground
                      : undefined,
                }}
              />
            </div>
          )}
          <div className="programacao-item-details">
            <h3 className="programacao-item-title">{title}</h3>
            <p className="programacao-item-description">
              {limitText(subtitle, 200) || limitText(summary, 200) || ''}
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <section
      id="programacao"
      className={`programacao ${showSchedule ? 'open' : ''}`}
    >
      <h2 className="programacao-title">Programação</h2>
      <div className="programacao-content">
        <div className="programacao-grade">
          {scheduleData.length > 0 ? (
            scheduleData.map((item, index) => (
              <ProgramacaoItem
                key={`programacao-${item.uuid || index}`}
                {...item}
              />
            ))
          ) : (
            <p>Em breve, mais informações sobre a programação do evento.</p>
          )}
        </div>
      </div>
    </section>
  )
}
