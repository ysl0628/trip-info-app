import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useItinerary } from "../hooks/useItinerary";
import { ITINERARY as ORIGINAL_ITINERARY } from "../constants";
import { DayItinerary } from "../types";
import { ItineraryTabs } from "./itinerary/ItineraryTabs";
import { ItineraryOverview } from "./itinerary/ItineraryOverview";
import { ItineraryDayDetail } from "./itinerary/ItineraryDayDetail";
import { ItineraryMapDialog } from "./itinerary/ItineraryMapDialog";

export const Itinerary: React.FC = () => {
  const { t } = useTranslation();
  const ITINERARY = useItinerary();
  const [selectedMap, setSelectedMap] = useState<DayItinerary | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | "overview">(
    "overview"
  );

  const item =
    selectedDay === "overview"
      ? null
      : ITINERARY.find((d) => d.day === selectedDay);

  // 使用原始 ITINERARY 来检查是否是 group tour，因为翻译后的 title 可能不包含标识
  const originalItem =
    selectedDay === "overview"
      ? null
      : ORIGINAL_ITINERARY.find((d) => d.day === selectedDay);
  const isGroupTour = originalItem
    ? originalItem.title.includes("跟團")
    : false;

  const handleDaySelect = (day: number | "overview") => {
    setSelectedDay(day);
  };

  const handlePreviousDay = () => {
    if (item && item.day > 1) {
      setSelectedDay(item.day - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextDay = () => {
    if (item && item.day < ITINERARY.length) {
      setSelectedDay(item.day + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="pb-20">
      <ItineraryTabs
        selectedDay={selectedDay}
        itinerary={ITINERARY}
        onDaySelect={handleDaySelect}
      />

      {selectedDay === "overview" ? (
        <ItineraryOverview
          itinerary={ITINERARY}
          onDaySelect={(day) => handleDaySelect(day)}
        />
      ) : item ? (
        <ItineraryDayDetail
          item={item}
          isGroupTour={isGroupTour}
          totalDays={ITINERARY.length}
          onMapClick={() => setSelectedMap(item)}
          onPreviousDay={handlePreviousDay}
          onNextDay={handleNextDay}
        />
      ) : (
        <div className="p-4 text-center text-stone-500">
          {t("itinerary.selectDay")}
        </div>
      )}

      {selectedMap && (
        <ItineraryMapDialog
          selectedMap={selectedMap}
          onClose={() => setSelectedMap(null)}
        />
        )}
    </div>
  );
};
