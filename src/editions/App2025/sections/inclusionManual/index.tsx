import { Link } from 'react-router-dom'
import './inclusionManual.scss'
import { InclusionManualSectionProps } from './types'

export default function InclusionManual({
  setShowManual,
}: InclusionManualSectionProps) {
  const handleClickManual = () => {
    setShowManual(true)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }
  return (
    <div className="inclusion-manual-section">
      <div className="inclusion-manual-cover-container">
        <img
          className="inclusion-manual-cover"
          src="manual-cover.png"
          alt="Cover of the Inclusion Manual for People with Disabilities in Companies"
          accessibility-label="Cover of the Inclusion Manual for People with Disabilities in Companies"
        />
      </div>
      <div className="inclusion-manual-container">
        <div className="inclusion-manual-content">
          <h3 className="inclusion-manual-title">
            Acesse nosso Manual de boas práticas de inclusão e diversidade e
            manual de boas práticas para liderança inclusiva
          </h3>
          <p className="inclusion-manual-description">
            Leia sobre boas práticas de inclusão, diversidade e liderança
            inclusiva
          </p>
          <Link
            to="/inclusion-manual"
            className="bb-button primary size-regular"
            onClick={handleClickManual}
            title="Acessar Manual"
            accessibility-label="Acessar Manual"
          >
            Acessar Manual
          </Link>
        </div>
      </div>
    </div>
  )
}
