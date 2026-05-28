import React from 'react';

interface IllustrationSVGProps {
  type: 'cow' | 'goat' | 'sapi_sehat' | 'sapi_sakit' | 'masjid' | 'ibrahim_ismail' | 'kakbah' | 'camel';
  className?: string;
  size?: number | string;
}

export const IllustrationSVG: React.FC<IllustrationSVGProps> = ({ type, className = '', size = '100%' }) => {
  const containerStyle = {
    width: size,
    height: size,
    maxWidth: '400px',
    margin: '0 auto',
  };

  switch (type) {
    case 'cow':
      return (
        <div style={containerStyle} className={`bg-gradient-to-lg from-teal-50 to-emerald-100 p-4 rounded-3xl border-4 border-dashed border-teal-300 shadow-inner flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse-slow">
            {/* Background Hills */}
            <path d="M10 190 Q60 140 110 190 T210 190" fill="#a7f3d0" />
            <path d="M-10 190 Q90 120 190 190" fill="#34d399" opacity="0.6" />
            
            {/* Sapi Badan */}
            <rect x="50" y="80" width="100" height="70" rx="25" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="4" />
            
            {/* Sapi Bintik-bintik */}
            <circle cx="70" cy="100" r="15" fill="#4B5563" />
            <circle cx="120" cy="115" r="10" fill="#4B5563" />
            <path d="M130 90 Q145 95 140 105 Z" fill="#4B5563" />
            
            {/* Sapi Kaki */}
            <rect x="65" y="145" width="12" height="35" rx="4" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="4" />
            <rect x="70" y="170" width="12" height="10" rx="2" fill="#D1D5DB" />
            <rect x="120" y="145" width="12" height="35" rx="4" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="4" />
            <rect x="125" y="170" width="12" height="10" rx="2" fill="#D1D5DB" />
            
            {/* Sapi Ekor */}
            <path d="M150 100 Q170 105 165 125" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />
            <circle cx="165" cy="125" r="6" fill="#4B5563" />

            {/* Sapi Kepala */}
            <rect x="35" y="50" width="55" height="45" rx="18" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="4" />
            
            {/* Sapi Moncong */}
            <rect x="30" y="70" width="65" height="25" rx="12" fill="#F9A8D4" stroke="#F43F5E" strokeWidth="2" />
            {/* Lubang Hidung */}
            <circle cx="50" cy="82" r="3" fill="#E11D48" />
            <circle cx="75" cy="82" r="3" fill="#E11D48" />
            
            {/* Sapi Mata */}
            <circle cx="48" cy="62" r="6" fill="#111827" />
            <circle cx="46" cy="60" r="2" fill="#FFFFFF" />
            <circle cx="72" cy="62" r="6" fill="#111827" />
            <circle cx="70" cy="60" r="2" fill="#FFFFFF" />
            
            {/* Sapi Telinga */}
            <path d="M36 52 Q20 40 28 60 Z" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M34 52 Q24 45 28 55 Z" fill="#F9A8D4" />
            <path d="M88 52 Q104 40 96 60 Z" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M90 52 Q100 45 96 55 Z" fill="#F9A8D4" />

            {/* Tanduk */}
            <path d="M43 51 Q38 35 48 40" stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round" />
            <path d="M81 51 Q86 35 76 40" stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round" />

            {/* Kalung Lonceng */}
            <path d="M50 92 Q62 98 75 92" stroke="#EAB308" strokeWidth="4" />
            <circle cx="625" cy="98" r="7" fill="#FACC15" />
            {/* Lonceng */}
            <path d="M57 96 H68 L65 106 H60 Z" fill="#EAB308" stroke="#CA8A04" strokeWidth="1" />
            <circle cx="62.5" cy="107" r="2" fill="#FACC15" />
          </svg>
        </div>
      );

    case 'goat':
      return (
        <div style={containerStyle} className={`bg-gradient-to-lg from-amber-50 to-orange-100 p-4 rounded-3xl border-4 border-dashed border-orange-300 shadow-inner flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse-slow">
            {/* Grass */}
            <path d="M0 180 Q100 160 200 180" fill="#bbf7d0" />
            
            {/* Goat Body (Fluffy Clouds) */}
            <path d="M60 110 Q50 90 70 80 Q90 70 110 80 Q130 70 140 90 Q155 105 145 125 Q135 140 115 140 Q95 145 75 135 Q55 130 60 110 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="4" />
            {/* Fluffy dots */}
            <circle cx="85" cy="100" r="15" fill="#F3F4F6" />
            <circle cx="115" cy="105" r="18" fill="#F3F4F6" />
            <circle cx="100" cy="120" r="14" fill="#F3F4F6" />

            {/* Goat Head */}
            <rect x="40" y="60" width="35" height="45" rx="14" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="3" />
            
            {/* Smiling mouth & snout */}
            <ellipse cx="57" cy="92" rx="12" ry="8" fill="#FED7AA" />
            <path d="M52 92 Q57 98 62 92" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
            <line x1="57" y1="88" x2="57" y2="92" stroke="#EA580C" strokeWidth="2" />

            {/* Eyes */}
            <circle cx="48" cy="74" r="5" fill="#1F2937" />
            <circle cx="46" cy="72" r="1.5" fill="#FFFFFF" />
            <circle cx="66" cy="74" r="5" fill="#1F2937" />
            <circle cx="64" cy="72" r="1.5" fill="#FFFFFF" />

            {/* Horns */}
            <path d="M48 61 Q42 45 35 50" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
            <path d="M66 61 Q72 45 79 50" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />

            {/* Cute floppy ears */}
            <path d="M38 68 Q24 72 32 82 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" />
            <path d="M36 71 Q28 73 33 78 Z" fill="#FED7AA" />
            
            <path d="M77 68 Q91 72 83 82 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" />
            <path d="M79 71 Q87 73 82 78 Z" fill="#FED7AA" />

            {/* Goat Legs */}
            <rect x="75" y="138" width="10" height="35" rx="3" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="3" />
            <rect x="75" y="165" width="10" height="8" rx="2" fill="#9CA3AF" />
            
            <rect x="110" y="138" width="10" height="35" rx="3" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="3" />
            <rect x="110" y="165" width="10" height="8" rx="2" fill="#9CA3AF" />

            {/* Cute Beard */}
            <path d="M52 105 Q57 120 62 105 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
          </svg>
        </div>
      );

    case 'sapi_sehat':
      return (
        <div style={containerStyle} className={`bg-gradient-to-lg from-green-50 to-emerald-200 p-4 rounded-3xl border-4 border-emerald-400 shadow-md ${className}`}>
          <div className="absolute top-2 right-2 bg-emerald-600 text-white font-bold text-xs px-2 py-1 rounded-full shadow-md z-10 animate-bounce">
            HALAL &amp; SEHAT ✅
          </div>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Sunny field background */}
            <circle cx="100" cy="180" r="100" fill="#10B981" opacity="0.3" />
            <circle cx="100" cy="100" r="85" stroke="#10B981" strokeWidth="3" strokeDasharray="6 6" />
            
            {/* Muscles & strong stance */}
            {/* Sapi Badan */}
            <rect x="45" y="75" width="110" height="75" rx="30" fill="#D1D5DB" stroke="#1E2937" strokeWidth="4" />
            <circle cx="75" cy="100" r="18" fill="#1E2937" />
            <circle cx="125" cy="115" r="14" fill="#1E2937" />

            {/* Flexing strong legs */}
            <rect x="60" y="145" width="18" height="40" rx="6" fill="#9CA3AF" stroke="#1E2937" strokeWidth="4" />
            <rect x="120" y="145" width="18" height="40" rx="6" fill="#9CA3AF" stroke="#1E2937" strokeWidth="4" />
            <rect x="60" y="175" width="18" height="10" rx="2" fill="#111827" />
            <rect x="120" y="175" width="18" height="10" rx="2" fill="#111827" />

            {/* Proud Head */}
            <rect x="35" y="45" width="60" height="50" rx="20" fill="#E5E7EB" stroke="#1E2937" strokeWidth="4" />
            <ellipse cx="65" cy="80" rx="35" ry="15" fill="#F472B6" stroke="#E11D48" strokeWidth="2" />
            <circle cx="50" cy="80" r="4" fill="#E11D48" />
            <circle cx="80" cy="80" r="4" fill="#E11D48" />

            {/* Sparkly happy eyes */}
            <circle cx="50" cy="60" r="7" fill="#111827" />
            <circle cx="47" cy="57" r="3" fill="#FFFFFF" />
            <circle cx="80" cy="60" r="7" fill="#111827" />
            <circle cx="77" cy="57" r="3" fill="#FFFFFF" />

            {/* Big healthy horns */}
            <path d="M45 47 Q35 25 50 28" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
            <path d="M85 47 Q95 25 80 28" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />

            {/* Golden healthy badge on collar */}
            <path d="M50 93 Q65 101 80 93" stroke="#F59E0B" strokeWidth="5" />
            <polygon points="65,95 72,110 58,110" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
          </svg>
        </div>
      );

    case 'sapi_sakit':
      return (
        <div style={containerStyle} className={`bg-gradient-to-lg from-rose-50 to-red-100 p-4 rounded-3xl border-4 border-red-300 shadow-inner ${className}`}>
          <div className="absolute top-2 right-2 bg-rose-600 text-white font-bold text-xs px-2 py-1 rounded-full shadow-md z-10">
            TIDAK SAH / SAKIT ❌
          </div>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
            {/* Sick background */}
            <rect width="200" height="200" rx="20" fill="#FEF2F2" opacity="0.4" />
            
            {/* Skinny rib cage body */}
            <rect x="50" y="85" width="95" height="55" rx="10" fill="#9CA3AF" stroke="#B91C1C" strokeWidth="3" />
            {/* Visible ribs lines */}
            <line x1="70" y1="95" x2="70" y2="130" stroke="#4B5563" strokeWidth="3" />
            <line x1="85" y1="95" x2="85" y2="130" stroke="#4B5563" strokeWidth="3" />
            <line x1="100" y1="95" x2="100" y2="130" stroke="#4B5563" strokeWidth="3" />
            <line x1="115" y1="95" x2="115" y2="130" stroke="#4B5563" strokeWidth="3" />

            {/* Bandage plaster on body */}
            <rect x="120" y="93" width="20" height="10" rx="2" fill="#FDE047" transform="rotate(25 120 93)" />
            <rect x="125" y="88" width="10" height="20" rx="2" fill="#FDE047" transform="rotate(25 125 88)" />

            {/* Drooping thin legs */}
            <rect x="65" y="140" width="10" height="30" rx="2" fill="#9CA3AF" stroke="#B91C1C" strokeWidth="3" />
            <rect x="115" y="140" width="10" height="30" rx="2" fill="#9CA3AF" stroke="#B91C1C" strokeWidth="3" transform="rotate(10 115 140)" /> {/* Pincang */}

            {/* Sad head tilted down */}
            <rect x="25" y="60" width="55" height="40" rx="12" fill="#D1D5DB" stroke="#B91C1C" strokeWidth="3" />
            
            {/* Sad eyes - half closed */}
            <path d="M35 70 Q42 66 45 72" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="74" x2="43" y2="76" stroke="#4B5563" />
            
            <path d="M58 70 Q65 66 68 72" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="74" x2="66" y2="76" stroke="#4B5563" />

            {/* Runny nose / pale mouth */}
            <ellipse cx="45" cy="88" rx="16" ry="8" fill="#FBCFE8" />
            {/* Droplet */}
            <circle cx="50" cy="94" r="3" fill="#38BDF8" />
            <path d="M50 90 L47 94 L53 94 Z" fill="#38BDF8" />
            
            {/* Small broken horn */}
            <path d="M35 58 Q28 48 35 45" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="58" x2="65" y2="52" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" /> {/* Broken horn */}

            {/* Flies circling head */}
            <circle cx="80" cy="40" r="2" fill="#000" />
            <line x1="77" y1="38" x2="83" y2="42" stroke="#000" strokeWidth="0.5" />
            <circle cx="105" cy="50" r="2" fill="#000" />
            <line x1="102" y1="48" x2="108" y2="52" stroke="#000" strokeWidth="0.5" />
          </svg>
        </div>
      );

    case 'masjid':
      return (
        <div style={containerStyle} className={`bg-gradient-to-lg from-sky-950 via-teal-950 to-emerald-950 p-4 rounded-3xl border-4 border-teal-500 shadow-xl ${className}`}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Stars in Sky */}
            <g fill="#FFF">
              <circle cx="20" cy="30" r="1.5" opacity="0.8" />
              <circle cx="45" cy="15" r="1" opacity="0.6" />
              <circle cx="160" cy="25" r="1.5" opacity="0.9" />
              <circle cx="180" cy="50" r="1" opacity="0.7" />
              <circle cx="140" cy="15" r="2" opacity="0.8" />
              <circle cx="35" cy="60" r="1.5" opacity="0.5" />
              {/* Little stars */}
              <polygon points="100,20 102,23 105,23 103,25 104,28 100,26 96,28 97,25 95,23 98,23" fill="#FCD34D" />
            </g>

            {/* Glowing Moon */}
            <circle cx="145" cy="40" r="18" fill="#FEF08A" opacity="0.4" />
            <circle cx="145" cy="40" r="14" fill="#FEF08A" />
            <circle cx="139" cy="35" r="14" fill="#0c1f30" /> {/* Crescent effect */}

            {/* Clouds */}
            <path d="M10 120 Q30 110 50 120 T90 120 V190 H10 Z" fill="#134e4a" opacity="0.4" />
            <path d="M110 120 Q130 110 150 120 T190 120 V190 H110 Z" fill="#134e4a" opacity="0.4" />

            {/* Masjid Main Structure */}
            <rect x="50" y="110" width="100" height="70" rx="4" fill="#0D9488" stroke="#2DD4BF" strokeWidth="3" />
            
            {/* Grand Dome */}
            <path d="M50 110 Q50 60 100 60 Q150 60 150 110 Z" fill="#F59E0B" stroke="#FBBF24" strokeWidth="4" />
            {/* Dome Tip / Quill */}
            <line x1="100" y1="60" x2="100" y2="45" stroke="#FBBF24" strokeWidth="3" />
            <path d="M96 45 Q100 40 104 45 Z" fill="#FBBF24" />
            {/* Little Crescent on Dome */}
            <path d="M100 40 Q106 40 106 34 Q103 36 100 36" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1" />

            {/* Left Minaret */}
            <rect x="25" y="90" width="18" height="90" rx="2" fill="#0F766E" stroke="#2DD4BF" strokeWidth="2" />
            <path d="M23 90 Q34 75 45 90 Z" fill="#F59E0B" />
            
            {/* Right Minaret */}
            <rect x="157" y="90" width="18" height="90" rx="2" fill="#0F766E" stroke="#2DD4BF" strokeWidth="2" />
            <path d="M155 90 Q166 75 177 90 Z" fill="#F59E0B" />

            {/* Arch Door */}
            <path d="M85 180 V140 Q100 125 115 140 V180 Z" fill="#111827" stroke="#2DD4BF" strokeWidth="3" />
            
            {/* Glowing Arch Windows */}
            <path d="M60 145 V125 Q70 115 80 125 V145 Z" fill="#FDE047" opacity="0.8" />
            <path d="M120 145 V125 Q130 115 140 125 V145 Z" fill="#FDE047" opacity="0.8" />
          </svg>
        </div>
      );

    case 'ibrahim_ismail':
      return (
        <div style={containerStyle} className={`bg-gradient-to-lg from-orange-950 via-red-950 to-amber-950 p-4 rounded-3xl border-4 border-orange-500 shadow-xl ${className}`}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Desert sky */}
            <path d="M0 0 H200 V200 H0 Z" fill="url(#desertGrad)" />
            <defs>
              <linearGradient id="desertGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="50%" stopColor="#c2410c" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Sun rays of light / faith */}
            <path d="M100 50 L0 200 H200 Z" fill="#FEF08A" opacity="0.15" />
            <line x1="100" y1="50" x2="20" y2="200" stroke="#FFF" strokeWidth="2" opacity="0.3" strokeDasharray="5 5" />
            <line x1="100" y1="50" x2="180" y2="200" stroke="#FFF" strokeWidth="2" opacity="0.3" strokeDasharray="5 5" />

            {/* Star light */}
            <polygon points="100,40 103,45 109,45 104,49 106,55 100,51 94,55 96,49 91,45 97,45" fill="#FFF" className="animate-ping" />

            {/* Desert Dunes Silhouettes */}
            <path d="M-20 180 Q60 130 140 170 T300 160 V220 H-20 Z" fill="#450a0a" />
            <path d="M50 175 Q120 140 190 170 T310 165 V220 H50 Z" fill="#7c2d12" opacity="0.8" />

            {/* Warm silhouettes representing Ibrahim & Ismail (respectful, no face, pure child-friendly symbolism: two stars/glows under the guidance ray of a crescent, tents, or camels) */}
            <rect x="70" y="150" width="20" height="35" rx="5" fill="#1c1917" /> {/* Silhouette representation */}
            <rect x="110" y="155" width="15" height="30" rx="4" fill="#1c1917" />

            {/* Shining hearts or faith sparks over characters */}
            <path d="M95 140 Q100 135 105 140 Q110 145 100 152 Q90 145 95 140 Z" fill="#EF4444" />
            
            {/* The Holy Oasis Palm */}
            <path d="M25 185 L30 140" stroke="#1c1917" strokeWidth="5" />
            <path d="M30 140 Q10 130 5 140 Q0 120 20 130 Q30 115 35 130 Q50 125 40 138 Z" fill="#1c1917" />
          </svg>
        </div>
      );

    case 'kakbah':
      return (
        <div style={containerStyle} className={`bg-gradient-to-lg from-indigo-950 to-blue-900 p-4 rounded-3xl border-4 border-indigo-400 shadow-md ${className}`}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Sky starry */}
            <circle cx="50" cy="40" r="1" fill="#FFF" />
            <circle cx="120" cy="20" r="1.5" fill="#FFF" />
            <circle cx="170" cy="50" r="1.5" fill="#FFF" />
            <circle cx="160" cy="15" r="1" fill="#FFF" />

            {/* Mosque Pillars Background (Massive arches) */}
            <path d="M10 200 V100 H190 V200 Z" fill="#1E3A8A" opacity="0.4" />
            <path d="M20 100 Q40 70 60 100 M60 100 Q80 70 100 100 M100 100 Q120 70 140 100 M140 100 Q160 70 180 100" stroke="#60A5FA" strokeWidth="2" fill="none" />

            {/* Clean White Marble Ground */}
            <ellipse cx="100" cy="175" rx="90" ry="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
            <ellipse cx="100" cy="175" rx="75" ry="15" fill="#F3F4F6" />

            {/* The Holy Ka'bah Cube */}
            {/* Left face */}
            <polygon points="65,115 100,123 100,165 65,155" fill="#1F2937" stroke="#111827" strokeWidth="2" />
            {/* Right face */}
            <polygon points="100,123 135,115 135,155 100,165" fill="#111827" stroke="#030712" strokeWidth="2" />
            {/* Roof */}
            <polygon points="65,115 100,107 135,115 100,123" fill="#374151" />

            {/* Golden Belt (Kiswa Belt) */}
            {/* Left side belt */}
            <polygon points="65,123 100,131 100,136 65,128" fill="#FBBF24" />
            {/* Right side belt */}
            <polygon points="100,131 135,123 135,128 100,136" fill="#FBBF24" />

            {/* Kiswa calligraphy elements */}
            <line x1="70" y1="125" x2="95" y2="131" stroke="#D97706" strokeWidth="1" />
            <line x1="105" y1="131" x2="130" y2="125" stroke="#D97706" strokeWidth="1" />

            {/* Golden Door of Ka'bah (Left/Right side) */}
            <polygon points="104,138 120,134 120,154 104,158" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
            {/* Black Stone (Hajar Aswad) Corner Indicator */}
            <circle cx="100" cy="162" r="3" fill="#000" stroke="#FFF" strokeWidth="1" />
          </svg>
        </div>
      );

    case 'camel':
      return (
        <div style={containerStyle} className={`bg-gradient-to-lg from-yellow-50 to-amber-100 p-4 rounded-3xl border-4 border-dashed border-yellow-300 shadow-inner flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse-slow">
            {/* Sandy ground */}
            <path d="M0 170 Q100 150 200 170 V200 H0 Z" fill="#FDE047" opacity="0.6" />
            <circle cx="180" cy="40" r="15" fill="#FDBA74" opacity="0.8" /> {/* Sun */}

            {/* Camel Legs */}
            <rect x="75" y="130" width="8" height="45" rx="3" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
            <rect x="110" y="130" width="8" height="45" rx="3" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
            <rect x="75" y="172" width="11" height="6" rx="2" fill="#92400E" />
            <rect x="110" y="172" width="11" height="6" rx="2" fill="#92400E" />

            {/* Camel Body with Hump */}
            <path d="M60 120 Q55 95 80 95 Q100 50 120 95 Q145 95 140 125 Z" fill="#D97706" stroke="#92400E" strokeWidth="3" />
            {/* Hump detailing */}
            <path d="M85 91 Q100 65 115 91" stroke="#92400E" strokeWidth="2" />

            {/* Decorative Saddle blanket */}
            <rect x="85" y="98" width="30" height="25" fill="#EF4444" rx="2" />
            <rect x="90" y="103" width="20" height="15" fill="#FCD34D" />
            <line x1="85" y1="123" x2="115" y2="123" stroke="#FFF" strokeWidth="2" strokeDasharray="3 3" /> {/* Tassels */}

            {/* Sinuous Camel Neck */}
            <path d="M55 115 Q30 90 45 65" stroke="#D97706" strokeWidth="12" strokeLinecap="round" />
            <path d="M55 115 Q30 90 45 65" stroke="#92400E" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Camel Head */}
            <rect x="35" y="45" width="35" height="22" rx="8" fill="#F59E0B" stroke="#92400E" strokeWidth="3" />
            
            {/* Big friendly eye with lashes */}
            <circle cx="45" cy="53" r="4.5" fill="#1F2937" />
            <circle cx="43" cy="51" r="1.5" fill="#FFFFFF" />
            <line x1="41" y1="48" x2="43" y2="49" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="45" y1="47" x2="46" y2="49" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />

            {/* Cheerful muzzle and nose */}
            <ellipse cx="61" cy="56" rx="10" ry="7" fill="#FEF3C7" />
            <line x1="59" y1="52" x2="63" y2="52" stroke="#92400E" strokeWidth="2" />
            <path d="M56 57 Q61 62 65 57" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />

            {/* Camel Ears */}
            <path d="M37 47 Q31 37 36 43 Z" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />

            {/* Camel Tail */}
            <path d="M138 120 Q148 130 144 148" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
            <circle cx="144" cy="148" r="4.5" fill="#92400E" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};

export default IllustrationSVG;
