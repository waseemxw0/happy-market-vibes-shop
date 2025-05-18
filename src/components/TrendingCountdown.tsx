
import React, { useState, useEffect } from "react";

interface TrendingCountdownProps {
  endTime: Date;
  label?: string;
}

const TrendingCountdown = ({ endTime, label = "Limited Time:" }: TrendingCountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +endTime - +new Date();
    
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };
  
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span className="text-softBlack/80">{label}</span>
      <div className="flex items-center gap-1">
        <div className="bg-softBlack text-white px-2 py-1 rounded">
          {formatTime(timeLeft.hours)}
        </div>
        <span>:</span>
        <div className="bg-softBlack text-white px-2 py-1 rounded">
          {formatTime(timeLeft.minutes)}
        </div>
        <span>:</span>
        <div className="bg-softBlack text-white px-2 py-1 rounded">
          {formatTime(timeLeft.seconds)}
        </div>
      </div>
    </div>
  );
};

export default TrendingCountdown;
