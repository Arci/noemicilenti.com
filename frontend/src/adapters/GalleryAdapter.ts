import { Formats, Photo } from '../domain/data';
import { DataQuery } from '../generated/graphql';

export class GalleryAdapter {
  adapt(galleryName: string, data: DataQuery): Photo[] {
    const photos = this.fromName(galleryName, data);
    const adapted: Photo[] = photos.flatMap(photo => {
      if (photo) {
        return {
          name: photo.name,
          url: photo.url,
          alternativeText: photo.alternativeText ? photo.alternativeText : undefined,
          caption: photo.caption ? photo.caption : undefined,
          width: photo.width || 0,
          height: photo.height || 0,
          formats: this.adaptFormats(photo.formats)
        }
      } else {
        return []
      }
    })
    return this.sort(adapted)
  }

  private fromName(galleryName: string, data: DataQuery): any[] {
    switch (galleryName) {
      case 'food':
        return data?.food?.gallery || []
      case 'events':
        return data?.event?.gallery || []
      case 'portraits':
        return data?.portrait?.gallery || []
      case 'live':
        return data?.live?.gallery || []
      default:
        return []
    }
  }

  private adaptFormats(formats: any): Formats {
    return {
      small: formats["small"] ? {
        url: formats["small"].url,
        width: formats["small"].width,
        height: formats["small"].height,
      } : undefined,
      thumbnail: formats["small"] ? {
        url: formats["thumbnail"].url,
        width: formats["thumbnail"].width,
        height: formats["thumbnail"].height,
      } : undefined
    }
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

  private getOrdinal(fileName: string): number {
    const match = /[^-]+-(?<ordinal>\d+)/.exec(fileName)
    return Number(match?.groups?.ordinal)
  }
}
