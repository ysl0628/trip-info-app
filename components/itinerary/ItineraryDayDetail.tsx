import React from "react";
import { useTranslation } from "react-i18next";
import { Map, Clock, Bus, Car } from "lucide-react";
import { DayItinerary } from "../../types";
import { ItineraryTimeline } from "./ItineraryTimeline";
import { ItineraryAccommodation } from "./ItineraryAccommodation";
import { ItineraryMeals } from "./ItineraryMeals";
import { ItineraryBudgetSummary } from "./ItineraryBudgetSummary";
import { ItineraryReferenceLinks } from "./ItineraryReferenceLinks";
import { DayNavigation } from "./DayNavigation";

interface ItineraryDayDetailProps {
  item: DayItinerary;
  isGroupTour: boolean;
  totalDays: number;
  onMapClick: () => void;
  onPreviousDay: () => void;
  onNextDay: () => void;
}

export const ItineraryDayDetail: React.FC<ItineraryDayDetailProps> = ({
  item,
  isGroupTour,
  totalDays,
  onMapClick,
  onPreviousDay,
  onNextDay,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mt-6" key={item.day}>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              {item.date}
            </span>
            {isGroupTour && (
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                  isGroupTour
                    ? "bg-amber-100 text-amber-700 border-amber-200"
                    : ""
                }`}
              >
                {t("itinerary.groupTour")}
              </span>
            )}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 leading-tight">
            {item.title.replace("【跟團】", "").replace("【跟團結束】", "")}
          </h3>
        </div>
        {item.mapLink && (
          <button
            onClick={onMapClick}
            className="flex-shrink-0 w-full md:w-auto self-start md:self-center flex items-center justify-center gap-2 text-sm font-bold px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-300 transition-colors shadow-sm"
          >
            <Map size={16} />
            <span>{t("itinerary.routeMap")}</span>
          </button>
        )}
      </div>

      {/* Page Content */}
      <div className="space-y-8">
        {/* 1. Description */}
        <div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg text-justify max-w-4xl">
            {item.description}
          </p>
        </div>

        {/* 2. Departure Info */}
        {(item.departureTime || item.departureLocation) && (
          <div
            className={`p-5 rounded-xl border shadow-sm ${
              isGroupTour
                ? "bg-amber-50 border-amber-200"
                : "bg-white border-stone-200"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-2.5 rounded-lg shrink-0 ${
                  isGroupTour
                    ? "bg-amber-100 text-amber-700"
                    : "bg-stone-100 text-stone-700"
                }`}
              >
                <Clock size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                  {t("itinerary.departureLocation")}
                </h4>
                {item.departureTime && (
                  <div className="text-base font-bold text-stone-800 mb-1">
                    {t("itinerary.departureTime")}
                    {item.departureTime}
                  </div>
                )}
                {item.departureLocation && (
                  <div className="text-sm text-stone-700 leading-relaxed">
                    {item.departureLocation}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 3. Timeline */}
        {item.timeline && item.timeline.length > 0 && (
          <ItineraryTimeline timeline={item.timeline} isGroupTour={isGroupTour} />
        )}

        {/* Fee Note (if exists, show after timeline) */}
        {item.feeNote && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 shadow-sm">
            <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              {t("itinerary.estimatedCost")}
            </h4>
            {Array.isArray(item.feeNote) ? (
              <ul className="text-sm text-amber-800 leading-relaxed space-y-2 list-none">
                {item.feeNote.map((fee, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-semibold shrink-0 mt-0.5">
                      {fee.match(/^\d+\./)?.[0] || `${idx + 1}.`}
                    </span>
                    <span className="flex-1">
                      {fee.replace(/^\d+\.\s*/, "")}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-amber-800 leading-relaxed">
                {item.feeNote}
              </p>
            )}
          </div>
        )}

        {/* Highlights */}
        <div>
          <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
            {t("itinerary.highlights")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                  isGroupTour
                    ? "bg-amber-50 text-amber-800 border-amber-100"
                    : "bg-stone-100 text-stone-600 border-stone-200"
                }`}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Info Blocks (Accommodation & Food) - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ItineraryAccommodation accommodation={item.accommodation} />
          <ItineraryMeals meals={item.meals} />
        </div>

        {/* Transport */}
        {item.transport && item.transport.length > 0 && (
          <div className="pt-6 border-t border-stone-200">
            <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
              {t("itinerary.transport")}
            </h4>
            <div className="flex items-start gap-3">
              <div className="text-stone-500 shrink-0 pt-0.5">
                {item.transport.some((t) => t.includes("巴士")) ? (
                  <Bus size={20} />
                ) : (
                  <Car size={20} />
                )}
              </div>
              <div className="flex flex-col text-base text-stone-700">
                {item.transport.map((transport, idx) => (
                  <div key={idx} className={idx > 0 ? "mt-2" : ""}>
                    {transport}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Budget Summary */}
        <ItineraryBudgetSummary timeline={item.timeline} />

        {/* Reference Links */}
        <ItineraryReferenceLinks links={item.referenceLinks} />

        {/* Day Navigation */}
        <DayNavigation
          currentDay={item.day}
          totalDays={totalDays}
          onPreviousDay={onPreviousDay}
          onNextDay={onNextDay}
        />
      </div>
    </div>
  );
};
