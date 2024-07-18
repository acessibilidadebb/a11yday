import './styles.scss'
import lowVision from '../../assets/low-vision.png'
import signLanguage from '../../assets/sign-language.png'
import signLanguageBig from '../../assets/sign-language-big.png'
import braile from '../../assets/braile.png'
import bilateralDeafness from '../../assets/bilateral-deafness.png'

interface OverviewProps {
  style?: React.CSSProperties;
}

export default function Overview({style}: OverviewProps) {
  return (
    <section className="overview-section" style={style}>
      <div>
        <div className="decorative-icons">
          <img
            className="decorative-icon low-vision"
            src={lowVision}
            alt="Ícone de Baixa Visão"
          />
          <img
            className="decorative-icon sign-language"
            src={signLanguage}
            alt="Ícone de Linguagem de Sinais"
          />
          <img
            className="decorative-icon braile"
            src={braile}
            alt="Ícone de Braile"
          />
          <img
            className="decorative-icon bilateral-deafness"
            src={bilateralDeafness}
            alt="Ícone de Surdez Bilateral"
          />
        </div>
        <h2>O Evento de Acessibilidade Digital do Banco do Brasil</h2>
        <div className="overview-details">
          <p className="hightlight">Presencial em Brasília</p>
          <p className="hightlight">11 de setembro de 2024</p>
          <p className="hightlight">Ao vivo pelo Youtube</p>
        </div>
      </div>
      <div className="overview-background-detail">
        <div className="overview-icons">
          <img
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
