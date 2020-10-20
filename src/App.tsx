import React from 'react';
import FoodGallery from './components/FoodGallery';
import Contacts from './components/Contacts';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <nav>
        <Menu />
        <Contacts />
      </nav>
      <FoodGallery />
    </>
  );
}

export default App;
