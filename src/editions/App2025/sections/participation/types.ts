export type ButtonType = {
  title: string
  url: string
  disabled?: boolean
}

export type ParticipationBackground =
  | 'watch-background'
  | 'enrollment-background'

export interface ParticipationData {
  background: ParticipationBackground
  title: string
  subtitle: string
  buttons: ButtonType[],
  afterButtonText?: string
}

export interface ParticipationProps extends ParticipationData {
  style?: React.CSSProperties
}
