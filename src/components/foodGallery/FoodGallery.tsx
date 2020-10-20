import React from 'react';
import { FoodGalleryQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: FoodGalleryQuery;
}

const FoodGallery: React.FC<Props> = ({ data }) => (
  <article className="content">
    <section className="grid" >
      {data.food?.gallery?.photos?.map(
        (photo, i) => (
          <img src={photo?.url} alt={photo?.alternativeText || ""} />
        )
      )}
    </section>
  </article>
);

export default FoodGallery
