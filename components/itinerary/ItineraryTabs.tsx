import React from "react";
import { useTranslation } from "react-i18next";
import { DayItinerary } from "../../types";

interface ItineraryTabsProps {
  selectedDay: number | "overview";
  itinerary: DayItinerary[];
  onDaySelect: (day: number | "overview") => void;
}

export const ItineraryTabs: React.FC<ItineraryTabsProps> = ({
  selectedDay,
  itinerary,
  onDaySelect,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative z-20 py-2 -mx-4 px-4 mb-8 md:mb-10">
      <div className="flex overflow-x-auto p-1 gap-2 no-scrollbar md:justify-center md:flex-wrap">
        <button
          onClick={() => onDaySelect("overview")}
          className={`
            flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border
            ${
              selectedDay === "overview"
                ? "bg-stone-900 text-white border-stone-900 shadow-lg scale-105"
                : "bg-white text-stone-500 border-stone-200 hover:border-stone-300"
            }
          `}
        >
          {t("itinerary.overview")}
        </button>
        {itinerary.map((tabItem) => (
          <button
            key={tabItem.day}
            onClick={() => onDaySelect(tabItem.day)}
            className={`
              flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border
              ${
                selectedDay === tabItem.day
                  ? "bg-stone-900 text-white border-stone-900 shadow-lg scale-105"
                  : "bg-white text-stone-500 border-stone-200 hover:border-stone-300"
              }
            `}
          >
            <span className="opacity-60 mr-1.5">{t("itinerary.day")}</span>
            {tabItem.day}
          </button>
        ))}
      </div>
    </div>
  );
};
