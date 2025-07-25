import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import galleryData from '../../json/galleryDataWithDescription.json'
import './gallery.scss'
import React from 'react'
interface GalleryItem {
  original: string
  thumbnail: string
  description?: string
  originalAlt?: string
  thumbnailAlt?: string
}
interface ImageGalleryProps {
  items: GalleryItem[]
  showThumbnails?: boolean
  autoPlay?: boolean
  slideInterval?: number
  showPlayButton?: boolean
  showFullscreenButton?: boolean
  showNav?: boolean
  showBullets?: boolean
  infinite?: boolean
  lazyLoad?: boolean
  onSlide?: (currentIndex: number) => void
  onScreenChange?: (fullScreenElement: Element | null) => void
  onPlay?: (currentIndex: number) => void
  onPause?: (currentIndex: number) => void
  renderLeftNav?: (onClick: () => void, disabled: boolean) => React.ReactElement
  renderRightNav?: (onClick: () => void, disabled: boolean) => React.ReactElement
  renderPlayPauseButton?: (onClick: () => void, isPlaying: boolean) => React.ReactElement
  renderFullscreenButton?: (onClick: () => void, isFullscreen: boolean) => React.ReactElement
  // renderItem?: (item: GalleryItem) => React.ReactElement
}

const ImageGallery = ReactImageGallery as unknown as React.ComponentType<ImageGalleryProps>

// Componentes customizados para navegação em português
const LeftNavCustom = React.memo(({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Slide anterior"
    >
      <svg className="image-gallery-svg" viewBox="6 0 12 24">
        <path fill="currentColor" d="m14 7l-5 5 5 5V7z"/>
      </svg>
    </button>
  )
})

const RightNavCustom = React.memo(({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-right-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Próxima"
    >
      <svg className="image-gallery-svg" viewBox="6 0 12 24">
        <path fill="currentColor" d="m10 17l5-5-5-5v10z"/>
      </svg>
    </button>
  )
})

const PlayPauseCustom = React.memo(({ isPlaying, onClick }: { isPlaying: boolean; onClick: () => void }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-play-button"
      onClick={onClick}
      aria-label={isPlaying ? 'Pausar slideshow' : 'Reproduzir slideshow'}
    >
      <svg className="image-gallery-svg" viewBox="0 0 24 24" strokeWidth={2}>
        {isPlaying ? (
          <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
        ) : (
          <polygon points="5,3 19,12 5,21" fill="currentColor"/>
        )}
      </svg>
    </button>
  )
})

const FullscreenCustom = React.memo(({ isFullscreen, onClick }: { isFullscreen: boolean; onClick: () => void }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-fullscreen-button"
      onClick={onClick}
      aria-label={isFullscreen ? 'Sair da tela cheia' : 'Abrir em tela cheia'}
    >
      <svg className="image-gallery-svg" viewBox="0 0 24 24" strokeWidth={2}>
        {isFullscreen ? (
          <path fill="currentColor" d="M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zM4 14h2v4h4v2H4v-6zm16 0h2v6h-6v-2h4v-4z"/>
        ) : (
          <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        )}
      </svg>
    </button>
  )
})

// Função customizada para renderizar item SEM descrição visual
const renderItemCustom = (item: GalleryItem) => {
  return (
    <div className="image-gallery-item">
      <img
        className="image-gallery-image"
        src={item.original}
        alt={item.originalAlt || ''}
      />
      {/* Descrição removida intencionalmente - apenas originalAlt para acessibilidade */}
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <ImageGallery
          items={galleryData}
          showThumbnails={true}
          autoPlay={false}
          slideInterval={3000}
          renderItem={renderItemCustom}
          renderLeftNav={(onClick, disabled) => (
            <LeftNavCustom onClick={onClick} disabled={disabled} />
          )}
          renderRightNav={(onClick, disabled) => (
            <RightNavCustom onClick={onClick} disabled={disabled} />
          )}
          renderPlayPauseButton={(onClick, isPlaying) => (
            <PlayPauseCustom onClick={onClick} isPlaying={isPlaying} />
          )}
          renderFullscreenButton={(onClick, isFullscreen) => (
            <FullscreenCustom onClick={onClick} isFullscreen={isFullscreen} />
          )}
        />
      </div>
    </div>
  )
}
