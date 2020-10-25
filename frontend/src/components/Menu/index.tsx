import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SocialNetwork } from '../../domain/data';
import './styles.css';

interface Props {
  socials: SocialNetwork[];
}

const Menu: React.FC<Props> = ({ socials }) => {
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
      <section id="social">
        <ul>
          {socials.map((social, i) => (
            <li key={i} className={social.name}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={`https://noemicilenti.com/img/social/${social.name}.png`} alt={social.name} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
};

export default Menu
