import React from "react";
import { useTranslation } from "react-i18next";
import { Map, Clock, Luggage, ParkingCircle, DollarSign } from "lucide-react";
import { TimelineItem } from "../../types";
import { renderDescriptionWithLinks } from "../../utils/itineraryHelpers";

interface ItineraryTimelineItemProps {
  item: TimelineItem;
  isGroupTour: boolean;
}

export const ItineraryTimelineItem: React.FC<ItineraryTimelineItemProps> = ({
  item,
  isGroupTour,
}) => {
  const { t } = useTranslation();

  // 交通類型：標題和內容合併顯示
  if (item.type === "transportation" && item.from && item.to) {
    // 對於交通項目，mapLink 應該只指向目的地，讓 Google Maps 使用當前位置作為起點
    const getTransportMapLink = (mapLink?: string, to?: string) => {
      if (!mapLink) return undefined;
      // 如果是 /dir/ 格式，轉換為只包含目的地的格式（使用當前位置作為起點）
      if (mapLink.includes("/dir/")) {
        // 提取目的地（最後一個 / 後面的部分）
        const parts = mapLink.split("/dir/")[1];
        if (parts) {
          const destinations = parts.split("/").filter(p => p.length > 0);
          // 只保留目的地，起點留空讓 Google Maps 使用當前位置
          if (destinations.length > 0) {
            const destination = destinations[destinations.length - 1];
            return `https://www.google.com/maps/dir//${destination}`;
          }
        }
      }
      return mapLink;
    };

    return (
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h5 className="text-base font-bold text-stone-800">
            {item.title} :{" "}
            <span className="font-normal text-stone-700">
              {item.from} → {item.to}
            </span>
          </h5>
          {getTransportMapLink(item.mapLink, item.to) && (
            <a
              href={getTransportMapLink(item.mapLink, item.to)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-1 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-2 py-1 rounded transition-colors"
              title={t("itinerary.viewOnMap") || "查看地圖"}
            >
              <Map size={14} />
              <span className="hidden sm:inline">
                {t("itinerary.map") || "地圖"}
              </span>
            </a>
          )}
        </div>
        {item.distance && (
          <div className="flex items-center gap-4 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <span className="font-medium">
                {t("itinerary.travelDistance")}
              </span>
              <span>{item.distance}</span>
            </span>
          </div>
        )}
        <div className="flex flex-row flex-wrap items-center gap-2">
          {item.duration && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200">
              <Clock size={14} className="text-stone-500" />
              <span className="text-xs font-bold text-stone-600">
                {t("itinerary.travelDuration")}
                <span className="font-semibold">{item.duration}</span>
              </span>
            </div>
          )}
          {item.luggage && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200">
              <Luggage size={14} className="text-blue-600" />
              <span className="text-xs font-bold text-blue-700">
                {item.luggage}
              </span>
            </div>
          )}
          {item.parkingCost && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200">
              <ParkingCircle size={14} className="text-green-600" />
              <span className="text-xs font-bold text-green-700">
                {item.parkingCost}
              </span>
            </div>
          )}
          {item.ticketCost && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200">
              <DollarSign size={14} className="text-orange-600" />
              <span className="text-xs font-bold text-orange-700">
                {item.ticketCost}
              </span>
            </div>
          )}
          {item.isFreeAdmission && !item.ticketCost && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200">
              <DollarSign size={14} className="text-orange-600" />
              <span className="text-xs font-bold text-orange-700">
                {t("itinerary.freeAdmission") || "免費進入"}
              </span>
            </div>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-stone-600 leading-relaxed">
            {Array.isArray(item.description)
              ? item.description
                  .map((line, idx) => (
                    <div key={idx} className={idx > 0 ? "mt-1" : ""}>
                      {line}
                    </div>
                  ))
              : typeof item.description === "string" ? item.description : null
            }
          </p>
        )}
      </div>
    );
  }

  // 景點類型：標題和地點合併顯示（無 option）
  if (item.type === "attraction" && !item.option) {
    return (
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h5 className="text-base font-bold text-stone-800 flex flex-wrap items-center gap-2">
            <span>
              {item.title} :{" "}
              {item.location ? (
                item.infoLink ? (
                  <a
                    href={item.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-stone-700 underline"
                  >
                    {item.location}
                  </a>
                ) : (
                  <span className="font-normal text-stone-700">
                    {item.location}
                  </span>
                )
              ) : (
                <span className="font-normal text-stone-700">
                  {item.description &&
                    (Array.isArray(item.description)
                      ? item.description[0]
                      : item.description)}
                </span>
              )}
            </span>
          </h5>
          {item.mapLink && (
            <a
              href={item.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-1 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-2 py-1 rounded transition-colors"
              title={t("itinerary.viewOnMap") || "查看地圖"}
            >
              <Map size={14} />
              <span className="hidden sm:inline">
                {t("itinerary.map") || "地圖"}
              </span>
            </a>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {item.activityDuration && (
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                isGroupTour
                  ? "bg-amber-50 border border-amber-200"
                  : "bg-stone-50 border border-stone-200"
              }`}
            >
              <Clock
                size={14}
                className={
                  isGroupTour ? "text-amber-600" : "text-stone-500"
                }
              />
              <span
                className={`text-xs font-bold ${
                  isGroupTour ? "text-amber-700" : "text-stone-600"
                }`}
              >
                {t("itinerary.activityTime")}
                <span className="font-semibold">{item.activityDuration}</span>
              </span>
            </div>
          )}
          {item.openingHours && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200">
              <Clock size={14} className="text-stone-500" />
              <span className="text-xs font-bold text-stone-600 whitespace-nowrap">
                {t("itinerary.openingHours") || "營業時間"}：{item.openingHours}
              </span>
            </div>
          )}
          {item.luggage && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200">
              <Luggage size={14} className="text-blue-600" />
              <span className="text-xs font-bold text-blue-700">
                {item.luggage}
              </span>
            </div>
          )}
          {item.parkingCost && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200">
              <ParkingCircle size={14} className="text-green-600" />
              <span className="text-xs font-bold text-green-700">
                {item.parkingCost}
              </span>
            </div>
          )}
          {item.ticketCost && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200">
              <DollarSign size={14} className="text-orange-600" />
              <span className="text-xs font-bold text-orange-700">
                {item.ticketCost}
              </span>
            </div>
          )}
          {item.isFreeAdmission && !item.ticketCost && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200">
              <DollarSign size={14} className="text-orange-600" />
              <span className="text-xs font-bold text-orange-700">
                {t("itinerary.freeAdmission") || "免費進入"}
              </span>
            </div>
          )}
        </div>
        {item.description && Array.isArray(item.description) && (
          <div className="text-sm text-stone-600 leading-relaxed mt-2">
            {item.ticketLink && (
              <div className="mb-1">
                <a
                  href={item.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  {t("itinerary.purchaseTicketsOnline") || "線上購票"}
                </a>
              </div>
            )}
            {item.description.map((line, idx) => (
              <div key={idx} className={idx > 0 ? "mt-1" : ""}>
                {line}
              </div>
            ))}
          </div>
        )}
        {item.description && !Array.isArray(item.description) && (
          <p className="text-sm text-stone-600 leading-relaxed mt-2">
            {item.ticketLink && (
              <>
                <a
                  href={item.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  {t("itinerary.purchaseTicketsOnline") || "線上購票"}
                </a>
                {" "}
              </>
            )}
            {renderDescriptionWithLinks(item.description)}
          </p>
        )}
      {item.luggage && (
        <div className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-blue-700">
          <Luggage size={14} className="text-blue-600" />
          <span>{item.luggage}</span>
        </div>
      )}
      </div>
    );
  }

  // 其他類型：一般區塊；若有 option，視為擇一選項，用顏色與標籤區分
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2 flex-1 flex-wrap">
          <h5
            className={`text-base font-bold ${
              item.option ? "text-sky-700" : "text-stone-800"
            } flex items-center gap-2 flex-wrap`}
          >
            <span className="flex items-center gap-1 flex-wrap">
              {item.option
                ? `${item.title}選項${item.option}`
                : item.title}
              {item.location && (
                <>
                  {" : "}
                  {item.infoLink ? (
                    <a
                      href={item.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal text-stone-700 underline"
                    >
                      {item.location}
                    </a>
                  ) : (
                    <span className="font-normal text-stone-700">
                      {item.location}
                    </span>
                  )}
                </>
              )}
            </span>
          </h5>
          {item.option && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 whitespace-nowrap shrink-0">
              擇一
            </span>
          )}
        </div>
        {item.mapLink && (
          <a
            href={item.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-2 py-1 rounded transition-colors"
            title={t("itinerary.viewOnMap") || "查看地圖"}
          >
            <Map size={14} />
            <span className="hidden sm:inline">
              {t("itinerary.map") || "地圖"}
            </span>
          </a>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {item.duration && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200">
            <Clock size={14} className="text-stone-500" />
            <span className="text-xs font-bold text-stone-600">
              {t("itinerary.activityTime")}
              <span className="font-semibold">{item.duration}</span>
            </span>
          </div>
        )}
        {item.activityDuration && (
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${
              isGroupTour
                ? "bg-amber-50 border border-amber-200"
                : "bg-stone-50 border border-stone-200"
            }`}
          >
            <Clock
              size={14}
              className={isGroupTour ? "text-amber-600" : "text-stone-500"}
            />
            <span
              className={`text-xs font-bold ${
                isGroupTour ? "text-amber-700" : "text-stone-600"
              }`}
            >
              {item.type === "meal"
                ? t("itinerary.mealTime")
                : t("itinerary.activityTime")}
              <span className="font-semibold">{item.activityDuration}</span>
            </span>
          </div>
        )}
        {item.openingHours && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200">
            <Clock size={14} className="text-stone-500" />
            <span className="text-xs font-bold text-stone-600 whitespace-nowrap">
              {t("itinerary.openingHours") || "營業時間"}：{item.openingHours}
            </span>
          </div>
        )}
        {item.luggage && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200">
            <Luggage size={14} className="text-blue-600" />
            <span className="text-xs font-bold text-blue-700">
              {item.luggage}
            </span>
          </div>
        )}
        {item.parkingCost && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200">
            <ParkingCircle size={14} className="text-green-600" />
            <span className="text-xs font-bold text-green-700">
              {item.parkingCost}
            </span>
          </div>
        )}
        {item.ticketCost && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200">
            <DollarSign size={14} className="text-orange-600" />
            <span className="text-xs font-bold text-orange-700">
              {item.ticketCost}
            </span>
          </div>
        )}
        {item.isFreeAdmission && !item.ticketCost && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200">
            <DollarSign size={14} className="text-orange-600" />
            <span className="text-xs font-bold text-orange-700">
              {t("itinerary.freeAdmission") || "免費進入"}
            </span>
          </div>
        )}
      </div>
      {item.description && (
        <p className="text-sm text-stone-600 leading-relaxed mt-2">
          {Array.isArray(item.description) ? (
            <>
              {item.ticketLink && (
                <div className="mb-1">
                  <a
                    href={item.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    {t("itinerary.purchaseTicketsOnline") || "線上購票"}
                  </a>
                </div>
              )}
              {item.description
                .filter((line) => !line.includes("免費進入") && !line.includes("Free Admission"))
                .map((line, idx) => (
                  <div key={idx} className={idx > 0 ? "mt-1" : ""}>
                    {renderDescriptionWithLinks(line)}
                  </div>
                ))}
            </>
          ) : !item.description.includes("免費進入") &&
            !item.description.includes("Free Admission") ? (
            <>
              {item.ticketLink && (
                <>
                  <a
                    href={item.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    {t("itinerary.purchaseTicketsOnline") || "線上購票"}
                  </a>
                  {" "}
                </>
              )}
              {renderDescriptionWithLinks(item.description)}
            </>
          ) : null}
        </p>
      )}
      {item.luggage && (
        <div className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-blue-700">
          <Luggage size={14} className="text-blue-600" />
          <span>{item.luggage}</span>
        </div>
      )}
    </div>
  );
};
