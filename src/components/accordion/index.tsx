import React from 'react'
import collapseIcon from '../../assets/collapse-icon.png'
import './styles.scss'

interface AccordionProps {
  title: string
  description: string
  isOpen: boolean
  onToggle: () => void
}

export function Accordion({
  title,
  description,
  isOpen,
  onToggle,
}: AccordionProps): React.ReactElement {
  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <button className="accordion-label" onClick={onToggle}>
        {title}
        <img
          src={collapseIcon}
          alt="Ícone para colapsar conteúdo"
          className={`accordion-icon ${isOpen ? 'open' : ''}`}
        />
        {/* <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>➯</span> */}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  )
}
