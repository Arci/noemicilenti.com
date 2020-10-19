import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { FoodGalleryQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: FoodGalleryQuery;
}

const FoodGallery: React.FC<Props> = ({ data }) => (
  <GridList cellHeight={160} cols={3}>
    {data.food?.gallery?.photos?.map((photo, i) => (
      <GridListTile key={i} cols={1}>
        <img src={photo?.url} alt={photo?.alternativeText || ""} />
      </GridListTile>
    ))}
  </GridList>
);

export default FoodGallery
