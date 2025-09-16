import { useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../contexts/globalContext'
import './header.scss'

import { HeaderProps } from './types'
import { ReactComponent as BbLogo } from '../../../../assets/bb-logo.svg'
import logoSlogan from '../../../../assets/logo-2025-slogan.svg'
import logo from '../../../../assets/logo-2025.svg'
import lowVision from '../../../../assets/low-vision.png'
import signLanguage from '../../../../assets/sign-language.png'
import braile from '../../../../assets/braile.png'
import bilateralDeafness from '../../../../assets/bilateral-deafness.png'

export default function Header({
  setShowSections,
  setShowSchedule,
  setShowExperiences,
  setShowSpeakers,
  setShowFrequentlyAsked,
  setShowHandbook,
  setShowManual,
  setShowGallery,
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
        pathname === '/frequently-asked-questions' ||
        pathname === '/accessible-attitudes-handbook' ||
        pathname === '/address-and-location' ||
        pathname === '/2024-gallery'
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
    setShowExperiences(false)
    setShowSpeakers(false)
    setShowFrequentlyAsked(false)
    setOpen(false)
    setShowHandbook(false)
    setShowManual(false)
  }
  const openSection = (section: string) => {
    if (window.innerWidth <= 768) {
      setShowSections(false)
    }
    switch (section) {
      case 'schedule':
        setShowSchedule(true)
        break
      case 'expo':
        setShowExperiences(true)
        break
      case 'speakers':
        setShowSpeakers(true)
        break
      case 'frequently-asked-questions':
        setShowFrequentlyAsked(true)
        break
      case 'accessible-attitudes-handbook':
        setShowHandbook(true)
        break
        break
      case 'inclusion-manual':
        setShowManual(true)
        break
      case 'address-and-location':
        break
      case '2024-gallery':
        setShowGallery(true)
        break
      default:
        break
    }
  }
  const handleClickMenu = ({ sectionId }: { sectionId: string }) => {
    resetSections()
    openSection(sectionId)
  }
  return (
    <header
      className={`header-2025 ${sticky} ${isPin ? 'modal-pin' : ''}`}
      ref={headerRef}
    >
      <h1 className="header-logo-container">
        <Link aria-label="Accessibility Day" to={'/'} onClick={resetSections}>
          <span
            title="Logo do Banco do Brasil"
            aria-label="Logo do Banco do Brasil"
            aria-hidden="true"
            style={{
              lineHeight: 0,
            }}
          >
            <BbLogo className="header-logo-bb" />
          </span>
          {sticky ? (
            <img
              className="header-logo"
              src={logo}
              title="Logo do Accessibility Day"
              alt="Logo do Accessibility Day"
              aria-hidden="true"
            />
          ) : (
            <img
              className="header-logo"
              src={logoSlogan}
              title="Logo do Accessibility Day"
              alt="Logo do Accessibility Day"
              aria-hidden="true"
            />
          )}
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
            <li>
              <Link
                to={'/frequently-asked-questions'}
                onClick={() =>
                  handleClickMenu({ sectionId: 'frequently-asked-questions' })
                }
              >
                Dúvidas Frequentes
              </Link>
            </li>
            <li>
              <Link
                to={'/edicao-2024'}
                onClick={() => handleClickMenu({ sectionId: 'edicao-2024' })}
              >
                Edição 2024
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
