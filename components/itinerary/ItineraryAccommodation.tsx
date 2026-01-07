import React from "react";
import { useTranslation } from "react-i18next";
import { BedDouble, Link as LinkIcon } from "lucide-react";
import { Accommodation } from "../../types";

interface ItineraryAccommodationProps {
  accommodation: Accommodation;
}

export const ItineraryAccommodation: React.FC<ItineraryAccommodationProps> = ({
  accommodation,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 shadow-sm h-full">
      <div className="p-2.5 bg-stone-100 rounded-lg text-stone-700 shrink-0">
        <BedDouble size={20} />
      </div>
      <div
        className="min-w-0 flex-1 flex flex-row gap-4 h-full justify-between"
        style={{ flexDirection: "row" }}
      >
        <div className="flex-1">
          <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
            {t("itinerary.accommodation")}
          </h4>
          <p className="text-base font-bold text-stone-800 mb-2">
            {accommodation.location}
          </p>
          <div className="text-sm text-stone-500 space-y-1.5">
            {accommodation.hotels.map((h, i) => {
              const hotelName = typeof h === "string" ? h : h.name;
              const hotelLink = typeof h === "object" ? h.link : undefined;

              return (
                <div key={i} className="flex items-center gap-2">
                  {hotelLink ? (
                    <a
                      href={hotelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 hover:underline transition-colors"
                    >
                      <span>{hotelName}</span>
                      <LinkIcon size={14} className="shrink-0" />
                    </a>
                  ) : (
                    <span>{hotelName}</span>
                  )}
                </div>
              );
            })}
          </div>
          {accommodation.note && (
            <div className="text-xs text-stone-500 mt-3 leading-relaxed">
              {accommodation.note}
            </div>
          )}
        </div>
        {accommodation.roomAssignment &&
          accommodation.roomAssignment.length > 0 && (
            <div className="flex-shrink-0 pl-4 border-l border-stone-200">
              <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                {t("itinerary.roomAssignment")}
              </h5>
              <div className="space-y-1.5">
                {accommodation.roomAssignment.map((room, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-stone-600"
                  >
                    <span className="text-stone-400 shrink-0">🏨</span>
                    <span>{room}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};
