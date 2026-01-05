import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "./components/Navigation";
import { Itinerary } from "./components/Itinerary";
import { Flights } from "./components/Flights";
import { Attractions } from "./components/Attractions";
import { Food } from "./components/Food";
import { GeneralInfo } from "./components/GeneralInfo";
import { ArrowUp, CalendarDays, Plane, MapPin, Utensils, Info, Sun, Sparkles } from "lucide-react";
import { Logo } from "./components/Logo";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

const App: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("itinerary");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const calculateDaysToGo = () => {
    const tripStart = new Date("2026-04-01");
    const today = new Date();

    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const diffMs = tripStart.getTime() - startOfToday.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 0;
  };

  const daysToGo = calculateDaysToGo();

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleScroll = () => {
      setShowScrollTop(main.scrollTop > 300);
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "itinerary":
        return <Itinerary />;
      case "flights":
        return <Flights />;
      case "attractions":
        return <Attractions />;
      case "food":
        return <Food />;
      case "info":
        return <GeneralInfo />;
      default:
        return <Itinerary />;
    }
  };

  const navItems = [
    { id: "itinerary", label: t("navigation.itinerary"), fullLabel: t("navigation.itineraryFull"), icon: CalendarDays },
    { id: "flights", label: t("navigation.flights"), fullLabel: t("navigation.flightsFull"), icon: Plane },
    { id: "attractions", label: t("navigation.attractions"), fullLabel: t("navigation.attractionsFull"), icon: MapPin },
    { id: "food", label: t("navigation.food"), fullLabel: t("navigation.foodFull"), icon: Utensils },
    { id: "info", label: t("navigation.info"), fullLabel: t("navigation.infoFull"), icon: Info },
  ];

  return (
    <div className="bg-[#FDFCF8] text-stone-800 font-sans-tc h-screen-dynamic flex flex-col">
      {/* Universal Header 
          Mobile: Relative (Scrolls away) -> Maximize space
          Desktop: Sticky (Stays visible) -> Ease of navigation
      */}
      <header className="relative md:sticky md:top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm transition-all duration-300 flex-none">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 relative">
            {/* Logo Area */}
            <Logo />
            <div className="hidden md:flex items-center gap-3">
              <div className="w-px h-6 bg-stone-300 mx-1"></div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-stone-500 uppercase pt-1">
                {t("common.familyTrip2026")}
              </span>
              <LanguageSwitcher />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeTab === item.id
                      ? "bg-stone-100 text-stone-900 font-bold"
                      : "text-stone-500 hover:text-stone-800 hover:bg-stone-50"
                  }`}
                >
                  <item.icon
                    size={16}
                    className={activeTab === item.id ? "text-amber-500" : "text-stone-400"}
                    strokeWidth={activeTab === item.id ? 2.5 : 2}
                  />
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
                  {daysToGo} <span className="font-sans text-xs text-stone-400 font-medium">{t("common.daysToGo")}</span>
                </div>
              </div>
            </div>

            {/* Mobile: Days to Go + Language Switcher */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSwitcher />
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                  <Sun size={12} className="text-amber-500" />
                  Days to Go
                </span>
                <div className="font-serif font-bold text-xl text-stone-800 leading-none">
                  {daysToGo} <span className="font-sans text-xs text-stone-400 font-medium">{t("common.daysToGo")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <main ref={mainRef} className="relative pb-safe flex-1 overflow-y-auto">
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
              {activeTab === "itinerary" && t("hero.exploreSouthernCalifornia")}
              {activeTab === "flights" && t("hero.flyToOntario")}
              {activeTab === "attractions" && t("hero.westCoastAttractions")}
              {activeTab === "food" && t("hero.californiaFood")}
              {activeTab === "info" && t("hero.travelInfo")}
            </h2>

            <p className="text-stone-500 font-medium max-w-xl mx-auto text-sm md:text-xl leading-relaxed px-4">
              {activeTab === "itinerary" && t("hero.tripDescription")}
              {activeTab === "flights" && t("hero.flightDescription")}
              {activeTab === "attractions" && t("hero.attractionsDescription")}
              {activeTab === "food" && t("hero.foodDescription")}
              {activeTab === "info" && t("hero.infoDescription")}
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="px-4 md:px-8 max-w-6xl mx-auto -mt-4 relative z-10 min-h-[60vh]">{renderContent()}</div>

        {/* Mobile Navigation (Bottom) */}
        <div className="md:hidden">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-24 right-4 md:bottom-10 md:right-10 z-[60] p-3 rounded-full bg-stone-900 text-white shadow-xl shadow-stone-900/20 hover:bg-stone-700 transition-all duration-500 transform ${
            showScrollTop ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-90"
          }`}
          aria-label={t("common.scrollToTop")}
        >
          <ArrowUp size={20} />
        </button>

        {/* Footer - Hidden on Mobile, scrolls with content */}
        <footer className="hidden md:block py-12 text-center border-t border-stone-100 bg-stone-50">
          <div className="font-serif font-bold text-xl text-stone-300 mb-2">SoCal.</div>
          <p className="text-stone-400 text-xs font-medium">Created for the 2026 Family Trip</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
