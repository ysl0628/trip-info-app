import React, { useState } from 'react';
import { Region } from '../types';
import { SlidersHorizontal } from 'lucide-react';

const DEFAULT_REGIONS: Region[] = ['洛杉磯', '拉斯維加斯/大峽谷', '聖地牙哥', '棕櫚泉', '約書亞樹'];

interface RegionTabsProps {
  activeRegion: Region;
  onChange: (region: Region) => void;
  regions?: Region[];
}

export const RegionTabs: React.FC<RegionTabsProps> = ({
  activeRegion,
  onChange,
  regions = DEFAULT_REGIONS,
}) => {
  return (
    <div className="relative z-20 py-2 -mx-4 px-4">
      <div className="flex overflow-x-auto p-2 gap-2 no-scrollbar md:justify-center md:flex-wrap">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onChange(region)}
            className={`
              flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border
              ${
                activeRegion === region
                  ? 'bg-stone-900 text-white border-stone-900 shadow-lg scale-105'
                  : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300'
              }
            `}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};

interface RegionSidebarProps {
  activeRegion: Region;
  onChange: (region: Region) => void;
  regions?: Region[];
  show: boolean;
  title?: string;
  children?: React.ReactNode;
}

export const RegionSidebar: React.FC<RegionSidebarProps> = ({
  activeRegion,
  onChange,
  regions = DEFAULT_REGIONS,
  show,
  title = '區域 Regions',
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`hidden lg:block fixed left-4 lg:left-8 bottom-24 z-40 transition-all duration-500 ease-out transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-11 h-11 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-lg shadow-stone-900/30 hover:bg-stone-700 transition-colors"
        aria-label="切換篩選面板"
      >
        <SlidersHorizontal size={18} />
      </button>

      {/* Popover panel */}
      <div
        className={`
          mt-3 w-56 origin-bottom-right bg-white/95 backdrop-blur-xl border border-white/40
          shadow-[0_10px_40px_rgba(15,23,42,0.35)] rounded-2xl p-4 space-y-6
          transition-all duration-200
          ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1 pointer-events-none'}
        `}
      >
        <div className="space-y-2">
          <div className="px-2">
            <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{title}</h3>
          </div>
          <div className="flex flex-col gap-1">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => onChange(region)}
                className={`
                  w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                  ${
                    activeRegion === region
                      ? 'bg-stone-900 text-white shadow-md translate-x-1'
                      : 'text-stone-500 hover:bg-stone-100 hover:text-stone-700'
                  }
                `}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {children && (
          <>
            <div className="h-px bg-stone-200/60 mx-2" />
            {children}
          </>
        )}
      </div>
    </div>
  );
};


