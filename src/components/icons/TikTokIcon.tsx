
import React from "react";

const TikTokIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
    >
      <path 
        d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 10.282-8.108 6.337 6.337 0 005.112 6.324 6.332 6.332 0 006.22-1.315 6.342 6.342 0 002.236-4.811V7.865c1.359.771 2.912 1.2 4.554 1.2V5.604a4.804 4.804 0 01-3.777 1.082z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default TikTokIcon;
