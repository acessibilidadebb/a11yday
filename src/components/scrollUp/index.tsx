import scrollUp from '../../assets/arrow-up.png'
import './styles.scss'

export default function ScrollUp() {
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
      className='scroll-up-btn'
    >
      <img src={scrollUp} alt="Icone de setinha para cima" />
    </button>
  )
}
