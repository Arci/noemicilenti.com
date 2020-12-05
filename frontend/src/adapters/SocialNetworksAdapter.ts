import { SocialNetwork } from '../domain/model/data';
import { DataQuery } from '../generated/graphql';

class SocialNetworksAdapter {
  adapt = (data: DataQuery): SocialNetwork[] => {
    const socials: DataQuery['social'] = data?.social;
    const result: SocialNetwork[] = [];
    if (socials?.facebook) {
      result.push({
        url: socials.facebook,
        name: 'facebook',
      });
    }
    if (socials?.instagram) {
      result.push({
        url: socials.instagram,
        name: 'instagram',
      });
    }
    if (socials?.vogue) {
      result.push({
        url: socials.vogue,
        name: 'vogue',
      });
    }
    if (socials?.youtube) {
      result.push({
        url: socials.youtube,
        name: 'youtube',
      });
    }
    return result;
  }
}

export default SocialNetworksAdapter;
