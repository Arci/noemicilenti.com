import React, { useEffect } from 'react';
import FoodGallery from './components/FoodGallery';
import Contacts from './components/Contacts';
import Menu from './components/Menu';
import './App.css'
import { initGA, trackPageView } from './components/Tracking';

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
        <FoodGallery />
      </article>
    </>
  );
}

export default App;
