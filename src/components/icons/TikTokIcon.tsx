
import React from "react";

interface TikTokIconProps {
  size?: number;
  className?: string;
}

const TikTokIcon = ({ size = 24, className = "" }: TikTokIconProps) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692A6.33 6.33 0 0 0 10.294 16a6.337 6.337 0 0 0 5.116-2.57 6.3 6.3 0 0 0 1.616-4.234V7.865c1.359.77 2.912 1.2 4.554 1.2V5.604a4.801 4.801 0 0 1-1.991 1.082Z"/>
    </svg>
  );
};

export default TikTokIcon;
