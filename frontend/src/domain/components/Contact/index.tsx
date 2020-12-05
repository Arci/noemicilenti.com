/* eslint-disable react/no-danger */
import React from 'react';
import { ContactInfo } from '../../model/data';
import email from '../../../images/email.png';
import phone from '../../../images/phone.png';
import './styles.css';

interface Props {
  info: ContactInfo;
}

const Contact: React.FC<Props> = ({ info }) => (
  <>
    {info.cover && (
      <section id="cover">
        <img src={info.cover.url} alt="cover" />
      </section>
    )}
    <section id="description" dangerouslySetInnerHTML={{ __html: info.description }} />
    <hr />
    <section id="info">
      <p>
        <a href={`mailto:${info.email}`}>
          <img src={email} alt="email" />
          <span>{info.email}</span>
        </a>
      </p>
      <p>
        <a href={`tel:${info.phone.replaceAll(' ', '')}`}>
          <img src={phone} alt="phone" />
          <span>{info.phone}</span>
        </a>
      </p>
    </section>
  </>
);

export default Contact;
