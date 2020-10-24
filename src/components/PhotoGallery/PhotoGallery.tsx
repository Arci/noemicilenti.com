import React, { useCallback, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Gallery, { PhotoProps } from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';
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

  const getRandom = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }

  if (gallery.length == 0) {
    const components = []
    const rectNumber = 20
    for (let index = 0; index < rectNumber; index++) {
      components.push((
        <SkeletonTheme color="#cacaca" highlightColor="#dad9d9">
          <div><Skeleton height={getRandom(180, 500)} /></div>
        </SkeletonTheme>
      ))
    }
    return (
      <div className="grid">{components}</div>
    )
  }
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
