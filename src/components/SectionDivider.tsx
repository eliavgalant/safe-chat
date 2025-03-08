
import React from 'react';

interface SectionDividerProps {
  fromColor: string;
  toColor: string;
  pattern: 'wave' | 'curve' | 'slant' | 'triangle';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  fromColor, 
  toColor, 
  pattern 
}) => {
  // Generate SVG path based on pattern
  const renderPath = () => {
    const height = 70; // Height of divider
    
    switch (pattern) {
      case 'wave':
        return (
          <path 
            d="M0,0 C240,0 480,40 720,40 C960,40 1200,0 1440,0 V70 H0 V0 Z" 
            fill="currentColor"
          />
        );
      case 'curve':
        return (
          <path 
            d="M0,0 C480,70 960,70 1440,0 V70 H0 V0 Z" 
            fill="currentColor"
          />
        );
      case 'slant':
        return (
          <path 
            d="M0,70 L1440,0 L1440,70 L0,70 Z" 
            fill="currentColor"
          />
        );
      case 'triangle':
        return (
          <path 
            d="M0,70 L720,0 L1440,70 L0,70 Z" 
            fill="currentColor"
          />
        );
      default:
        return (
          <path 
            d="M0,0 L1440,0 L1440,70 L0,70 Z" 
            fill="currentColor"
          />
        );
    }
  };

  return (
    <div className="relative w-full h-[70px] overflow-hidden">
      <div className={`absolute inset-0 ${fromColor} ${toColor} bg-gradient-to-b text-[#00000000]`}>
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
        >
          {renderPath()}
        </svg>
      </div>
    </div>
  );
};

export default SectionDivider;
