
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-9 h-9 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange to-mint rounded-xl opacity-90 shadow-sm cyber-border animate-cyber-pulse"></div>
        <div className="absolute inset-1 bg-white backdrop-blur-sm rounded-lg flex items-center justify-center">
          <div className="flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 2L4 7V17L12 22L20 17V7L12 2Z" 
                stroke="#FFA94D" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
                fill="#FFA94D" 
                stroke="#FFA94D" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-orbitron font-black text-lg md:text-xl text-softBlack tracking-tight leading-none holographic-text">
          TRENDORA
        </span>
        <span className="font-exo text-orange text-xs tracking-widest font-semibold uppercase">
          TikTok's Finest
        </span>
      </div>
    </div>
  );
};

export default Logo;
