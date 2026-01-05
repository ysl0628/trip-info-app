import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ITINERARY } from '../constants';
import { DayItinerary } from '../types';

export const useItinerary = (): DayItinerary[] => {
  const { t, i18n } = useTranslation();

  return useMemo(() => {
    return ITINERARY.map(day => {
      const dayKey = `itinerary.days.day${day.day}`;
      
      // 如果当前语言是英文且有翻译，使用翻译数据
      if (i18n.language === 'en') {
        const translatedTitle = t(`${dayKey}.title`, { defaultValue: day.title });
        const translatedDescription = t(`${dayKey}.description`, { defaultValue: day.description });
        const translatedHighlights = day.highlights.map((_, idx) => 
          t(`${dayKey}.highlights.${idx}`, { defaultValue: day.highlights[idx] })
        );
        
        // 翻译 accommodation
        const translatedAccommodation = {
          ...day.accommodation,
          location: t(`${dayKey}.accommodation.location`, { defaultValue: day.accommodation.location }),
          hotels: day.accommodation.hotels.map((hotel, idx) => {
            if (typeof hotel === 'string') {
              return t(`${dayKey}.accommodation.hotels.${idx}`, { defaultValue: hotel });
            }
            return {
              ...hotel,
              name: t(`${dayKey}.accommodation.hotels.${idx}.name`, { defaultValue: hotel.name })
            };
          })
        };
        
        // 翻译 meals
        const translatedMeals = {
          breakfast: t(`${dayKey}.meals.breakfast`, { defaultValue: day.meals.breakfast }),
          lunch: t(`${dayKey}.meals.lunch`, { defaultValue: day.meals.lunch }),
          dinner: t(`${dayKey}.meals.dinner`, { defaultValue: day.meals.dinner })
        };
        
        // 翻译 transport
        const translatedTransport = day.transport.map((transport, idx) =>
          t(`${dayKey}.transport.${idx}`, { defaultValue: transport })
        );
        
        // 翻译 timeline
        const translatedTimeline = day.timeline?.map((item, idx) => {
          const timelineKey = `${dayKey}.timeline.${idx}`;
          const translatedItem: typeof item = {
            ...item,
            title: t(`${timelineKey}.title`, { defaultValue: item.title }),
            from: item.from ? t(`${timelineKey}.from`, { defaultValue: item.from }) : item.from,
            to: item.to ? t(`${timelineKey}.to`, { defaultValue: item.to }) : item.to,
            location: item.location ? t(`${timelineKey}.location`, { defaultValue: item.location }) : item.location
          };
          
          // 处理 description
          if (Array.isArray(item.description)) {
            translatedItem.description = item.description.map((desc, descIdx) =>
              t(`${timelineKey}.description.${descIdx}`, { defaultValue: desc })
            );
          } else if (item.description) {
            translatedItem.description = t(`${timelineKey}.description`, { defaultValue: item.description });
          }
          
          return translatedItem;
        });
        
        // 翻译 feeNote
        const translatedFeeNote = day.feeNote
          ? Array.isArray(day.feeNote)
            ? day.feeNote.map((fee, idx) =>
                t(`${dayKey}.feeNote.${idx}`, { defaultValue: fee })
              )
            : t(`${dayKey}.feeNote`, { defaultValue: day.feeNote })
          : day.feeNote;
        
        return {
          ...day,
          title: translatedTitle,
          description: translatedDescription,
          highlights: translatedHighlights,
          accommodation: translatedAccommodation,
          meals: translatedMeals,
          transport: translatedTransport,
          timeline: translatedTimeline,
          feeNote: translatedFeeNote,
          departureLocation: day.departureLocation
            ? t(`${dayKey}.departureLocation`, { defaultValue: day.departureLocation })
            : day.departureLocation
        };
      }
      
      // 中文直接返回原数据
      return day;
    });
  }, [t, i18n.language]);
};
