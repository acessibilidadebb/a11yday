import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import bbLogo from '../../assets/bb-logo.png'
import logo from '../../assets/logo.png'
import lowVision from '../../assets/low-vision.png'
import signLanguage from '../../assets/sign-language.png'
import braile from '../../assets/braile.png'
import bilateralDeafness from '../../assets/bilateral-deafness.png'
import './styles.scss'
import { GlobalContext } from '../../contexts/globalContext'

interface HeaderProps {
  setShowSections: React.Dispatch<React.SetStateAction<boolean>>
  setShowSchedule: React.Dispatch<React.SetStateAction<boolean>>
  setShowSpeakers: React.Dispatch<React.SetStateAction<boolean>>
  setShowFrequentlyAsked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({
  setShowSections,
  setShowSchedule,
  setShowSpeakers,
  setShowFrequentlyAsked,
}: HeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { isSticky, setHeaderOffsetHeight } = useContext(GlobalContext)
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
  const sticky = scrollPosition > 30 || isSticky ? 'sticky' : ''
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Quando 50% do elemento estiver visível
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          const url = `${import.meta.env.BASE_URL}${id}`
          history.replaceState({}, '', url)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
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
          const headerHeight = headerRef.current
            ? headerRef.current.offsetHeight
            : 0 // Altura do cabeçalho fixo
          setHeaderOffsetHeight(headerHeight)
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
  useEffect(() => {
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0 // Altura do cabeçalho fixo
    setHeaderOffsetHeight(headerHeight)
  }, [isSticky])

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
    setShowSections(false)
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
    <header className={`header ${sticky}`} ref={headerRef}>
      <h1 className="header-logo-container">
        <Link to={`${import.meta.env.BASE_URL}`} onClick={resetSections}>
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
        </Link>
      </h1>
      <button
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
              <Link to={`${import.meta.env.BASE_URL}`} onClick={resetSections}>
                Página Inicial
              </Link>
            </li>
            <li>
              <Link to={`${import.meta.env.BASE_URL}schedule/`} onClick={handleClickSchedule}>
                Programação
              </Link>
            </li>
            <li>
              <Link to={`${import.meta.env.BASE_URL}speakers/`} onClick={handleClickSpeakers}>
                Palestrantes
              </Link>
            </li>
            <li>
              <Link
                to={`${import.meta.env.BASE_URL}frequently-asked-questions/`}
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
