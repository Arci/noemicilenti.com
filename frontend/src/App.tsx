import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { initGA, trackPageView } from './components/Tracking';
import { SocialsAdapter } from './adapters/SocialsAdapter';
import { GalleryAdapter } from './adapters/GalleryAdapter';
import Menu from './components/Menu';
import Social from './components/Social';
import PhotoGallery from './components/PhotoGallery';
import './App.css'

initGA('G-Z7QCPWVMCG');

const GET_DATA = gql`
  query Data {
    food {
      gallery {
        ...photos
      }
    }
    portrait {
      gallery {
        ...photos
      }
    }
    event {
      gallery {
        ...photos
      }
    }
    live {
      gallery {
        ...photos
      }
    }
    contact {
      social {
        facebook
        instagram
        vogue
        youtube
      }
    }
  }

  fragment photos on ComponentGalleryGallery {
    photos {
      name
      alternativeText
      caption
      width
      height
      formats
      mime
      url
    }
  }
`;

const App: React.FC = () => {
  useEffect(() => {
    trackPageView()
  });

  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return (
    <>
      <nav>
        <Menu />
        <Social socials={[]} />
      </nav>
      <article>
        <PhotoGallery gallery={[]} />
      </article>
    </>
  );
  if (error) return (
    <>
      <nav>
        <Menu />
      </nav>
      <article>
        <div>Error! ${error.message}</div>
      </article>
    </>
  );
  return (
    <>
      <nav>
        <Menu />
        <Social socials={new SocialsAdapter().adapt(data)} />
      </nav>
      <article>
        <PhotoGallery gallery={new GalleryAdapter().adapt(data)} />
      </article>
    </>
  );
}

export default App;
