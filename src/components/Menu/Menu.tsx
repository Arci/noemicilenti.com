import * as React from 'react';
import './styles.css';


const Menu: React.FC = () => (
  <>
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
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </section>
  </>
);

export default Menu
