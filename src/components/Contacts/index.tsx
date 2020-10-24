import * as React from 'react';
import { FoodGalleryQuery, useFoodGalleryQuery } from '../../generated/graphql';
import Contacts, { Social } from './Contacts';

const FoodGalleryContainer = () => {
  const { data, error, loading } = useFoodGalleryQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <Contacts socials={new SocialsAdapter().adapt(data)} />;
};

class SocialsAdapter {
  adapt(data: FoodGalleryQuery): Social[] {
    const socials = data?.contact?.social
    const result = []
    if (socials?.facebook) {
      result.push({
        url: socials.facebook,
        name: "facebook"
      })
    }
    if (socials?.instagram) {
      result.push({
        url: socials.instagram,
        name: "instagram"
      })
    }
    if (socials?.youtube) {
      result.push({
        url: socials.youtube,
        name: "youtube"
      })
    }
    return result
  }
}


export default FoodGalleryContainer;
