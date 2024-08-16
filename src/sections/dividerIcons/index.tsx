import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './dividerIcons.scss'

import braile from '../../assets/braile.png'
import bilateralDeafness from '../../assets/bilateral-deafness-alt.png'
import lowVision from '../../assets/low-vision.png'
import signLanguage from '../../assets/sign-language.png'

interface Icon {
  src: string
  alt: string
  className: string
}

const icons: Icon[] = [
  { src: braile, alt: 'Ícone de Braile', className: 'braile' },
  {
    src: bilateralDeafness,
    alt: 'Ícone de Surdez Bilateral',
    className: 'bilateral-deafness',
  },
  { src: lowVision, alt: 'Ícone de Baixa Visão', className: 'low-vision' },
  {
    src: signLanguage,
    alt: 'Ícone de Língua de Sinais',
    className: 'sign-language',
  },
]

export default function DividerIcons() {
  const [aditionalIcons, setAditionalIcons] = useState<Icon[]>([])

  const dividerIconsRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const iconRefs = icons.map(() => useRef<HTMLImageElement | null>(null))

  const viewportWidth = window.innerWidth
  const iconWidths: number[] = []
  let maxContainerWidth = 0
  let containerWidth = 0

  useEffect(() => {
    const initialSize = iconWidths.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )

    let totalSize = initialSize
    let index = 0
    let newIcons: Icon[] = []
    while (totalSize <= containerWidth) {
      if (totalSize + iconWidths[index] <= containerWidth) {
        newIcons.push(icons[index])
      }
      totalSize += iconWidths[index]

      if (index < 3) {
        index++
      } else {
        index = 0
      }
      totalSize++
    }
    setAditionalIcons(newIcons)
  }, [])

  useLayoutEffect(() => {
    iconRefs.forEach((iconRef) => {
      if (iconRef.current) {
        const dividerIconsPadding = window.getComputedStyle(
          dividerIconsRef.current!
        ).padding

        const iconWidth = iconRef.current.offsetWidth
        iconWidths.push(iconWidth)
        maxContainerWidth = viewportWidth - parseInt(dividerIconsPadding)

        containerWidth = containerRef.current!.offsetWidth
      }
    })
  }, [])

  useEffect(() => {
    appendIcons()
  }, [maxContainerWidth])

  const appendIcons = () => {}

  const IconContainer = () => {
    return (
      <>
        {icons.map((icon, index) => (
          <img
            aria-hidden="true"
            key={index}
            ref={iconRefs[index]}
            className={`icon ${icon.className}`}
            src={icon.src}
            alt={icon.alt}
          />
        ))}
      </>
    )
  }

  const IconCompleter = () => {
    return (
      <>
        {aditionalIcons.map((icon, index) => (
          <img
            aria-hidden="true"
            key={index}
            ref={iconRefs[index]}
            className={`icon ${icon.className}`}
            src={icon.src}
            alt={icon.alt}
          />
        ))}
      </>
    )
  }

  return (
    <section ref={dividerIconsRef} className="divider-icons" aria-hidden="true">
      <div ref={containerRef} className="icons-container" aria-hidden="true">
        <IconContainer />
        <IconCompleter />
      </div>
    </section>
  )
}
