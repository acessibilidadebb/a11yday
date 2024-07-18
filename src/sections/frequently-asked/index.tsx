import { useState } from 'react'
import './styles.scss'
import questionMark from '../../assets/question-mark.png'
import questionMark2 from '../../assets/question-mark2.png'
import { Accordion } from '../../components/accordion'
import questions from './questions.json'

interface FrequentlyAskedProps {
  setShowSections: React.Dispatch<React.SetStateAction<boolean>>
  showFrequentlyAsked: boolean
  setShowFrequentlyAsked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FrequentlyAsked({
  setShowSections,
  showFrequentlyAsked,
  setShowFrequentlyAsked,
}: FrequentlyAskedProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }
  return (
    <section
      id="frequently-asked-questions"
      className={`frequently-asked ${showFrequentlyAsked ? 'open' : ''}`}
    >
      <header>
        <img src={questionMark} alt="Ponto de Interrogação" />
        <h2>Dúvidas Frequentes</h2>
      </header>
      <div className="frequently-asked-body">
        {questions.map((question, index) => (
          <div className="accordion-container" key={index}>
            <Accordion
              title={question.title}
              description={question.description}
              isOpen={index === openAccordion}
              onToggle={() => toggleAccordion(index)}
            />
          </div>
        ))}
      </div>
      <div className="watermark">
        <img
          src={questionMark2}
          alt="Marca d'água ponto de interrogação grande na cor "
        />
      </div>
    </section>
  )
}
