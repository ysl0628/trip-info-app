import React, { useEffect, useState } from "react";
import { CloudSun, Droplets, Thermometer } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  useDailyWeatherForecast,
  getWeatherCodeLabel,
  getWeatherCodeLabelEn,
} from "../../hooks/useDailyWeatherForecast";
import type { DayItinerary, WeatherLocation } from "../../types";

const TRIP_YEAR = 2026;

const WEATHER_LOCATION_LABELS_ZH: Record<string, string> = {
  "Ontario Airport": "安大略機場",
  "Hacienda Heights": "哈仙達崗",
  "Santa Monica": "聖塔莫尼卡",
  Malibu: "馬里布",
  "Farmers Market LA": "洛杉磯農夫市場",
  Glendale: "格蘭岱爾",
  Hollywood: "好萊塢",
  Pasadena: "帕薩迪納",
  "San Gabriel": "聖蓋博",
  "Long Beach": "長灘",
  "Huntington Beach": "杭廷頓海灘",
  Irvine: "爾灣",
  "Rowland Heights": "羅蘭崗",
  "Las Vegas": "拉斯維加斯",
  "Zion National Park": "錫安國家公園",
  "Bryce Canyon": "布萊斯峽谷",
  Page: "佩吉",
  "Grand Canyon": "大峽谷",
  Barstow: "巴斯托",
  "Rancho Cucamonga": "蘭丘庫卡蒙加",
  "Joshua Tree": "約書亞樹",
  "Palm Springs": "棕櫚泉",
  "San Diego": "聖地牙哥",
  "Balboa Park": "巴爾波亞公園",
  "Torrey Pines": "托瑞松",
  "Old Town San Diego": "聖地牙哥老城",
  "San Diego Waterfront": "聖地牙哥海港",
  Coronado: "科羅納多",
  "Ocean Beach": "海洋海灘",
  "Del Mar": "德爾馬",
};

const getIsoDateFromDay = (dayDate: string): string | null => {
  const match = dayDate.match(/(\d{1,2})\/(\d{1,2})/);
  if (!match) return null;

  const month = match[1].padStart(2, "0");
  const day = match[2].padStart(2, "0");
  return `${TRIP_YEAR}-${month}-${day}`;
};

const getLocationLabel = (
  location: WeatherLocation,
  language: string
): { primary: string; secondary: string | null } => {
  const zhLabel = WEATHER_LOCATION_LABELS_ZH[location.name];

  if (language === "en") {
    return {
      primary: location.name,
      secondary: zhLabel || null,
    };
  }

  return {
    primary: zhLabel || location.name,
    secondary: zhLabel ? location.name : null,
  };
};

interface ItineraryWeatherCardsProps {
  item: DayItinerary;
}

export const ItineraryWeatherCards: React.FC<ItineraryWeatherCardsProps> = ({
  item,
}) => {
  const { t, i18n } = useTranslation();
  const isoDate = getIsoDateFromDay(item.date);
  const locations = item.weatherLocations || [];
  const { loading, error, forecasts } = useDailyWeatherForecast(locations, isoDate);
  const [selectedLocationName, setSelectedLocationName] = useState<string>(
    locations[0]?.name || ""
  );

  useEffect(() => {
    if (!locations.length) {
      setSelectedLocationName("");
      return;
    }

    const stillExists = locations.some(
      (location) => location.name === selectedLocationName
    );

    if (!stillExists) {
      setSelectedLocationName(locations[0].name);
    }
  }, [locations, selectedLocationName, item.day]);

  if (!locations.length || !isoDate) {
    return null;
  }

  const noForecastYet = !loading && !error && forecasts.length === 0;

  const renderCard = (location: WeatherLocation) => {
    const forecast = forecasts.find(
      (entry) => entry.location.name === location.name
    );
    const labels = getLocationLabel(location, i18n.language);

    return (
      <div
        key={`${item.day}-${location.name}`}
        className="rounded-xl border border-sky-100 bg-sky-50/70 p-4 shadow-sm"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h5 className="text-base font-bold text-stone-800">{labels.primary}</h5>
            {/* {labels.secondary && (
              <p className="mt-0.5 text-xs text-stone-500">{labels.secondary}</p>
            )} */}
          </div>
          <div className="shrink-0 text-right">
            {/* <p className="text-xs text-stone-500">{isoDate}</p> */}
            {forecast && (
              <p className="mt-1 text-sm font-semibold text-stone-700">
                {i18n.language === "en"
                  ? getWeatherCodeLabelEn(forecast.weatherCode)
                  : getWeatherCodeLabel(forecast.weatherCode)}
              </p>
            )}
          </div>
        </div>

        {forecast ? (
          <div className="mt-3 space-y-3">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-white px-3 py-1.5">
                <Thermometer size={14} className="text-orange-600" />
                <span className="text-xs font-bold text-orange-700">
                  {t("itinerary.tempRange") || "高低溫"}{" "}
                  {Math.round(forecast.temperatureMax)}° /{" "}
                  {Math.round(forecast.temperatureMin)}°
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-1.5">
                <Droplets size={14} className="text-blue-600" />
                <span className="text-xs font-bold text-blue-700">
                  {t("itinerary.precipitationChance") || "降雨機率"}{" "}
                  {Math.round(forecast.precipitationProbabilityMax)}%
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-500">
              {t("itinerary.forecastMayChange") ||
                "預報會隨日期接近而更新，出發前再確認一次。"}
            </p>
          </div>
        ) : (
          <div className="mt-3 rounded-lg border border-dashed border-stone-200 bg-white px-3 py-3 text-sm text-stone-500">
            {loading
              ? t("itinerary.weatherLoading") || "讀取天氣中..."
              : noForecastYet
                ? t("itinerary.weatherUnavailable") ||
                  "目前尚無此日期的預報資料。"
                : error
                  ? t("itinerary.weatherError") || "天氣資料讀取失敗。"
                  : t("itinerary.weatherUnavailable") ||
                    "目前尚無此日期的預報資料。"}
          </div>
        )}
      </div>
    );
  };

  const selectedLocation =
    locations.find((location) => location.name === selectedLocationName) ||
    locations[0];

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <CloudSun size={18} className="text-sky-600" />
        <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500">
          {t("itinerary.weatherForecast") || "天氣預報"}
        </h4>
      </div>

      {locations.length > 1 && (
        <div className="relative z-10 py-1 -mx-1 px-1 md:hidden">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {locations.map((location) => {
              const labels = getLocationLabel(location, i18n.language);
              const isActive = location.name === selectedLocationName;

              return (
                <button
                  key={`${item.day}-toggle-${location.name}`}
                  onClick={() => setSelectedLocationName(location.name)}
                  className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-stone-900 text-white border-stone-900 shadow-lg"
                      : "bg-white text-stone-500 border-stone-200 hover:border-stone-300"
                  }`}
                >
                  {labels.primary}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="md:hidden">
        {selectedLocation && renderCard(selectedLocation)}
      </div>

      <div className="hidden gap-3 md:grid md:grid-cols-2 xl:grid-cols-3">
        {locations.map((location) => renderCard(location))}
      </div>
    </section>
  );
};
