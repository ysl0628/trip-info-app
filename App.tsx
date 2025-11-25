import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Itinerary } from './components/Itinerary';
import { Flights } from './components/Flights';
import { Attractions } from './components/Attractions';
import { Food } from './components/Food';
import { GeneralInfo } from './components/GeneralInfo';
import { ArrowUp, CalendarDays, Plane, MapPin, Utensils, Info, Sun, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'itinerary': return <Itinerary />;
      case 'flights': return <Flights />;
      case 'attractions': return <Attractions />;
      case 'food': return <Food />;
      case 'info': return <GeneralInfo />;
      default: return <Itinerary />;
    }
  };

  const navItems = [
    { id: 'itinerary', label: '行程', fullLabel: '行程規劃', icon: CalendarDays },
    { id: 'flights', label: '航班', fullLabel: '航班資訊', icon: Plane },
    { id: 'attractions', label: '景點', fullLabel: '精選景點', icon: MapPin },
    { id: 'food', label: '美食', fullLabel: '在地美食', icon: Utensils },
    { id: 'info', label: '資訊', fullLabel: '旅遊資訊', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-800 font-sans-tc">
      
      {/* Universal Header 
          Mobile: Relative (Scrolls away) -> Maximize space
          Desktop: Sticky (Stays visible) -> Ease of navigation
      */}
      <header className="relative md:sticky md:top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
                {/* Logo Area */}
                <div className="flex items-center gap-3">
                     <div className="flex flex-col">
                        <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 leading-none tracking-tight flex items-center gap-1">
                            SoCal<span className="text-amber-500">.</span>
                        </h1>
                     </div>
                     <div className="hidden md:block w-px h-6 bg-stone-300 mx-1"></div>
                     <span className="hidden md:block text-[11px] font-bold tracking-[0.2em] text-stone-500 uppercase pt-1">
                        Family Trip 2026
                     </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                                activeTab === item.id 
                                ? 'bg-stone-100 text-stone-900 font-bold' 
                                : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
                            }`}
                        >
                            <item.icon size={16} className={activeTab === item.id ? 'text-amber-500' : 'text-stone-400'} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                            <span className="text-sm tracking-wide">{item.fullLabel}</span>
                        </button>
                    ))}
                </nav>

                {/* Days to Go (Desktop) */}
                <div className="hidden md:flex items-center gap-3 pl-4 border-l border-stone-100 ml-4">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                            <Sun size={12} className="text-amber-500" />
                            Days to Go
                        </span>
                        <div className="font-serif font-bold text-xl text-stone-800 leading-none">
                            356 <span className="font-sans text-xs text-stone-400 font-medium">天</span>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Year Badge */}
                 <div className="md:hidden text-[10px] font-bold tracking-widest text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200 uppercase">
                    2026
                </div>
            </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="relative pb-safe">
        
        {/* Light Magazine Hero Section */}
        <div className="relative pt-8 pb-12 md:pt-20 md:pb-24 overflow-hidden">
             {/* Soft Gradient Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/50 to-[#FDFCF8] z-0"></div>
             
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-100 rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-100 rounded-full blur-[80px] opacity-40 -translate-x-1/3 translate-y-1/3"></div>

             <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-500 mb-6 animate-fade-in-up">
                    <Sparkles size={12} className="text-amber-400" />
                    Southern California 2026
                 </div>
                 
                 <h2 className="text-3xl md:text-7xl font-serif font-bold text-stone-900 leading-tight mb-4 tracking-tight">
                    {activeTab === 'itinerary' && '探索南加州'}
                    {activeTab === 'flights' && '飛往安大略'}
                    {activeTab === 'attractions' && '美西精選景點'}
                    {activeTab === 'food' && '加州在地美食'}
                    {activeTab === 'info' && '行前準備資訊'}
                 </h2>
                 
                 <p className="text-stone-500 font-medium max-w-xl mx-auto text-sm md:text-xl leading-relaxed px-4">
                    {activeTab === 'itinerary' && '2026/4/1 (三) - 4/13 (一) · 陽光、海灘、沙漠與不夜城，為期 13 天的深度家庭之旅。'}
                    {activeTab === 'flights' && '星宇航空 直飛安大略 (ONT)，享受舒適的雲端時光。'}
                    {activeTab === 'attractions' && '從世界級博物館到壯麗的國家公園，盡收眼底。'}
                    {activeTab === 'food' && '享受多元飲食文化，從米其林餐廳到經典公路漢堡。'}
                    {activeTab === 'info' && '整理護照、簽證與行李清單，享受無憂無慮的假期。'}
                 </p>
             </div>
        </div>

        {/* Content Container */}
        <div className="px-4 md:px-8 max-w-6xl mx-auto -mt-4 relative z-10 min-h-[60vh]">
            {renderContent()}
        </div>

        {/* Mobile Navigation (Bottom) */}
        <div className="md:hidden">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-24 right-4 md:bottom-10 md:right-10 z-[60] p-3 rounded-full bg-stone-900 text-white shadow-xl shadow-stone-900/20 hover:bg-stone-700 transition-all duration-500 transform ${
            showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
      
      {/* Footer - Hidden on Mobile */}
      <footer className="hidden md:block py-12 text-center border-t border-stone-100 bg-stone-50">
         <div className="font-serif font-bold text-xl text-stone-300 mb-2">SoCal.</div>
         <p className="text-stone-400 text-xs font-medium">Created for the 2026 Family Trip</p>
      </footer>
    </div>
  );
};

export default App;