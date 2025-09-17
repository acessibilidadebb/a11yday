import './manual.scss'
import LinkNav from '../../components/linkNav'
import ScrollUp from '../../components/scrollUp'

export default function Manual() {
  return (
    <section className="manual-container">
      <main className="manual-content">
        <header>
          <h3 className="manual-title" id="manual-title">
            Manual de boas práticas de inclusão e diversidade e manual de boas
            práticas para liderança inclusiva
          </h3>
          <img
            className="manual-cover"
            src="manual-cover.png"
            alt="Capa da sessão Manual de boas práticas de inclusão e diversidade e manual de boas práticas para liderança inclusiva"
            aria-label="Capa da sessão Manual de boas práticas para liderança inclusiva"
          />
        </header>

        <div id="manual-description">
          <div className="manual-paragraph">
            O <strong>Manual de Boas Práticas em Liderança Inclusiva</strong> é
            um guia elaborado pelo Banco do Brasil que oferece sugestões
            práticas para apoiar líderes na construção de ambientes inclusivos,
            inovadores e acolhedores. Com foco em práticas voltadas para pessoas
            com deficiência (PcD) e neurodivergentes, o material é aplicável a
            todas as áreas da organização, não se restringindo apenas ao setor
            de tecnologia.
          </div>
          <LinkNav
            className="link-download"
            title="Download do Manual de Boas Práticas em Liderança Inclusiva"
            icon="download"
            href="/ManualBoasPráticas_LiderançaInclusiva_Público_V1.0.pdf"
            target="_blank"
          />
          <div className="manual-paragraph">
            O <strong>Manual de Boas Práticas em Inclusão e Diversidade</strong>
            também foi desenvolvido pelo Banco do Brasil e reúne orientações
            práticas para acolher e apoiar pessoas com deficiência e
            neurodivergentes no ambiente de trabalho. Seu objetivo é promover a
            valorização das individualidades, a equidade e o pertencimento,
            contribuindo para uma cultura organizacional mais humana e diversa.
          </div>
          <LinkNav
            className="link-download"
            title="Download do Manual de Boas Práticas em Inclusão e Diversidade"
            icon="download"
            href="/ManualBoasPráticas_Inclusão&Diversidade_Funcionários__Público_V1.0.pdf"
            target="_blank"
          />

          <div className="manual-paragraph">
            Ambos os materiais são fruto de uma construção colaborativa e estão
            disponíveis para uso por outras organizações interessadas em
            fortalecer suas práticas de inclusão. Contribuições e sugestões
            podem ser enviadas para o e-mail: &nbsp;
            <a href="mailto:incluamaisti@bb.com.br">incluamaisti@bb.com.br</a>.
          </div>
        </div>
      </main>
      <ScrollUp />
    </section>
  )
}
