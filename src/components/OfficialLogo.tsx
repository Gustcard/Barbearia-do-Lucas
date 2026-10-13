import React, { useState } from 'react';

interface OfficialLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'turquoise' | 'dual' | 'white';
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = '',
  height = 42,
  variant = 'turquoise', // Defaults to vibrant turquoise
}) => {
  const [imgError, setImgError] = useState(false);

  // If the user places their exact logo file at /images/logo.png, load it directly
  if (!imgError) {
    return (
      <img
        src="/images/logo.png"
        alt="Barbearia do Lucas - Logotipo Oficial"
        onError={() => setImgError(true)}
        style={{ height }}
        className={`w-auto object-contain shrink-0 ${className}`}
      />
    );
  }

  // Color mappings based on variant
  const isWhite = variant === 'white';
  const isDual = variant === 'dual';
  
  // Primary text color: 'Barbearia'
  const primaryTextColor = isWhite ? 'text-white' : isDual ? 'text-white' : 'text-[#00c9b7]';
  // Accent color: 'do Lucas' & double line
  const accentColor = isWhite ? 'text-white' : 'text-[#00c9b7]';
  const lineColor = isWhite ? 'bg-white' : 'bg-[#00c9b7]';
  const glowClass = isWhite ? 'drop-shadow-sm' : 'drop-shadow-[0_0_12px_rgba(0,201,183,0.3)]';

  // Pixel-accurate vector recreation of the official logo
  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {/* Top row: "Barbear" + [Barber Pole 'i'] + "a" */}
      <div className={`flex items-center tracking-tight leading-none ${primaryTextColor} font-serif font-black text-2xl sm:text-3xl ${glowClass}`}>
        <span className="tracking-[-0.03em] font-serif font-black">Barbear</span>
        
        {/* The official Barber Pole replacing the letter 'i' */}
        <div className="relative inline-flex items-center justify-center mx-[2px] w-[11px] sm:w-[13px] h-[22px] sm:h-[26px]">
          <svg viewBox="0 0 16 36" className="w-full h-full overflow-visible">
            {/* Top sphere / cap */}
            <circle cx="8" cy="4" r="3.5" fill={isWhite ? "#f8fafc" : "#00c9b7"} stroke="#ffffff" strokeWidth="0.8" />
            <rect x="5" y="7" width="6" height="2" rx="0.5" fill="#ffffff" />
            
            {/* Pole body capsule */}
            <defs>
              <pattern id="barber-stripes" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="10" height="10" fill="#ffffff" />
                <line x1="0" y1="0" x2="0" y2="10" stroke="#00c9b7" strokeWidth="4.5" />
                <line x1="5" y1="0" x2="5" y2="10" stroke="#091316" strokeWidth="2.5" />
              </pattern>
              <clipPath id="pole-clip">
                <rect x="3" y="9" width="10" height="20" rx="3" />
              </clipPath>
            </defs>

            {/* Cylinder with glass shine & diagonal barber stripes */}
            <rect x="3" y="9" width="10" height="20" rx="3" fill="url(#barber-stripes)" stroke={isWhite ? "#ffffff" : "#00c9b7"} strokeWidth="1" />
            <rect x="3" y="9" width="3" height="20" fill="#ffffff" opacity="0.45" clipPath="url(#pole-clip)" />

            {/* Bottom cap & sphere */}
            <rect x="5" y="29" width="6" height="2" rx="0.5" fill="#ffffff" />
            <circle cx="8" cy="32" r="3.5" fill={isWhite ? "#f8fafc" : "#00c9b7"} stroke="#ffffff" strokeWidth="0.8" />
          </svg>
        </div>

        <span className="tracking-[-0.03em] font-serif font-black">a</span>
      </div>

      {/* Bottom row: Double parallel line + "do Lucas" */}
      <div className="w-full flex items-center gap-2 mt-[2px]">
        {/* Double parallel lines */}
        <div className="flex-1 flex flex-col justify-center gap-[2.5px] pr-1">
          <div className={`h-[2px] ${lineColor} rounded-full w-full`} />
          <div className={`h-[2px] ${lineColor} rounded-full w-full`} />
        </div>

        {/* "do Lucas" */}
        <span className={`${accentColor} font-sans font-black text-xs sm:text-sm tracking-wide lowercase first-letter:lowercase leading-none shrink-0`}>
          do <span className="capitalize font-black tracking-normal">Lucas</span>
        </span>
      </div>
    </div>
  );
};
