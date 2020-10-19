import React from 'react';
import FoodGallery from './components/FoodGallery';
import Contacts from './components/Contacts';
import Menu from './components/Menu';
import './App.css';

function App() {
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
