export interface Photo {
  name: string
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats: Formats;
}

export interface Formats {
  small: Format
  thumbnail: Format
}

export interface Format {
  url: string;
  width: number;
  height: number;
}

export interface SocialNetwork {
  url: string;
  name: string;
}
