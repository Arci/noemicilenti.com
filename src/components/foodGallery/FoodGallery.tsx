import React, { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
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

  // .sort(
  //   (a, b) => {
  //     if ((a?.url || '') < (b?.url || '')) { return -1; }
  //     if ((a?.url || '') < (b?.url || '')) { return -1; }
  //     return 0;
  //   }
  // )
  const photos: PhotoProps[] = data.food?.gallery?.photos?.map(
    (photo, i) => (
      {
        src: photo?.url || '',
        width: photo?.width || 0,
        height: photo?.height || 0,
        alt: photo?.alternativeText || undefined,
        key: i.toString()
      }
    )
  ) || [
      {
        src: '',
        width: 0,
        height: 0
      }
    ];

  return (
    <article className="content">
      <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                source: x.src,
                srcset: x.srcSet
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </article>
  )
};

export default FoodGallery
