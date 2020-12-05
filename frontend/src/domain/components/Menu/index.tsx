import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SocialNetwork } from '../../model/data';
import hamburger from '../../../images/hamburger.png';
import facebook from '../../../images/facebook.png';
import youtube from '../../../images/youtube.png';
import instagram from '../../../images/instagram.png';
import vogue from '../../../images/vogue.png';
import './styles.css';

interface Props {
  socialNetworks: SocialNetwork[];
}

const Menu: React.FC<Props> = ({ socialNetworks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const images = {
    facebook, youtube, instagram, vogue,
  };

  return (
    <>
      <button type="button" id="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src={hamburger} alt="menu" />
      </button>
      <section id="logo">
        <p>Noemi Cilenti</p>
        <p>&copy; NC Photography</p>
      </section>
      <section id="social">
        <ul>
          {socialNetworks.map((socialNetwork) => (
            <li key={socialNetwork.name} className={socialNetwork.name}>
              <a href={socialNetwork.url} target="_blank" rel="noopener noreferrer">
                <img src={images[socialNetwork.name]} alt={socialNetwork.name} />
              </a>
            </li>
          ))}
        </ul>
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
  );
};

export default Menu;
