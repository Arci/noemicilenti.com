import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { initGA, trackPageView } from './domain/components/Tracking';
import SocialNetworksAdapter from './adapters/SocialNetworksAdapter';
import ContactInfoAdapter from './adapters/ContactInfoAdapter';
import GalleryAdapter from './adapters/GalleryAdapter';
import Menu from './domain/components/Menu';
import Contact from './domain/components/Contact';
import ContactLoader from './domain/components/ContactLoader';
import PhotoGallery from './domain/components/PhotoGallery';
import './App.css';

initGA('G-Z7QCPWVMCG');

const GET_DATA = gql`
  query Data {
    galleries {
      title
      ...photos
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

  fragment photos on Gallery{
    photos{
      ...photo
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

const socialNetworksAdapter = new SocialNetworksAdapter();
const galleryAdapter = new GalleryAdapter();
const contactInfoAdapter = new ContactInfoAdapter();

const App: React.FC = () => {
  useEffect(() => {
    trackPageView();
  }, []);

  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) {
    return (
      <>
        <nav>
          <Menu socialNetworks={[]} />
        </nav>
        <article>
          <Route path={['/food', '/events', '/live', '/portraits']}>
            <PhotoGallery gallery={[]} />
          </Route>
          <Route exact path={['/', '/contact']}>
            <ContactLoader />
          </Route>
        </article>
      </>
    );
  }
  if (error) {
    return (
      <>
        <nav>
          <Menu socialNetworks={[]} />
        </nav>
        <article>
          <div id="loading-error">On ho! This is awkward :(</div>
        </article>
      </>
    );
  }
  return (
    <>
      <nav>
        <Menu socialNetworks={socialNetworksAdapter.adapt(data)} />
      </nav>
      <article>
        <Route path="/food">
          <PhotoGallery gallery={galleryAdapter.adapt('food', data)} />
        </Route>
        <Route path="/events">
          <PhotoGallery gallery={galleryAdapter.adapt('events', data)} />
        </Route>
        <Route path="/live">
          <PhotoGallery gallery={galleryAdapter.adapt('live', data)} />
        </Route>
        <Route path="/portraits">
          <PhotoGallery gallery={galleryAdapter.adapt('portraits', data)} />
        </Route>
        <Route exact path={['/', '/contact']}>
          <Contact info={contactInfoAdapter.adapt(data)} />
        </Route>
      </article>
    </>
  );
};

export default App;
