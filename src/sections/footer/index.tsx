import './styles.scss'

import logo from '../../assets/logo.svg'
import bbLogo from '../../assets/bb-logo.svg'
import cafeComUx from '../../assets/cafe-com-ux.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img
            className="footer-logo"
            src={logo}
            alt="Logo do Accessibility Day"
          />
          <p className="footer-date">11 de setembro de 2024</p>
        </div>
        <div className="footer-column">
          <p className="realization-support">Realização e apoio</p>
          <div className="footer-icons">
            <img
              className="bb-logo"
              src={bbLogo}
              alt="Logo do Banco do Brasil"
            />
            <img
              className="cafe-com-ux-logo"
              src={cafeComUx}
              alt="Logo do Café com UX"
            />
          </div>
        </div>
      </div>
      <a href="https://www.instagram.com/UXnoBB/">UXnoBB</a>

      <a href="https://instagram.com/comunicatibb?igshid=YmMyMTA2M2Y=">ComunicaTI</a>
      <a href="https://www.linkedin.com/in/comunicatibb">ComunicaTI</a>
      <div className="overlay" />
    </footer>
  )
}
