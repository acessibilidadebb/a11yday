import './fairCardImage.scss'

import { FairCardImageProps } from '../types'

export default function FairCardImage(props: FairCardImageProps) {
  const { image, imageAriaHidden } = props
  return (
    <div className="fair-card-icon">
      <img
        src={`${import.meta.env.BASE_URL}${image}`}
        aria-hidden={`${!!imageAriaHidden}`}
      />
    </div>
  )
}
