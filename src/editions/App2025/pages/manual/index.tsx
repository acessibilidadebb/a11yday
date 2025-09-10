import './manual.scss'
import LinkNav from '../../components/linkNav'
import ScrollUp from '../../components/scrollUp'

type ManualProps = {
  setPage?: React.Dispatch<React.SetStateAction<string>>
  resetSections: () => void
}

export default function Manual({ resetSections }: ManualProps) {
  const handleClick = () => {
    resetSections()
  }

  return (
    <div className="manual-container">
      <main className="manual-content">
        <LinkNav href="/" link={true} title="Voltar" onClick={handleClick} icon="back" />
        <header>
          <h3 id="manual-title" className="manual-title">
            Manual de boas práticas de Inclusão e diversidade e Manual de Liderança inclusiva
          </h3>
          <img
            className="manual-cover"
            src="manual-cover.png"
            alt="Capa do Manual de boas práticas de Inclusão e diversidade e Manual de Liderança inclusiva"
            accessibility-label="Capa do Manual de boas práticas de Inclusão e diversidade e Manual de Liderança inclusiva"
          />
        </header>
        <div id="manual-description">
          <p className="manual-paragraph">
            Este manual traz orientações práticas para promover a inclusão de pessoas com deficiência no ambiente corporativo. Adapte o conteúdo conforme sua necessidade!
          </p>
        </div>
        {/* Adicione seções e conteúdo conforme desejar */}
        <LinkNav
          className="link-download"
          title="Download do Manual (Conteúdo Externo)"
          icon="download"
          href="/manual-inclusao.pdf"
          target="_blank"
        />
      </main>
      <ScrollUp />
    </div>
  )
}
