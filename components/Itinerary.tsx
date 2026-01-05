import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ITINERARY } from '../constants';
import { Map, BedDouble, Utensils, Bus, Car, X, ExternalLink, Navigation, Clock, Link as LinkIcon } from 'lucide-react';
import { DayItinerary } from '../types';

export const Itinerary: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState<DayItinerary | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | 'overview'>('overview');

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

  const item = selectedDay === 'overview'
    ? null
    : ITINERARY.find(d => d.day === selectedDay);

  const isGroupTour = item ? item.title.includes('跟團') : false;

  return (
    <div className="pb-20">
      {/* Pills Tab Navigation */}
      <div className="relative z-20 py-2 -mx-4 px-4 mb-8 md:mb-10">
        <div className="flex overflow-x-auto p-1 gap-2 no-scrollbar md:justify-center md:flex-wrap">
          <button
            onClick={() => setSelectedDay('overview')}
            className={`
              flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border
              ${
                selectedDay === 'overview'
                  ? 'bg-stone-900 text-white border-stone-900 shadow-lg scale-105'
                  : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300'
              }
            `}
          >
            總覽
          </button>
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
      
      {/* Content */}
      {selectedDay === 'overview' ? (
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-2">
              行程總覽
            </h3>
            <p className="text-stone-600 text-base md:text-lg max-w-3xl">
              從洛杉磯出發，搭配拉斯維加斯大峽谷跟團、海岸線自駕與聖地牙哥城市探訪，
              這裡快速總結 13 天行程，點選任一天可查看詳細安排與路線圖。
            </p>
          </div>

          <div className="space-y-3">
            {ITINERARY.map(day => {
              const dayIsGroup = day.title.includes('跟團');
              return (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className="w-full text-left p-4 md:p-5 rounded-2xl bg-white border border-stone-100 hover:border-stone-300 transition-all shadow-sm hover:shadow-md flex items-start gap-4"
                >
                  <div className="flex flex-col items-center justify-center shrink-0 w-14">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Day
                    </span>
                    <span className="text-xl md:text-2xl font-serif font-bold text-stone-800">
                      {day.day}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                        {day.date}
                      </span>
                      {dayIsGroup && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold border bg-amber-50 text-amber-700 border-amber-200">
                          跟團行程
                        </span>
                      )}
                    </div>
                    <p className="text-base md:text-lg font-semibold text-stone-800 truncate">
                      {day.title.replace('【跟團】', '').replace('【跟團結束】', '')}
                    </p>
                    <p className="text-sm md:text-base text-stone-500 mt-1 line-clamp-2">
                      {day.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : item ? (
      /* Content for selected day */
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
            {/* 1. Description */}
            <div>
                <p className="text-stone-700 leading-relaxed text-base md:text-lg text-justify max-w-4xl">
                    {item.description}
                </p>
            </div>

            {/* 2. Departure Info */}
            {(item.departureTime || item.departureLocation) && (
                <div className={`p-5 rounded-xl border shadow-sm ${
                    isGroupTour 
                    ? 'bg-amber-50 border-amber-200' 
                    : 'bg-white border-stone-200'
                }`}>
                    <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-lg shrink-0 ${
                            isGroupTour 
                            ? 'bg-amber-100 text-amber-700' 
                            : 'bg-stone-100 text-stone-700'
                        }`}>
                            <Clock size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">集合出發地點</h4>
                            {item.departureTime && (
                                <div className="text-base font-bold text-stone-800 mb-1">
                                    出發時間：{item.departureTime}
                                </div>
                            )}
                            {item.departureLocation && (
                                <div className="text-sm text-stone-700 leading-relaxed">
                                    {item.departureLocation}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* 3. Timeline */}
            {item.timeline && item.timeline.length > 0 && (
                <div>
                    <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">行程時間表</h4>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-200"></div>
                        
                        <div className="space-y-6">
                            {item.timeline.map((timelineItem, idx) => (
                                <div key={idx} className="relative flex items-start gap-4">
                                    {/* Timeline dot */}
                                    <div className={`relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                                        isGroupTour 
                                        ? 'bg-amber-50 border-amber-300' 
                                        : 'bg-white border-stone-300'
                                    }`}>
                                        <div className={`w-3 h-3 rounded-full ${
                                            isGroupTour ? 'bg-amber-500' : 'bg-stone-500'
                                        }`}></div>
                                    </div>
                                    
                                    {/* Timeline content */}
                                    <div className="flex-1 pb-6">
                                        <div className="flex items-center gap-2 mb-1">
                                            {timelineItem.period && (
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                                    isGroupTour 
                                                    ? 'bg-amber-100 text-amber-700' 
                                                    : 'bg-stone-100 text-stone-600'
                                                }`}>
                                                    {timelineItem.period}
                                                </span>
                                            )}
                                            <span className="text-sm font-bold text-stone-500">
                                                {timelineItem.time}
                                            </span>
                                        </div>
                                        {/* 交通類型：標題和內容合併顯示 */}
                                        {timelineItem.title === '交通' && timelineItem.from && timelineItem.to ? (
                                            <div className="space-y-2">
                                                <h5 className="text-base font-bold text-stone-800">
                                                    {timelineItem.title} : <span className="font-normal text-stone-700">{timelineItem.from} → {timelineItem.to}</span>
                                                </h5>
                                                {(timelineItem.distance || timelineItem.duration) && (
                                                    <div className="flex items-center gap-4 text-xs text-stone-500">
                                                        {timelineItem.distance && (
                                                            <span className="flex items-center gap-1">
                                                                <span className="font-medium">行駛距離：</span>
                                                                <span>{timelineItem.distance}</span>
                                                            </span>
                                                        )}
                                                        {timelineItem.duration && (
                                                            <span className="flex items-center gap-1">
                                                                <span className="font-medium">行駛時間：</span>
                                                                <span>{timelineItem.duration}</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                                {timelineItem.description && (
                                                    <p className="text-sm text-stone-600 leading-relaxed">
                                                        {Array.isArray(timelineItem.description) ? timelineItem.description.map((line, idx) => (
                                                            <div key={idx} className={idx > 0 ? 'mt-1' : ''}>
                                                                {line}
                                                            </div>
                                                        )) : timelineItem.description}
                                                    </p>
                                                )}
                                            </div>
                                        ) : timelineItem.title === '景點/場館' ? (
                                            /* 景點類型：標題和地點合併顯示 */
                                            <div className="space-y-2">
                                                <h5 className="text-base font-bold text-stone-800">
                                                    {timelineItem.title} : <span className="font-normal text-stone-700">{timelineItem.location || (timelineItem.description && (Array.isArray(timelineItem.description) ? timelineItem.description[0] : timelineItem.description))}</span>
                                                </h5>
                                                {timelineItem.activityDuration && (
                                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                                                        isGroupTour 
                                                        ? 'bg-amber-50 border border-amber-200' 
                                                        : 'bg-stone-50 border border-stone-200'
                                                    }`}>
                                                        <Clock size={14} className={isGroupTour ? 'text-amber-600' : 'text-stone-500'} />
                                                        <span className={`text-xs font-bold ${
                                                            isGroupTour ? 'text-amber-700' : 'text-stone-600'
                                                        }`}>
                                                            活動時間：<span className="font-semibold">{timelineItem.activityDuration}</span>
                                                        </span>
                                                    </div>
                                                )}
                                                {timelineItem.description && Array.isArray(timelineItem.description) && timelineItem.description.length > 1 && (
                                                    <div className="text-sm text-stone-600 leading-relaxed mt-2">
                                                        {timelineItem.description.slice(1).map((line, idx) => (
                                                            <div key={idx} className={idx > 0 ? 'mt-1' : ''}>
                                                                {line}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            /* 其他類型：保持原有顯示方式 */
                                            <div className="space-y-2">
                                                <h5 className="text-base font-bold text-stone-800">
                                                    {timelineItem.title}
                                                </h5>
                                                {timelineItem.description && (
                                                    <p className="text-sm text-stone-600 leading-relaxed">
                                                        {Array.isArray(timelineItem.description) ? timelineItem.description.map((line, idx) => (
                                                            <div key={idx} className={idx > 0 ? 'mt-2' : ''}>
                                                                {line}
                                                            </div>
                                                        )) : timelineItem.description}
                                                    </p>
                                                )}
                                                {timelineItem.activityDuration && (
                                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                                                        isGroupTour 
                                                        ? 'bg-amber-50 border border-amber-200' 
                                                        : 'bg-stone-50 border border-stone-200'
                                                    }`}>
                                                        <Clock size={14} className={isGroupTour ? 'text-amber-600' : 'text-stone-500'} />
                                                        <span className={`text-xs font-bold ${
                                                            isGroupTour ? 'text-amber-700' : 'text-stone-600'
                                                        }`}>
                                                            {(timelineItem.title === '早餐' || timelineItem.title === '午餐' || timelineItem.title === '晚餐') ? '用餐時間' : '活動時間'}：<span className="font-semibold">{timelineItem.activityDuration}</span>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Fee Note (if exists, show after timeline) */}
            {item.feeNote && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 shadow-sm">
                    <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">大約費用</h4>
                    {Array.isArray(item.feeNote) ? (
                        <ul className="text-sm text-amber-800 leading-relaxed space-y-2 list-none">
                            {item.feeNote.map((fee, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-amber-600 font-semibold shrink-0 mt-0.5">{fee.match(/^\d+\./)?.[0] || `${idx + 1}.`}</span>
                                    <span className="flex-1">{fee.replace(/^\d+\.\s*/, '')}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-amber-800 leading-relaxed">
                            {item.feeNote}
                        </p>
                    )}
                </div>
            )}

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

            {/* 4. Info Blocks (Accommodation & Food) - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Hotel */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 shadow-sm h-full">
                    <div className="p-2.5 bg-stone-100 rounded-lg text-stone-700 shrink-0">
                        <BedDouble size={20} />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-row gap-4 h-full justify-between" style={{ flexDirection: 'row' }}>
                        <div className="flex-1">
                            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">住宿</h4>
                            <p className="text-base font-bold text-stone-800 mb-2">{item.accommodation.location}</p>
                            <div className="text-sm text-stone-500 space-y-1.5">
                                {item.accommodation.hotels.map((h, i) => {
                                    const hotelName = typeof h === 'string' ? h : h.name;
                                    const hotelLink = typeof h === 'object' ? h.link : undefined;
                                    
                                    return (
                                        <div key={i} className="flex items-center gap-2">
                                            {hotelLink ? (
                                                <a 
                                                    href={hotelLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 hover:underline transition-colors"
                                                >
                                                    <span>{hotelName}</span>
                                                    <LinkIcon size={14} className="shrink-0" />
                                                </a>
                                            ) : (
                                                <span>{hotelName}</span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            {item.accommodation.note && (
                                <div className="text-xs text-stone-500 mt-3 leading-relaxed">
                                    {item.accommodation.note}
                                </div>
                            )}
                        </div>
                        {item.accommodation.roomAssignment && item.accommodation.roomAssignment.length > 0 && (
                            <div className="flex-shrink-0 pl-4 border-l border-stone-200">
                                <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">分房表</h5>
                                <div className="space-y-1.5">
                                    {item.accommodation.roomAssignment.map((room, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                                            <span className="text-stone-400 shrink-0">🏨</span>
                                            <span>{room}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Food */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 shadow-sm h-full">
                    <div className="p-2.5 bg-stone-100 rounded-lg text-stone-700 shrink-0">
                        <Utensils size={20} />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col h-full">
                        <div className="pb-4">
                            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">餐食</h4>
                            <div className="space-y-2.5 text-sm text-stone-600">
                                <div className="flex gap-2 items-start">
                                    <span className="w-10 text-xs font-bold text-stone-400 shrink-0 pt-0.5">早餐</span>
                                    <span className="flex-1 leading-relaxed">{item.meals.breakfast}</span>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <span className="w-10 text-xs font-bold text-stone-400 shrink-0 pt-0.5">午餐</span>
                                    <span className="flex-1 leading-relaxed">{item.meals.lunch}</span>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <span className="w-10 text-xs font-bold text-stone-400 shrink-0 pt-0.5">晚餐</span>
                                    <span className="flex-1 leading-relaxed">{item.meals.dinner}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transport */}
            {item.transport && item.transport.length > 0 && (
                <div className="pt-6 border-t border-stone-200">
                    <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">交通方式</h4>
                    <div className="flex items-start gap-3">
                        <div className="text-stone-500 shrink-0 pt-0.5">
                            {item.transport.some(t => t.includes('巴士')) ? <Bus size={20} /> : <Car size={20} />}
                        </div>
                        <div className="flex-1 text-base text-stone-700">
                            {item.transport.map((transport, idx) => {
                                // 如果包含分號，則分行顯示
                                if (Array.isArray(transport)) {
                                    return transport.map((t, i) => (
                                        <div key={i} className={i > 0 ? 'mt-2' : ''}>
                                            {t}
                                        </div>
                                    ));
                                }
                                return transport;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
      ) : (
        <div className="p-4 text-center text-stone-500">請選擇一天來查看行程。</div>
      )}

      {/* Map Dialog - rendered via portal for full-page mask */}
      {selectedMap &&
        createPortal(
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm animate-fade-in"
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
          </div>,
          document.body
        )}
    </div>
  );
};
