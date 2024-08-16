import './footer.scss'

import logo from '../../assets/logo.svg'
import { ReactComponent as IconBbLogo } from '../../assets/bb-logo.svg'
import { ReactComponent as IconCafeComUx } from '../../assets/cafe-com-ux.svg'
import { ReactComponent as IconInstagram } from '../../assets/instagram.svg'
import { ReactComponent as IconLinkedIn } from '../../assets/linkedin.svg'

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
                href="https://instagram.com/comunicatibb?igshid=YmMyMTA2M2Y="
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
                title="Instagram do ComunicaTI"
                aria-label="Instagram do ComunicaTI"
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
            <IconBbLogo
              className="bb-logo"
              title="Banco do Brasil"
              aria-label="Banco do Brasil"
            />
            <IconCafeComUx
              className="cafe-com-ux-logo"
              title="Café com UX"
              aria-label="Café com UX"
            />
          </div>
        </div>
      </div>
      <div className="overlay" />
    </footer>
  )
}
