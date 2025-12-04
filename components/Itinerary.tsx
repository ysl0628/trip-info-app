import React, { useState } from 'react';
import { ITINERARY } from '../constants';
import { Map, BedDouble, Utensils, Bus, Car, X, ExternalLink, Navigation, Clock } from 'lucide-react';
import { DayItinerary } from '../types';

export const Itinerary: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState<DayItinerary | null>(null);
  const [selectedDay, setSelectedDay] = useState<number>(ITINERARY[0]?.day ?? 1);

  const getEmbedUrl = (url: string) => {
    try {
      if (url.includes('/dir/')) {
        const dirPart = url.split('/dir/')[1];
        const cleanDirPart = dirPart.split('?')[0]; 
        const parts = cleanDirPart.split('/').filter(p => p.length > 0);
        if (parts.length >= 2) {
          const saddr = parts[0];
          const daddr = parts.slice(1).join('+to:');
          return `https://maps.google.com/maps?saddr=${saddr}&daddr=${daddr}&output=embed`;
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  };

  const item = ITINERARY.find(d => d.day === selectedDay);

  if (!item) {
    return <div className="p-4 text-center text-stone-500">請選擇一天來查看行程。</div>;
  }

  const isGroupTour = item.title.includes('跟團');

  return (
    <div className="pb-20">
      {/* Pills Tab Navigation */}
      <div className="relative z-20 py-2 -mx-4 px-4 mb-8 md:mb-10">
        <div className="flex overflow-x-auto p-1 gap-2 no-scrollbar md:justify-center md:flex-wrap">
          {ITINERARY.map(tabItem => (
            <button
              key={tabItem.day}
              onClick={() => setSelectedDay(tabItem.day)}
              className={`
                flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border
                ${
                  selectedDay === tabItem.day
                    ? 'bg-stone-900 text-white border-stone-900 shadow-lg scale-105'
                    : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300'
                }
              `}
            >
              <span className="opacity-60 mr-1.5">Day</span>{tabItem.day}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content for selected day */}
      <div className="mt-6" key={item.day}>
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">{item.date}</span>
                    {isGroupTour && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${isGroupTour ? 'bg-amber-100 text-amber-700 border-amber-200' : ''}`}>
                            跟團行程
                        </span>
                    )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 leading-tight">
                    {item.title.replace('【跟團】', '').replace('【跟團結束】', '')}
                </h3>
            </div>
            {item.mapLink && (
              <button 
                onClick={() => setSelectedMap(item)}
                className="flex-shrink-0 w-full md:w-auto self-start md:self-center flex items-center justify-center gap-2 text-sm font-bold px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-300 transition-colors shadow-sm"
              >
                <Map size={16} />
                <span>本日路線圖</span>
              </button>
            )}
        </div>

        {/* Page Content */}
        <div className="space-y-8">
            {/* Description */}
            <p className="text-stone-700 leading-relaxed text-base md:text-lg text-justify max-w-4xl">
              {item.description}
            </p>
            
            {/* Highlights */}
            <div>
                <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">本日重點</h4>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <span key={idx} className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                        isGroupTour 
                        ? 'bg-amber-50 text-amber-800 border-amber-100' 
                        : 'bg-stone-100 text-stone-600 border-stone-200'
                    }`}>
                      {highlight}
                    </span>
                  ))}
                </div>
            </div>

            {/* Info Blocks (Accommodation & Food) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Hotel */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                    <div className="p-2.5 bg-stone-100 rounded-lg text-stone-700 shrink-0">
                        <BedDouble size={20} />
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">住宿</h4>
                        <p className="text-base font-bold text-stone-800 truncate">{item.accommodation.location}</p>
                        <div className="text-sm text-stone-500 mt-1.5 space-y-1">
                            {item.accommodation.hotels.map((h, i) => <div key={i} className="truncate">{h}</div>)}
                        </div>
                    </div>
                </div>

                {/* Food */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                    <div className="p-2.5 bg-stone-100 rounded-lg text-stone-700 shrink-0">
                        <Utensils size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">餐食</h4>
                        <div className="space-y-1.5 text-sm text-stone-600">
                            <div className="flex gap-2 items-center"><span className="w-10 text-xs font-bold text-stone-400 shrink-0">早餐</span> <span className="truncate">{item.meals.breakfast}</span></div>
                            <div className="flex gap-2 items-center"><span className="w-10 text-xs font-bold text-stone-400 shrink-0">午餐</span> <span className="truncate">{item.meals.lunch}</span></div>
                            <div className="flex gap-2 items-center"><span className="w-10 text-xs font-bold text-stone-400 shrink-0">晚餐</span> <span className="truncate">{item.meals.dinner}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transport */}
            {item.transport && item.transport.length > 0 && (
                <div className="pt-6 border-t border-stone-200">
                    <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">交通方式</h4>
                    <div className="flex items-center gap-3">
                        <div className="text-stone-500 shrink-0">
                            {item.transport.some(t => t.includes('巴士')) ? <Bus size={20} /> : <Car size={20} />}
                        </div>
                        <div className="flex-1 text-base text-stone-700">
                            {item.transport.join(' · ')}
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* Map Dialog - Keeping the same logic but improving z-index for mobile */}
      {selectedMap && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedMap(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[70vh] md:h-[80vh] overflow-hidden flex flex-col transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b border-stone-100 flex justify-between items-center bg-white shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="shrink-0 bg-stone-100 text-stone-600 text-xs font-bold px-2 py-0.5 rounded">Day {selectedMap.day}</span>
                <h3 className="font-bold text-stone-800 truncate">{selectedMap.title}</h3>
              </div>
              <button onClick={() => setSelectedMap(null)} className="p-2 rounded-full hover:bg-stone-100 text-stone-500 shrink-0">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 bg-stone-100 relative w-full">
               {selectedMap.mapLink && getEmbedUrl(selectedMap.mapLink) ? (
                 <iframe
                   width="100%"
                   height="100%"
                   frameBorder="0"
                   src={getEmbedUrl(selectedMap.mapLink)!}
                   allowFullScreen
                   className="w-full h-full absolute inset-0"
                   title="map"
                 ></iframe>
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                    <p>無法預覽地圖</p>
                 </div>
               )}
            </div>
            
            <div className="p-4 bg-white border-t border-stone-100 shrink-0 pb-safe">
                <a 
                  href={selectedMap.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white font-bold py-3.5 rounded-xl hover:bg-stone-700 transition-colors shadow-lg"
                >
                  <Navigation size={18} />
                  開啟 Google Maps
                </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};