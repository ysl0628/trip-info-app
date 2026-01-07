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
      hotels: ['airbnb 住宿'],
      roomAssignment: ['爸爸、媽媽', '文馨', '宏翔、小藍']
    },
    meals: {
      breakfast: '飛機上',
      lunch: '飛機上',
      dinner: '便利店或餐廳外帶'
    },
    transport: [
      '自駕前往 Rowland Heights Airbnb（約 25-30 分鐘）',
      '路線：I-10 East'
    ],
    timeline: [
      {
        time: '17:05',
        period: '下午',
        title: '其他類型',
        type: 'other',
        location: '班機抵達安大略機場（ONT）'
      },
      {
        time: '17:05-18:30',
        period: '下午',
        title: '其他類型',
        type: 'other',
        location: '下飛機 + 領行李 + 出關',
        activityDuration: '約 85 分鐘',
        description: [
          '下飛機、領行李、出海關、走到租車區'
        ]
      },
      {
        time: '18:30-19:45',
        period: '晚上',
        title: '其他類型',
        type: 'other',
        location: '租車手續 + 驗車',
        activityDuration: '約 75 分鐘',
        description: [
          '排隊、簽約、講解保險、驗車狀況、領鑰匙'
        ]
      },
      {
        time: '19:45-20:15',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        from: 'ONT',
        to: 'Rowland Heights Airbnb',
        duration: '約 25-30 分鐘',
        luggage: '行李在車上',
        mapLink: 'https://www.google.com/maps/dir/Ontario+International+Airport/Rowland+Heights',
        description: [
          '路線：I-10 East'
        ]
      },
      {
        time: '20:15-21:00',
        period: '晚上',
        title: '住宿',
        type: 'accommodation',
        location: 'Airbnb Check-in + 放行李、整理',
        activityDuration: '約45分鐘'
      },
      {
        time: '21:00-21:30',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        from: 'Airbnb',
        to: '便利店或餐廳',
        duration: '約 10-15 分鐘',
        mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/7-Eleven',
        description: [
          '便利店：7-Eleven、In-N-Out',
          '便當店：中式、日式便當'
        ]
      },
      {
        time: '21:30-22:30',
        period: '晚上',
        title: '晚餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時',
        description: [
          '回 Airbnb 用晚餐、休息',
          '簡單吃飽就好'
        ]
      },
      {
        time: '22:30',
        period: '晚上',
        title: '住宿',
        type: 'accommodation',
        location: 'airbnb',
        description: [
          '休息',
          '適應時差，早睡準備明天'
        ]
      }
    ],
    mapLink: 'https://www.google.com/maps/dir/Ontario+International+Airport/Rowland+Heights'
  },
  {
    day: 2,
    date: '4/2 (週四)',
    title: '藝術、校園與海灘之旅',
    description: '上午參觀 Getty Center 和 UCLA 校園，中午在 Santa Monica 海灘散步用餐，下午前往 LACMA 拍照，傍晚到農夫市場採買食材，晚上回 Airbnb 自煮晚餐。',
    highlights: ['蓋蒂中心 (Getty Center)', 'UCLA 校園（可選）', 'Santa Monica Pier', 'LACMA Urban Light', '農夫市場 (The Original Farmers Market)'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['airbnb 住宿'],
      roomAssignment: ['爸爸、媽媽', '文馨', '宏翔、小藍']
    },
    meals: {
      breakfast: 'airbnb 早餐',
      lunch: 'Santa Monica 海邊餐廳',
      dinner: 'airbnb 自煮（農夫市場食材）'
    },
    transport: [
      '自駕前往 Getty Center（約 40-50 分鐘）',
      '自駕前往 UCLA（約 10-15 分鐘，可選）',
      '自駕前往 Santa Monica（約 10-15 分鐘）',
      '自駕前往 LACMA（約 12-15 分鐘）',
      '自駕前往農夫市場（約 5-10 分鐘）',
      '自駕回 Airbnb（約 45-60 分鐘）'
    ],
    timeline: [
      {
        time: '8:30-9:30 AM',
        period: '上午',
        title: '早餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時',
        description: [
          '早餐、準備出門'
        ]
      },
      {
        time: '9:30-10:20 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: 'Rowland Heights Airbnb',
        to: 'Getty Center',
        duration: '約 40-50 分鐘',
        mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/The+Getty+Center',
        description: [
          '直接從 Rowland Heights 往西'
        ]
      },
      {
        time: '10:20-10:55 AM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: 'Getty Center',
        activityDuration: '約35分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=The+Getty+Center+Los+Angeles',
        parkingCost: '停車 $20',
        isFreeAdmission: true,
        description: [
          '建築、花園、景觀',
        ]
      },
      {
        time: '10:55-11:20 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        option: '一',
        from: 'Getty Center',
        to: 'UCLA 校園',
        duration: '約 10-15 分鐘',
        mapLink: 'https://www.google.com/maps/dir/The+Getty+Center/UCLA+Campus',
        description: [
          '可選：前往 UCLA 校園'
        ]
      },
      {
        time: '11:20-11:35 AM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        option: '一',
        location: 'UCLA 校園',
        activityDuration: '約15-20分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=UCLA+Campus',
        isFreeAdmission: true,
        description: [
          '加州大學洛杉磯分校美麗校園',
        ]
      },
      {
        time: '11:20-11:35 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        option: '一',
        from: 'UCLA 校園',
        to: 'Santa Monica',
        duration: '約 10-15 分鐘'
      },
      {
        time: '10:55-11:35 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        option: '二',
        from: 'Getty Center',
        to: 'Santa Monica',
        duration: '約 40 分鐘',
        mapLink: 'https://www.google.com/maps/dir/The+Getty+Center/Santa+Monica+Pier',
        description: [
          '跳過 UCLA，直接前往 Santa Monica'
        ]
      },
      {
        time: '11:35 AM-2:15 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        location: 'Santa Monica Pier + 海灘散步 + 逛街 + 午餐',
        activityDuration: '約2小時40分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Santa+Monica+Pier',
        isFreeAdmission: true,
        parkingCost: '$2 - $3.5', 
        description: [
          '導航 Parking Structure 6 或 Parking Structure 8',
          'Third Street Promenade 逛街',
          '海邊餐廳用餐',
          '停車費前 90 分鐘免費，$2 - $3.5'
        ]
      },
      {
        time: '2:15-2:30 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'Santa Monica',
        to: 'LACMA',
        duration: '約 12-15 分鐘',
        mapLink: 'https://www.google.com/maps/dir/Santa+Monica+Pier/LACMA',
        description: [
          'Fairfax 區域'
        ]
      },
      {
        time: '2:30-3:15 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        location: 'LACMA Urban Light',
        activityDuration: '約45分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=LACMA',
        parkingCost: '停車 $20',
        isFreeAdmission: true,
        description: [
          '著名裝置藝術',
        ]
      },
      {
        time: '3:15-3:30 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'LACMA',
        to: '農夫市場',
        duration: '約 5-10 分鐘',
        mapLink: 'https://www.google.com/maps/dir/LACMA/The+Original+Farmers+Market',
        description: [
          '很近，同 Fairfax 區域'
        ]
      },
      {
        time: '3:30-5:15 PM',
        period: '下午',
        title: '其他類型',
        type: 'other',
        location: '農夫市場 (The Original Farmers Market) 採買食材',
        activityDuration: '約1小時45分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=The+Original+Farmers+Market',
        description: [
          '地點：6333 W 3rd St, Los Angeles, CA 90036',
          '新鮮農產品、麵包、起司、食品',
          '準備晚餐',
          '停車驗證免費（90 分鐘-2 小時）'
        ]
      },
      {
        time: '5:15-6:15 PM',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        from: '農夫市場',
        to: 'Rowland Heights Airbnb',
        duration: '約 45-60 分鐘',
        mapLink: 'https://www.google.com/maps/dir/The+Original+Farmers+Market/Rowland+Heights',
        description: [
          '下午塞車'
        ]
      },
      {
        time: '6:15-7:15 PM',
        period: '晚上',
        title: '其他類型',
        type: 'other',
        location: '煮晚餐',
        activityDuration: '約1小時',
        description: [
          '使用農夫市場採買的食材',
          'Airbnb 廚房'
        ]
      },
      {
        time: '7:15-8:30 PM',
        period: '晚上',
        title: '晚餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時15分鐘',
        description: [
          '用餐、休息'
        ]
      }
    ],
    mapLink: 'https://www.google.com/maps/dir//The+Getty+Center/UCLA+Campus/Santa+Monica+Pier/LACMA/The+Original+Farmers+Market'
  },
  {
    day: 3,
    date: '4/3 (週四)',
    title: '好萊塢經典景點之旅',
    description: '上午參觀好萊塢星光大道和 Hollywood Sign，中午前往格里斐斯天文台俯瞰 LA，下午到 Porto\'s Bakery 享用午餐，傍晚在 Pasadena Old Town 逛街購物。',
    highlights: ['好萊塢星光大道 (Hollywood Walk of Fame)', 'Hollywood Sign', '格里斐斯天文台 (Griffith Observatory)', 'Porto\'s Bakery', 'Pasadena Old Town'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['airbnb 住宿']
    },
    meals: {
      breakfast: 'airbnb 早餐',
      lunch: 'Porto\'s Bakery',
      dinner: 'airbnb 自煮晚餐'
    },
    transport: [
      '自駕到 Hollywood Walk of Fame（約 30-40 分鐘）',
      '自駕到 Hollywood Sign（約 5 分鐘）',
      '自駕到 Griffith Observatory（約 12 分鐘）',
      '自駕到 Porto\'s Bakery（約 25-30 分鐘）',
      '自駕到 Pasadena（約 15-20 分鐘）',
      '自駕回 Rowland Heights Airbnb（約 30-40 分鐘）'
    ],
    mapLink: 'https://www.google.com/maps/dir//Hollywood+Walk+of+Fame/Hollywood+Sign/Griffith+Observatory/Porto\'s+Bakery/Pasadena+Old+Town',
    timeline: [
      {
        time: '8:30-9:30 AM',
        period: '上午',
        title: '早餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時',
        description: [
          '早餐、準備出門'
        ]
      },
      {
        time: '9:30-10:00 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: 'Rowland Heights Airbnb',
        to: 'Hollywood Walk of Fame',
        duration: '約 30-40 分鐘',
        mapLink: 'https://www.google.com/maps/dir//Hollywood+Walk+of+Fame',
        description: [
          '自駕到 Hollywood Blvd'
        ]
      },
      {
        time: '10:00-10:30 AM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: '好萊塢星光大道 (Hollywood Walk of Fame)',
        activityDuration: '約30分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Hollywood+Walk+of+Fame',
        parkingCost: '停車 $5-15',
        isFreeAdmission: true,
        description: [
          '看明星名字、拍照',
        ]
      },
      {
        time: '10:30-10:35 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: 'Hollywood Walk of Fame',
        to: 'Hollywood Sign',
        duration: '約5分鐘',
        mapLink: 'https://www.google.com/maps/dir//Lake+Hollywood+Park',
        description: [
          '自駕到 Lake Hollywood Park'
        ]
      },
      {
        time: '10:35-11:00 AM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: 'Hollywood Sign',
        activityDuration: '約25分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Hollywood+Sign',
        isFreeAdmission: true,
        description: [
          '可以在半山拍照',
        ]
      },
      {
        time: '11:00-11:15 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: 'Hollywood Sign',
        to: 'Griffith Observatory',
        duration: '約12分鐘',
        mapLink: 'https://www.google.com/maps/dir//Griffith+Observatory',
        description: [
          '自駕到山上天文台'
        ]
      },
      {
        time: '11:15 AM-12:00 PM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: 'Griffith Observatory（格里斐斯天文台）',
        activityDuration: '約45分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Griffith+Observatory',
        parkingCost: '停車 $10',
        isFreeAdmission: true,
        description: [
          '只看室外景觀、城市景觀、俯瞰 LA',
        ]
      },
      {
        time: '12:00-12:30 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'Griffith Observatory',
        to: 'Porto\'s Bakery',
        duration: '約 25-30 分鐘',
        mapLink: 'https://www.google.com/maps/dir//Porto\'s+Bakery+Downey',
        description: [
          '往南到 Downey'
        ]
      },
      {
        time: '12:30-1:30 PM',
        period: '下午',
        title: '午餐',
        type: 'meal',
        location: 'Porto\'s Bakery',
        activityDuration: '約1小時',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Porto\'s+Bakery+Downey',
        description: [
          '地址：8233 Firestone Blvd, Downey',
          '推薦：Cubano 三明治、Guava Strudel、Potato Ball',
        ]
      },
      {
        time: '1:30-2:00 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'Porto\'s Bakery',
        to: 'Pasadena Old Town',
        duration: '約 15-20 分鐘',
        mapLink: 'https://www.google.com/maps/dir//Pasadena+Old+Town',
        description: [
          '往東'
        ]
      },
      {
        time: '2:00-4:30 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        location: 'Pasadena Old Town',
        activityDuration: '約2.5小時',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Pasadena+Old+Town',
        parkingCost: '停車 $2-5',
        isFreeAdmission: true,
        description: [
          '精品街、咖啡廳、手工藝、拍照',
        ]
      },
      {
        time: '4:30-5:15 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'Pasadena Old Town',
        to: 'Rowland Heights Airbnb',
        duration: '約 30-40 分鐘',
        mapLink: 'https://www.google.com/maps/dir//Rowland+Heights',
        description: [
          '自駕回 Airbnb'
        ]
      },
      {
        time: '5:15-6:30 PM',
        period: '晚上',
        title: '其他類型',
        type: 'other',
        location: 'airbnb',
        activityDuration: '約1小時15分鐘',
        description: [
          '採買晚餐食材、煮晚餐',
          '使用 Day 2 農夫市場採買的食材'
        ]
      },
      {
        time: '6:30-8:00 PM',
        period: '晚上',
        title: '晚餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時30分鐘',
        description: [
          '用餐、休息'
        ]
      }
    ]
  },
  {
    day: 4,
    date: '4/4 (週五)',
    title: 'Downtown LA 歷史探索',
    description: '上午前往 Downtown LA，參觀 Olvera Street 歷史街區、搭乘 Angels Flight Railway 百年電車，逛 Grand Central Market 百年老市場，下午返回 Airbnb 休息。',
    highlights: ['Olvera Street（LA 歷史發源地）', 'Angels Flight Railway（百年電車）', 'Grand Central Market（百年老市場）'],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['airbnb 住宿']
    },
    meals: {
      breakfast: 'airbnb 早餐',
      lunch: 'Grand Central Market 或 Olvera Street',
      dinner: 'airbnb 自煮晚餐'
    },
    transport: [
      '自駕到 Downtown LA（約 30-40 分鐘）',
      'Union Station 停車（$10 all day）',
      '自駕回 Rowland Heights Airbnb（約 45-60 分鐘）'
    ],
    mapLink: 'https://www.google.com/maps/dir//Olvera+Street+Los+Angeles/Angels+Flight+Railway/Grand+Central+Market',
    timeline: [
      {
        time: '8:30-9:30 AM',
        period: '上午',
        title: '早餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時',
        description: [
          '早餐、準備出門'
        ]
      },
      {
        time: '9:30-10:10 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: 'Rowland Heights Airbnb',
        to: 'Downtown LA',
        duration: '約 30-40 分鐘',
        mapLink: 'https://www.google.com/maps/dir//Downtown+Los+Angeles',
        description: [
          '自駕到 Downtown LA'
        ]
      },
      {
        time: '10:10 AM',
        period: '上午',
        title: '其他類型',
        type: 'other',
        location: 'Union Station 停車',
        parkingCost: '停車 $10',
        description: [
          '位置：Chavez & Vignes（後出入）',
          '$10 all day（最划算）'
        ]
      },
      {
        time: '10:10-11:20 AM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: 'Olvera Street（El Pueblo Historical Monument）',
        activityDuration: '約1小時',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Olvera+Street+Los+Angeles',
        isFreeAdmission: true,
        description: [
          '傳統墨西哥街',
          '手工藝品、餐廳、咖啡廳',
        ]
      },
      {
        time: '11:20 AM-12:00 PM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: 'Angels Flight Railway',
        activityDuration: '約40分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Angels+Flight+Railway',
        ticketCost: '門票 $3',
        description: [
          '步行 5 分鐘到達',
          '搭乘往返：$3 紀念票（或 $1.50 one-way）',
          '俯瞰 Downtown'
        ]
      },
      {
        time: '12:00-12:30 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        location: 'Grand Central Market',
        activityDuration: '約30分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Grand+Central+Market+Los+Angeles',
        isFreeAdmission: true,
        description: [
          '位置：在 Angels Flight 下方',
          '食品攤位、新鮮食材',
        ]
      },
      {
        time: '12:30-1:00 PM',
        period: '下午',
        title: '其他類型',
        type: 'other',
        location: 'Union Station',
        activityDuration: '約30分鐘',
        description: [
          '休息或逛街'
        ]
      },
      {
        time: '1:00-2:30 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'Union Station',
        to: 'Rowland Heights Airbnb',
        duration: '約 45-60 分鐘',
        mapLink: 'https://www.google.com/maps/dir//Rowland+Heights',
        description: [
          '自駕回 Airbnb'
        ]
      },
      {
        time: '2:30-8:00 PM',
        period: '下午',
        title: '其他類型',
        type: 'other',
        location: 'airbnb',
        activityDuration: '約5.5小時',
        description: [
          'Airbnb 休息、整理',
          '晚上可選擇出門或在家休息',
        ]
      }
    ],
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
        type: 'meal',
        description: '可以前一天購買'
      },
      {
        time: '全天',
        period: '全天',
        title: '交通',
        type: 'transportation',
        from: '洛杉磯',
        to: '拉斯維加斯',
        distance: '約430公里',
        duration: '約300分鐘',
        mapLink: 'https://www.google.com/maps/dir/Los+Angeles/Las+Vegas'
      },
      {
        time: '下午',
        period: '下午',
        title: '午餐',
        type: 'meal',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '晚上',
        period: '晚上',
        title: '晚餐',
        type: 'meal',
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
        type: 'meal',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '上午',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: '飯店',
        to: '錫安國家公園',
        distance: '約256公里',
        duration: '約210分鐘',
        mapLink: 'https://www.google.com/maps/dir/Las+Vegas/Zion+National+Park'
      },
      {
        time: '上午',
        period: '上午',
        title: '景點/場館',
        type: 'attraction',
        location: '錫安國家公園',
        activityDuration: '約45分鐘'
      },
      {
        time: '下午',
        period: '下午',
        title: '午餐',
        type: 'meal',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '下午',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: '錫安國家公園',
        to: '布萊斯峽谷國家公園',
        distance: '約135公里',
        duration: '約120分鐘',
        mapLink: 'https://www.google.com/maps/dir/Zion+National+Park/Bryce+Canyon+National+Park'
      },
      {
        time: '下午',
        period: '下午',
        title: '景點/場館',
        type: 'attraction',
        location: '布萊斯峽谷國家公園',
        activityDuration: '約1小時'
      },
      {
        time: '下午',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: '布萊斯峽谷國家公園',
        to: '飯店',
        distance: '約243公里',
        mapLink: 'https://www.google.com/maps/dir/Bryce+Canyon+National+Park/Page+AZ',
        duration: '約180分鐘',
        description: '途徑格倫峽谷大壩、鮑威爾湖'
      },
      {
        time: '下午',
        period: '下午',
        title: '景點/場館',
        type: 'attraction',
        location: '格倫峽谷大壩 (外觀)、鮑威爾湖 (外觀)',
        activityDuration: '約1分鐘'
      },
      {
        time: '晚上',
        period: '晚上',
        title: '晚餐',
        type: 'meal',
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
    title: '【跟團】羚羊峽谷 & 大峽谷國家公園',
    description: '今天我們將從佩吉出發，前往羚羊彩穴和馬蹄灣，開啓一段自然奇景之旅。今天的旅程中，您還將有機會去到大峽谷的起源點 - 包偉湖，或者在大峽谷國家公園欣賞科羅拉多河蜿蜒谷底的壯麗景色。最後，我們將帶着滿滿的自然回憶，返回拉斯維加斯。',
    highlights: ['下羚羊峽谷', '馬蹄灣', '大峽谷國家公園'],
    timeline: [
      {
        time: '上午',
        period: '上午',
        title: '早餐',
        type: 'meal',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '上午',
        period: '上午',
        title: '景點/場館',
        type: 'attraction',
        location: '下羚羊峽谷',
        activityDuration: '約2小時',
        description: ['門票', '包含門票、當地接送及嚮導服務費', '參考價格：USD 105']
      },
      {
        time: '上午',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: '下羚羊峽谷',
        to: '馬蹄灣',
        distance: '約12公里',
        duration: '約15分鐘',
        mapLink: 'https://www.google.com/maps/dir/Lower+Antelope+Canyon/Horseshoe+Bend'
      },
      {
        time: '上午',
        period: '上午',
        title: '景點/場館',
        type: 'attraction',
        location: '馬蹄灣',
        activityDuration: '約1小時'
      },
      {
        time: '下午',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: '馬蹄灣',
        to: '大峽谷國家公園',
        distance: '約177公里',
        duration: '約120分鐘',
        mapLink: 'https://www.google.com/maps/dir/Horseshoe+Bend/Grand+Canyon+National+Park'
      },
      {
        time: '下午',
        period: '下午',
        title: '午餐',
        type: 'meal',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '下午',
        period: '下午',
        title: '景點/場館',
        type: 'attraction',
        location: '大峽谷國家公園',
        activityDuration: '約2小時30分鐘',
        description: ['參考價格：USD 190']
      },
      {
        time: '晚上',
        period: '晚上',
        title: '晚餐',
        type: 'meal',
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
      breakfast: '導遊會根據實際情況為您推薦餐食',
      lunch: '導遊會根據實際情況為您推薦餐食',
      dinner: '導遊會根據實際情況為您推薦餐食'
    },
    transport: [
      '從下羚羊峽谷驅車前往馬蹄灣；行駛：約12公里/約15分鐘',
      '從馬蹄灣驅車前往大峽谷國家公園；行駛：約177公里/約120分鐘',
      '從大峽谷國家公園返回拉斯維加斯'
    ],
    mapLink: 'https://www.google.com/maps/dir/Page/Lower+Antelope+Canyon/Horseshoe+Bend/Grand+Canyon+National+Park/Las+Vegas',
    feeNote: [
      '1. 必付費用 USD 190 / 人 (已於購買行程時支付，包含錫安國家公園、布萊斯國家公園、馬蹄灣、大峽谷國家公園、拉斯網紅歡迎招牌打卡&M豆巧克力世界&可口可樂主題店費用)',
      '2. 國家公園費 USD 100 × 3 / 人 (視當場的情況看需不需要支付，現金)',
      '3. 下羚羊谷門票 USD 150 / 人 (已於購買行程時支付)'
    ]
  },
  {
    day: 8,
    date: '4/8 (週三)',
    title: '【跟團結束】拉斯維加斯招牌 & 七彩石',
    description: '拉斯網紅歡迎招牌打卡&M豆巧克力世界&可口可樂主題店（必付項目，60分鐘）→ 飛躍拉斯維加斯（自費，25分鐘）→ 七彩巨石陣（30分鐘）→ 巴斯托 Outlets （120分鐘）→ 洛杉磯',
    highlights: ['歡迎來到絢麗的拉斯維加斯招牌', 'M&M\'s World', '可口可樂主題專賣店', '七彩石', '巴斯托 Outlets'],
    timeline: [
      {
        time: '上午',
        period: '上午',
        title: '早餐',
        type: 'meal',
        description: '導遊會根據實際情況為您推薦餐食',
        activityDuration: '約30分鐘'
      },
      {
        time: '全天',
        period: '全天',
        title: '景點/場館',
        type: 'attraction',
        location: '歡迎來到絢麗的拉斯維加斯招牌 (外觀)、M&M\'s World（拉斯維加斯店） (外觀)、可口可樂主題專賣店（拉斯維加斯店） (外觀)',
        activityDuration: '約1小時',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Welcome+to+Las+Vegas+Sign'
      },
      {
        time: '上午',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: '拉斯維加斯招牌',
        to: '七彩石',
        distance: '約33公里',
        duration: '約30分鐘',
        mapLink: 'https://www.google.com/maps/dir/Welcome+to+Las+Vegas+Sign/Seven+Magic+Mountains'
      },
      {
        time: '上午',
        period: '上午',
        title: '景點/場館',
        type: 'attraction',
        location: '七彩石 (外觀)',
        activityDuration: '約30分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Seven+Magic+Mountains'
      },
      {
        time: '下午',
        period: '下午',
        title: '午餐',
        type: 'meal',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '下午',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: '七彩石',
        to: '巴斯托 Outlets',
        distance: '約220公里',
        duration: '約150分鐘',
        mapLink: 'https://www.google.com/maps/dir/Seven+Magic+Mountains/Barstow+Outlets'
      },
      {
        time: '下午',
        period: '下午',
        title: '景點/場館',
        type: 'attraction',
        location: '巴斯托 Outlets',
        activityDuration: '約2小時',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Barstow+Outlets'
      },
      {
        time: '晚上',
        period: '晚上',
        title: '晚餐',
        type: 'meal',
        description: '導遊會根據實際情況為您推薦餐食'
      },
      {
        time: '全天',
        period: '全天',
        title: '交通',
        type: 'transportation',
        description: '行程結束後，可在以下地點離團：上島大酒樓（羅蘭崗德成行隔壁）；1463 Nogales St, Rowland Heights, CA 91748'
      }
    ],
    accommodation: {
      location: '羅蘭岡 (Rowland Heights)',
      hotels: ['返回原住宿點']
    },
    meals: {
      breakfast: '導遊會根據實際情況為您推薦餐食',
      lunch: '導遊會根據實際情況為您推薦餐食',
      dinner: '導遊會根據實際情況為您推薦餐食'
    },
    transport: [
      '從拉斯維加斯招牌出發前往七彩石；行駛：約33公里/約30分鐘',
      '從七彩石出發前往巴斯托 Outlets；行駛：約220公里/約150分鐘',
      '行程結束後，可在以下地點離團：上島大酒樓（羅蘭崗德成行隔壁）；1463 Nogales St, Rowland Heights, CA 91748'
    ],
    mapLink: 'https://www.google.com/maps/dir/Las+Vegas/Seven+Magic+Mountains/Barstow/Rowland+Heights',
    feeNote: '本產品有必付項目費用190美金每人，包含：錫安國家公園、布萊斯國家公園、馬蹄灣、大峽谷國家公園、拉斯網紅歡迎招牌打卡&M豆巧克力世界&可口可樂主題店費用，可預訂時選擇對應的可選項，也可在團上將此費用支付給導遊，感謝您的配合~'
  },
  {
    day: 9,
    date: '4/9 (週四)',
    title: 'Brea / 西來寺 & 棕櫚泉 VillageFest',
    description: '上午從羅蘭岡出發，可擇一前往 Brea Downtown 逛街購物或到西來寺散散步、享用素食自助午餐；中午過後自駕前往棕櫚泉，下午搭乘空中纜車欣賞沙漠山景，晚上在市中心 VillageFest 夜市散步與用餐。',
    highlights: ['Brea Downtown', '西來寺 (Hsi Lai Temple)', '棕櫚泉空中纜車', 'VillageFest 夜市'],
    accommodation: {
      location: '棕櫚泉 (Palm Springs)',
      hotels: ['棕櫚泉 airbnb 住宿'],
      roomAssignment: ['爸爸、媽媽', '文馨', '宏翔、小藍']
    },
    meals: {
      breakfast: '羅蘭岡自理',
      lunch: 'Brea Downtown / 西來寺素食自助',
      dinner: '棕櫚泉 VillageFest 夜市'
    },
    transport: ['自駕 (單程約 1.5 小時)'],
    timeline: [
      {
        time: '09:00 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: '羅蘭岡',
        to: 'Brea / 西來寺',
        duration: '約30分鐘',
        mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/Brea+CA',
        description: '從羅蘭岡出發，前往 Brea Downtown 或西來寺'
      },
      {
        time: '09:30-11:00 AM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        option: '一',
        location: 'Brea Downtown',
        activityDuration: '約2小時',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Brea+Downtown+CA',
        description: [
          '9:30 AM 抵達 Brea Downtown',
          '9:30-11:00 AM Brea Downtown 散步、購物',
          '11:00-12:15 PM 午餐（Bruxie / Ruby\'s / Cha Cha\'s）'
        ]
      },
      {
        time: '09:30-11:00 AM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        option: '二',
        location: '西來寺',
        activityDuration: '約2小時30分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Hsi+Lai+Temple',
        description: [
          '9:30 AM 抵達西來寺停車場（15-20 分鐘）',
          '9:30-11:00 AM 西來寺自導遊覽（拍照、花園）',
          '11:30-12:15 PM 素食自助午餐（約 USD 10 / 人）'
        ]
      },
      {
        time: '12:15-2:45 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: '洛杉磯',
        to: '棕櫚泉',
        distance: '約220公里',
        duration: '約150分鐘',
        luggage: '帶著行李',
        mapLink: 'https://www.google.com/maps/dir/Los+Angeles/Palm+Springs'
      },
      {
        time: '2:45-4:00 PM',
        period: '下午',
        title: '住宿',
        type: 'accommodation',
        location: '棕櫚泉 airbnb Check-in',
        activityDuration: '約1小時15分鐘',
        description: '放行李、休息'
      },
      {
        time: '4:00-4:15 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'airbnb',
        to: '棕櫚泉空中纜車站',
        duration: '約15分鐘',
        mapLink: 'https://www.google.com/maps/dir/Palm+Springs/Palm+Springs+Aerial+Tramway'
      },
      {
        time: '4:15-6:45 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        location: '棕櫚泉空中纜車',
        activityDuration: '約2小時30分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Palm+Springs+Aerial+Tramway',
        ticketLink: 'https://activity.eztravel.com.tw/detail/TKNKL-92957',
        ticketCost: '門票 $30-35/人',
        description: [
          '[購票]（USD 30-35/人）',
          '下午搭乘空中纜車，欣賞傍晚山景'
        ]
      },
      {
        time: '6:00-10:00 PM',
        period: '晚上',
        title: '景點',
        type: 'attraction',
        location: 'Palm Springs VillageFest',
        activityDuration: '18:00–22:00',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Villagefest+Main+Office+Palm+Springs',
        description: [
          '每週四晚上在 Downtown Palm Canyon Drive 舉辦，是棕櫚泉最熱鬧的活動。',
          '特色：食品攤販、現場表演、手工藝品、街頭藝術展示',
          '美術館週四免費開放',
          '充滿人潮，熱鬧氛圍'
        ]
      }
    ],
    mapLink: 'https://www.google.com/maps/dir/Rowland+Heights/Brea+Downtown/Hsi+Lai+Temple/Palm+Springs'
  },
  {
    day: 10,
    date: '4/10 (週五)',
    title: '約書亞樹淺遊 & 前往聖地牙哥',
    description: '早上在棕櫚泉飯店悠閒享用早餐，前往約書亞樹國家公園淺遊拍照，下午南下自駕前往聖地牙哥並入住 airbnb。可擇一前往拉荷亞灣看海獅後在小義大利區享用晚餐，或直接前往超市買菜回 airbnb 煮晚餐。',
    highlights: ['約書亞樹國家公園 (Joshua Tree National Park)', '聖地牙哥 (San Diego)', '拉荷亞灣 (La Jolla Cove)', '小義大利 (Little Italy)'],
    accommodation: {
      location: '聖地牙哥 (San Diego)',
      hotels: ['airbnb 住宿'],
      roomAssignment: ['爸爸、媽媽', '文馨', '宏翔、小藍']
    },
    meals: {
      breakfast: '棕櫚泉飯店早餐',
      lunch: 'Crossroads Cafe / In-N-Out Burger（Cabazon）/ Natural Sisters Cafe',
      dinner: '選項一：小義大利區 / 選項二：超市買菜回 airbnb 煮'
    },
    transport: [
      '自駕前往約書亞樹國家公園西入口（約 1 小時）',
      '自駕前往聖地牙哥（約 2.5–3 小時）',
      '自駕前往拉荷亞灣（約 15–20 分鐘）',
      '自駕前往小義大利（約 20 分鐘）'
    ],
    timeline: [
      {
        time: '8:30-9:30 AM',
        period: '上午',
        title: '早餐',
        type: 'meal',
        description: '飯店早餐、悠閒起床'
      },
      {
        time: '9:30-10:30 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: '棕櫚泉',
        to: '約書亞樹西入口',
        duration: '約1小時',
        luggage: '行李在車上',
        mapLink: 'https://www.google.com/maps/dir/Palm+Springs/Joshua+Tree+National+Park'
      },
      {
        time: '10:30-12:30 PM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: '約書亞樹國家公園',
        activityDuration: '約2小時',
        ticketCost: '門票 $30/車',
        luggage: '行李在車上',
        description: [
          '約書亞樹淺遊拍照（2 小時）',
          '建議點：Keys View、Skull Rock、Cholla Cactus Garden'
        ]
      },
      {
        time: '12:30-1:00 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        luggage: '行李在車上',
        description: '離開公園、開往餐廳'
      },
      {
        time: '12:45-1:15 PM',
        period: '下午',
        title: '午餐',
        type: 'meal',
        luggage: '帶著行李',
        description: [
          'Crossroads Cafe（西餐沙龍風，香蕉麵包必點，約 USD 10–20）',
          '或 In-N-Out Burger（Cabazon 區快速漢堡）',
          '或 Natural Sisters Cafe（約書亞樹小鎮健康素食）'
        ]
      },
      {
        time: '1:15-4:00 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: '約書亞樹',
        to: '聖地牙哥',
        duration: '約 2.75–3 小時',
        luggage: '帶著行李',
        mapLink: 'https://www.google.com/maps/dir/Joshua+Tree+National+Park/San+Diego'
      },
      {
        time: '4:00-4:30 PM',
        period: '下午',
        title: '住宿',
        type: 'accommodation',
        location: '聖地牙哥 airbnb',
        activityDuration: '約30分鐘',
        description: 'Check-in、放行李、休息'
      },
      {
        time: '4:30-4:50 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'airbnb',
        to: 'La Jolla Cove / 超市',
        duration: '約15-20分鐘',
        mapLink: 'https://www.google.com/maps/dir/San+Diego/La+Jolla+Cove',
        description: '前往選項一或選項二'
      },
      {
        time: '4:50-6:00 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        option: '一',
        location: 'La Jolla Cove（拉荷亞灣）',
        activityDuration: '約1小時10分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=La+Jolla+Cove',
        description: [
          '看海獅、懸崖散步、拍照',
          'Sunny Jim Sea Cave（USD 10/人）'
        ]
      },
      {
        time: '4:30-5:30 PM',
        period: '下午',
        title: '晚餐',
        type: 'meal',
        option: '二',
        location: '超市買菜回 airbnb 煮',
        activityDuration: '約1小時',
        description: [
          '前往超市採買食材',
          '返回 airbnb 自行烹煮晚餐'
        ]
      },
      {
        time: '6:15-6:30 PM',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        option: '一',
        from: 'La Jolla',
        to: 'Little Italy',
        duration: '約20分鐘',
        mapLink: 'https://www.google.com/maps/dir/La+Jolla+Cove/Little+Italy+San+Diego'
      },
      {
        time: '6:30-8:00 PM',
        period: '晚上',
        title: '晚餐',
        type: 'meal',
        option: '一',
        location: 'Little Italy',
        activityDuration: '約1小時30分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Little+Italy+San+Diego',
        description: [
          'Filippi\'s Pizza Grotto（60年老字號披薩+餐廳，USD 15–25/人）',
          'Vincenzo Cucina（高級義大利菜，起司輪麵包必試，USD 30–50/人）',
          'Herb & Wood（主廚餐廳，USD 35–45/人）',
          'Born and Raised（頂級牛排，USD 40–60/人）'
        ]
      },
      {
        time: '8:00-8:30 PM',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        from: 'Little Italy',
        to: 'airbnb',
        duration: '約20-25分鐘',
        mapLink: 'https://www.google.com/maps/dir/Little+Italy+San+Diego/San+Diego',
        description: '選項一：從 Little Italy 返回 airbnb'
      },
      {
        time: '8:45 PM',
        period: '晚上',
        title: '住宿',
        type: 'accommodation',
        location: 'airbnb',
        description: '抵達 airbnb，休息'
      }
    ],
    mapLink: 'https://www.google.com/maps/dir/Palm+Springs/Joshua+Tree+National+Park/San+Diego/La+Jolla+Cove/Little+Italy+San+Diego'
  },
  {
    day: 11,
    date: '4/11 (週六)',
    title: '聖地牙哥城市探索',
    description: '上午在 airbnb 悠閒享用早餐，前往巴爾波亞公園參觀博物館與花園，下午參觀聖地牙哥動物園，傍晚前往托里松州立公園欣賞海景，晚上在 Old Town 享用墨西哥料理。',
    highlights: ['巴爾波亞公園 (Balboa Park)', '聖地牙哥動物園 (San Diego Zoo)', '托里松州立公園 (Torrey Pines State Park)', 'Old Town San Diego'],
    accommodation: {
      location: '聖地牙哥 (San Diego)',
      hotels: ['airbnb 住宿'],
      roomAssignment: ['爸爸、媽媽', '文馨', '宏翔、小藍']
    },
    meals: {
      breakfast: 'airbnb 早餐',
      lunch: 'Balboa Park：Panama 66 / The Prado Restaurant',
      dinner: 'Old Town：Casa Guadalajara / Cafe Coyote / Harrah\'s Cocina'
    },
    transport: [
      '自駕前往 Balboa Park（約 15-20 分鐘）',
      'Balboa Park 內移動（約 5-10 分鐘）',
      '自駕前往 Torrey Pines（約 20-30 分鐘）',
      '自駕前往 Old Town（約 25-30 分鐘）'
    ],
    timeline: [
      {
        time: '9:00-10:00 AM',
        period: '上午',
        title: '早餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時',
        description: 'airbnb 早餐、悠閒起床'
      },
      {
        time: '10:00-10:20 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: 'airbnb',
        to: 'Balboa Park',
        duration: '約15-20分鐘',
        mapLink: 'https://www.google.com/maps/dir/San+Diego/Balboa+Park+San+Diego'
      },
      {
        time: '10:20 AM-1:00 PM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: 'Balboa Park（巴爾波亞公園）',
        activityDuration: '約2小時40分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Balboa+Park+San+Diego',
        description: [
          '選擇 1-2 個博物館或重點花園',
          '玫瑰花園、日本友誼花園、蓮花池、沙漠花園',
          '可驅車移動各區域'
        ]
      },
      {
        time: '12:50-1:00 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'Balboa Park',
        to: '聖地牙哥動物園',
        duration: '約5-10分鐘',
        mapLink: 'https://www.google.com/maps/dir/Balboa+Park+San+Diego/San+Diego+Zoo',
        description: 'Balboa Park 內移動'
      },
      {
        time: '1:00-2:00 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        location: '聖地牙哥動物園 (可選)',
        activityDuration: '約1小時',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=San+Diego+Zoo',
        ticketLink: 'https://activity.eztravel.com.tw/detail/TKNKL-6698',
        ticketCost: '門票 $60-70/人',
        description: [
          '[購票]（USD 60-70/人）',
          '乘坐遊園車',
          '重點看大貓科動物、鳥舍'
        ]
      },
      {
        time: '2:00-3:30 PM',
        period: '下午',
        title: '午餐',
        type: 'meal',
        location: 'Balboa Park',
        activityDuration: '約1小時30分鐘',
        description: [
          'Panama 66（露天咖啡館）',
          'The Prado Restaurant（西班牙風格，USD 15-25/人）'
        ]
      },
      {
        time: '3:30-3:50 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'Balboa Park',
        to: 'Torrey Pines / Old Town',
        duration: '約20-30分鐘 / 約25-30分鐘',
        mapLink: 'https://www.google.com/maps/dir/Balboa+Park+San+Diego/Torrey+Pines+State+Park',
        description: '前往選項一或選項二'
      },
      {
        time: '3:50-5:30 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        option: '一',
        location: 'Torrey Pines State Park（托里松州立公園）',
        activityDuration: '約1小時40分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Torrey+Pines+State+Park',
        parkingCost: '停車 $20/日',
        isFreeAdmission: true,
        description: [
          'Guy Fleming Trail（0.7 英里簡易步道，20-30 分鐘），俯瞰海景',
          '5:30-6:00 PM 自駕前往 Old Town（約25-30分鐘）',
          '6:00-7:30 PM Old Town 晚餐'
        ]
      },
      {
        time: '4:00-6:00 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        option: '二',
        location: 'Old Town San Diego',
        activityDuration: '約2小時',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Old+Town+San+Diego',
        description: [
          '參觀 Old Town 歷史街區',
          '可在此享用晚餐：',
          'Casa Guadalajara（傳統墨西哥菜，室外露台，USD 15-28/人）',
          'Cafe Coyote（美食家推薦墨西哥菜，USD 12-22/人）',
          'Harrah\'s Cocina（道地風味，USD 15-25/人）'
        ]
      },
      {
        time: '6:00-8:00 PM',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        from: 'Old Town / Torrey Pines',
        to: 'airbnb',
        duration: '約25-35分鐘',
        mapLink: 'https://www.google.com/maps/dir/Old+Town+San+Diego/San+Diego',
        description: '從選項一或選項二返回 airbnb（選項一約 7:30 PM 出發，選項二約 6:00 PM 出發）'
      },
      {
        time: '8:45 PM',
        period: '晚上',
        title: '住宿',
        type: 'accommodation',
        location: 'airbnb',
        description: '抵達 airbnb，休息'
      }
    ],
    mapLink: 'https://www.google.com/maps/dir/San+Diego/Balboa+Park/San+Diego+Zoo/Torrey+Pines+State+Park/Old+Town+San+Diego'
  },
  {
    day: 12,
    date: '4/12 (週日)',
    title: '聖地牙哥精華遊',
    description: '上午參觀 USS Midway 航母博物館，中午在 Seaport Village 享用午餐，下午前往科羅納多島參觀 Hotel del Coronado 並散步購物，傍晚搭乘渡輪返回市中心，晚上參觀煤氣燈街區後前往超市買菜回 airbnb 煮晚餐。',
    highlights: ['USS Midway 航母博物館', 'Seaport Village', '科羅納多島 (Coronado Island)', '煤氣燈街區 (Gaslamp Quarter)'],
    accommodation: {
      location: '聖地牙哥 (San Diego)',
      hotels: ['airbnb 住宿'],
      roomAssignment: ['爸爸、媽媽', '文馨', '宏翔、小藍']
    },
    meals: {
      breakfast: 'airbnb 早餐',
      lunch: 'Seaport Village：The Fish Market / Puesto / Ironside Fish & Oyster / Hard Rock Cafe',
      dinner: '超市買菜回 airbnb 煮'
    },
    transport: [
      '自駕前往 USS Midway（約 15-20 分鐘）',
      '步行前往 Seaport Village（約 5 分鐘）',
      '自駕前往 Coronado Island（約 15-20 分鐘）',
      'Coronado 渡輪返回 Downtown（約 30 分鐘）',
      '自駕前往煤氣燈街區（約 15 分鐘）',
      '自駕前往超市（約 15-20 分鐘）'
    ],
    timeline: [
      {
        time: '8:30-9:30 AM',
        period: '上午',
        title: '早餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時',
        description: 'airbnb 早餐、悠閒起床'
      },
      {
        time: '9:30-9:45 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: 'airbnb',
        to: 'USS Midway（Seaport Village）',
        duration: '約15-20分鐘',
        mapLink: 'https://www.google.com/maps/dir/San+Diego/USS+Midway+Museum'
      },
      {
        time: '9:45 AM-12:30 PM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: 'USS Midway 航母博物館',
        activityDuration: '約2小時45分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=USS+Midway+Museum',
        ticketLink: 'https://activity.eztravel.com.tw/detail/TKNKL-6525',
        ticketCost: '門票 $39-41/人',
        description: [
          '[購票]（USD 39-41/人）',
          '參觀真實戰艦、駕駛艙、飛機展示',
          '有中文語音導覽'
        ]
      },
      {
        time: '12:30-12:35 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'USS Midway',
        to: 'Seaport Village',
        duration: '約5分鐘',
        mapLink: 'https://www.google.com/maps/dir/USS+Midway+Museum/Seaport+Village+San+Diego',
        description: '步行'
      },
      {
        time: '12:35-2:05 PM',
        period: '下午',
        title: '午餐',
        type: 'meal',
        location: 'Seaport Village',
        activityDuration: '約1小時30分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Seaport+Village+San+Diego',
        description: [
          'The Fish Market（海鮮自助，USD 18-35/人）',
          'Puesto（墨西哥菜，USD 15-28/人）',
          'Ironside Fish & Oyster（海鮮，USD 20-40/人）',
          'Hard Rock Cafe（美式速食，USD 15-25/人）'
        ]
      },
      {
        time: '2:05-2:25 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: 'Seaport Village',
        to: 'Coronado Bridge',
        duration: '約15-20分鐘'
      },
      {
        time: '2:25-4:35 PM',
        period: '下午',
        title: '景點',
        type: 'attraction',
        location: 'Coronado Island（科羅納多島）',
        activityDuration: '約2小時10分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Coronado+Island+San+Diego',
        description: [
          'Hotel del Coronado 拍照（著名粉紅宮殿飯店，免費拍照）',
          'Orange Avenue 散步購物',
          'Centennial Park 看聖地牙哥天際線',
          '海灘散步',
          '可租自行車環島'
        ]
      },
      {
        time: '4:35-5:35 PM',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        from: 'Coronado',
        to: 'Downtown',
        duration: '約30分鐘',
        description: [
          'Coronado 渡輪回市中心',
          '看灣景和城市景觀',
          'USD 5/人',
        ]
      },
      {
        time: '5:35-5:50 PM',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        from: 'Downtown',
        to: '煤氣燈街區 (可選)',
        duration: '約15分鐘'
      },
      {
        time: '5:50-6:35 PM',
        period: '晚上',
        title: '景點',
        type: 'attraction',
        location: '煤氣燈街區 (Gaslamp Quarter) (可選)',
        activityDuration: '約45分鐘',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Gaslamp+Quarter+San+Diego',
        description: [
          '參觀歷史街區',
          '散步、拍照'
        ]
      },
      {
        time: '6:35-7:05 PM',
        period: '晚上',
        title: '交通',
        type: 'transportation',
        from: '煤氣燈街區',
        to: '超市',
        duration: '約15-20分鐘',
        description: '前往超市採買食材'
      },
      {
        time: '7:05 PM',
        period: '晚上',
        title: '住宿',
        type: 'accommodation',
        location: 'airbnb',
        description: [
          '返回 airbnb',
          '晚餐+休息'
        ]
      }
    ],
    mapLink: 'https://www.google.com/maps/dir/San+Diego/USS+Midway+Museum/Seaport+Village/Coronado+Island/Gaslamp+Quarter+San+Diego'
  },
  {
    day: 13,
    date: '4/13 (週一)',
    title: '最後悠閒時光 & 準備返家',
    description: '上午在 Ocean Beach 享受最後的海灘時光，下午可選擇購物或自由活動，傍晚前往安大略機場，準備搭機返台。',
    highlights: ['Ocean Beach', '自由活動（購物/散步）', '安大略機場 (ONT)'],
    accommodation: {
      location: '飛機上',
      hotels: ['無']
    },
    meals: {
      breakfast: 'airbnb 早餐',
      lunch: 'Ocean Beach 海灘餐廳',
      dinner: '機場自理'
    },
    transport: [
      '自駕前往 Ocean Beach（約 20 分鐘）',
      '自駕前往安大略機場（約 115 英里，2 小時車程）',
      '路線：I-15 North → I-10 East → I-215 North → ONT'
    ],
    timeline: [
      {
        time: '9:00-10:00 AM',
        period: '上午',
        title: '早餐',
        type: 'meal',
        location: 'airbnb',
        activityDuration: '約1小時',
        description: [
          'airbnb 早餐、悠閒起床'
        ]
      },
      {
        time: '10:00-10:30 AM',
        period: '上午',
        title: '其他類型',
        type: 'other',
        location: 'airbnb',
        activityDuration: '約30分鐘',
        description: [
          '整理行李、Airbnb Check-out'
        ]
      },
      {
        time: '10:30-10:50 AM',
        period: '上午',
        title: '交通',
        type: 'transportation',
        from: 'airbnb',
        to: 'Ocean Beach',
        duration: '約20分鐘'
      },
      {
        time: '10:50 AM-12:30 PM',
        period: '上午',
        title: '景點',
        type: 'attraction',
        location: 'Ocean Beach',
        activityDuration: '約1小時40分鐘',
        luggage: '行李在車上',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Ocean+Beach+San+Diego',
        description: [
          '沙灘漫步、拍照',
          'Oceanside Pier 走走'
        ]
      },
      {
        time: '12:30-2:00 PM',
        period: '下午',
        title: '午餐',
        type: 'meal',
        location: 'Ocean Beach 海灘餐廳',
        activityDuration: '約1小時30分鐘',
        luggage: '行李在車上',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Ocean+Beach+San+Diego+restaurants',
        description: [
          'The Taco Stand（墨西哥塔可）',
          'The Cottage（美式早午餐）',
          'Hodad\'s（經典漢堡）',
          'Puesto（墨西哥菜）'
        ]
      },
      {
        time: '2:00-4:00 PM',
        period: '下午',
        title: '自由活動',
        location: '三選一',
        activityDuration: '約2小時',
        luggage: '行李在車上',
        description: [
          '① Fashion Valley Mall 購物（約 20 分鐘車程）',
          '② Seaport Village 散步（約 25 分鐘車程）',
          '③ 直接前往機場'
        ]
      },
      {
        time: '4:00-6:00 PM',
        period: '下午',
        title: '交通',
        type: 'transportation',
        from: '聖地牙哥',
        to: '安大略機場 (ONT)',
        duration: '約2小時',
        distance: '約 115 英里',
        luggage: '帶著行李',
        description: [
          '路線：I-15 North → I-10 East → I-215 North → ONT'
        ]
      },
      {
        time: '6:00-6:30 PM',
        period: '晚上',
        title: '其他類型',
        type: 'other',
        location: '安大略機場 (ONT)',
        activityDuration: '約30分鐘',
        description: [
          '停車、取行李、Check-in',
          '國際航班建議 3 小時前到達（20:10 前）'
        ]
      },
      {
        time: '23:10 PM',
        period: '晚上',
        title: '其他類型',
        type: 'other',
        location: '班機起飛',
        description: [
          '祝旅途愉快！'
        ]
      }
    ],
    mapLink: 'https://www.google.com/maps/dir/San+Diego/Ocean+Beach+San+Diego/Ontario+International+Airport'
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
    name: 'Porto\'s Bakery and Cafe',
    location: '洛杉磯',
    region: '洛杉磯',
    type: 'Food',
    cuisine: '古巴/拉丁風味麵包店',
    cost: '$5-15',
    openHours: '06:30 - 20:00',
    mustOrder: 'Potato Ball, Cheese Roll, Guava & Cheese Strudel',
    note: '洛杉磯最受歡迎的古巴麵包店，價格實惠，排隊名店',
    mapLink: 'https://maps.app.goo.gl/iQUfp4PZJWaNkLnV9?g_st=il',
    tags: ['洛杉磯', '麵包店', '平價', '必吃']
  },
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
  },
  {
    name: 'Ernest Coffee',
    location: 'Palm Springs',
    region: '棕櫚泉',
    type: 'Coffee',
    cuisine: '精品咖啡',
    cost: '$5-10',
    openHours: '07:00 - 18:00',
    mustOrder: 'Pour-over, Espresso drinks',
    note: '本地精品咖啡店，氣氛輕鬆',
    mapLink: 'https://maps.app.goo.gl/dmt2ySSQwCgLmjnBA',
    tags: ['Palm Springs', '精品咖啡', '在地']
  },
  {
    name: 'Cafe La Jefa',
    location: 'Palm Springs',
    region: '棕櫚泉',
    type: 'Food',
    cuisine: '永續咖啡 / 健康餐點',
    cost: '$10-25',
    openHours: '07:00 - 15:00',
    mustOrder: '咖啡飲品, 早餐碗, 三明治',
    note: '主打永續咖啡與健康餐點的早午餐咖啡店',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Cafe+La+Jefa+Palm+Springs',
    tags: ['Palm Springs', '永續', '健康餐']
  },
  {
    name: 'Ice Cream & Shoppe',
    location: 'Palm Springs',
    region: '棕櫚泉',
    type: 'Dessert',
    cuisine: '冰淇淋',
    cost: '$5-10',
    openHours: '12:00 - 21:00',
    mustOrder: '自製冰淇淋, 特調口味',
    note: '結合選物店的冰淇淋小店',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Ice+Cream+%26+Shoppe+Palm+Springs',
    tags: ['Palm Springs', '冰淇淋', '甜點']
  },
  {
    name: 'Carmela Ice Cream',
    location: 'Palm Springs',
    region: '棕櫚泉',
    type: 'Dessert',
    cuisine: '冰淇淋 / 甜點',
    cost: '$5-10',
    openHours: '12:00 - 21:00',
    mustOrder: '季節口味冰淇淋',
    note: '主打天然食材與香草風味的冰淇淋品牌',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Carmela+Ice+Cream+Palm+Springs',
    tags: ['Palm Springs', '冰淇淋', '甜點']
  }
];
