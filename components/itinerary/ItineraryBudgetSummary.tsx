import React from "react";
import { useTranslation } from "react-i18next";
import { Calculator, ParkingCircle, DollarSign } from "lucide-react";
import { TimelineItem } from "../../types";

interface ItineraryBudgetSummaryProps {
  timeline?: TimelineItem[];
}

export const ItineraryBudgetSummary: React.FC<ItineraryBudgetSummaryProps> = ({
  timeline,
}) => {
  const { t } = useTranslation();

  if (!timeline) {
    return null;
  }

  const parkingCosts = timeline.filter((t) => t.parkingCost) || [];
  const ticketCosts = timeline.filter((t) => t.ticketCost) || [];

  // 檢查是否有「免費進入」的景點
  const freeAdmissionItems =
    timeline.filter(
      (t) => t.type === "attraction" && t.isFreeAdmission === true && !t.ticketCost
    ) || [];

  if (
    parkingCosts.length === 0 &&
    ticketCosts.length === 0 &&
    freeAdmissionItems.length === 0
  ) {
    return null;
  }

  return (
    <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
          <Calculator size={20} />
        </div>
        <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider">
          {t("itinerary.budgetSummary") || "預算費用"}
        </h4>
      </div>
      <div className="space-y-3">
        {parkingCosts.length > 0 && (
          <div>
            <h5 className="text-xs font-bold text-blue-700 mb-2 flex items-center gap-2">
              <ParkingCircle size={14} />
              {t("itinerary.parkingFees") || "停車費用"}
            </h5>
            <ul className="space-y-1.5">
              {parkingCosts.map((t, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 justify-between text-sm text-blue-800 bg-white/60 px-3 py-2 rounded-lg"
                >
                  <span className="font-medium flex-1">{t.location || t.title}</span>
                  <span className="font-bold text-blue-900">
                    {t.parkingCost}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {(ticketCosts.length > 0 || freeAdmissionItems.length > 0) && (
          <div>
            <h5 className="text-xs font-bold text-purple-700 mb-2 flex items-center gap-2">
              <DollarSign size={14} />
              {t("itinerary.ticketFees") || "門票費用"}
            </h5>
            <ul className="space-y-1.5">
              {ticketCosts.map((t, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 justify-between text-sm text-purple-800 bg-white/60 px-3 py-2 rounded-lg"
                >
                  <span className="font-medium flex-1">{t.location || t.title}</span>
                  <span className="font-bold text-purple-900">
                    {t.ticketCost}
                  </span>
                </li>
              ))}
              {freeAdmissionItems.map((tItem, idx) => (
                <li
                  key={`free-${idx}`}
                  className="flex items-center gap-4 justify-between text-sm text-purple-800 bg-white/60 px-3 py-2 rounded-lg"
                >
                  <span className="font-medium flex-1">
                    {tItem.location || tItem.title}
                  </span>
                  <span className="font-bold text-purple-900">
                    {t("itinerary.freeAdmission") || "免費進入"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
