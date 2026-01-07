import React from "react";
import { useTranslation } from "react-i18next";
import { Clock } from "lucide-react";
import { TimelineItem } from "../../types";
import { ItineraryTimelineItem } from "./ItineraryTimelineItem";

interface ItineraryTimelineProps {
  timeline: TimelineItem[];
  isGroupTour: boolean;
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({
  timeline,
  isGroupTour,
}) => {
  const { t } = useTranslation();

  if (!timeline || timeline.length === 0) {
    return null;
  }

  return (
    <div>
      <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">
        {t("itinerary.timeline")}
      </h4>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-stone-200"></div>

        <div className="space-y-6">
          {timeline.map((timelineItem, idx) => (
            <div key={idx} className="relative flex items-start gap-3 sm:gap-4">
              {/* Timeline dot */}
              <div
                className={`relative z-10 shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 ${
                  isGroupTour
                    ? "bg-amber-50 border-amber-300"
                    : "bg-white border-stone-300"
                }`}
              >
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    isGroupTour ? "bg-amber-500" : "bg-stone-500"
                  }`}
                ></div>
              </div>

              {/* Timeline content */}
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  {timelineItem.period && (
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        isGroupTour
                          ? "bg-amber-100 text-amber-700"
                          : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      {timelineItem.period}
                    </span>
                  )}
                  <span className="text-sm font-bold text-stone-500">
                    {timelineItem.time}
                  </span>
                </div>
                <ItineraryTimelineItem
                  item={timelineItem}
                  isGroupTour={isGroupTour}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
