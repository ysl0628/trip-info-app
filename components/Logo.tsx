import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10 w-10", 
  showText = true,
  textSize = "text-2xl md:text-3xl"
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg 
        viewBox="0 0 100 100" 
        className={className} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <mask id="circleMask" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
             <circle cx="50" cy="50" r="50" fill="white" />
        </mask>
        <g mask="url(#circleMask)">
            {/* Background */}
            <circle cx="50" cy="50" r="50" className="fill-stone-100" />
            
            {/* Sun */}
            <circle cx="70" cy="35" r="16" className="fill-amber-500" />
            
            {/* Abstract Landscape/Waves */}
            <path 
            d="M-10 70C20 60 40 80 70 65C90 55 110 60 110 60V110H-10V70Z" 
            className="fill-stone-800"
            />
            <path 
            d="M-10 88C20 82 50 92 80 85C95 82 105 84 110 86V110H-10V88Z" 
            className="fill-stone-600 opacity-40"
            />
            
            {/* Sun Reflection/Detail */}
            <circle cx="70" cy="35" r="22" stroke="white" strokeWidth="1" strokeDasharray="4 6" className="opacity-30" />
        </g>
      </svg>
      {showText && (
        <span className={`font-serif font-bold ${textSize} text-stone-900 leading-none tracking-tight`}>
            SoCal<span className="text-amber-500">.</span>
        </span>
      )}
    </div>
  );
};
