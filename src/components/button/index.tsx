import './button.scss'

type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'critical-primary'
  | 'critical-secondary'

type ButtonType = 'button' | 'submit' | 'reset'

type ButtonSize = 'xsmall' | 'small' | 'regular' | 'large'

interface ButtonProps {
  className?: string
  kind?: ButtonKind
  href?: string
  type?: ButtonType
  title: string
  ariaLabel?: string
  size?: ButtonSize
  fullWidth?: boolean
}

export default function Button({
  className = '',
  kind = 'primary',
  href,
  type = 'button',
  title = '',
  ariaLabel,
  size = 'regular',
  fullWidth = false,
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
    >
      {title}
    </button>
  )
}
