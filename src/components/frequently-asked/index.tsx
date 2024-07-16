import './styles.scss'
import questionMark from '../../assets/question-mark.png'
import questionMark2 from '../../assets/question-mark2.png'
import colapseIcon from '../../assets/colapse-icon.png'

const questions = [
  {
    title: 'O que é o Accessibility Day?',
  },
  {
    title: 'Funcionários BB - Vai valer como hora de treinamento?',
  },
  {
    title: 'Quem pode participar do evento?',
  },
  {
    title: 'Vou receber certificado?',
  },
  {
    title: 'Quem pode enviar palestra para o evento?',
  },
  {
    title: 'Ainda tenho dúvidas, como falo com vocês?',
  },
  {
    title: 'Onde será o evento?',
  },
]

interface questionProps {
  title: string
}

export default function FrequentlyAsked() {
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
        {questions.map((question) => (
          <Question title={question.title} />
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
