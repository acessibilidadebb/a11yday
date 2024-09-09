import './primer.scss'
import { PrimerSectionProps } from './types'
import Button from '../../components/button'

export default function Primer({ setPage }: PrimerSectionProps) {
  const handleClickBack = () => {
    setPage('primer')
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }
  return (
    <div className="primer-section">
      <div className="primer-section-cover-container">
        <img
          className="primer-section-cover"
          src="primer-cover.png"
          alt="Capa da sessão Cartilha Atitudes Acessíveis"
        />
      </div>
      <div className="primer-section-container">
        <div className="primer-section-content">
          <h3 className="primer-section-title">
            Acesse nossa Cartilha Atitudes Acessíveis
          </h3>
          <p className="primer-section-description">
            Leia sobre boas práticas de acessibilidade, texto a definir com a
            Viviane. Leia sobre boas práticas de acessibilidade, texto a definir
            com a Viviane.{' '}
          </p>
          <Button
            type="button"
            onClick={handleClickBack}
            title="Acessar Cartilha"
          />
        </div>
      </div>
    </div>
  )
}
