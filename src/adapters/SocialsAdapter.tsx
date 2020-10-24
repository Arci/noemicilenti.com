import { DataQuery } from '../generated/graphql';
import { Social } from '../components/Contacts';

export class SocialsAdapter {
  adapt(data: DataQuery): Social[] {
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
