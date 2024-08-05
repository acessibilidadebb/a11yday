import './scheduleCardImage.scss'

import { ScheduleCardImageProps } from '../types'

export default function ScheduleCardImage(props: ScheduleCardImageProps) {
  const { speakers, image, imageAlt, imageAriaHidden } = props
  const getAltText = () => {
    let altText = ''
    if (speakers.length) {
      altText = 'Foto de ' + speakers.map((speaker) => speaker.name).join(', ')
    } else {
      altText = imageAlt ?? ''
    }
    return altText
  }
  return (
    <div className={`${speakers.length ? 'schedule-card-image' : 'schedule-card-icon'}`}>
      {speakers.length ? (
        speakers.map((speaker, index) => {
          const borderRadiusStyle = {
            borderTopLeftRadius: index === 0 ? '10px' : '0',
            borderBottomLeftRadius: index === 0 ? '10px' : '0',
            borderTopRightRadius: index === speakers.length - 1 ? '10px' : '0',
            borderBottomRightRadius:
              index === speakers.length - 1 ? '10px' : '0',
          }

          return (
            <img
              key={`speakerCardImage${index}`}
              style={{
                width: `${100 / speakers.length}%`,
                ...borderRadiusStyle,
              }}
              aria-hidden={`${!!imageAriaHidden}`}
              src={`${import.meta.env.BASE_URL}palestrantes/${speaker.image}`}
              alt={getAltText()}
            />
          )
        })
      ) : (
        <div
          className={`schedule-card-icon ${
            image!.substring(image!?.lastIndexOf('.') + 1) === 'svg'
              ? `svg ${image!.substring(0, image!.lastIndexOf('.'))}`
              : ''
          }`}
        >
          <img
            aria-hidden={`${!!imageAriaHidden}`}
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={getAltText()}
          />
        </div>
      )}
    </div>
  )
}
