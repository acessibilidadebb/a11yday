import './footer.scss'

import logo from '../../assets/logo.svg'
import { ReactComponent as IconBbLogo } from '../../assets/bb-logo.svg'
import { ReactComponent as IconCafeComUx } from '../../assets/cafe-com-ux.svg'
import { ReactComponent as IconInstagram } from '../../assets/instagram.svg'
import { ReactComponent as IconLinkedIn } from '../../assets/linkedin.svg'
import { ReactComponent as AccDigitalLogo } from '../../assets/acessibilidade_digital.svg'
import { ReactComponent as OptyLogo } from '../../assets/opty_logo.svg'
import { ReactComponent as WatLogo } from '../../assets/logo_WAT.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column grid1">
          <img
            className="footer-logo"
            src={logo}
            alt="Logo do Accessibility Day"
          />
          <p className="footer-date">11 de setembro de 2024</p>
        </div>
        <div className="footer-column grid2">
          <h2 className="footer-title">Siga nas Redes</h2>
          <div className="social-icons">
            <div className="social-icons-group uxnobb">
              <a
                href="https://www.instagram.com/uxnobb/"
                target="_blank"
                title="Instagram do ComunicaTI"
                aria-label="Instagram do ComunicaTI"
              >
                <IconInstagram className="social-icon" aria-hidden="true" />
              </a>
              <p className="social-text">UXnoBB</p>
            </div>
            <div className="social-icons-group comunicati">
              <a
                href="https://instagram.com/comunicatibb?igshid=YmMyMTA2M2Y="
                target="_blank"
                title="Instagram da UXnoBB"
                aria-label="Instagram da UXnoBB"
              >
                <IconInstagram className="social-icon" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/comunicatibb"
                target="_blank"
                title="LinkedIn do ComunicaTI"
                aria-label="LinkedIn do ComunicaTI"
              >
                <IconLinkedIn className="social-icon" aria-hidden="true" />
              </a>
              <p className="social-text">ComunicaTI</p>
            </div>
          </div>
        </div>
        <div className="footer-column grid3">
          <h2 className="footer-title">Realização e apoio</h2>
          <div className="footer-icons">
            <div
              title="Banco do Brasil"
              aria-label="Banco do Brasil"
              style={{
                lineHeight: 0,
              }}
              role="img"
            >
              <IconBbLogo className="bb-logo" />
            </div>
            <div
              title="Centro de Experiência em Acessibilidade Digital do BB"
              aria-label="Centro de Experiência em Acessibilidade Digital do BB"
              style={{
                lineHeight: 0,
              }}
              role="img"
            >
              <AccDigitalLogo className="acc-digital-logo" />
            </div>
            <div
              title="Café com UX"
              aria-label="Café com UX"
              style={{
                lineHeight: 0,
              }}
              role="img"
            >
              <IconCafeComUx className="cafe-com-ux-logo" />
            </div>
          </div>
        </div>
        <div className="footer-column grid4">
          <h2 className="footer-title">Parceiros</h2>
          <div className="footer-icons">
            <img
              className="tecassitiva"
              src={`${import.meta.env.BASE_URL}logo_teca.png`}
              title={`Logo de Tecassistiva`}
              alt={`Logo de Tecassistiva`}
            />
            <div
              title="Opty - Olhar pelos seus olhos"
              aria-label="Opty - Olhar pelos seus olhos"
              style={{
                lineHeight: 0,
              }}
              role="img"
              className="opty"
            >
              <OptyLogo />
            </div>
            <div
              title="WAT - Qualidade acessível"
              aria-label="WAT - Qualidade acessível"
              style={{
                lineHeight: 0,
              }}
              role="img"
              className="wat"
            >
              <WatLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </footer>
  )
}
