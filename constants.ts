import { Flight, DayItinerary, Attraction, FoodSpot } from './types';

export const FLIGHTS: Flight[] = [
  {
    type: 'Outbound',
    route: 'TPE (台北) -> ONT (安大略)',
    date: '2026/04/01 (週三)',
    departs: '20:05',
    arrives: '17:05',
    airline: 'STARLUX 星宇航空',
    flightNo: 'JX010',
    duration: '約 12 小時',
    seats: '2位 豪華經濟艙, 3位 經濟艙'
  },
  {
    type: 'Inbound',
    route: 'ONT (安大略) -> TPE (台北)',
    date: '2026/04/13 (週一)',
    departs: '23:10',
    arrives: '04:15 (+2天, 4/15 週三)',
    airline: 'STARLUX 星宇航空',
    flightNo: 'JX009',
    duration: '約 14 小時 5 分',
    seats: '2位 豪華經濟艙, 3位 經濟艙'
  }
];

export const ITINERARY: DayItinerary[] = [
  {
    day: 1,
    date: '4/1 (週三)',
    title: '抵達與安頓',
    description: '傍晚抵達安大略機場，辦理出關手續後前往羅蘭岡住宿點休息，調整時差。',
    highlights: ['安大略國際機場(ONT)', '羅蘭岡(Rowland Heights)'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['Best Western Plus Executive Inn', 'Courtyard by Marriott Hacienda Heights']
    },
    meals: {
      breakfast: '飛機上',
      lunch: '飛機上',
      dinner: '羅蘭岡台式料理 (如: 半畝園)'
    },
    transport: ['接駁車/Uber 前往住宿 (約 30 分鐘)'],
    mapLink: 'https://www.google.com/maps/dir/Ontario+International+Airport/Rowland+Heights'
  },
  {
    day: 2,
    date: '4/2 (週四)',
    title: '海岸風情 Santa Monica',
    description: '領取租車，前往充滿活力的聖塔莫尼卡海灘與碼頭，享受加州陽光與太平洋海風。',
    highlights: ['聖塔莫尼卡碼頭 (Santa Monica Pier)', '66號公路終點'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['原住宿點']
    },
    meals: {
      breakfast: '羅蘭岡台式早餐',
      lunch: '聖塔莫尼卡碼頭周邊',
      dinner: '鼎泰豐 (Din Tai Fung) 或其他餐廳'
    },
    transport: ['自駕 (單程約 1 小時)'],
    mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/Santa+Monica'
  },
  {
    day: 3,
    date: '4/3 (週五)',
    title: '藝術與奢華',
    description: '上午參觀蓋蒂中心欣賞藝術收藏，下午漫步於奢華的比佛利山莊與羅迪歐大道。',
    highlights: ['蓋蒂中心 (The Getty Center)', '比佛利山莊 (Beverly Hills)'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['原住宿點']
    },
    meals: {
      breakfast: '自理',
      lunch: '蓋蒂中心內簡餐',
      dinner: '比佛利山莊或返回羅蘭岡'
    },
    transport: ['自駕 (單程約 50-60 分鐘)'],
    mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/The+Getty/Beverly+Hills'
  },
  {
    day: 4,
    date: '4/4 (週六)',
    title: 'NBA 球賽體驗夜',
    description: '白天輕鬆購物行程，晚上前往 Crypto.com Arena 感受 NBA 現場氣氛。',
    highlights: ['Crypto.com Arena (Lakers/Clippers home)', 'L.A. Live'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['原住宿點']
    },
    meals: {
      breakfast: '自理',
      lunch: '自理',
      dinner: 'L.A. Live 園區'
    },
    transport: ['自駕 (單程約 45 分鐘)'],
    mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/Crypto.com+Arena'
  },
  {
    day: 5,
    date: '4/5 (週日)',
    title: '【跟團】前往拉斯維加斯',
    description: '早晨集合出發前往賭城，途經沙漠風光。晚上自由活動，可參觀百樂宮噴泉或舊城區燈光秀。',
    highlights: ['拉斯維加斯大道', '百樂宮噴泉', 'Fremont Street Experience'],
    departureTime: '08:30',
    departureLocation: '上島大酒樓（羅蘭崗德成行隔壁）；1463 Nogales St, Rowland Heights, CA 91748',
    timeline: [
      {
        time: '08:30',
        period: '上午',
        title: '出發',
        description: '上島大酒樓（羅蘭崗德成行隔壁）；1463 Nogales St, Rowland Heights, CA 91748'
      },
      {
        time: '上午',
        period: '上午',
        title: '早餐',
        description: '可以前一天購買'
      },
      {
        time: '全天',
        period: '全天',
        title: '交通',
        from: '洛杉磯',
        to: '拉斯維加斯',
        distance: '約430公里',
        duration: '約300分鐘'
      },
      {
        time: '下午',
        period: '下午',
        title: '午餐',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '晚上',
        period: '晚上',
        title: '晚餐',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '晚上',
        period: '晚上',
        title: '飯店',
        description: ['拉斯維加斯楓丹白露', '飯店僅供參考，最終入住飯店請以實際預訂為準。']
      }
    ],
    accommodation: {
      location: 'Las Vegas',
      hotels: [{
        name: '拉斯維加斯楓丹白露',
        link: 'https://www.fontainebleaulasvegas.com/'
      }],
      roomAssignment: ['爸爸、媽媽、文馨', '宏翔、小藍']
    },
    meals: {
      breakfast: '自理',
      lunch: '導遊會根據實際情況為您推薦餐食',
      dinner: '導遊會根據實際情況為您推薦餐食'
    },
    transport: ['從洛杉磯出發前往拉斯維加斯；行駛：約430公里/約300分鐘'],
    mapLink: 'https://www.google.com/maps/dir/1463+Nogales+St,+Rowland+Heights,+CA+91748/Las+Vegas',
    feeNote: '本產品有必付項目費用190美金每人，包含：錫安國家公園、布萊斯國家公園、馬蹄灣、大峽谷國家公園、拉斯網紅歡迎招牌打卡&M豆巧克力世界&可口可樂主題店費用，可預訂時選擇對應的可選項，也可在團上將此費用支付給導遊，感謝您的配合~'
  },
  {
    day: 6,
    date: '4/6 (週一)',
    title: '【跟團】錫安國家公園 & 布萊斯峽谷',
    description: '拉斯維加斯 → 錫安國家公園（45分鐘）→ 布萊斯峽谷國家公園（60分鐘）→ 葛蘭峽谷大壩（途徑）→ 鮑威爾湖（途徑）→ 佩吉',
    highlights: ['錫安國家公園', '布萊斯峽谷國家公園', '格倫峽谷大壩', '鮑威爾湖'],
    timeline: [
      {
        time: '上午',
        period: '上午',
        title: '早餐',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '上午',
        period: '上午',
        title: '交通',
        from: '飯店',
        to: '錫安國家公園',
        distance: '約256公里',
        duration: '約210分鐘'
      },
      {
        time: '上午',
        period: '上午',
        title: '景點/場館',
        location: '錫安國家公園',
        activityDuration: '約45分鐘'
      },
      {
        time: '下午',
        period: '下午',
        title: '午餐',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '下午',
        period: '下午',
        title: '交通',
        from: '錫安國家公園',
        to: '布萊斯峽谷國家公園',
        distance: '約135公里',
        duration: '約120分鐘'
      },
      {
        time: '下午',
        period: '下午',
        title: '景點/場館',
        location: '布萊斯峽谷國家公園',
        activityDuration: '約1小時'
      },
      {
        time: '下午',
        period: '下午',
        title: '交通',
        from: '布萊斯峽谷國家公園',
        to: '飯店',
        distance: '約243公里',
        duration: '約180分鐘',
        description: '途徑格倫峽谷大壩、鮑威爾湖'
      },
      {
        time: '下午',
        period: '下午',
        title: '景點/場館',
        location: '格倫峽谷大壩 (外觀)、鮑威爾湖 (外觀)',
        activityDuration: '約1分鐘'
      },
      {
        time: '晚上',
        period: '晚上',
        title: '晚餐',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '晚上',
        period: '晚上',
        title: '飯店',
        description: ['佩奇/鮑威爾湖戴斯套房酒店', '飯店僅供參考，最終入住飯店請以實際預訂為準。']
      }
    ],
    accommodation: {
      location: '佩吉 / 鮑威爾湖',
      hotels: ['佩奇/鮑威爾湖戴斯套房酒店'],
      roomAssignment: ['爸爸、媽媽、文馨', '宏翔、小藍']
    },
    meals: {
      breakfast: '導遊會根據實際情況為您推薦餐食',
      lunch: '導遊會根據實際情況為您推薦餐食',
      dinner: '導遊會根據實際情況為您推薦餐食'
    },
    transport: [
      '從飯店驅車前往錫安國家公園；行駛：約256公里/約210分鐘',
      '從錫安國家公園驅車前往布萊斯峽谷國家公園；行駛：約135公里/約120分鐘',
      '從布萊斯峽谷國家公園驅車前往飯店（途徑格倫峽谷大壩、鮑威爾湖）；行駛：約243公里/約180分鐘'
    ],
    mapLink: 'https://www.google.com/maps/dir/Las+Vegas/Zion+National+Park/Bryce+Canyon+National+Park/Glen+Canyon+Dam/Lake+Powell/Page',
    feeNote: '本產品有必付項目費用190美金每人，包含：錫安國家公園、布萊斯國家公園、馬蹄灣、大峽谷國家公園、拉斯網紅歡迎招牌打卡&M豆巧克力世界&可口可樂主題店費用，可預訂時選擇對應的可選項，也可在團上將此費用支付給導遊，感謝您的配合~'
  },
  {
    day: 7,
    date: '4/7 (週二)',
    title: '【跟團】羚羊峽谷 & 鮑威爾湖',
    description: '深入羚羊峽谷體驗光影魔術，隨後前往鮑威爾湖，傍晚返回拉斯維加斯。',
    highlights: ['下羚羊峽谷 (Lower Antelope Canyon)', '鮑威爾湖 (Lake Powell)'],
    accommodation: {
      location: 'Las Vegas',
      hotels: ['STRAT酒店-娛樂場-塔樓']
    },
    meals: {
      breakfast: '自理',
      lunch: '自理',
      dinner: '返回拉斯維加斯後自理'
    },
    transport: ['旅行團巴士 (返程約 4.5 小時)'],
    mapLink: 'https://www.google.com/maps/dir/Page/Lower+Antelope+Canyon/Lake+Powell/Las+Vegas',
    feeNote: '本產品有必付項目費用190美金每人，包含：錫安國家公園、布萊斯國家公園、馬蹄灣、大峽谷國家公園、拉斯網紅歡迎招牌打卡&M豆巧克力世界&可口可樂主題店費用，可預訂時選擇對應的可選項，也可在團上將此費用支付給導遊，感謝您的配合~'
  },
  {
    day: 8,
    date: '4/8 (週三)',
    title: '【跟團結束】七彩石 & 巧克力工廠',
    description: '參觀網紅景點七彩石，回程停留Barstow Outlets購物，傍晚返回羅蘭岡。',
    highlights: ['Welcome to Fabulous Las Vegas Sign', '七彩石 (Seven Magic Mountains)', 'Barstow Outlets'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['返回原住宿點']
    },
    meals: {
      breakfast: '拉斯維加斯自理',
      lunch: '自理',
      dinner: '羅蘭岡自理'
    },
    transport: ['旅行團巴士 (約 4-5 小時)', '自行搭車返回住宿'],
    mapLink: 'https://www.google.com/maps/dir/Las+Vegas/Seven+Magic+Mountains/Barstow/Rowland+Heights',
    feeNote: '本產品有必付項目費用190美金每人，包含：錫安國家公園、布萊斯國家公園、馬蹄灣、大峽谷國家公園、拉斯網紅歡迎招牌打卡&M豆巧克力世界&可口可樂主題店費用，可預訂時選擇對應的可選項，也可在團上將此費用支付給導遊，感謝您的配合~'
  },
  {
    day: 9,
    date: '4/9 (週四)',
    title: '悠閒海岸線 Malibu',
    description: '沿著太平洋海岸公路 (PCH) 駕駛，前往馬里布享受私人海灘般的寧靜，回程可順道探索洛杉磯周邊小鎮。',
    highlights: ['太平洋海岸公路 (PCH)', '馬里布 (Malibu)'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['原住宿點']
    },
    meals: {
      breakfast: '自理',
      lunch: '馬里布海景餐廳',
      dinner: '返回羅蘭岡'
    },
    transport: ['自駕 (單程約 1.5 小時)'],
    mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/Malibu'
  },
  {
    day: 10,
    date: '4/10 (週五)',
    title: '前往沙漠，入住棕櫚泉',
    description: '退房後前往約書亞樹國家公園，欣賞獨特的沙漠植被，晚間入住度假勝地棕櫚泉。',
    highlights: ['約書亞樹國家公園 (Joshua Tree National Park)', '棕櫚泉 (Palm Springs)'],
    accommodation: {
      location: '棕櫚泉 (Palm Springs)',
      hotels: ['Hyatt Regency Indian Wells Resort & Spa', 'Hilton Palm Springs']
    },
    meals: {
      breakfast: '羅蘭岡',
      lunch: '國家公園前小鎮',
      dinner: '棕櫚泉市中心'
    },
    transport: ['自駕 (前往公園約 2 小時)'],
    mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/Joshua+Tree+National+Park/Palm+Springs'
  },
  {
    day: 11,
    date: '4/11 (週六)',
    title: '沙漠綠洲 & 前往聖地牙哥',
    description: '體驗棕櫚泉空中纜車，午後驅車南下前往美麗的軍港城市聖地牙哥。',
    highlights: ['棕櫚泉空中纜車', '聖地牙哥 (San Diego)', '瓦斯燈街區 (Gaslamp Quarter)'],
    accommodation: {
      location: '聖地牙哥 (San Diego)',
      hotels: ['La Valencia Hotel', 'Manchester Grand Hyatt San Diego']
    },
    meals: {
      breakfast: '棕櫚泉',
      lunch: '途中自理',
      dinner: '瓦斯燈街區'
    },
    transport: ['自駕 (約 2.5 小時)'],
    mapLink: 'https://www.google.com/maps/dir/Palm+Springs/San+Diego'
  },
  {
    day: 12,
    date: '4/12 (週日)',
    title: '聖地牙哥精華遊',
    description: '早晨前往拉霍亞看海獅，下午參觀巴爾波亞公園或中途島號航空母艦。',
    highlights: ['拉霍亞 (La Jolla Cove)', '巴爾波亞公園 (Balboa Park)', '中途島號博物館 (USS Midway)', '小義大利 (Little Italy)'],
    accommodation: {
      location: '聖地牙哥 (San Diego)',
      hotels: ['原住宿點']
    },
    meals: {
      breakfast: '自理',
      lunch: '景點附近',
      dinner: '小義大利區'
    },
    transport: ['自駕 (市區移動約 20 分鐘)'],
    mapLink: 'https://www.google.com/maps/dir/La+Jolla/Balboa+Park/USS+Midway+Museum'
  },
  {
    day: 13,
    date: '4/13 (週一)',
    title: '最後悠閒時光 & 準備返家',
    description: '遊覽科羅納多島與海港村，傍晚前往安大略機場，準備搭機返台。',
    highlights: ['科羅納多島 (Coronado)', '海港村 (Seaport Village)', '安大略機場 (ONT)'],
    accommodation: {
      location: '飛機上',
      hotels: ['無']
    },
    meals: {
      breakfast: '聖地牙哥',
      lunch: '海港村',
      dinner: '機場自理'
    },
    transport: ['自駕前往機場 (約 2 小時)'],
    mapLink: 'https://www.google.com/maps/dir/San+Diego/Seaport+Village/Ontario+International+Airport'
  }
];

