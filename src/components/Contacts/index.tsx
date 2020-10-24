import React from 'react';
import { Social } from '../../domain/data';
import './styles.css';

interface Props {
  socials: Social[];
}

const Contacts: React.FC<Props> = ({ socials }) => (
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
);

export default Contacts
