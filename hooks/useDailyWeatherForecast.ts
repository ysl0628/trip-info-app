import { useEffect, useState } from "react";
import type { WeatherLocation } from "../types";

export interface WeatherForecastCardData {
  location: WeatherLocation;
  date: string;
  temperatureMax: number;
  temperatureMin: number;
  precipitationProbabilityMax: number;
  weatherCode: number;
}

interface WeatherForecastState {
  loading: boolean;
  error: boolean;
  forecasts: WeatherForecastCardData[];
}

const forecastCache = new Map<string, WeatherForecastCardData | null>();

const buildCacheKey = (location: WeatherLocation, date: string) =>
  [
    location.name,
    location.latitude,
    location.longitude,
    location.timezone || "America/Los_Angeles",
    date,
  ].join("|");

export const getWeatherCodeLabel = (weatherCode: number): string => {
  if (weatherCode === 0) return "晴朗";
  if ([1, 2].includes(weatherCode)) return "晴到多雲";
  if (weatherCode === 3) return "陰天";
  if ([45, 48].includes(weatherCode)) return "有霧";
  if ([51, 53, 55, 56, 57].includes(weatherCode)) return "毛毛雨";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) return "下雨";
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return "下雪";
  if ([95, 96, 99].includes(weatherCode)) return "雷雨";
  return "天氣變化";
};

export const getWeatherCodeLabelEn = (weatherCode: number): string => {
  if (weatherCode === 0) return "Clear";
  if ([1, 2].includes(weatherCode)) return "Partly cloudy";
  if (weatherCode === 3) return "Cloudy";
  if ([45, 48].includes(weatherCode)) return "Fog";
  if ([51, 53, 55, 56, 57].includes(weatherCode)) return "Drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) return "Rain";
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return "Snow";
  if ([95, 96, 99].includes(weatherCode)) return "Thunderstorm";
  return "Variable weather";
};

export const useDailyWeatherForecast = (
  locations: WeatherLocation[] | undefined,
  date: string | null
): WeatherForecastState => {
  const [state, setState] = useState<WeatherForecastState>({
    loading: false,
    error: false,
    forecasts: [],
  });

  useEffect(() => {
    if (!locations?.length || !date) {
      setState({ loading: false, error: false, forecasts: [] });
      return;
    }

    let cancelled = false;

    const loadForecasts = async () => {
      setState((current) => ({ ...current, loading: true, error: false }));

      try {
        const results = await Promise.all(
          locations.map(async (location) => {
            const cacheKey = buildCacheKey(location, date);
            const cached = forecastCache.get(cacheKey);
            if (cached !== undefined) {
              return cached;
            }

            const timezone = location.timezone || "America/Los_Angeles";
            const url =
              "https://api.open-meteo.com/v1/forecast" +
              `?latitude=${location.latitude}` +
              `&longitude=${location.longitude}` +
              "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
              `&timezone=${encodeURIComponent(timezone)}` +
              `&start_date=${date}` +
              `&end_date=${date}`;

            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Weather request failed: ${response.status}`);
            }

            const json = await response.json();
            const daily = json?.daily;
            const isMissing =
              !daily ||
              !Array.isArray(daily.time) ||
              daily.time.length === 0 ||
              daily.temperature_2m_max?.[0] == null ||
              daily.temperature_2m_min?.[0] == null ||
              daily.precipitation_probability_max?.[0] == null ||
              daily.weather_code?.[0] == null;

            if (isMissing) {
              forecastCache.set(cacheKey, null);
              return null;
            }

            const forecast: WeatherForecastCardData = {
              location,
              date: daily.time[0],
              temperatureMax: daily.temperature_2m_max[0],
              temperatureMin: daily.temperature_2m_min[0],
              precipitationProbabilityMax: daily.precipitation_probability_max[0],
              weatherCode: daily.weather_code[0],
            };

            forecastCache.set(cacheKey, forecast);
            return forecast;
          })
        );

        if (!cancelled) {
          setState({
            loading: false,
            error: false,
            forecasts: results.filter(
              (result): result is WeatherForecastCardData => result !== null
            ),
          });
        }
      } catch {
        if (!cancelled) {
          setState({ loading: false, error: true, forecasts: [] });
        }
      }
    };

    loadForecasts();

    return () => {
      cancelled = true;
    };
  }, [date, locations]);

  return state;
};