export const ATTRACTIONS: Attraction[] = [
  // LA / Orange County
  {
    name: '好萊塢星光大道 (Hollywood Walk of Fame)',
    image: '/images/attractions/hollywood-walk-fame.webp',
    location: 'Hollywood Blvd, Hollywood',
    region: '洛杉磯',
    description: '尋找喜愛明星的手印與星星，感受好萊塢的星光熠熠。',
    category: 'City',
    cost: '免費',
    openHours: '全天開放',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Hollywood+Walk+of+Fame',
    tags: ['地標', '拍照', '好萊塢']
  },
  {
    name: '中國戲院 (TCL Chinese Theatre)',
    image: '/images/attractions/TCL-Chinese-Theatre.jpg',
    location: '6925 Hollywood Blvd, Hollywood',
    region: '洛杉磯',
    description: '好萊塢的地標性電影院，以門前名人的手足印聞名。',
    category: 'Entertainment',
    cost: '外觀免費',
    openHours: '依電影場次',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=TCL+Chinese+Theatre',
    tags: ['電影', '歷史', '地標']
  },
  {
    name: '好萊塢環球影城 (Universal Studios Hollywood)',
    image: '/images/attractions/uni_studios_hollywood.jpg',
    location: '100 Universal City Plaza, Universal City',
    region: '洛杉磯',
    description: '結合電影主題樂園與製片廠，體驗哈利波特、超級任天堂世界等刺激設施。',
    category: 'Entertainment',
    cost: '$109+',
    openHours: '09:00 - 21:00 (建議查官網)',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Universal+Studios+Hollywood',
    tags: ['主題樂園', '親子', '必玩']
  },
  {
    name: '好萊塢標誌 (Hollywood Sign)',
    image: '/images/attractions/Hollywood_Sign.jpg',
    location: 'Griffith Park',
    region: '洛杉磯',
    description: '世界知名的文化地標，可從格里斐斯天文台或 Lake Hollywood Park 觀賞。',
    category: 'Nature',
    cost: '免費',
    openHours: '全天開放',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Lake+Hollywood+Park',
    tags: ['地標', '健行', '拍照']
  },
  {
    name: '聖莫尼卡碼頭海灘 (Santa Monica)',
    image: '/images/attractions/santa-monica-pier.webp',
    location: '200 Santa Monica Pier, Santa Monica',
    region: '洛杉磯',
    description: '加州最著名的海灘地標，66號公路的終點，擁有太平洋遊樂園的摩天輪。',
    category: 'Entertainment',
    cost: '免費進入 (遊樂設施另計)',
    openHours: '06:00 - 22:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Santa+Monica+Pier',
    tags: ['海灘', '親子', '夕陽']
  },
  {
    name: '格里斐斯天文台 (Griffith Observatory)',
    image: '/images/attractions/griffithpark-observatory.webp',
    location: '2800 E Observatory Rd, LA',
    region: '洛杉磯',
    description: '《樂來樂愛你》拍攝場景，可近距離觀看好萊塢標誌與絕美夜景。',
    category: 'Nature',
    cost: '免費入場 (天文劇場收費)',
    openHours: '週二-週五 12:00-22:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Griffith+Observatory',
    tags: ['夜景', '電影場景', '天文']
  },
  {
    name: '中央市場 (Grand Central Market)',
    image: '/images/attractions/grand-central-market.jpg',
    location: '317 S Broadway, Downtown LA',
    region: '洛杉磯',
    description: '超過百年的美食市集，匯集洛杉磯的多元美食，從墨西哥塔可到美式漢堡應有盡有。',
    category: 'Food',
    cost: '依店家',
    openHours: '08:00 - 21:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Grand+Central+Market+Los+Angeles',
    tags: ['美食', '市場', '歷史']
  },
  {
    name: '蓋蒂博物館 (The Getty Center)',
    image: '/images/attractions/The_Getty.webp',
    location: '1200 Getty Center Dr, LA',
    region: '洛杉磯',
    description: '洛杉磯首屈一指的藝術博物館，建築與花園本身就是藝術品，可俯瞰整個LA盆地。需預約入場時間。',
    category: 'Culture',
    cost: '免費入場 (停車 $20)',
    openHours: '10:00 - 17:30 (週一休館)',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=The+Getty+Center+Los+Angeles',
    tags: ['博物館', '風景', '必訪']
  },
  {
    name: '洛杉磯郡立美術館 (LACMA)',
    image: '/images/attractions/lacma.jpg',
    location: '5905 Wilshire Blvd, LA',
    region: '洛杉磯',
    description: '西岸最大的藝術博物館，以戶外的《Urban Light》裝置藝術聞名。',
    category: 'Culture',
    cost: '$25/人',
    openHours: '11:00 - 18:00 (週三休館)',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=LACMA',
    tags: ['藝術', '博物館', '網美點']
  },
  {
    name: '天使鐵路 (Angels Flight Railway)',
    image: '/images/attractions/angelflight.webp',
    location: '351 S Hill St, Downtown LA',
    region: '洛杉磯',
    description: '世界最短的纜索鐵路，也是《樂來樂愛你》的場景之一，連接山頂與中央市場。',
    category: 'City',
    cost: '$1/單程',
    openHours: '06:45 - 22:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Angels+Flight+Railway',
    tags: ['電影場景', '歷史', '交通']
  },
  {
    name: '比佛利山莊 (Beverly Hills)',
    image: '/images/attractions/Beverly-Hills.jpg',
    location: 'Rodeo Drive, Beverly Hills',
    region: '洛杉磯',
    description: '世界知名的奢華購物區，羅迪歐大道充滿精品旗艦店，適合逛街感受氣氛。',
    category: 'City',
    cost: '免費',
    openHours: '全天開放 (店家約 10-18)',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Rodeo+Drive+Beverly+Hills',
    tags: ['購物', '奢華', '拍照']
  },
  {
    name: '農夫市場 (The Original Farmers Market)',
    image: '/images/attractions/original-farmers-market.jpg',
    location: '6333 W 3rd St, LA',
    region: '洛杉磯',
    description: '歷史悠久的戶外市集，鄰近 The Grove 購物中心，充滿美食攤位與商店。',
    category: 'Food',
    cost: '依店家',
    openHours: '10:00 - 20:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=The+Original+Farmers+Market',
    tags: ['美食', '市場', '購物']
  },
  {
    name: '史坦波中心 (Crypto.com Arena)',
    image: '/images/attractions/crypto-com-arena-completes-phase.webp',
    location: '1111 S Figueroa St, LA',
    region: '洛杉磯',
    description: '前身為史坦波中心，是湖人隊、快艇隊的主場，也是舉辦大型演唱會的場地。',
    category: 'Entertainment',
    cost: '依活動',
    openHours: '依活動時間',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Crypto.com+Arena',
    tags: ['NBA', '演唱會', '運動']
  },
  {
    name: '華特迪士尼音樂廳 (Walt Disney Concert Hall)',
    image: '/images/attractions/Walt_Disney_Concert_Hall.jpg',
    location: '111 S Grand Ave, Downtown LA',
    region: '洛杉磯',
    description: '由建築大師 Frank Gehry 設計的解構主義建築，是洛杉磯愛樂的家。',
    category: 'Culture',
    cost: '外觀免費',
    openHours: '導覽時間請查官網',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Walt+Disney+Concert+Hall',
    tags: ['建築', '藝術', '音樂']
  },
  {
    name: '中央圖書館 (Central Library)',
    image: '/images/attractions/la-central-library-.webp',
    location: '630 W 5th St, Downtown LA',
    region: '洛杉磯',
    description: '融合埃及復興與裝飾藝術風格的歷史建築，內部壁畫與中庭非常值得一看。',
    category: 'Culture',
    cost: '免費',
    openHours: '10:00 - 20:00 (週末至18:00)',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Central+Library+Los+Angeles',
    tags: ['建築', '歷史', '圖書館']
  },
  {
    name: '奥维拉街 (Olvera Street)',
    image: '/images/attractions/olvera-st-3.jpg',
    location: 'Downtown LA',
    region: '洛杉磯',
    description: '被稱為「洛杉磯的發源地」，充滿墨西哥風情的市集，可以體驗墨西哥文化與美食。',
    category: 'City',
    cost: '免費',
    openHours: '10:00 - 19:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Olvera+Street',
    tags: ['歷史', '墨西哥', '市集']
  },
  {
    name: '安大略米爾斯購物中心 (Ontario Mills)',
    image: '/images/attractions/Ontario_Mills.jpg',
    location: '1 Mills Cir, Ontario',
    region: '洛杉磯',
    description: '南加州最大的室內 Outlet 之一，品牌眾多，適合天氣炎熱或下雨時的購物行程。',
    category: 'Shopping',
    cost: '免費',
    openHours: '10:00 - 21:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Ontario+Mills',
    tags: ['購物', 'Outlet', '室內']
  },
  // Las Vegas / Grand Canyon
  {
    name: '大峽谷國家公園 (Grand Canyon)',
    image: '/images/attractions/Cape_Royal_Sunset.jpg',
    location: 'Arizona',
    region: '拉斯維加斯/大峽谷',
    description: '世界七大奇景之一，經歷億萬年切割出的壯麗峽谷，南緣設施最完善。',
    category: 'Nature',
    cost: '$35/車',
    openHours: '24小時開放',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Grand+Canyon+National+Park',
    tags: ['世界遺產', '健行', '自然']
  },
  {
    name: '羚羊峽谷 (Lower Antelope Canyon)',
    image: '/images/attractions/Antelope-Canyon-Tours-from-Phoenix-DETOURS-LP.jpg',
    location: 'Page, AZ',
    region: '拉斯維加斯/大峽谷',
    description: '光影交織的狹縫型峽谷，正午時分光線最佳，需參加導覽團。',
    category: 'Nature',
    cost: '約 $50-70/人 (需預約)',
    openHours: '依導覽團時間',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Lower+Antelope+Canyon',
    tags: ['攝影', '奇景']
  },
  {
    name: '馬蹄灣 (Horseshoe Bend)',
    image: '/images/attractions/Horseshoe_Bend_13_February_2023.jpg',
    location: 'Page, AZ',
    region: '拉斯維加斯/大峽谷',
    description: '科羅拉多河在此做出270度大迴轉，站在懸崖邊俯瞰極為震撼。',
    category: 'Nature',
    cost: '$10 (停車費)',
    openHours: '日出至日落',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Horseshoe+Bend+Page',
    tags: ['自然', '拍照']
  },
  {
    name: 'Sphere (拉斯維加斯球體)',
    image: '/images/attractions/Sphere-exosphere.jpg',
    location: '255 Sands Ave, Las Vegas',
    region: '拉斯維加斯/大峽谷',
    description: '2023年新地標，世界最大的球體建築，外部LED螢幕千變萬化。',
    category: 'Entertainment',
    cost: '外觀免費 / 演出約$80+',
    openHours: '依演出時間',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Sphere+Las+Vegas',
    tags: ['新地標', '科技', '表演']
  },
  {
    name: '百樂宮噴泉 (Bellagio Fountains)',
    image: '/images/attractions/Bellagio-Fountains.webp',
    location: '3600 S Las Vegas Blvd',
    region: '拉斯維加斯/大峽谷',
    description: '賭城大道上最經典的免費秀，水舞配合音樂與燈光翩翩起舞。',
    category: 'Entertainment',
    cost: '免費',
    openHours: '每15-30分鐘一場',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Bellagio+Fountains',
    tags: ['經典', '夜景', '免費']
  },

  // San Diego
  {
    name: '中途島號博物館 (USS Midway)',
    image: '/images/attractions/USS-Midway.avif',
    location: '910 N Harbor Dr, San Diego',
    region: '聖地牙哥',
    description: '退役航空母艦改建的軍事博物館，可參觀飛行甲板與眾多戰機。',
    category: 'Culture',
    cost: '約 $39/人',
    openHours: '10:00 - 17:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=USS+Midway+Museum',
    tags: ['軍事', '歷史', '必訪']
  },
  {
    name: '巴爾波亞公園 (Balboa Park)',
    image: '/images/attractions/spotlightbalboapark.webp',
    location: 'San Diego',
    region: '聖地牙哥',
    description: '美國最大的城市文化公園，擁有西班牙殖民復興風格建築與十多座博物館。',
    category: 'Culture',
    cost: '公園免費 / 博物館另計',
    openHours: '全天開放',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Balboa+Park',
    tags: ['建築', '博物館', '花園']
  },
  {
    name: '拉霍亞海灣 (La Jolla Cove)',
    image: '/images/attractions/la-jolla-cove-san-diego-beach.webp',
    location: 'La Jolla, San Diego',
    region: '聖地牙哥',
    description: '風景如畫的海灣，可以看到野生海獅與海豹在沙灘上曬太陽。',
    category: 'Nature',
    cost: '免費',
    openHours: '全天開放',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=La+Jolla+Cove',
    tags: ['海獅', '自然', '夕陽']
  },
  {
    name: '瓦斯燈街區 (Gaslamp Quarter)',
    image: '/images/attractions/san-diegos-gaslamp-quarter.webp',
    location: 'Downtown San Diego',
    region: '聖地牙哥',
    description: '充滿維多利亞式建築的歷史街區，現為餐廳與夜生活的聚集地。',
    category: 'City',
    cost: '免費',
    openHours: '全天開放',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Gaslamp+Quarter',
    tags: ['夜生活', '美食', '歷史']
  },
  {
    name: '勝利之吻雕像 (Unconditional Surrender)',
    image: '/images/attractions/Unconditional-Surrender.webp',
    location: 'Tuna Harbor Park',
    region: '聖地牙哥',
    description: '位於中途島號旁，著名的巨型雕像，重現二戰結束時的經典一吻。',
    category: 'City',
    cost: '免費',
    openHours: '全天開放',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Unconditional+Surrender+Statue',
    tags: ['地標', '拍照']
  },

  // Palm Springs
  {
    name: '約書亞樹國家公園 (Joshua Tree)',
    image: '/images/attractions/JoshuaTreeNationalPark.jpeg.webp',
    location: 'California',
    region: '棕櫚泉',
    description: '奇特的約書亞樹與巨石堆疊的沙漠景觀，是攀岩與觀星勝地。',
    category: 'Nature',
    cost: '$30/車',
    openHours: '24小時開放',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Joshua+Tree+National+Park',
    tags: ['沙漠', '自然', '觀星']
  },
  {
    name: '棕櫚泉空中纜車 (Aerial Tramway)',
    image: '/images/attractions/palm-springs-aerial-tramway.jpg',
    location: '1 Tram Way, Palm Springs',
    region: '棕櫚泉',
    description: '世界最大的旋轉纜車，10分鐘內從沙漠爬升至高山森林，溫差極大。',
    category: 'Nature',
    cost: '約 $36.95/人',
    openHours: '週一-五 10:00起',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Palm+Springs+Aerial+Tramway',
    tags: ['纜車', '風景', '避暑']
  },
  {
    name: 'Cabazon Dinosaurs',
    image: '/images/attractions/CabazonDinosaur.jpg',
    location: 'Cabazon, CA',
    region: '棕櫚泉',
    description: '著名的巨型恐龍雕像，就在Outlet旁邊，經典公路電影場景。',
    category: 'Entertainment',
    cost: '外觀免費',
    openHours: '09:00 - 19:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Cabazon+Dinosaurs',
    tags: ['親子', '拍照']
  },
  {
    name: 'Desert Hills Premium Outlets',
    image: '/images/attractions/desert-hills-premium-outlets.webp',
    location: 'Cabazon, CA',
    region: '棕櫚泉',
    description: '加州最好逛的 Outlet 之一，品牌齊全，距離棕櫚泉約20分鐘。',
    category: 'Shopping',
    cost: '免費',
    openHours: '10:00 - 20:00',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Desert+Hills+Premium+Outlets',
    tags: ['購物', '精品']
  }
];

