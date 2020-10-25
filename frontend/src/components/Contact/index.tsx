import React from 'react';
import { ContactInfo } from '../../domain/data';
import './styles.css';

interface Props {
  info: ContactInfo;
}

const Contact: React.FC<Props> = () => (
  <h1>contacts</h1>
);

export default Contact;
