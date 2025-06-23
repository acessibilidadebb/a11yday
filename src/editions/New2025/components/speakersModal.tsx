import { useEffect, useRef, useState } from 'react'
import { SpeakerModalProps } from '../types/types'

export default function SpeakersModal({
  isOpen,
  onClose,
  speaker,
}: SpeakerModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [focusTrapStart, setFocusTrapStart] = useState<HTMLDivElement | null>(null)
  const [focusTrapEnd, setFocusTrapEnd] = useState<HTMLDivElement | null>(null)
  const [lastFocus, setLastFocus] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      setLastFocus(document.activeElement as HTMLElement)
      document.body.classList.add('has-dialog')
      document.body.style.overflow = 'hidden'
      document.body.style.pointerEvents = 'none'

      // Cria elementos de trap de foco
      const preDiv = document.createElement('div')
      const postDiv = document.createElement('div')
      preDiv.tabIndex = 0
      postDiv.tabIndex = 0

      if (dialogRef.current) {
        dialogRef.current.parentNode?.insertBefore(preDiv, dialogRef.current)
        dialogRef.current.parentNode?.insertBefore(postDiv, dialogRef.current.nextSibling)
        setFocusTrapStart(preDiv)
        setFocusTrapEnd(postDiv)
      }

      setTimeout(() => {
        closeBtnRef.current?.focus()
      }, 5)

      document.addEventListener('focus', trapFocus, true)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.classList.remove('has-dialog')
        document.body.style.overflow = ''
        document.body.style.pointerEvents = ''
        focusTrapStart?.remove()
        focusTrapEnd?.remove()
        document.removeEventListener('focus', trapFocus, true)
        document.removeEventListener('keydown', handleKeyDown)
        if (lastFocus) {
          lastFocus.focus()
        }
      }
    }
    // eslint-disable-next-line
  }, [isOpen])

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
    } catch (e) {}
    return document.activeElement === element
  }

  const isFocusable = (element: HTMLElement) => {
    if (element.tabIndex < 0) return false
    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLButtonElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement
    ) {
      if (element.disabled) return false
    }
    switch (element.nodeName) {
      case 'A':
        return !!(element as HTMLAnchorElement).href && (element as HTMLAnchorElement).rel !== 'ignore'
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
        if (!dialogRef.current?.contains(event.target as Node)) {
          focusFirstDescendant(dialogRef.current as HTMLElement)
          if (document.activeElement === lastFocus) {
            focusLastDescendant(dialogRef.current as HTMLElement)
          }
          setLastFocus(document.activeElement as HTMLElement)
        }
      }
    }
  }

  const handleKeyDown: EventListener = (event: Event) => {
    if (event instanceof KeyboardEvent) {
      if (isOpen && dialogRef.current) {
        switch (event.key) {
          case 'Escape':
            onClose()
            break
          default:
            break
        }
      }
    }
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const LinkedinLink = () => (
    <a
      href={speaker!.linkedin}
      id="speakerLinkedin"
      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition"
    >
      <i className="ri-linkedin-fill text-gray-700" />
    </a>
  )

  const TwitterLink = () => (
    <a
      href={speaker!.twitter}
      id="speakerTwitter"
      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition"
    >
      <i className="ri-twitter-x-fill text-gray-700" />
    </a>
  )

  const WebsiteLink = () => (
    <a
      href={speaker!.website}
      id="speakerWebsite"
      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition"
    >
      <i className="ri-global-line text-gray-700" />
    </a>
  )

  const Expertise = () => (
    <div>
      <h4 className="font-medium text-gray-800 mb-2">Especialização</h4>
      <p id="speakerModalExpertise" className="text-gray-600 leading-normal">
        {speaker!.expertise}
      </p>
    </div>
  )

  const Bio = () => (
    <div>
      <h4 className="font-medium text-gray-800 mb-2 leading-normal">
        Biografia
      </h4>
      <p id="speakerModalBio" className="text-gray-600 leading-normal">
        {speaker!.bio}
      </p>
    </div>
  )

  const TalksInTheEvent = () => (
    <div>
      <h4 className="font-medium text-gray-800 mb-2">Palestras no Evento</h4>
      <ul
        id="speakerModalTalks"
        className="list-disc list-inside text-gray-600 leading-normal"
      >
        {speaker!.talks.map((talk, index) => (
          <li key={index}>{talk}</li>
        ))}
      </ul>
    </div>
  )

  const RelevantPublications = () => (
    <div>
      <h4 className="font-medium text-gray-800 mb-2">Publicações Relevantes</h4>
      <ul
        id="speakerModalPublications"
        className="list-disc list-inside text-gray-600 leading-normal"
      >
        {speaker!.publications.map((publication, index) => (
          <li key={index}>{publication}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div
      id="speakerModal"
      ref={dialogRef}
      className={`fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 ${isOpen ? 'flex' : 'hidden'}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      aria-labelledby="speakerModalName"
      aria-describedby="speakerModalBio"
    >
      <div
        className="bg-white rounded-lg w-full max-w-3xl mx-4 relative"
        role="document"
      >
        <div className="p-6">
          <button
            id="closeSpeakerModal"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="Fechar Modal"
            ref={closeBtnRef}
          >
            <i className="ri-close-line text-xl" />
          </button>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                id="speakerModalImage"
                src={speaker!.img}
                alt="Speaker"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex justify-center space-x-4 mt-4">
                {speaker!.linkedin && <LinkedinLink />}
                {speaker!.twitter && <TwitterLink />}
                {speaker!.website && <WebsiteLink />}
              </div>
            </div>
            <div className="md:w-2/3">
              <h3
                id="speakerModalName"
                className="text-2xl font-bold text-gray-800 mb-2 leading-normal"
              >
                {speaker!.name}
              </h3>
              <p
                id="speakerModalTitle"
                className="text-primary font-medium mb-4 leading-normal"
              >
                {speaker!.role}
              </p>
              <div className="space-y-4">
                <Bio />
                <Expertise />
                {speaker!.talks.length > 0 && <TalksInTheEvent />}
                {speaker!.publications.length > 0 && <RelevantPublications />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
