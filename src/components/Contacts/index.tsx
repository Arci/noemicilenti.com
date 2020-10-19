import * as React from 'react';
import { useFoodGalleryQuery } from '../../generated/graphql';
import Contacts from './Contacts';

const FoodGalleryContainer = () => {
  const { data, error, loading } = useFoodGalleryQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <Contacts data={data} />;
};

export default FoodGalleryContainer;