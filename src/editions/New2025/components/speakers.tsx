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
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
    >
      <img
        src={speaker.img}
        alt={speaker.name}
        className="w-full h-40 object-cover object-top"
      />
      <div className="p-3">
        <h3 className="font-medium text-sm">{speaker.name}</h3>
        <p className="text-xs text-gray-600">{speaker.role}</p>
        <button
          className="mt-2 text-xs text-primary hover:underline whitespace-nowrap speaker-details-btn"
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
      <section className="py-8 px-4 bg-pink-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Palestrantes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
