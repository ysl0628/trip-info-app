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

export interface Hotel {
  name: string;
  link?: string;
}

export interface Accommodation {
  location: string;
  hotels: (string | Hotel)[];
  note?: string;
  roomAssignment?: string[]; // 分房表，每個字串代表一房的成員
}

export interface TimelineItem {
  time: string;
  period?: string; // 上午、下午、晚上等
  title: string;
  description?: string | string[]; // 改為可選
  // 選項類型（例如「1」「2」用來標記選項一/二）
  option?: string;
  // 交通相關
  from?: string; // 出發地
  to?: string; // 目的地
  distance?: string; // 行駛距離
  duration?: string; // 行駛時間
  // 景點相關
  location?: string; // 景點地點
  activityDuration?: string; // 活動時間
  mapLink?: string; // 地圖連結
  ticketLink?: string; // 購票連結
  luggage?: string; // 行李注意事項
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
  description: string | string[];
  feeNote?: string | string[];
  departureTime?: string;
  departureLocation?: string;
  timeline?: TimelineItem[];
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