import { useState } from 'react'
import './frequently-asked.scss'
import questionMark from '../../assets/question-mark.png'
import questionMark2 from '../../assets/question-mark2.png'
import { Accordion } from '../../components/accordion'
import faq from '../../json/faq.json'
import { convertEmailsToLinks } from '../../utils/stringFunctions'
import { FrequentlyAskedProps } from './types'

export default function FrequentlyAsked({
  showFrequentlyAsked,
}: FrequentlyAskedProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }
  const emailSubject = 'Accessibility Day 2024: Dúvidas e Esclarecimentos'
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
        <div className="accordion-container">
          {faq.slice(0, Math.ceil(faq.length / 2)).map((question, index) => (
            <Accordion
              key={index}
              title={question.title}
              description={convertEmailsToLinks({
                text: question.description,
                subject: emailSubject,
              })}
              isOpen={index === openAccordion}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
        <div className="accordion-container">
          {faq.slice(Math.ceil(faq.length / 2)).map((question, index) => (
            <Accordion
              key={index + Math.ceil(faq.length / 2)}
              title={question.title}
              description={convertEmailsToLinks({
                text: question.description,
                subject: emailSubject,
              })}
              isOpen={index + Math.ceil(faq.length / 2) === openAccordion}
              onToggle={() =>
                toggleAccordion(index + Math.ceil(faq.length / 2))
              }
            />
          ))}
        </div>
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
