import { useEffect, useState } from 'react'
import bbLogo from '../../assets/bb-logo.png'
import logo from '../../assets/logo.png'
import lowVision from '../../assets/low-vision.png'
import signLanguage from '../../assets/sign-language.png'
import braile from '../../assets/braile.png'
import bilateralDeafness from '../../assets/bilateral-deafness.png'
import './styles.scss'

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const sticky = scrollPosition > 30 ? 'sticky' : ''

  const handleMenuClick = () => {
    setOpen(!open)
  }
  return (
    <header id="header" className={`header ${sticky}`}>
      <div className="header-logo-container">
        <img
          className="header-logo-bb"
          src={bbLogo}
          alt="Logo do Banco do Brasil"
        />
        <img
          className="header-logo"
          src={logo}
          alt="Logo do Accessibility Day"
        />
      </div>
      <button
        onClick={handleMenuClick}
        className={`menu-icon ${open ? 'open' : ''}`}
        id="toggle-menu"
        aria-label="Abrir menu"
      >
        <span className="hamburguer" />
      </button>
      <nav id="navbar" className={`navbar  ${open ? 'open' : ''}`}>
        <div className="navbar-content">
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
          <ul id="nav-list">
            <li>
              <a href="#">Programação</a>
            </li>
            <li>
              <a href="#">Palestrantes</a>
            </li>
            <li>
              <a href="#">Dúvidas</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
