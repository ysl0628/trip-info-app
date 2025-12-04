import React, { useState, useEffect } from 'react';
import { ATTRACTIONS } from '../constants';
import { MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Region } from '../types';

export const Attractions: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('洛杉磯/橙縣');
  const [showFloatingSidebar, setShowFloatingSidebar] = useState(false);
  
  const regions: Region[] = ['洛杉磯/橙縣', '拉斯維加斯/大峽谷', '聖地牙哥', '棕櫚泉'];

  const filteredAttractions = ATTRACTIONS.filter(a => a.region === activeRegion);

  // Scroll detection for floating sidebar
  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar after scrolling past the hero/header area (approx 400px)
      setShowFloatingSidebar(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle region change with auto-scroll
  const handleRegionChange = (region: Region) => {
    setActiveRegion(region);
    // If we are scrolled down (content filtered), scroll back to the top of the list
    if (window.scrollY > 450) {
      window.scrollTo({ top: 450, behavior: 'smooth' });
    }
  };

  // Simplified image logic with more stable random seeds
  const getImageUrl = (name: string) => `https://picsum.photos/seed/${name.replace(/\s/g, '')}/800/600`;

  return (
    <div className="pb-20 relative">
      
      {/* Horizontal Tabs - Visible at top (Both Mobile & Desktop now) */}
      <div className="relative z-20 py-2 -mx-4 px-4 mb-8 md:mb-10">
          <div className="flex overflow-x-auto p-2 gap-2 no-scrollbar md:justify-center md:flex-wrap">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => handleRegionChange(region)}
                className={`
                  flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border
                  ${
                    activeRegion === region
                      ? 'bg-stone-900 text-white border-stone-900 shadow-lg scale-105'
                      : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300'
                  }
                `}
              >
                {region}
              </button>
            ))}
          </div>
      </div>

      {/* Floating Sidebar - Appears on Scroll (Desktop Only) */}
      <div className={`hidden md:block fixed left-4 lg:left-8 top-32 z-30 w-48 transition-all duration-500 ease-out transform ${
          showFloatingSidebar 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8 pointer-events-none'
      }`}>
         <div className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-4 space-y-2">
             <div className="px-2 mb-2">
                <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                  區域 Regions
                </h3>
             </div>
             <div className="flex flex-col gap-1">
                {regions.map((region) => (
                    <button
                        key={region}
                        onClick={() => handleRegionChange(region)}
                        className={`
                            w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                            ${
                            activeRegion === region
                                ? 'bg-stone-900 text-white shadow-md translate-x-1'
                                : 'text-stone-500 hover:bg-stone-100 hover:text-stone-700'
                            }
                        `}
                    >
                        {region}
                    </button>
                ))}
             </div>
         </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((spot, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
              
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative bg-stone-200">
                <img 
                  src={getImageUrl(spot.name)} 
                  alt={spot.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-4 left-4">
                   <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-stone-800 uppercase tracking-wider shadow-sm">
                    {spot.category}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl leading-tight drop-shadow-md tracking-wide font-serif">{spot.name}</h3>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Info Row */}
                <div className="space-y-3 mb-5 text-sm text-stone-600">
                  <div className="flex items-start gap-2.5">
                      <MapPin size={16} className="mt-0.5 text-stone-400 shrink-0" />
                      <span className="line-clamp-1 font-medium">{spot.location}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-50">
                       <div className="flex items-center gap-2">
                          <Clock size={16} className="text-stone-400 shrink-0" />
                          <span className="text-xs">{spot.openHours}</span>
                       </div>
                       <div className="flex items-center gap-1 font-bold text-stone-800 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-xs">
                          <DollarSign size={12} />
                          <span>{spot.cost}</span>
                      </div>
                  </div>
                </div>

                <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 text-justify">
                  {spot.description}
                </p>
                  
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {spot.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium bg-stone-100 text-stone-500 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>

                <a 
                  href={spot.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full group/btn flex items-center justify-center gap-2 bg-stone-50 text-stone-800 font-bold py-3 rounded-xl hover:bg-stone-900 hover:text-white transition-all duration-300"
                >
                  <span className="text-sm">導航前往</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};