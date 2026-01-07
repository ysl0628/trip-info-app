import React from "react";
import { useTranslation } from "react-i18next";
import { DayItinerary } from "../../types";
import { ITINERARY as ORIGINAL_ITINERARY } from "../../constants";

interface ItineraryOverviewProps {
  itinerary: DayItinerary[];
  onDaySelect: (day: number) => void;
}

export const ItineraryOverview: React.FC<ItineraryOverviewProps> = ({
  itinerary,
  onDaySelect,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-2">
          {t("itinerary.overviewTitle")}
        </h3>
        <p className="text-stone-600 text-base md:text-lg max-w-3xl">
          {t("itinerary.overviewDescription")}
        </p>
      </div>

      <div className="space-y-3">
        {itinerary.map((day) => {
          // 使用原始 ITINERARY 来检查是否是 group tour，因为翻译后的 title 可能不包含标识
          const originalDay = ORIGINAL_ITINERARY.find((d) => d.day === day.day);
          const dayIsGroup = originalDay
            ? originalDay.title.includes("跟團")
            : false;
          return (
            <button
              key={day.day}
              onClick={() => onDaySelect(day.day)}
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
                      {t("itinerary.groupTour")}
                    </span>
                  )}
                </div>
                <p className="text-base md:text-lg font-semibold text-stone-800 truncate">
                  {day.title.replace("【跟團】", "").replace("【跟團結束】", "")}
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
  );
};
