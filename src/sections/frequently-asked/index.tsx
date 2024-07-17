import './styles.scss'
import questionMark from '../../assets/question-mark.png'
import questionMark2 from '../../assets/question-mark2.png'
import colapseIcon from '../../assets/collapse-icon.png'
import { Accordion } from '../../components/accordion'
import { useState } from 'react'

const questions = [
  {
    title: 'O que é o Accessibility Day?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam, voluptas expedita sit dolorem deleniti molestias vitae, doloribus voluptatum quasi, beatae dolorum? Atque esse fuga praesentium, itaque alias sunt laboriosam!',
  },
  {
    title: 'Funcionários BB - Vai valer como hora de treinamento?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam, voluptas expedita sit dolorem deleniti molestias vitae, doloribus voluptatum quasi, beatae dolorum? Atque esse fuga praesentium, itaque alias sunt laboriosam!',
  },
  {
    title: 'Quem pode participar do evento?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam, voluptas expedita sit dolorem deleniti molestias vitae, doloribus voluptatum quasi, beatae dolorum? Atque esse fuga praesentium, itaque alias sunt laboriosam!',
  },
  {
    title: 'Vou receber certificado?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam, voluptas expedita sit dolorem deleniti molestias vitae, doloribus voluptatum quasi, beatae dolorum? Atque esse fuga praesentium, itaque alias sunt laboriosam!',
  },
  {
    title: 'Quem pode enviar palestra para o evento?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam, voluptas expedita sit dolorem deleniti molestias vitae, doloribus voluptatum quasi, beatae dolorum? Atque esse fuga praesentium, itaque alias sunt laboriosam!',
  },
  {
    title: 'Ainda tenho dúvidas, como falo com vocês?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam, voluptas expedita sit dolorem deleniti molestias vitae, doloribus voluptatum quasi, beatae dolorum? Atque esse fuga praesentium, itaque alias sunt laboriosam!',
  },
  {
    title: 'Onde será o evento?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam, voluptas expedita sit dolorem deleniti molestias vitae, doloribus voluptatum quasi, beatae dolorum? Atque esse fuga praesentium, itaque alias sunt laboriosam!',
  },
]

interface questionProps {
  title: string
}

export default function FrequentlyAsked() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const Question = ({ title }: questionProps) => {
    return (
      <div className="question">
        <p>{title}</p>
        <button className="collapse-btn" aria-label="Expandir">
          <img src={colapseIcon} alt="Ícone para colapsar conteúdo" />
        </button>
      </div>
    )
  }
  return (
    <section className="frequently-asked">
      <header>
        <img src={questionMark} alt="Ponto de Interrogação" />
        <h3>Dúvidas Frequentes</h3>
      </header>
      <div className="frequently-asked-body">
        {questions.map((question, index) => (
          <Accordion
            key={index}
            title={question.title}
            description={question.description}
            isOpen={index === openAccordion}
            onToggle={() => toggleAccordion(index)}
          />
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
