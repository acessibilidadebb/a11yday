import { SpeakersTitleProps } from '../types'

export function SpeakersTitle({ speakers }: SpeakersTitleProps) {
  let speakersTitle = ''
  let speakersCompany = ''
  if (Array.isArray(speakers) && speakers.length) {
    speakersTitle += speakers
      .map((speaker) => speaker.nickname.length ? speaker.nickname : speaker.name)
      .filter((str) => str !== '')
      .join(' & ')
    const speakerCompanies = speakers
      .map((speaker) => speaker.company)
      .filter((str) => str !== '')
    speakersCompany = speakerCompanies
      .filter((item, index) => speakerCompanies.indexOf(item) === index)
      .join(' & ')
  }
  return (
    <>
      {speakersTitle && <h4 className="name">{speakersTitle}</h4>}
      <p className="company">{speakersCompany}</p>
    </>
  )
}
