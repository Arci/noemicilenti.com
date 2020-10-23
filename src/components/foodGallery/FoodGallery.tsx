import React, { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';
import Gallery, { PhotoProps } from 'react-photo-gallery';
import { FoodGalleryQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: FoodGalleryQuery;
}

const FoodGallery: React.FC<Props> = ({ data }) => {

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

  const getOrdinal = (fileName: string) => {
    const match = /[^-]+-(?<ordinal>\d+)/.exec(fileName)
    return Number(match?.groups?.ordinal)
  }

  const ordered = data.food?.gallery?.photos?.slice().sort(
    (a, b) => {
      const aOrdinal = getOrdinal(a?.name || '')
      const bOrdinal = getOrdinal(b?.name || '')
      if (aOrdinal > bOrdinal) { return 1; }
      if (aOrdinal < bOrdinal) { return -1; }
      return 0;
    }
  ) || []
  const galleryImages: PhotoProps[] = ordered.map(
    (photo, i) => {
      const image = photo?.formats["small"];
      return {
        src: image?.url || '',
        width: image?.width || 0,
        height: image?.height || 0,
        alt: photo?.alternativeText || undefined,
        key: i.toString()
      }
    }
  ) || [];
  const carouselImages: ViewType[] = ordered.map(
    photo => (
      { source: photo?.url || '' }
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

export default FoodGallery
