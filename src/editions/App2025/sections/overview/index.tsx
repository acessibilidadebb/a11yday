import './overview.scss'
import lowVision from '../../../../assets/low-vision.png'
import signLanguage from '../../../../assets/sign-language.png'
import signLanguageBig from '../../../../assets/sign-language-big.png'
import braile from '../../../../assets/braile.png'
import bilateralDeafness from '../../../../assets/bilateral-deafness.png'

interface OverviewProps {
  style?: React.CSSProperties
}

export default function Overview({ style }: OverviewProps) {
  return (
    <section className="overview-section" style={style}>
      <div>
        <h2>
          <p>Vem aí Accessibility Day 2025</p>
          <p>Acessibilidade Digital: A gente se Importa!</p>
        </h2>
        <div className="decorative-icons">
          <img
            aria-hidden="true"
            className="decorative-icon low-vision"
            src={lowVision}
            alt="Ícone de Baixa Visão"
          />
          <img
            aria-hidden="true"
            className="decorative-icon sign-language"
            src={signLanguage}
            alt="Ícone de Linguagem de Sinais"
          />
          <img
            aria-hidden="true"
            className="decorative-icon braile"
            src={braile}
            alt="Ícone de Braile"
          />
          <img
            aria-hidden="true"
            className="decorative-icon bilateral-deafness"
            src={bilateralDeafness}
            alt="Ícone de Surdez Bilateral"
          />
        </div>
        <div className="overview-details">
          <p className="hightlight">24/09 - Feira de exposição e vivências (braile e libras)</p>
          <p className="hightlight">25/09 - Feira de exposição e palestras (transmissão ao vivo Youtube e presencial)</p>
          <p className="hightlight">Local: Edifício BB Brasília/DF</p>
        </div>
      </div>
      <div className="overview-background-detail">
        <div className="overview-icons">
          <img
            aria-hidden="true"
            className="overview-icon"
            src={signLanguageBig}
            alt="Ícone de Linguagem de Sinais"
          />
        </div>
        <div className="circles">
          <div className="big-circle" />
          <div className="medium-circle" />
          <div className="small-circle" />
          <div className="mini-circle" />
        </div>
      </div>
    </section>
  )
}
