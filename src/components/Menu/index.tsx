import React, { useState } from 'react';
import './styles.css';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (): void => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <nav id="hamburger" onClick={clickHandler}>
        <img src="https://noemicilenti.com/img/hamburger.png" />
      </nav>
      <section id="logo">
        <a href="contact.html">
          <p>Noemi Cilenti</p>
          <p>&copy; NC Photography</p>
        </a>
      </section>
      <section id="links" className={isOpen ? 'links-open' : ''}>
        <ul>
          <li><a href="food.html">Food</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="live.html">Live</a></li>
          <li><a href="portraits.html">Portraits</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </section>
    </>
  )
};

export default Menu
