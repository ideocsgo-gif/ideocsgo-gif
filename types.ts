export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Apartment {
  id: string;
  title: string;
  title_pl?: string;
  location: string;
  location_pl?: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  description: string;
  description_pl?: string;
  amenities: string[];
  images: string[];
  beds: number;
  baths: number;
  guests: number;
  reviewsList: Review[];
}