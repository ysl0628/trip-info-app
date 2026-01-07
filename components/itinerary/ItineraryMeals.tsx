import React from "react";
import { useTranslation } from "react-i18next";
import { Utensils } from "lucide-react";

interface ItineraryMealsProps {
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
}

export const ItineraryMeals: React.FC<ItineraryMealsProps> = ({ meals }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 shadow-sm h-full">
      <div className="p-2.5 bg-stone-100 rounded-lg text-stone-700 shrink-0">
        <Utensils size={20} />
      </div>
      <div className="min-w-0 flex-1 flex flex-col h-full">
        <div className="pb-4">
          <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
            {t("itinerary.meals")}
          </h4>
          <div className="space-y-2.5 text-sm text-stone-600">
            <div className="flex gap-2 items-start">
              <span className="min-w-[3rem] text-xs font-bold text-stone-400 shrink-0 pt-0.5 whitespace-nowrap">
                {t("itinerary.breakfast")}
              </span>
              <span className="flex-1 leading-relaxed">{meals.breakfast}</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="min-w-[3rem] text-xs font-bold text-stone-400 shrink-0 pt-0.5 whitespace-nowrap">
                {t("itinerary.lunch")}
              </span>
              <span className="flex-1 leading-relaxed">{meals.lunch}</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="min-w-[3rem] text-xs font-bold text-stone-400 shrink-0 pt-0.5 whitespace-nowrap">
                {t("itinerary.dinner")}
              </span>
              <span className="flex-1 leading-relaxed">{meals.dinner}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
