
import React, { useEffect, useState } from "react";

interface TrendingCountdownProps {
  endTime: Date;
  label?: string;
}

const TrendingCountdown = ({ endTime, label = "Ends in:" }: TrendingCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60))),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Then set up interval
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clear interval on unmount
    return () => clearInterval(timer);
  }, [endTime]);
  
  return (
    <div className="flex items-center gap-1 text-sm">
      {label && <span className="text-xs text-softBlack/60">{label}</span>}
      <div className="flex items-center gap-1 font-medium">
        <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default TrendingCountdown;
