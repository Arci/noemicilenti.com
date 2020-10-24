import React, { useEffect } from 'react';
import { initGA, trackPageView } from './components/Tracking';
import Contacts from './components/Contacts/Contacts';
import Menu from './components/Menu';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import './App.css'
import { SocialsAdapter } from './components/Contacts';
import { GalleryAdapter } from './components/PhotoGallery';

initGA('G-Z7QCPWVMCG');

const GET_DATA = gql`
  query FoodGallery {
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
      </nav>
      <article className="content">
        <div>Loading...</div>
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
        <PhotoGallery gallery={new GalleryAdapter().adapt(data)}/>
      </article>
    </>
  );
}

export default App;
