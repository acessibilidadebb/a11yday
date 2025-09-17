import './scheduleCardImage.scss'

import { ScheduleCardImageProps } from '../types'
import { Speaker } from '../../../types/speakers'

function SpeakerImage({
  speaker,
  width,
  ariaHidden,
  alt,
}: {
  speaker: Speaker
  width: string
  ariaHidden: boolean
  alt: string
}) {
  return (
    <img
      style={{ width }}
      aria-hidden={ariaHidden}
      src={`${import.meta.env.BASE_URL}palestrantes/2025/${speaker.image}`}
      alt={alt}
    />
  )
}

export default function ScheduleCardImage(props: ScheduleCardImageProps) {
  const { speakers, confirmed, image, imageAlt, imageAriaHidden } = props
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
    <div
      className={`${
        speakers.length && !image?.trim()
          ? 'schedule-card-image'
          : 'schedule-card-icon'
      }`}
    >
      {confirmed ? (
        <>
          {image ? (
            <img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={getAltText()}
              aria-hidden={`${!!imageAriaHidden || !confirmed}`}
            />
          ) : speakers.length > 0 && speakers.length <= 3 ? (
            speakers.map((speaker, index) => {
              const borderRadiusStyle = {
                borderTopLeftRadius: index === 0 ? '10px' : '0',
                borderBottomLeftRadius: index === 0 ? '10px' : '0',
                borderTopRightRadius:
                  index === speakers.length - 1 ? '10px' : '0',
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
                  aria-hidden={`${!!imageAriaHidden || !confirmed}`}
                  src={`${import.meta.env.BASE_URL}palestrantes/2025/${
                    speaker.image
                  }`}
                  alt={getAltText()}
                />
              )
            })
          ) : speakers.length >= 4 ? (
            (() => {
              const firstRow = speakers.slice(0, Math.ceil(speakers.length / 2))
              const secondRow = speakers.slice(Math.ceil(speakers.length / 2))
              return (
                <div className="speakers-multi-row">
                  <div className="speakers-row">
                    {firstRow.map((speaker, index) => (
                      <SpeakerImage
                        key={`speakerCardImage-row1-${index}`}
                        speaker={speaker}
                        width={`${100 / firstRow.length}%`}
                        ariaHidden={!!imageAriaHidden || !confirmed}
                        alt={getAltText()}
                      />
                    ))}
                  </div>
                  <div className="speakers-row">
                    {secondRow.map((speaker, index) => (
                      <SpeakerImage
                        key={`speakerCardImage-row2-${index}`}
                        speaker={speaker}
                        width={`${100 / secondRow.length}%`}
                        ariaHidden={!!imageAriaHidden || !confirmed}
                        alt={getAltText()}
                      />
                    ))}
                  </div>
                </div>
              )
            })()
          ) : (
            <div
              className={`schedule-card-icon ${
                image && image.substring(image.lastIndexOf('.') + 1) === 'svg'
                  ? `svg ${image.substring(0, image.lastIndexOf('.'))}`
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
        </>
      ) : (
        <img
          className="blank-profile"
          src="blank-profile.png"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
