import { useEffect, useState } from 'react'
import './scrollUp.scss'
import scrollUp from '../../assets/arrow-up.png'

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <button
      onClick={handleScrollUpClick}
      type="button"
      title="Rolar para o topo da página"
      aria-label="Rolar para o topo da página"
      className={`scroll-up-btn ${isVisible ? 'visible' : 'hidden'}`}
    >
      <img src={scrollUp} alt="Icone de setinha para cima" />
    </button>
  )
}
