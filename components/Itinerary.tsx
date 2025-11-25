import React, { useState } from 'react';
import { ITINERARY } from '../constants';
import { Map, BedDouble, Utensils, Bus, Car, X, ExternalLink, Navigation, Clock } from 'lucide-react';
import { DayItinerary } from '../types';

export const Itinerary: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState<DayItinerary | null>(null);

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

  return (
    <div className="space-y-6 pb-20">
      {ITINERARY.map((item, index) => {
        const isGroupTour = item.title.includes('跟團');
        const isLast = index === ITINERARY.length - 1;
        
        return (
          <div key={item.day} className="flex gap-3 md:gap-6 relative">
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[19px] md:left-[23px] top-12 bottom-[-24px] w-[2px] bg-stone-200"></div>
            )}
            
            {/* Date Badge Column */}
            <div className="flex-shrink-0 flex flex-col items-center pt-1 z-10">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md border-[3px] border-[#FDFCF8] ${
                 isGroupTour 
                 ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' 
                 : 'bg-stone-800 text-white'
              }`}>
                <span className="font-serif font-bold text-lg md:text-xl leading-none pt-1">{item.day}</span>
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                
                {/* Card Header - Mobile Optimized Flex Column */}
                <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex flex-row items-center justify-between gap-3 ${
                  isGroupTour ? 'bg-amber-50/50 border-amber-100' : 'bg-stone-50/50 border-stone-100'
                }`}>
                  <div className="min-w-0 w-full md:w-auto">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">{item.date}</span>
                        {isGroupTour && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200">
                                跟團行程
                            </span>
                        )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-800 leading-tight break-words">
                      {item.title.replace('【跟團】', '').replace('【跟團結束】', '')}
                    </h3>
                  </div>
                  
                  {item.mapLink && (
                    <button 
                      onClick={() => setSelectedMap(item)}
                      className="flex-shrink-0 w-auto self-center flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-colors shadow-sm"
                    >
                      <Map size={14} />
                      <span>地圖</span>
                    </button>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4 md:p-6 space-y-5">
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base text-justify">
                    {item.description}
                  </p>

                  {/* Highlights Tags */}
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

                  {/* Info Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Hotel */}
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100/50">
                          <div className="p-2 bg-white rounded-lg shadow-sm text-stone-700 shrink-0">
                              <BedDouble size={18} />
                          </div>
                          <div className="min-w-0">
                              <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">住宿</h4>
                              <p className="text-sm font-bold text-stone-800 truncate">{item.accommodation.location}</p>
                              <div className="text-xs text-stone-500 mt-1 space-y-0.5">
                                  {item.accommodation.hotels.map((h, i) => <div key={i} className="truncate">{h}</div>)}
                              </div>
                          </div>
                      </div>

                      {/* Food */}
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100/50">
                          <div className="p-2 bg-white rounded-lg shadow-sm text-stone-700 shrink-0">
                              <Utensils size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                              <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">餐食</h4>
                              <div className="space-y-1 text-xs text-stone-600">
                                  <div className="flex gap-2"><span className="w-4 font-bold text-stone-400 shrink-0">早</span> <span className="truncate">{item.meals.breakfast}</span></div>
                                  <div className="flex gap-2"><span className="w-4 font-bold text-stone-400 shrink-0">午</span> <span className="truncate">{item.meals.lunch}</span></div>
                                  <div className="flex gap-2"><span className="w-4 font-bold text-stone-400 shrink-0">晚</span> <span className="truncate">{item.meals.dinner}</span></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Transport */}
                  {item.transport && item.transport.length > 0 && (
                      <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                          <div className="text-stone-400 shrink-0">
                              {item.transport.some(t => t.includes('巴士')) ? <Bus size={18} /> : <Car size={18} />}
                          </div>
                          <div className="flex-1 text-xs md:text-sm text-stone-600">
                              {item.transport.join(' · ')}
                          </div>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

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