import * as React from 'react';
import { useFoodGalleryQuery } from '../../generated/graphql';
import FoodGallery from './FoodGallery';

const FoodGalleryContainer = () => {
  const { data, error, loading } = useFoodGalleryQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <FoodGallery data={data} />;
};

export default FoodGalleryContainer;