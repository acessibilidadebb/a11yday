import { useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { GlobalContext } from '../../contexts/globalContext'
import './header.scss'

import { HeaderProps } from './types'
import { ReactComponent as BbLogo } from '../../assets/bb-logo.svg'
import logo from '../../assets/logo.svg'
import lowVision from '../../assets/low-vision.png'
import signLanguage from '../../assets/sign-language.png'
import braile from '../../assets/braile.png'
import bilateralDeafness from '../../assets/bilateral-deafness.png'

export default function Header({
  setShowSections,
  setShowSchedule,
  setShowSpeakers,
  setShowFrequentlyAsked,
}: HeaderProps) {
  const { isPin } = useContext(GlobalContext)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLDivElement | null>(null) // Define explicitamente o tipo como HTMLDivElement ou null

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
  useEffect(() => {
    const scrollToSectionOnLoad = () => {
      const { pathname } = location
      if (
        pathname === '/schedule' ||
        pathname === '/speakers' ||
        pathname === '/frequently-asked-questions'
      ) {
        const id = pathname.substring(1)
        const element = document.getElementById(id)

        if (element) {
          const sectionTitle = element.querySelector('h2')
          if (sectionTitle) {
            sectionTitle.setAttribute('tabindex', '-1')
            sectionTitle.focus()
          }
          const headerHeight = headerRef.current
            ? headerRef.current.offsetHeight
            : 0 // Altura do cabeçalho fixo
          const offsetTop = element.offsetTop - headerHeight

          // Rola apenas um pouco se o header não estiver fixo
          const topPosition = sticky !== '' ? offsetTop : offsetTop - 50

          window.scrollTo({
            top: topPosition,
            behavior: 'smooth',
          })
          openSection(pathname.substring(1))
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    }
    scrollToSectionOnLoad()
  }, [location])

  const handleMenuClick = () => {
    setOpen(!open)
  }
  const resetSections = () => {
    setShowSections(true)
    setShowSchedule(false)
    setShowSpeakers(false)
    setShowFrequentlyAsked(false)
    setOpen(false)
  }
  const openSection = (section: string) => {
    if (window.innerWidth <= 768) {
      setShowSections(false)
    }
    switch (section) {
      case 'schedule':
        setShowSchedule(true)
        break
      case 'speakers':
        setShowSpeakers(true)
        break
      case 'frequently-asked-questions':
        setShowFrequentlyAsked(true)
        break

      default:
        break
    }
  }
  const handleClickSchedule = () => {
    resetSections()
    openSection('schedule')
  }
  const handleClickSpeakers = () => {
    resetSections()
    openSection('speakers')
  }
  const handleClickFrequentlyAsked = () => {
    resetSections()
    openSection('frequently-asked-questions')
  }
  return (
    <header
      className={`header ${sticky} ${isPin ? 'modal-pin' : ''}`}
      ref={headerRef}
    >
      <h1 className="header-logo-container">
        <Link smooth to={`/`} onClick={resetSections}>
          <span
            title="Logo do Banco do Brasil"
            aria-label="Logo do Banco do Brasil"
            style={{
              lineHeight: 0,
            }}
          >
            <BbLogo className="header-logo-bb" />
          </span>
          <img
            className="header-logo"
            src={logo}
            title="Logo do Accessibility Day"
            alt="Logo do Accessibility Day"
          />
        </Link>
      </h1>
      <button
        type="button"
        onClick={handleMenuClick}
        className={`menu-icon ${open ? 'open' : ''}`}
        id="toggle-menu"
        aria-label="Abrir menu"
      >
        <span className="hamburguer" />
      </button>
      <nav id="navbar" className={`navbar ${open ? 'open' : ''}`}>
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
            <li className="home-link">
              <Link smooth to={`/`} onClick={resetSections}>
                Página Inicial
              </Link>
            </li>
            <li>
              <Link smooth to={`/schedule`} onClick={handleClickSchedule}>
                Programação
              </Link>
            </li>
            <li>
              <Link smooth to={`/speakers`} onClick={handleClickSpeakers}>
                Palestrantes
              </Link>
            </li>
            <li>
              <Link
                to={`/frequently-asked-questions`}
                onClick={handleClickFrequentlyAsked}
              >
                Dúvidas
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
