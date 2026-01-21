import React from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

interface ReferenceLink {
  label: string;
  url: string;
}

interface ItineraryReferenceLinksProps {
  links?: ReferenceLink[];
}

export const ItineraryReferenceLinks: React.FC<ItineraryReferenceLinksProps> = ({
  links,
}) => {
  const { t } = useTranslation();

  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="pt-6 border-t border-stone-200">
      <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
        {t("itinerary.referenceLinks") || "參考連結"}
      </h4>
      <div className="flex flex-wrap gap-2">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-stone-200 text-sm font-medium text-stone-700 hover:text-stone-900 hover:border-stone-300 transition-colors shadow-sm"
          >
            <span>{link.label}</span>
            <ExternalLink size={14} className="text-stone-400" />
          </a>
        ))}
      </div>
    </div>
  );
};
