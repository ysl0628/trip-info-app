export interface Flight {
  type: 'Outbound' | 'Inbound';
  route: string;
  date: string;
  departs: string;
  arrives: string;
  airline: string;
  flightNo?: string;
  duration?: string;
  seats?: string;
}

export interface Accommodation {
  location: string;
  hotels: string[];
  note?: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  highlights: string[];
  accommodation: Accommodation;
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  transport: string[];
  mapLink?: string;
  description: string;
}

export type Region = '洛杉磯' | '拉斯維加斯/大峽谷' | '聖地牙哥' | '棕櫚泉';

export interface Attraction {
  name: string;
  location: string;
  region: Region;
  description: string;
  image?: string; // Add image property
  category: 'Nature' | 'City' | 'Entertainment' | 'Shopping' | 'Culture' | 'Food';
  cost: string;
  openHours: string;
  mapLink: string;
  tags: string[];
}

export interface FoodSpot {
  name: string;
  location: string;
  region: Region;
  type: 'Food' | 'Coffee' | 'Dessert';
  cuisine: string;
  note?: string;
  mustOrder?: string;
  cost: string;
  openHours: string;
  mapLink: string;
  tags: string[];
}