import './styles.scss'

export default function Schedule() {
  return (
    <section className="schedule">
      <h2>Programação</h2>
      <section>
        <header className="schedule-header">
          <div className="schedule-time">Hora</div>
          <div className="schedule-event">Acontecimento</div>
        </header>
        <article className="schedule-item">
          <div className="schedule-time">8h00</div>
          <div className="schedule-card bg-lightblue">
            <img src="images/d-braile.png" alt="Icone " />
            <div className="schedule-card-content">
              <h3>Checkin</h3>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">9h00</div>
          <div className="schedule-card bg-lightblue">
            <img src="images/d-braile.png" alt="Icone " />
            <div className="schedule-card-content">
              <h3>Abertura do Evento</h3>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">9h45</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/cesar-sathler.jpeg"
              alt="Foto de Cesar Luiz"
            />
            <div className="schedule-card-content">
              <h3>Silêncio: Palavras que não comunicam.</h3>
              <h4>Cesar Luiz | Cast group</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">10h10</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/liliane-claudia.jpeg"
              alt="Foto de Liliane Claudia"
            />
            <div className="schedule-card-content">
              <h3>
                Desbloqueando o Potencial Criativo com Acessibilidade e o Mapa
                da Alteridade
              </h3>
              <h4>Liliane Claudia | Accenture</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">10h55</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/muriel-de-almeida-xavier.jpeg"
              alt="Foto de Muriel"
            />
            <div className="schedule-card-content">
              <h3>
                Trazendo a acessibilidade para a realidade: uma nova experiência
                de usuário
              </h3>
              <h4>Muriel | Banco do Brasil</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">11h20</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/sandyara-peres.jpeg"
              alt="Foto de Sandyara Peres"
            />
            <div className="schedule-card-content">
              <h3>
                Gestão de Acessibilidade em Produtos Digitais: do processo às
                métricas
              </h3>
              <h4>Sandyara Peres | Serasa Experian</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">12h05</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/maria-clara-tarrafa.jpeg"
              alt="Foto de Maria Clara"
            />
            <div className="schedule-card-content">
              <h3>
                Então o seu produto é acessível. E o seu processo de trabalho?
              </h3>
              <h4>Maria Clara</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">12h25</div>
          <div className="schedule-card bg-lightblue">
            <img src="images/cafe-blue.png" alt />
            <div className="schedule-card-content">
              <h3>Pausa para almoço</h3>
              <p>Venha tomar um café e conhecer pessoas maravilhosas.</p>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">13h30</div>
          <div className="schedule-card bg-lightblue">
            <img src="images/d-braile.png" alt="Icone " />
            <div className="schedule-card-content">
              <h3>Abertura tarde</h3>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">14h35</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/arthur-ximenes.jpeg"
              alt="Foto de Arthur Ximenes"
            />
            <div className="schedule-card-content">
              <h3>Conectando Vidas: Tecnologia e Acessibilidade</h3>
              <h4>Arthur Ximenes | Hefesto</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">15h00</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/sarah-fernn.jpeg"
              alt="Foto de Sarah Fernn"
            />
            <div className="schedule-card-content">
              <h3>
                IA e Neurodiversidade: Ferramentas e Soluções em Acessibilidade
                Inclusivas para a Diversidade Cognitiva{' '}
              </h3>
              <h4>Sarah Fernn | Stardust Zone</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">15h45</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/marcos-fernandes.jpeg"
              alt="Foto de Marcos Vinicius"
            />
            <div className="schedule-card-content">
              <h3>Design inclusivo para a 3º Idade</h3>
              <h4>Marcos Vinicius | GFT Tecnologia</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">16h10</div>
          <div className="schedule-card bg-lightgray">
            <img
              src="images/palestrantes/filipe-ballico-de-moraes.jpeg"
              alt="Foto de Filipe Ballico"
            />
            <div className="schedule-card-content">
              <h3>
                Implementando Acessibilidade: Um Fluxo de Trabalho otimizado
                para Desenvolvedores
              </h3>
              <h4>Filipe Ballico de Moraes | Ministério Público Federal</h4>
              <button className="details">Detalhes da Palestra</button>
            </div>
          </div>
        </article>
        <article className="schedule-item">
          <div className="schedule-time">19h30</div>
          <div className="schedule-card bg-lightblue">
            <img src="images/d-braile.png" alt />
            <div className="schedule-card-content">
              <h3>Encerramento</h3>
              <h4>Nome da pessoa</h4>
            </div>
          </div>
        </article>
      </section>
    </section>
  )
}
