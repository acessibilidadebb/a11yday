import './primer.scss'
import LinkNav from '../../components/linkNav'
import ScrollUp from '../../components/scrollUp'

type PrimerProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

export default function Primer({ setPage }: PrimerProps) {
  const handleClick = () => {
    setPage('home')
  }
  const handleDownload = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // e.preventDefault()
    // console.log('clicou')
  }

  return (
    <div className="primer-container">
      <main className="primer-content">
        <LinkNav title="Voltar" onClick={handleClick} icon="back" />
        <header>
          <h3 id="primer-title" className="primer-title">
            Cartilha Atitudes Acessíveis
          </h3>
          <img
            className="primer-cover"
            src="primer-cover.png"
            alt="Capa da sessão Cartilha Atitudes Acessíveis"
          />
        </header>
        <div id="primer-description">
          <p className="primer-paragraph">
            Nos destacamos em relação aos demais seres vivos porque vivemos em
            sociedade e interagimos uns com os outros. Essa interação torna a
            vida mais legal, né? Porém, muitos de nós possuímos características
            que necessitam de atitudes específicas para que essa troca aconteça
            e seja boa para todos. Você sabe quais atitudes deve ter para que
            isso aconteça?
          </p>
          <p className="primer-paragraph">
            Nessa cartilha, falaremos de algumas atitudes simples que vão te
            auxiliar para que, ao interagir com alguém que necessita dessa
            postura diferente, você possa ter aquela experiência show de bola
            com a pessoa. Bora aprender?
          </p>
          <p className="primer-paragraph">
            Atenção! O uso de um cordão com desenhos de girassóis indica que a
            pessoa tem uma deficiência que pode não ser percebida de imediato. A
            medida objetiva promover a conscientização e o respeito a direitos
            previstos, como atendimento prioritário. Ao visualizar um portador
            do cordão, saiba, portanto, que o indivíduo poderá precisar de uma
            ajuda extra, compreensão ou apenas mais tempo em tarefas do dia a
            dia.
          </p>
        </div>

        <h4 className="primer-subtitle">Deficiência auditiva</h4>
        <p className="primer-paragraph">
          A principal dificuldade para uma pessoa com deficiência auditiva é a
          comunicação social. Por isso, confira algumas dicas para que você
          aprenda a conversar com essas pessoas.
        </p>
        <p className="primer-paragraph">
          Para iniciar uma conversa, acene para ela ou toque levemente no seu
          braço. posicione-se de frente para a pessoa; isso vai facilitar a
          leitura labial.
        </p>
        <ol className="primer-list">
          <li>
            Fale de forma clara e pausada, articulando bem as palavras e evite
            falar rápido;
          </li>

          <li>
            Caso a pessoa não entenda o que você disse, não desista de falar,
            repita quantas vezes for necessário;
          </li>
          <li>
            Mantenha tom de voz natural. Não grite, isso pode distorcer as
            palavras, dificultando a compreensão;
          </li>
          <li>Não mastigue enquanto fala. Isso impede a leitura labial;</li>
          <li>Não cubra a boca; ao falar, mantenha a boca visível;</li>
          <li>
            Não interrompa a pessoa, deixe-a terminar de falar e não fale por
            ela;
          </li>
          <li>
            Se tiver dificuldade para compreender o que ela está dizendo, não se
            acanhe em pedir para que repita.
          </li>
        </ol>

        <h4 className="primer-subtitle">Deficiência física</h4>
        <p className="primer-paragraph">
          Uma das maiores dificuldades da pessoa com deficiência física é a
          locomoção. Ofereça ajuda respeitando a autonomia. Antes de agir,
          sempre pergunte se a pessoa precisa de ajuda. Caso seja aceita,
          pergunte como deve proceder e não se ofenda caso a ajuda for recusada.
          Evite tomar decisões por ela.
        </p>
        <ol className="primer-list">
          <li>
            Esteja atento para a existência de barreiras arquitetônicas. Se
            possível, remova obstáculos que dificultam a locomoção da pessoa,
            por exemplo, cadeiras ou tapetes, entre outros;
          </li>
          <li>
            Não faça julgamentos. Evite comentários sobre a aparência física da
            pessoa;
          </li>
          <li>
            A cadeira de rodas, assim como bengalas, muletas e outros
            equipamentos assistivos, são considerados uma extensão do espaço
            corporal da pessoa. Não toque na pessoa ou nos equipamentos sem a
            devida autorização. É essencial respeitar esse espaço como uma
            extensão da individualidade da pessoa.
          </li>
          <li>
            Em conversas longas, caso haja uma grande diferença entre a altura
            do rosto da pessoa e o seu, se abaixe ou se sente, mantendo a menor
            diferença possível entre o nível do seu olhar e o da pessoa;
          </li>
          <li>
            Não a ignore. Inclua a pessoa com deficiência física normalmente nas
            conversas e atividades.
          </li>
        </ol>

        <h4 className="primer-subtitle">Deficiência visual</h4>
        <p className="primer-paragraph">
          A principal dificuldade da pessoa com deficiência visual é a
          orientação.
        </p>
        <ol className="primer-list">
          <li>
            Identifique-se. Ao se aproximar, diga o seu nome.Frases como "Com
            licença, tudo bem?" ou "Posso te ajudar?" são bem-vindas;
          </li>
          <li>
            Pergunte à pessoa se ela necessita de auxílio para a locomoção. Caso
            ela aceite, ofereça o seu braço dobrado para que ela se apoie. Não
            puxe ou empurre a pessoa, pois isso pode causar acidentes. Não toque
            na pessoa sem permissão;
          </li>
          <li>
            Dê instruções claras e objetivas. Seja o mais específico possível e
            use pontos de referência precisos, como "à sua direita", "à sua
            esquerda", "à frente";
          </li>
          <li>
            Informe sobre mudanças no ambiente. Se houver mudanças como móveis
            movidos de lugar, diga à pessoa;
          </li>
          <li>
            Use a linguagem verbal. Sempre que possível, descreva o que está
            acontecendo, como a decoração do ambiente, ou a cor das roupas das
            pessoas;
          </li>
          <li>
            Não deixe a pessoa falando sozinha. Ao sair, anuncie sua saída;{' '}
          </li>
          <li>
            Não fale em nome da pessoa; fale diretamente com ela. Permita que
            ela expresse por si mesma e, mesmo que esteja acompanhada, dirija-se
            diretamente a ela, evitando falar apenas com o acompanhante.
          </li>
          <li>
            Se for cumprimentar uma pessoa com deficiência visual com um abraço
            ou um aperto de mão, anuncie o que pretende fazer para que ela possa
            corresponder e se preparar.
          </li>
        </ol>

        <h4 className="primer-subtitle">Atitudes de Ouro!</h4>
        <p className="primer-paragraph">Em todos os casos:</p>
        <ol className="primer-list">
          <li>
            Seja direto e claro. Evite expressões figuradas e termos técnicos.
            Use frases curtas e objetivas;
          </li>
          <li>
            Mantenha o contato visual; isso demonstra interesse e facilita a
            comunicação. Mas respeite se a pessoa evitar tal contato;
          </li>
          <li>
            Seja paciente. Pessoas com deficiência podem precisar de mais tempo
            para processar informações, e podem se sentir sobrecarregadas em
            ambientes sociais. Respeite seu ritmo;{' '}
          </li>
          <li>
            Use a comunicação não verbal. Gestos, expressões faciais e o tom de
            voz podem complementar a comunicação verbal;
          </li>
          <li>
            Adapte-se à situação e esteja disposto a ajustar sua comunicação de
            acordo com as necessidades da pessoa;
          </li>
          <li>
            Não force a interação, Respeite o desejo da pessoa de se isolar em
            determinados momentos;
          </li>
          <li>
            Não fale em tom autoritário, Use tom de voz calmo e respeitoso;
          </li>
          <li>
            Não tente ser um "especialista". Se não é um profissional da área,
            evite dar conselhos não solicitados. Pergunte para a pessoa! Cada
            indivíduo é único, portanto, quem sabe qual a melhor forma de
            interagir com ele é ele próprio.
          </li>
          <li>
            Não ignore a pessoa. Independentemente do tipo de sua deficiência,
            ela merece respeito, atenção e deve ser tratada como igual.
          </li>
          <li>
            Fique ligado(a), o banheiro reservado para PCDs deve ser utilizado
            apenas por pessoas com deficiência ou com mobilidade reduzida.
            Portanto, se você não tem alguma necessidade que justifique, não o
            utilize.
          </li>
        </ol>
        <LinkNav
          className="link-download"
          title="Download da Cartilha (Conteúdo Externo)"
          icon="download"
          href="/03_cartilha_color_sem_marcacao_v2.pdf"
          target="_blank"
          onClick={handleDownload}
        />
      </main>
      <ScrollUp />
    </div>
  )
}
