import React from 'react'
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
  subtitle?: string 
  subtitleHtml?: TrustedHTML[]
  buttons: ButtonType[]
  afterButtonText?: string
  alignButtons?: string
}

export interface ParticipationProps extends ParticipationData {
  style?: React.CSSProperties
}
