import { Formats, Photo } from '../domain/model/data';
import { DataQuery, PhotoFragment, Scalars } from '../generated/graphql';

class GalleryAdapter {
  adapt(galleryName: string, data: DataQuery): Photo[] {
    const photos = this.findByName(data?.galleries, galleryName);
    const adapted = this.adaptPhotos(photos);
    return this.sort(adapted);
  }

  private adaptPhotos(photos: PhotoFragment[]): Photo[] {
    return photos.flatMap((photo) => {
      if (photo) {
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
      return [];
    });
  }

  private findByName = (galleries: DataQuery['galleries'], name: string): PhotoFragment[] => {
    const gallery = galleries?.find((it) => it?.title === name);
    return gallery?.photos as PhotoFragment[] || [];
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

  private sort(photos: Photo[]): Photo[] {
    return photos.slice().sort(
      (a, b) => {
        const aOrdinal = this.getOrdinal(a.name);
        const bOrdinal = this.getOrdinal(b.name);
        if (aOrdinal > bOrdinal) { return 1; }
        if (aOrdinal < bOrdinal) { return -1; }
        return 0;
      },
    );
  }

  private getOrdinal = (fileName: string): number => {
    const match = /[^-]+-(?<ordinal>\d+)/.exec(fileName);
    return Number(match?.groups?.ordinal);
  }
}

export default GalleryAdapter;
