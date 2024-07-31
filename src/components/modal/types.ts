import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
  focusAfterClosed?: HTMLElement
  focusFirst?: string | HTMLElement
  titleId: string
  descriptionId: string
}