export const FOOD_SPOTS: FoodSpot[] = [
  // LA / Rowland Heights
  {
    name: '半畝園 (Half & Half)',
    location: 'Rowland Heights',
    region: '洛杉磯',
    type: 'Food',
    cuisine: '台式/飲料',
    cost: '$10-20',
    openHours: '11:00 - 22:30',
    mustOrder: '旦旦麵, 牛肉捲餅',
    note: '伴伴堂奶茶也在附近',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Half+%26+Half+Tea+Express+17575+Colima+Rd+City+of+Industry',
    tags: ['羅蘭岡', '中式', '平價']
  },
  {
    name: '鼎泰豐 (Din Tai Fung)',
    location: 'Century City / Arcadia',
    region: '洛杉磯',
    type: 'Food',
    cuisine: '中式點心',
    cost: '$30-50',
    openHours: '11:00 - 21:30',
    mustOrder: '小籠包, 排骨蛋炒飯',
    note: '建議事先訂位',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Din+Tai+Fung+Westfield+Santa+Anita',
    tags: ['Arcadia', '米其林', '聚餐']
  },
  {
    name: 'In-N-Out Burger',
    location: '加州各地',
    region: '洛杉磯',
    type: 'Food',
    cuisine: '美式速食',
    cost: '$5-10',
    openHours: '10:30 - 01:00',
    mustOrder: 'Double-Double, Animal Style Fries',
    note: '加州特產，絕對必吃',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=In-N-Out+Burger',
    tags: ['連鎖', '必吃', '漢堡']
  },
  {
    name: 'Republique',
    location: '624 S La Brea Ave, LA',
    region: '洛杉磯',
    type: 'Coffee',
    cuisine: '法式早午餐/咖啡',
    cost: '$20-40',
    openHours: '08:00 - 15:00',
    mustOrder: '早午餐, 糕點, 咖啡',
    note: '建築超美，咖啡水準極高',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Republique+624+S+La+Brea+Ave',
    tags: ['Los Angeles', '網美', '早午餐']
  },
  {
    name: 'Blue Bottle Coffee',
    location: 'Beverly Hills / Santa Monica',
    region: '洛杉磯',
    type: 'Coffee',
    cuisine: '咖啡',
    cost: '$6-12',
    openHours: '07:00 - 18:00',
    mustOrder: 'New Orleans Style Iced Coffee',
    note: '藍瓶咖啡',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Blue+Bottle+Coffee+Beverly+Hills',
    tags: ['Santa Monica', '連鎖精品', '手沖']
  },
  {
    name: 'Intelligentsia Coffee',
    location: 'Silver Lake / Venice',
    region: '洛杉磯',
    type: 'Coffee',
    cuisine: '咖啡',
    cost: '$6-15',
    openHours: '07:00 - 19:00',
    mustOrder: 'Pour-over Coffee (手沖)',
    note: '美國第三波咖啡浪潮代表之一，Venice分店氣氛很好',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Intelligentsia+Coffee+Abbot+Kinney+Blvd',
    tags: ['Venice', '精品咖啡', '氣氛佳']
  },

  // Las Vegas
  {
    name: 'Gordon Ramsay Burger',
    location: 'Planet Hollywood, Las Vegas',
    region: '拉斯維加斯/大峽谷',
    type: 'Food',
    cuisine: '美式漢堡',
    cost: '$25-40',
    openHours: '11:00 - 23:00',
    mustOrder: 'Hell\'s Kitchen Burger',
    note: '地獄廚神漢堡店',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Gordon+Ramsay+Burger+Planet+Hollywood',
    tags: ['Las Vegas Strip', '名人餐廳', '漢堡']
  },
  {
    name: 'Bacchanal Buffet',
    location: 'Caesars Palace, Las Vegas',
    region: '拉斯維加斯/大峽谷',
    type: 'Food',
    cuisine: '自助餐',
    cost: '$80-100',
    openHours: '13:00 - 22:00',
    mustOrder: '海鮮, 蟹腳, 肋眼牛排',
    note: '賭城評價最高的 Buffet 之一，海鮮非常豐富',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Bacchanal+Buffet+Caesars+Palace',
    tags: ['Caesars Palace', '吃到飽', '海鮮']
  },
  {
    name: 'Urth Caffé',
    location: 'Wynn, Las Vegas',
    region: '拉斯維加斯/大峽谷',
    type: 'Coffee',
    cuisine: '有機咖啡/輕食',
    cost: '$15-30',
    openHours: '06:30 - 23:00',
    mustOrder: 'Spanish Latte',
    note: '來自LA的有機咖啡名店',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Urth+Caffe+Wynn+Las+Vegas',
    tags: ['Wynn Hotel', '有機', '拉花']
  },
  
  // San Diego
  {
    name: 'Phil\'s BBQ',
    location: 'Point Loma, San Diego',
    region: '聖地牙哥',
    type: 'Food',
    cuisine: '美式燒烤',
    cost: '$20-35',
    openHours: '11:00 - 22:00',
    mustOrder: 'Baby Back Ribs (豬肋排)',
    note: '聖地牙哥排隊名店，肉質極為軟嫩',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Phil\'s+BBQ+Sports+Arena+Blvd',
    tags: ['Point Loma', '排隊店', '肉食']
  },
  {
    name: 'The Fish Market',
    location: 'Next to USS Midway',
    region: '聖地牙哥',
    type: 'Food',
    cuisine: '海鮮',
    cost: '$30-60',
    openHours: '11:30 - 21:00',
    mustOrder: '生蠔, 海鮮湯 (Cioppino)',
    note: '就在中途島號旁，景觀無敵',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=The+Fish+Market+San+Diego+G+Street',
    tags: ['Downtown', '海景', '海鮮']
  },
  {
    name: 'Bird Rock Coffee Roasters',
    location: 'La Jolla / Little Italy',
    region: '聖地牙哥',
    type: 'Coffee',
    cuisine: '咖啡',
    cost: '$5-10',
    openHours: '06:30 - 18:00',
    mustOrder: 'Single Origin Pour Over',
    note: '聖地牙哥本土最佳烘豆商之一，獲獎無數',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Bird+Rock+Coffee+Roasters+La+Jolla',
    tags: ['La Jolla', '在地', '冠軍咖啡']
  },
  {
    name: 'Better Buzz Coffee',
    location: 'Hillcrest / Mission Beach',
    region: '聖地牙哥',
    type: 'Coffee',
    cuisine: '咖啡',
    cost: '$6-12',
    openHours: '05:30 - 20:00',
    mustOrder: 'Best Drink Ever (招牌特調)',
    note: '店面裝潢很美，適合拍照',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Better+Buzz+Coffee+Hillcrest',
    tags: ['San Diego', '在地連鎖', '特調']
  },

  // Palm Springs
  {
    name: 'Shields Date Garden',
    location: 'Indio',
    region: '棕櫚泉',
    type: 'Dessert',
    cuisine: '椰棗奶昔',
    cost: '$8-15',
    openHours: '09:00 - 17:00',
    mustOrder: 'Date Shake (椰棗奶昔)',
    note: '特產椰棗 (Date) 製作，非常濃郁甜美',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Shields+Date+Garden+Indio',
    tags: ['Indio', '特產', '甜點']
  },
  {
    name: 'Kartchner\'s Coffees',
    location: 'Palm Springs',
    region: '棕櫚泉',
    type: 'Coffee',
    cuisine: '咖啡',
    cost: '$5-10',
    openHours: '07:00 - 18:00',
    mustOrder: 'Cold Brew (冷萃咖啡)',
    note: '當地評價很高的獨立咖啡店',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Kartchner\'s+Coffees+Palm+Springs',
    tags: ['Downtown', '獨立咖啡', '冷萃']
  }
];
