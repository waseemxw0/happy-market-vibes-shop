
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface FlashSaleTimerProps {
  headline: string;
  endTime: Date;
}

const FlashSaleTimer = ({ headline, endTime }: FlashSaleTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    // Calculate time left immediately and set up interval
    calculateTimeLeft();
    const timerId = setInterval(calculateTimeLeft, 1000);
    
    // Clean up interval
    return () => clearInterval(timerId);
  }, [endTime]);
  
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-[#FEF7CD]/50 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4">{headline}</h3>
            
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold text-[#F4B400] shadow-sm">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <span className="text-xs mt-2 text-gray-700">Days</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold text-[#F4B400] shadow-sm">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-xs mt-2 text-gray-700">Hours</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold text-[#F4B400] shadow-sm">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-xs mt-2 text-gray-700">Mins</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold text-[#F4B400] shadow-sm">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <span className="text-xs mt-2 text-gray-700">Secs</span>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-gray-700">
              Use code <span className="font-bold">FLASHSALE</span> at checkout for an extra 20% off!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FlashSaleTimer;
