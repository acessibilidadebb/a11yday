import './scheduleCardImage.scss'

import { ExperiencesCardImageProps } from '../types'

export default function ScheduleCardImage(props: ExperiencesCardImageProps) {
  const { image, imageAriaHidden } = props
  return (
    <div className="schedule-card-icon">
      <>
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            aria-hidden={`${!!imageAriaHidden}`}
          />
        
      </>
    </div>
  )
}
