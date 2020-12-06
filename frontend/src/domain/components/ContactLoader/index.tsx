import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './styles.css';

const ContactLoader: React.FC = () => (
  <SkeletonTheme color="#cacaca" highlightColor="#dad9d9">
    <section id="load-cover">
      <Skeleton height={500} />
    </section>
    <section id="load-description">
      <Skeleton count={3} />
      <br />
      <br />
      <Skeleton />
      <br />
      <br />
      <Skeleton count={5} />
    </section>
  </SkeletonTheme>
);

export default ContactLoader;
