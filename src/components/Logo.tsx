
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange to-mint/80 rounded-2xl opacity-80"></div>
        <div className="absolute inset-1 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <div className="text-orange font-bold text-sm">TR</div>
        </div>
      </div>
      <span className="font-bold text-xl text-softBlack tracking-tight">Trendora</span>
    </div>
  );
};

export default Logo;
