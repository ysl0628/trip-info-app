import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DayNavigationProps {
  currentDay: number;
  totalDays: number;
  onPreviousDay: () => void;
  onNextDay: () => void;
}

export const DayNavigation: React.FC<DayNavigationProps> = ({
  currentDay,
  totalDays,
  onPreviousDay,
  onNextDay,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between gap-4">
      {currentDay > 1 ? (
        <button
          onClick={onPreviousDay}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-300 transition-colors shadow-sm"
        >
          <ChevronLeft size={18} />
          <span className="font-medium">
            {t("itinerary.previousDay") || "前一天"}
          </span>
        </button>
      ) : (
        <div></div>
      )}
      {currentDay < totalDays ? (
        <button
          onClick={onNextDay}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-300 transition-colors shadow-sm ml-auto"
        >
          <span className="font-medium">
            {t("itinerary.nextDay") || "後一天"}
          </span>
          <ChevronRight size={18} />
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
