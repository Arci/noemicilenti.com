import { ContactInfo, Formats, Photo } from '../domain/data';
import { DataQuery, PhotoFragment, Scalars } from '../generated/graphql';

class ContactInfoAdapter {
  adapt(data: DataQuery): ContactInfo {
    return {
      cover: data?.contact?.cover ? this.adaptPhotos(data?.contact?.cover) : undefined,
      description: data?.contact?.description || '',
      email: data?.contact?.email || '',
      phone: data?.contact?.phone || '',
    };
  }

  private adaptPhotos(photo: PhotoFragment): Photo {
    return {
      name: photo.name,
      url: photo.url,
      alternativeText: photo.alternativeText || undefined,
      caption: photo.caption || undefined,
      width: photo.width || 0,
      height: photo.height || 0,
      formats: this.adaptFormats(photo.formats),
    };
  }

  private adaptFormats = (formats: Scalars['JSON']): Formats => ({
    small: formats.small ? {
      url: formats.small.url,
      width: formats.small.width,
      height: formats.small.height,
    } : undefined,
    thumbnail: formats.small ? {
      url: formats.thumbnail.url,
      width: formats.thumbnail.width,
      height: formats.thumbnail.height,
    } : undefined,
  })
}

export default ContactInfoAdapter;
