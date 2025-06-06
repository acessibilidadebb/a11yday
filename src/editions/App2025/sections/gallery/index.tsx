import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import galleryData from '../../json/galleryData.json'
import './gallery.scss'

export default function Gallery({ setShowGallery }: { setShowGallery: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleCloseGallery = () => {
    setShowGallery(false)
  }
  return (
    <div id='2024-gallery' className="gallery">
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
