import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { initGA, trackPageView } from './components/Tracking';
import { SocialsNetworksAdapter as SocialNetworksAdapter } from './adapters/SocialsNetworksAdapter';
import { GalleryAdapter } from './adapters/GalleryAdapter';
import Menu from './components/Menu';
import Contact from './components/Contact';
import PhotoGallery from './components/PhotoGallery';
import './App.css'

initGA('G-Z7QCPWVMCG');

const GET_DATA = gql`
  query Data {
    food {
      gallery{
        ...photo
      }
    }
    portrait {
      gallery {
        ...photo
      }
    }
    event {
      gallery {
        ...photo
      }
    }
    live {
      gallery {
        ...photo
      }
    }
    contact {
      cover {
        ...photo
      }
      description
      email
      phone
    }
    social {
      facebook
      instagram
      vogue
      youtube
    }
  }

  fragment photo on UploadFile {
    name
    alternativeText
    caption
    width
    height
    formats
    mime
    url
  }
`;

const App: React.FC = () => {
  useEffect(() => {
    trackPageView()
  }, []);

  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return (
    <>
      <nav>
        <Menu socialNetworks={[]} />
      </nav>
      <article>
        <PhotoGallery gallery={[]} />
      </article>
    </>
  );
  if (error) return (
    <>
      <nav>
        <Menu socialNetworks={[]} />
      </nav>
      <article>
        {/* TODO style this */}
        <div>Error! ${error.message}</div>
      </article>
    </>
  );
  return (
    <>
      <nav>
        <Menu socialNetworks={new SocialNetworksAdapter().adapt(data)} />
      </nav>
      <article>
        <Route path="/food">
          <PhotoGallery gallery={new GalleryAdapter().adapt("food", data)} />
        </Route>
        <Route path="/events">
          <PhotoGallery gallery={new GalleryAdapter().adapt("events", data)} />
        </Route>
        <Route path="/live">
          <PhotoGallery gallery={new GalleryAdapter().adapt("live", data)} />
        </Route>
        <Route path="/portraits">
          <PhotoGallery gallery={new GalleryAdapter().adapt("portraits", data)} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </article>
    </>
  );
}

export default App;
