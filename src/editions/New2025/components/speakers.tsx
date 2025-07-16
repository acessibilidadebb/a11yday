import { useRef, useState } from 'react'
import SpeakersModal from './speakersModal'
import { Speaker } from '../types/types'
import speakersData from '../speakers.json'

const speakers: Speaker[] = speakersData as Speaker[]

export default function Speakers() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)
  const saibaMaisBtnRef = useRef<Array<HTMLButtonElement | null>>([])
  const [lastBtnIndex, setLastBtnIndex] = useState<number | null>(null)

  const Speaker = ({ speaker, index }: { speaker: Speaker; index: number }) => (
    <div
      key={speaker.id}
      className="tw-bg-white tw-rounded-lg tw-overflow-hidden tw-shadow-sm hover:tw-shadow-md tw-transition"
    >
      <img
        src={speaker.img}
        alt={speaker.name}
        className="tw-w-full tw-h-40 tw-object-cover tw-object-top"
      />
      <div className="tw-p-3">
        <h3 className="tw-font-medium tw-text-sm">{speaker.name}</h3>
        <p className="tw-text-xs tw-text-gray-600">{speaker.role}</p>
        <button
          className="tw-mt-2 tw-text-xs tw-text-primary hover:tw-underline tw-whitespace-nowrap speaker-details-btn"
          data-speaker-id={speaker.id}
          onClick={() => handleSpeakerClick(speaker, index)}
          ref={(el) => (saibaMaisBtnRef.current[index] = el)}
        >
          Saiba mais
        </button>
      </div>
    </div>
  )

  const handleSpeakerClick = (speaker: Speaker, index: number) => {
    setSelectedSpeaker(speaker)
    setOpenModal(true)
    setLastBtnIndex(index)
  }

  const closeModal = () => {
    setOpenModal(false)
    setSelectedSpeaker(null)
    if (lastBtnIndex !== null) {
      setTimeout(() => {
        saibaMaisBtnRef.current[lastBtnIndex]?.focus()
      }, 0)
    }
  }

  return (
    <>
      <section className="tw-py-8 tw-px-4 tw-bg-pink-50">
        <div className="tw-container tw-mx-auto">
          <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800 tw-mb-6">
            Palestrantes
          </h2>
          <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-5 tw-gap-4">
            {speakers.map((speaker, idx) => (
              <Speaker speaker={speaker} index={idx} key={speaker.id} />
            ))}
          </div>
        </div>
      </section>
      {!!openModal && selectedSpeaker && (
        <SpeakersModal
          isOpen={openModal}
          onClose={closeModal}
          speaker={selectedSpeaker}
        />
      )}
    </>
  )
}
