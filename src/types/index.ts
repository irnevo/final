export interface Destination {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: number;
  state: string;
  highlights: string[];
}

export interface Activity {
  id: string;
  title: string;
  imageUrl: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  duration: string;
  includes: string[];
  availability: string[];
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  amenities: string[];
  description: string;
}

export interface BookingDetails {
  startDate: Date;
  endDate: Date;
  guests: number;
  totalPrice: number;
}