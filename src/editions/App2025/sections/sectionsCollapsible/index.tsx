import { useRef, useState, useEffect } from 'react'
import { CollapsibleProps } from './sectionCollapsibleTypes'
import './sectionsCollapsible.scss'
import SvgCaret from '../../../../assets/IconComponents/SvgCaret'
import Schedule from '../schedule'

export function Collapsible({
  title,
  children,
  open,
  onClick,
}: CollapsibleProps & { open: boolean; onClick: () => void }) {
  const contentId = `collapsible-content-${title.replace(/\s+/g, '-')}`
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        setMaxHeight(contentRef.current.scrollHeight + 'px')
      } else {
        setMaxHeight('0px')
      }
    }
  }, [open, children])

  return (
    <div className={`collapsible-section${open ? ' open' : ''}`}>
      <button
        className="collapsible-title"
        onClick={onClick}
        aria-expanded={open}
        aria-controls={contentId}
        id={`collapsible-title-${title.replace(/\s+/g, '-')}`}
        aria-label={`${title}. ${open ? 'Recolher seção' : 'Expandir seção'}`}
      >
        <span>{title}</span>
        <SvgCaret className="collapsible-caret" />
      </button>
      <div
        id={contentId}
        className="collapsible-content"
        ref={contentRef}
        style={{ maxHeight }}
        aria-hidden={!open}
        role="region"
        aria-labelledby={`collapsible-title-${title.replace(/\s+/g, '-')}`}
        tabIndex={open ? 0 : -1}
      >
        {children}
      </div>
    </div>
  )
}

interface SectionsCollapsibleProps {
  showSchedule: boolean
}

export default function SectionsCollapsible({ showSchedule }: SectionsCollapsibleProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="sections-collapsible">
      <Collapsible
        title="25/09  - Programação Palestras"
        open={openIndex === 1}
        onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
      >
        <Schedule showSchedule={showSchedule} />
      </Collapsible>
    </div>
  )
}
