import React from 'react'
import './styles.scss'
import SvgCaret from '../../assets/IconComponents/SvgCaret'

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
        <SvgCaret className={`accordion-icon svg ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  )
}
