import React, { useState } from 'react';
import { ATTRACTIONS } from '../constants';
import { MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Region } from '../types';
import { useScrollThreshold } from '../hooks/useScrollThreshold';
import { RegionTabs, RegionSidebar } from './RegionControls';

export const Attractions: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('洛杉磯');
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  // 主捲動在 App 裡的 <main>，所以這裡監聽 main 的 scrollTop
  const showFloatingSidebar = useScrollThreshold(400, { target: { selector: 'main' } });

  const filteredAttractions = ATTRACTIONS.filter(a => a.region === activeRegion);

  // Handle region change with auto-scroll
  const handleRegionChange = (region: Region) => {
    setActiveRegion(region);
    // If we are scrolled down (content filtered), scroll back to the top of the list
    const main = document.querySelector<HTMLElement>('main');
    if (main && main.scrollTop > 450) {
      main.scrollTo({ top: 450, behavior: 'smooth' });
    } else if (window.scrollY > 450) {
      window.scrollTo({ top: 450, behavior: 'smooth' });
    }
  };

  const handleImageError = (name: string) => {
    setImageErrors((prev) => new Set(prev).add(name));
  };

  return (
    <div className="pb-20 relative">
      
      {/* Horizontal Tabs - Visible at top (Both Mobile & Desktop) */}
      <RegionTabs activeRegion={activeRegion} onChange={handleRegionChange} />

      {/* Floating Sidebar - Appears on Scroll (Desktop Only) */}
      <RegionSidebar
        activeRegion={activeRegion}
        onChange={handleRegionChange}
        show={showFloatingSidebar}
      />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredAttractions.map((spot, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
              
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative bg-stone-200">
                {imageErrors.has(spot.name) || !spot.image ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300">
                    <MapPin size={48} className="text-stone-400 opacity-50" />
                  </div>
                ) : (
                  <>
                    <img
                      src={spot.image}
                      alt={spot.name}
                      loading="lazy"
                      onError={() => handleImageError(spot.name)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                  </>
                )}
                
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