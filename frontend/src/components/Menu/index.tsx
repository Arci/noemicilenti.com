import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav id="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src="https://noemicilenti.com/img/hamburger.png" alt="menu" />
      </nav>
      <section id="logo">
        <p>Noemi Cilenti</p>
        <p>&copy; NC Photography</p>
      </section>
      <section id="links" className={isOpen ? 'open' : ''}>
        <ul>
          <li><Link to="food">Food</Link></li>
          <li><Link to="events">Events</Link></li>
          <li><Link to="live">Live</Link></li>
          <li><Link to="portraits">Portraits</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </section>
    </>
  )
};

export default Menu
