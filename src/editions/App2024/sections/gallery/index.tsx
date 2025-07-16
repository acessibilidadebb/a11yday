import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import galleryData from '../../json/galleryData.json'
import './gallery.scss'
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
}

const ImageGallery = ReactImageGallery as unknown as React.ComponentType<ImageGalleryProps>

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <ImageGallery
          items={galleryData}
          showThumbnails={true}
          autoPlay={false}
          slideInterval={3000}
        />
      </div>
    </div>
  )
}
