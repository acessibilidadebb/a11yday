import lowVisionMark from '../../assets/low-vision-mark.png'
import arthurXimenes from '../../assets/palestrantes/arthur-ximenes.jpeg'
import cesarSathler from '../../assets/palestrantes/cesar-sathler.jpeg'
import filipeBallico from '../../assets/palestrantes/filipe-ballico-de-moraes.jpeg'
import lilianeClaudia from '../../assets/palestrantes/liliane-claudia.jpeg'
import marcosFernandes from '../../assets/palestrantes/marcos-fernandes.jpeg'
import mariaClara from '../../assets/palestrantes/maria-clara-tarrafa.jpeg'
import michaelLiang from '../../assets/palestrantes/michael-liang.jpeg'
import sandyaraPeres from '../../assets/palestrantes/sandyara-peres.jpeg'
import sarahFern from '../../assets/palestrantes/sarah-fernn.jpeg'
import './styles.scss'

import { Speakers } from '../../types/speakers'
import speakersData from '../../speakers.json'

const speakers: Speakers[] = speakersData as Speakers[]

export default function Speakers() {
  return (
    <section className="speakers">
      <div className="watermark">
        <img
          src={lowVisionMark}
          alt="Marca d'água ícone de Baixa Visão "
        />
      </div>
      <h3>Palestrantes</h3>
      <div className="speakers-container">
        <article className="speaker-card">
          <img
            src={arthurXimenes}
            alt="Foto de Arthur Ximenes"
          />
          <div className="speaker-card-body">
            <h4>Arthur Ximenes</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
        <article className="speaker-card">
          <img
            src={cesarSathler}
            alt="Foto de Cesar Sathler"
          />
          <div className="speaker-card-body">
            <h4>Cesar Sathler</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
        <article className="speaker-card">
          <img
            src={filipeBallico}
            alt="Foto de Filipe Ballico de Moraes"
          />
          <div className="speaker-card-body">
            <h4>Filipe Ballico de Moraes</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
        <article className="speaker-card">
          <img
            src={lilianeClaudia}
            alt="Foto de Liliane Claudia"
          />
          <div className="speaker-card-body">
            <h4>Liliane Claudia</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
        <article className="speaker-card">
          <img
            src={marcosFernandes}
            alt="Foto de Marcos Fernandes"
          />
          <div className="speaker-card-body">
            <h4>Marcos Fernandes</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
        <article className="speaker-card">
          <img
            src={mariaClara}
            alt="Foto de Maria Clara Tarrafa"
          />
          <div className="speaker-card-body">
            <h4>Maria Clara Tarrafa</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
        <article className="speaker-card">
          <img
            src={michaelLiang}
            alt="Foto de Michael Liang"
          />
          <div className="speaker-card-body">
            <h4>Michael Liang</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
        <article className="speaker-card">
          <img
            src={sandyaraPeres}
            alt="Foto de Sandyara Peres"
          />
          <div className="speaker-card-body">
            <h4>Sandyara Peres</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
        <article className="speaker-card">
          <img
            src={sarahFern}
            alt="Foto de Sarah Fern"
          />
          <div className="speaker-card-body">
            <h4>Sarah Fernn</h4>
            <p>Hefestoshop.com</p>
          </div>
        </article>
      </div>
    </section>
  )
}
