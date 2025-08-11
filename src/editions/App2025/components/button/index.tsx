import { MouseEvent } from 'react'
import './button.scss'
import { ButtonProps } from './types'

export default function Button({
  className = '',
  kind = 'primary',
  href,
  type = 'button',
  title = '',
  ariaLabel,
  size = 'regular',
  fullWidth = false,
  onClick,
  disabled = false,
}: ButtonProps) {
  const allClassNames = `bb-button ${kind} size-${size} ${className} ${
    fullWidth ? 'full-width' : ''
  }${disabled ? ' disabled' : ''}`

  const onAnchorCLick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault()
    }
  }

  if (href) {
    return (
      <a
        target="_blank"
        href={href}
        className={allClassNames}
        aria-label={ariaLabel || title}
        onClick={onAnchorCLick}
      >
        {title}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={allClassNames}
      title={title}
      aria-label={ariaLabel || title}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}
