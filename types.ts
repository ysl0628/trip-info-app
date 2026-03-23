export interface Flight {
  type: "Outbound" | "Inbound";
  route: string;
  date: string;
  departs: string;
  arrives: string;
  airline: string;
  flightNo?: string;
  duration?: string;
  seats?: string;
}

export interface Hotel {
  name: string;
  link?: string;
  address?: string;
}

export type DescriptionLine = string | { text: string; link: string };

export interface Accommodation {
  location: string;
  hotels: (string | Hotel)[];
  note?: string;
  roomAssignment?: string[];
}

export interface WeatherLocation {
  name: string;
  latitude: number;
  longitude: number;
  timezone?: string;
}

export interface TimelineItem {
  time: string;
  period?: string;
  title: string;
  type?: "transportation" | "attraction" | "meal" | "accommodation" | "other";
  description?: string | DescriptionLine[];
  option?: string;
  from?: string;
  to?: string;
  distance?: string;
  duration?: string;
  location?: string;
  activityDuration?: string;
  mapLink?: string;
  ticketLink?: string;
  openingHours?: string;
  infoLink?: string;
  luggage?: string;
  parkingCost?: string;
  ticketCost?: string;
  isFreeAdmission?: boolean;
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  highlights: string[];
  weatherLocations?: WeatherLocation[];
  accommodation: Accommodation;
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  transport: string[];
  mapLink?: string;
  description: string | string[];
  feeNote?: string | string[];
  departureTime?: string;
  departureLocation?: string;
  timeline?: TimelineItem[];
  referenceLinks?: Array<{ label: string; url: string }>;
}

export type Region = string;

export interface Attraction {
  name: string;
  location: string;
  region: Region;
  description: string;
  image?: string;
  category: "Nature" | "City" | "Entertainment" | "Shopping" | "Culture" | "Food";
  cost: string;
  openHours: string;
  mapLink: string;
  tags: string[];
}

export interface FoodSpot {
  name: string;
  location: string;
  region: Region;
  type: "Food" | "Coffee" | "Dessert";
  cuisine: string;
  note?: string;
  mustOrder?: string;
  cost: string;
  openHours: string;
  mapLink: string;
  tags: string[];
}
