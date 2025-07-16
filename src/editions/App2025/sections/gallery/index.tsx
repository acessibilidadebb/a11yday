import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import galleryData from '../../json/galleryData.json'
import './gallery.scss'

// Wrapper para resolver conflito de tipos
const Gallery = ImageGallery as any

export default function GallerySection() {

  return (
    <div id='2024-gallery' className="gallery">
      <div className="gallery-container">
        <Gallery
          items={galleryData}
          showThumbnails={true}
          autoPlay={false}
          slideInterval={3000}
        />
      </div>
    </div>
  )
}
