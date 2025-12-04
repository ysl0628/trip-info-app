import React, { useState } from 'react';
import { FOOD_SPOTS } from '../constants';
import { UtensilsCrossed, Coffee, MapPin, ExternalLink, Clock, DollarSign, ChefHat } from 'lucide-react';
import { Region } from '../types';
import { useScrollThreshold } from '../hooks/useScrollThreshold';
import { RegionTabs, RegionSidebar } from './RegionControls';

export const Food: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('洛杉磯/橙縣');
  const [activeType, setActiveType] = useState<'All' | 'Food' | 'Coffee'>('All');
  // App 的主捲動區是在 <main>，不是 window，所以這裡針對 main 監聽
  const showFloatingSidebar = useScrollThreshold(400, { target: { selector: 'main' } });

  // Handlers for filter changes with auto-scroll
  const handleRegionChange = (region: Region) => {
    setActiveRegion(region);
    const main = document.querySelector<HTMLElement>('main');
    if (main && main.scrollTop > 450) {
      main.scrollTo({ top: 450, behavior: 'smooth' });
    } else if (window.scrollY > 450) {
      window.scrollTo({ top: 450, behavior: 'smooth' });
    }
  };

  const handleTypeChange = (type: 'All' | 'Food' | 'Coffee') => {
    setActiveType(type);
    const main = document.querySelector<HTMLElement>('main');
    if (main && main.scrollTop > 450) {
      main.scrollTo({ top: 450, behavior: 'smooth' });
    } else if (window.scrollY > 450) {
      window.scrollTo({ top: 450, behavior: 'smooth' });
    }
  };

  const filteredFood = FOOD_SPOTS.filter(item => {
    const regionMatch = item.region === activeRegion;
    const typeMatch = activeType === 'All' || item.type === activeType || (activeType === 'Food' && item.type === 'Dessert');
    return regionMatch && typeMatch;
  });

  return (
    <div className="pb-24 relative">
      
      {/* Tip Banner - Full Width */}
      <div className="bg-stone-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden mb-8 md:mb-12">
        <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12 pointer-events-none">
             <DollarSign size={200} />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 md:items-center">
            <div className="shrink-0">
                <h3 className="font-serif font-bold text-2xl text-amber-400 mb-1">美國小費指南</h3>
                <p className="text-stone-400 text-sm">Tipping Guide</p>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div>
                    <span className="block text-xs text-stone-500 uppercase tracking-wider font-bold mb-1">餐廳內用</span>
                    <span className="text-xl font-bold">15-20%</span>
                </div>
                <div>
                    <span className="block text-xs text-stone-500 uppercase tracking-wider font-bold mb-1">外帶/咖啡</span>
                    <span className="text-xl font-bold">自由</span>
                    <span className="text-xs text-stone-500 ml-1">($1)</span>
                </div>
                 <div>
                    <span className="block text-xs text-stone-500 uppercase tracking-wider font-bold mb-1">團體 6人+</span>
                    <span className="text-xl font-bold text-amber-400">注意帳單</span>
                </div>
                <div>
                    <span className="block text-xs text-stone-500 uppercase tracking-wider font-bold mb-1">Buffet</span>
                    <span className="text-xl font-bold">$1-2</span>
                    <span className="text-xs text-stone-500 ml-1">/人</span>
                </div>
            </div>
        </div>
      </div>

      {/* Top Filter Controls - Region tabs + type selector */}
      <div className="space-y-4 md:space-y-0 md:flex md:flex-col md:items-center md:gap-4 mb-8">
        <RegionTabs activeRegion={activeRegion} onChange={handleRegionChange} />

        {/* Type Selector */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="flex justify-start gap-1 p-1 bg-stone-100 rounded-xl inline-flex mx-1">
            {[
              { id: 'All', label: '全部' },
              { id: 'Food', label: '餐廳' },
              { id: 'Coffee', label: '咖啡/甜點' },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type.id as any)}
                className={`
                  px-4 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all
                  ${
                    activeType === type.id
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-500 hover:text-stone-700'
                  }
                `}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Sidebar - Appears on Scroll (Desktop Only) */}
      <RegionSidebar activeRegion={activeRegion} onChange={handleRegionChange} show={showFloatingSidebar}>
        {/* Type Group */}
        <div className="space-y-2">
          <div className="px-2">
            <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">類別 Categories</h3>
          </div>
          <div className="flex flex-col gap-1">
            {[
              { id: 'All', label: '全部顯示' },
              { id: 'Food', label: '美味餐廳' },
              { id: 'Coffee', label: '咖啡甜點' },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type.id as any)}
                className={`
                  w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                  ${
                    activeType === type.id
                      ? 'bg-stone-100 text-stone-900 font-extrabold translate-x-1'
                      : 'text-stone-500 hover:text-stone-700 hover:bg-stone-50'
                  }
                `}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </RegionSidebar>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredFood.map((food, index) => {
                const isCoffee = food.type === 'Coffee' || food.type === 'Dessert';
                
                return (
                  <div key={index} className="group relative bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                    {/* Decorative BG Icon */}
                    <div className={`absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12 scale-150 pointer-events-none`}>
                        {isCoffee ? <Coffee size={180} /> : <UtensilsCrossed size={180} />}
                    </div>

                    {/* Header */}
                    <div className="relative z-10 flex justify-between items-start mb-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                                    isCoffee 
                                    ? 'bg-stone-100 text-stone-500 border-stone-200' 
                                    : 'bg-orange-50 text-orange-700 border-orange-100'
                                }`}>
                                    {food.cuisine}
                                </span>
                                <span className="text-xs font-bold text-emerald-600 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                                    {food.cost}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-800 font-serif leading-tight group-hover:text-amber-600 transition-colors">
                                {food.name}
                            </h3>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="relative z-10 space-y-3 mb-6">
                        <div className="flex items-start gap-2 text-stone-500 text-sm">
                            <MapPin size={16} className="mt-0.5 shrink-0 text-stone-400" />
                            <span className="font-medium leading-tight">{food.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-400 text-xs">
                            <Clock size={14} className="shrink-0" />
                            <span>{food.openHours}</span>
                        </div>
                        {food.note && (
                            <p className="text-xs text-stone-400 italic pl-6 border-l-2 border-stone-100 py-1">
                                "{food.note}"
                            </p>
                        )}
                    </div>
                    
                    {/* Must Order Box */}
                    {food.mustOrder && (
                        <div className="relative z-10 mt-auto bg-[#FDFCF8] rounded-xl p-4 border border-stone-100/80 shadow-[inset_0_0_10px_rgba(0,0,0,0.01)] mb-4">
                            <div className="flex items-center gap-2 mb-1.5">
                                <ChefHat size={14} className="text-amber-500" />
                                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Must Order</span>
                            </div>
                            <p className="text-stone-800 font-medium text-sm leading-relaxed">
                                {food.mustOrder}
                            </p>
                        </div>
                    )}

                    {/* Footer Actions */}
                    <div className="relative z-10 pt-4 border-t border-stone-50 flex items-center justify-between mt-auto">
                        <div className="flex gap-1 overflow-hidden">
                            {food.tags.slice(0,3).map(tag => (
                                <span key={tag} className="text-[10px] text-stone-400 bg-stone-50 px-2 py-1 rounded-md whitespace-nowrap">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <a 
                            href={food.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-900 text-white shadow-lg hover:bg-stone-700 hover:scale-110 transition-all"
                        >
                            <ExternalLink size={16} />
                        </a>
                    </div>
                  </div>
                );
            })}
        </div>
      
      {filteredFood.length === 0 && (
          <div className="py-24 text-center">
             <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-300">
                <Coffee size={32} />
             </div>
             <p className="text-stone-400 font-medium">此類別尚無資料</p>
          </div>
      )}
    </div>
  );
};