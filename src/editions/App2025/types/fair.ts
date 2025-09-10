type FairType = 'block' | 'talk'

export interface FairItemType {
  uuid: string
  type: FairType
  confirmed: boolean
  time: string
  title: string
  subtitle?: string
  description?: string
  summary?: string
  image?: string
  imageAlt?: string
  imageAriaHidden?: boolean
  imageBackground?: string,
  speakerIds?: string[]
  slide?: string
}
