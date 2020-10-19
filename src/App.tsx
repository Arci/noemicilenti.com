import React from 'react';
import FoodGallery from './components/FoodGallery';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <nav id="hamburger">
          <img src="img/hamburger.png" />
        </nav>
        <section id="logo">
          <a href="contact.html">
            <p>Noemi Cilenti</p>
            <p>&copy; NC Photography</p>
          </a>
        </section>
        <section id="links">
          <ul>
            <li><a href="food.html">Food</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="live.html">Live</a></li>
            <li><a href="portraits.html">Portraits</a></li>
            <li><a href="cattivimaestri.html">Cattivi Maestri</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </section>
        <Contacts />
      </nav>
      <article className="content">
        <FoodGallery />
      </article>
    </>
  );
}

export default App;
