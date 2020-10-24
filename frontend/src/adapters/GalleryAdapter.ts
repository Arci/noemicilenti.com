import { Photo } from '../domain/data';
import { DataQuery } from '../generated/graphql';

export class GalleryAdapter {
  adapt(data: DataQuery): Photo[] {
    const photos = data?.food?.gallery?.photos || []
    const adapted: Photo[] = photos.flatMap(photo => {
      if (photo) {
        return {
          name: photo.name,
          url: photo.url,
          alternativeText: photo.alternativeText,
          caption: photo.caption,
          width: photo.width || 0,
          height: photo.height || 0,
          formats: {
            small: {
              url: photo.formats["small"].url,
              width: photo.formats["small"].width,
              height: photo.formats["small"].height,
            },
            thumbnail: {
              url: photo.formats["thumbnail"].url,
              width: photo.formats["thumbnail"].width,
              height: photo.formats["thumbnail"].height,
            }
          }
        }
      } else {
        return []
      }
    })
    return this.sort(adapted)
  }

  private getOrdinal(fileName: string): number {
    const match = /[^-]+-(?<ordinal>\d+)/.exec(fileName)
    return Number(match?.groups?.ordinal)
  }

  private sort(photos: Photo[]): Photo[] {
    return photos.slice().sort(
      (a, b) => {
        const aOrdinal = this.getOrdinal(a.name)
        const bOrdinal = this.getOrdinal(b.name)
        if (aOrdinal > bOrdinal) { return 1; }
        if (aOrdinal < bOrdinal) { return -1; }
        return 0;
      }
    )
  }
}
