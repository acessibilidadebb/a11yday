import { ImageGalleryProps as OriginalImageGalleryProps } from 'react-image-gallery'

// Extensão dos tipos para incluir renderItem
export interface ExtendedImageGalleryProps extends OriginalImageGalleryProps {
  renderItem?: (item: any) => React.ReactElement
}
