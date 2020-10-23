import React, { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';
import Gallery, { PhotoProps } from 'react-photo-gallery';
import './styles.css';

export interface Photo {
  name: string
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats: Formats;
}
export interface Formats {
  small: Format
  thumbnail: Format
}
export interface Format {
  url: string;
  width: number;
  height: number;
}

interface Props {
  gallery: Photo[];
}

const PhotoGallery: React.FC<Props> = ({ gallery }) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const galleryImages: PhotoProps[] = gallery.map(
    (photo, i) => (
      {
        src: photo.formats.small.url,
        width: photo.formats.small.width,
        height: photo.formats.small.height,
        alt: photo?.alternativeText || undefined,
        key: i.toString()
      }
    )
  );
  const carouselImages: ViewType[] = gallery.map(
    photo => (
      { source: photo.url }
    )
  )

  return (
    <>
      <Gallery photos={galleryImages} direction={"column"} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={carouselImages} />
          </Modal>
        )}
      </ModalGateway>
    </>
  )
};

export default PhotoGallery
