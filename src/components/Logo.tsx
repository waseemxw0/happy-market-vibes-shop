
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-orange rounded-full opacity-70"></div>
        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
          <div className="text-orange font-bold text-sm">HM</div>
        </div>
      </div>
      <span className="font-bold text-xl text-softBlack tracking-tight">Happy Market</span>
    </div>
  );
};

export default Logo;
