import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import closeBtn from '../../assets/close.png'
import { ModalProps } from './types'

export default function Modal({
  isOpen,
  onClose,
  children,
  focusAfterClosed,
  focusFirst,
  titleId,
  descriptionId,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [focusTrapStart, setFocusTrapStart] = useState<HTMLDivElement | null>(
    null
  )
  const [focusTrapEnd, setFocusTrapEnd] = useState<HTMLDivElement | null>(null)
  const [lastFocus, setLastFocus] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      setLastFocus(document.activeElement as HTMLElement)
      document.body.classList.add('has-dialog')

      // Create focus trap elements
      const preDiv = document.createElement('div')
      const postDiv = document.createElement('div')
      preDiv.tabIndex = 0
      postDiv.tabIndex = 0

      if (modalRef.current) {
        modalRef.current.parentNode?.insertBefore(preDiv, modalRef.current)
        modalRef.current.parentNode?.insertBefore(
          postDiv,
          modalRef.current.nextSibling
        )
        setFocusTrapStart(preDiv)
        setFocusTrapEnd(postDiv)
      }

      const focusFirstElement =
        typeof focusFirst === 'string'
          ? document.getElementById(focusFirst)
          : focusFirst

      if (focusFirstElement) {
        focusFirstElement.focus()
      } else if (modalRef.current) {
        focusFirstDescendant(modalRef.current)
      }

      document.addEventListener('focus', trapFocus, true)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.classList.remove('has-dialog')
        focusTrapStart?.remove()
        focusTrapEnd?.remove()
        document.removeEventListener('focus', trapFocus, true)
        document.removeEventListener('keydown', handleKeyDown)
        if (focusAfterClosed) {
          focusAfterClosed.focus()
        }
      }
    }
  }, [isOpen, focusAfterClosed, focusFirst])

  const focusFirstDescendant = (element: HTMLElement) => {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i] as HTMLElement
      if (attemptFocus(child) || focusFirstDescendant(child)) {
        return true
      }
    }
    return false
  }

  const focusLastDescendant = (element: HTMLElement) => {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      const child = element.childNodes[i] as HTMLElement
      if (attemptFocus(child) || focusLastDescendant(child)) {
        return true
      }
    }
    return false
  }

  const attemptFocus = (element: HTMLElement) => {
    if (!isFocusable(element)) {
      return false
    }

    try {
      element.focus()
    } catch (e) {
      // Continue regardless of error
    }
    return document.activeElement === element
  }

  const isFocusable = (element: HTMLElement) => {
    if (element.tabIndex < 0) {
      return false
    }

    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLButtonElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement
    ) {
      if (element.disabled) {
        return false
      }
    }

    switch (element.nodeName) {
      case 'A':
        return (
          !!(element as HTMLAnchorElement).href &&
          (element as HTMLAnchorElement).rel !== 'ignore'
        )
      case 'INPUT':
        return (element as HTMLInputElement).type !== 'hidden'
      case 'BUTTON':
      case 'SELECT':
      case 'TEXTAREA':
        return true
      default:
        return false
    }
  }

  const trapFocus: EventListener = (event: Event) => {
    if (event instanceof FocusEvent) {
      if (event.target === document.activeElement) {
        if (!modalRef.current?.contains(event.target as Node)) {
          focusFirstDescendant(modalRef.current as HTMLElement)
          if (document.activeElement === lastFocus) {
            focusLastDescendant(modalRef.current as HTMLElement)
          }
          setLastFocus(document.activeElement as HTMLElement)
        }
      }
    }
  }

  const handleKeyDown: EventListener = (event: Event) => {
    if (event instanceof KeyboardEvent) {
      if (isOpen && modalRef.current) {
        console.log(event.key)
        switch (event.key) {
          case 'ArrowUp':
            // Handle ArrowUp
            break
          case 'ArrowDown':
            // Handle ArrowDown
            break
          case 'ArrowLeft':
            // Handle ArrowLeft
            break
          case 'ArrowRight':
            // Handle ArrowRight
            break
          case 'Escape':
            onClose()
            break
          default:
            break
        }
      }
    }
  }

  const handleClose = () => {
    onClose()
  }

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`dialog-backdrop ${isOpen ? 'active' : ''}`}
      role="dialog"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClick={handleOverlayClick}
    >
      <div
        role="document"
        className="default_dialog"
        ref={modalRef}
        tabIndex={-1}
      >
        <button
          type="button"
          onClick={handleClose}
          className="close-modal-btn"
          title="Fechar"
          aria-label="Fechar"
        >
          <img src={closeBtn} alt="Ícone de Fechar" />
        </button>
        {children}
      </div>
    </div>
  )
}
