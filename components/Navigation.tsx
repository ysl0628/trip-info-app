import React from 'react';
import { CalendarDays, Plane, MapPin, Utensils, Info } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'itinerary', icon: CalendarDays },
    { id: 'flights', icon: Plane },
    { id: 'attractions', icon: MapPin },
    { id: 'food', icon: Utensils },
    { id: 'info', icon: Info },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[320px] px-4">
      {/* Floating Pill Container */}
      <nav className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-2 py-2 flex justify-between items-center relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 group"
              aria-label={tab.id}
            >
              {/* Active Indicator Background */}
              <div className={`absolute inset-0 rounded-full transition-all duration-300 transform ${
                  isActive ? 'bg-stone-900 scale-100' : 'bg-transparent scale-0'
              }`}></div>
              
              {/* Icon */}
              <Icon 
                size={20} 
                strokeWidth={isActive ? 2.5 : 2}
                className={`relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-stone-400 group-hover:text-stone-600'
                }`} 
              />
              
              {/* Active Dot (Optional flourish, kept simple for now) */}
              {!isActive && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-stone-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};