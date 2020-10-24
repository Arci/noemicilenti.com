import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { initGA, trackPageView } from './components/Tracking';
import { SocialsAdapter } from './adapters/SocialsAdapter';
import { GalleryAdapter } from './adapters/GalleryAdapter';
import Contacts from './components/Contacts';
import Menu from './components/Menu';
import PhotoGallery from './components/PhotoGallery';
import './App.css'

initGA('G-Z7QCPWVMCG');

const GET_DATA = gql`
  query Data {
    food {
      gallery {
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
    }
    contact {
      social {
        facebook
        instagram
        youtube
      }
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
        <Contacts socials={[]} />
      </nav>
      <article className="content">
        <PhotoGallery gallery={[]} />
      </article>
    </>
  );
  if (error) return (
    <>
      <nav>
        <Menu />
      </nav>
      <article className="content">
        <div>Error! ${error.message}</div>
      </article>
    </>
  );
  return (
    <>
      <nav>
        <Menu />
        <Contacts socials={new SocialsAdapter().adapt(data)} />
      </nav>
      <article className="content">
        <PhotoGallery gallery={new GalleryAdapter().adapt(data)} />
      </article>
    </>
  );
}

export default App;
