/* eslint-disable react/no-danger */
import React from 'react';
import { ContactInfo } from '../../domain/data';
import './styles.css';

interface Props {
  info: ContactInfo;
}

const Contact: React.FC<Props> = ({ info }) => (
  <>
    {info.cover && (
      <section className="header-image">
        <img src={info.cover.url} alt="cover" />
      </section>
    )}
    <section className="description" dangerouslySetInnerHTML={{ __html: info.description }} />
    <hr />
    <section className="social">
      <p>
        <a href={`mailto:${info.email}`}>
          <img src="https://noemicilenti.com/img/social/email.png" alt="email" />
          <span>{info.email}</span>
        </a>
      </p>
      <p>
        <a href={`tel::${info.phone.replaceAll(' ', '')}`}>
          <img src="https://noemicilenti.com/img/social/phone.png" alt="phone" />
          <span>{info.phone}</span>
        </a>
      </p>
    </section>
  </>
);

export default Contact;
