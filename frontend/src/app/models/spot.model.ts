import { Review } from '@models/review.model';

export interface Address {
  city: string;
  zipcode: string;
  street: string;
}

export interface Spot {
    name: string;
    placeid: string;
    startdate: string;
    address: Address;
    video: string;
    tags: string[];
    image: string;
    backdrops: string[];
    reviewsids: Review[];
  }  