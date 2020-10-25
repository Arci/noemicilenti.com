import React, { useCallback, useState } from 'react';
import Gallery, { PhotoProps } from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';
import { Photo } from '../../domain/data';
import GridLoader from '../GridLoader';

interface Props {
  gallery: Photo[];
}

const PhotoGallery: React.FC<Props> = ({ gallery }) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event, { index }) => {
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
        src: photo.formats.small ? photo.formats.small.url : photo.url,
        width: photo.formats.small ? photo.formats.small.width : photo.width,
        height: photo.formats.small ? photo.formats.small.height : photo.height,
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

  if (gallery.length === 0) return (<GridLoader />)
  else return (
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
