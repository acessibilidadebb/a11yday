import { HashLink as Link } from 'react-router-hash-link'
import './primer.scss'
import { PrimerSectionProps } from './types'

export default function Primer({ setShowHandbook }: PrimerSectionProps) {
  console.clear()
  console.log(setShowHandbook)
  const handleClickHandbook = () => {
    setShowHandbook(true)
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
          accessibility-label="Capa da sessão Cartilha Atitudes Acessíveis"
        />
      </div>
      <div className="primer-section-container">
        <div className="primer-section-content">
          <h3 className="primer-section-title">
            Acesse nossa Cartilha Atitudes Acessíveis
          </h3>
          <p className="primer-section-description">
            Leia sobre boas práticas de acessibilidade
          </p>
          <Link
            to="/accessible-attitudes-handbook"
            className="bb-button primary size-regular  "
            onClick={handleClickHandbook}
            title="Acessar Cartilha"
            accessibility-label="Acessar Cartilha"
          >
            Acessar Cartilha
          </Link>
        </div>
      </div>
    </div>
  )
}
