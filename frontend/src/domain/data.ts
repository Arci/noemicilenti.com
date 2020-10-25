export interface Photo {
  name: string
  url: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: Formats;
}

export interface Formats {
  small?: Format
  thumbnail?: Format
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

export interface ContactInfo {
  cover?: Photo;
  description: string;
  email: string;
  phone: string;
}
