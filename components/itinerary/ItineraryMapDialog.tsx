import React from "react";
import { createPortal } from "react-dom";
import { X, Navigation } from "lucide-react";
import { DayItinerary } from "../../types";
import { getEmbedUrl } from "../../utils/itineraryHelpers";

interface ItineraryMapDialogProps {
  selectedMap: DayItinerary;
  onClose: () => void;
}

export const ItineraryMapDialog: React.FC<ItineraryMapDialogProps> = ({
  selectedMap,
  onClose,
}) => {
  const embedUrl = selectedMap.mapLink
    ? getEmbedUrl(selectedMap.mapLink)
    : null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[70vh] md:h-[80vh] overflow-hidden flex flex-col transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-3 border-b border-stone-100 flex justify-between items-center bg-white shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="shrink-0 bg-stone-100 text-stone-600 text-xs font-bold px-2 py-0.5 rounded">
              Day {selectedMap.day}
            </span>
            <h3 className="font-bold text-stone-800 truncate">
              {selectedMap.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 text-stone-500 shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 bg-stone-100 relative w-full">
          {embedUrl ? (
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={embedUrl}
              allowFullScreen
              className="w-full h-full absolute inset-0"
              title="map"
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-stone-400">
              <p>無法預覽地圖</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-stone-100 shrink-0 pb-safe">
          <a
            href={selectedMap.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white font-bold py-3.5 rounded-xl hover:bg-stone-700 transition-colors shadow-lg"
          >
            <Navigation size={18} />
            開啟 Google Maps
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};
