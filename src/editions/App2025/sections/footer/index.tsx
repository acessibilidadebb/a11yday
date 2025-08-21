import './footer.scss'

import logo from '../../../../assets/logo-2025-slogan.svg'
import { ReactComponent as IconBbLogo } from '../../../../assets/bb-logo.svg'
import { ReactComponent as IconInstagram } from '../../../../assets/instagram.svg'
import { ReactComponent as IconLinkedIn } from '../../../../assets/linkedin.svg'
import { ReactComponent as LogoBBTS } from '../../../../assets/Logo_BBTS_02.svg'
import { ReactComponent as LogoPrevi } from '../../../../assets/Logo_Previ.svg'
import { ReactComponent as LogoGoulart } from '../../../../assets/Logo_Goulart.svg'
import { ReactComponent as LogoTB } from '../../../../assets/Logo_TB_Soluções.svg'
import { ReactComponent as LogoCoEUX } from '../../../../assets/coe-ux.svg'

export default function Footer() {
  const LogoContainer = ({ children, title, className }: { children: React.ReactNode, title: string, className?: string }) => (
    <div
      title={title}
      aria-label={title}
      style={{
        lineHeight: 0,
      }}
      role="img"
      className={className}
    >
      {children}
    </div>
  )
  return (
    <footer className="footer-2025">
      <div className="footer-container">
        <div className="footer-column grid1">
          <img
            className="footer-logo-2025"
            src={logo}
            alt="Logo do Accessibility Day"
          />
          <p className="footer-date">25 de setembro de 2025</p>
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
            <LogoContainer title="Banco do Brasil" className='logo-square'>
              <IconBbLogo className='logo-bb'/>
            </LogoContainer>
            <LogoContainer title='BB Tecnologia e Serviços' className='logo-square'>
              <LogoBBTS />
            </LogoContainer>
            <LogoContainer title="CoE em UX" className='logo-square'>
              <LogoCoEUX />
            </LogoContainer>
            <LogoContainer title="TB Soluções" className='logo-square'>
              <LogoTB />
            </LogoContainer>
            <LogoContainer title="Goulart - Acessibilidade" className="logo-wide">
              <LogoGoulart />
            </LogoContainer>
            <LogoContainer title="Previ - Caixa de Previdência dos Funcionários do Banco do Brasil" className="logo-wide">
              <LogoPrevi />
            </LogoContainer>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </footer>
  )
}
