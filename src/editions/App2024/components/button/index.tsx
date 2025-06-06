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
  disabled = false
}: ButtonProps) {
  const allClassNames = `bb-button ${kind} size-${size} ${className} ${
    fullWidth ? 'full-width' : ''
  }`
  if (href) {
    return (
      <a
        target="_blank"
        href={href}
        className={allClassNames}
        aria-label={ariaLabel || title}
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
