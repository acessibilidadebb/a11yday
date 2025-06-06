export type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'critical-primary'
  | 'critical-secondary'

export type ButtonType = 'button' | 'submit' | 'reset'

export type ButtonSize = 'xsmall' | 'small' | 'regular' | 'large'

export interface ButtonProps {
  className?: string
  kind?: ButtonKind
  href?: string
  type?: ButtonType
  title: string
  ariaLabel?: string
  size?: ButtonSize
  fullWidth?: boolean
  onClick?: () => void
  disabled?: boolean
}
