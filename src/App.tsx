import React, { useEffect } from 'react';
import { initGA, trackPageView } from './components/Tracking';
import Contacts from './components/Contacts';
import Menu from './components/Menu';
import PhotoGallery from './components/PhotoGallery';
import './App.css'

initGA('G-Z7QCPWVMCG');

const App: React.FC = () => {
  useEffect(() => {
    trackPageView()
  });

  return (
    <>
      <nav>
        <Menu />
        <Contacts />
      </nav>
      <article className="content">
        <PhotoGallery />
      </article>
    </>
  );
}

export default App;
