import { useState } from 'react'
import './styles.scss'
import questionMark from '../../assets/question-mark.png'
import questionMark2 from '../../assets/question-mark2.png'
import { Accordion } from '../../components/accordion'
import faq from './faq.json'
import { FrequentlyAskedProps } from './types'

export default function FrequentlyAsked({
  showFrequentlyAsked,
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
        <img
          src={questionMark}
          alt="Ponto de Interrogação"
          aria-hidden="true"
        />
        <h2>Dúvidas Frequentes</h2>
      </header>
      <div className="frequently-asked-body">
        {faq.map((question, index) => (
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
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
