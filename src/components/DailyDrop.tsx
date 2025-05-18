
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrendingCountdown from "./TrendingCountdown";
import { Bell, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DailyDrop = () => {
  const { toast } = useToast();
  const [notified, setNotified] = useState(false);
  
  // Set next drop time to 9AM tomorrow
  const getNextDropTime = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0);
    return tomorrow;
  };
  
  const nextDropTime = getNextDropTime();
  
  const handleNotifyMe = () => {
    setNotified(true);
    toast({
      title: "Notification Set!",
      description: "We'll notify you when the next viral drop goes live!",
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  // Demo product for today's drop
  const todaysDrop = {
    name: "Self-Cleaning Water Bottle",
    price: "$34.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop",
    description: "The viral TikTok water bottle that purifies water using UV light technology",
    soldCount: 342
  };
  
  return (
    <section className="py-12" id="daily-drop">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-orange/5 to-mint/10">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-black text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
                    <span className="text-base">🔥</span> Daily Drop
                  </div>
                  <div className="bg-orange/20 text-orange px-3 py-1.5 rounded-full text-sm font-semibold">
                    Limited Quantity
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{todaysDrop.name}</h2>
                <p className="text-softBlack/70 mb-4">{todaysDrop.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-orange text-2xl font-bold">{todaysDrop.price}</span>
                  <span className="line-through text-softBlack/50">{todaysDrop.originalPrice}</span>
                  <span className="bg-orange/20 text-orange px-2 py-1 rounded-full text-xs font-semibold">
                    Save 30%
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange/10 px-3 py-1.5 rounded-full text-sm text-softBlack/80">
                    {todaysDrop.soldCount} sold today
                  </div>
                  <div className="h-1.5 w-full max-w-xs bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange rounded-full" style={{ width: "78%" }}></div>
                  </div>
                  <span className="text-xs text-softBlack/70">78% claimed</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button className="bg-orange hover:bg-orange/90 text-white rounded-xl py-6 flex-1 flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-orange/30 text-orange hover:bg-orange/5 rounded-xl py-6 flex-1">
                    Buy Now
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6 mt-2 p-4 bg-black/5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⏰</span>
                    <span className="text-sm font-medium">Next Drop:</span>
                    <TrendingCountdown endTime={nextDropTime} label="" />
                  </div>
                  
                  <Button 
                    onClick={handleNotifyMe} 
                    variant="ghost" 
                    className={`rounded-xl text-sm ${notified ? 'bg-green-100 text-green-700' : 'bg-black/10 text-softBlack'}`}
                    disabled={notified}
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    {notified ? 'Notification Set' : 'Notify Me'}
                  </Button>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 bg-white relative min-h-[300px]">
                <img 
                  src={todaysDrop.image} 
                  alt={todaysDrop.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  Today Only
                </div>
                
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <img 
                          src={`https://i.pravatar.cc/100?img=${i+10}`} 
                          alt="User" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-white text-xs bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                    +89 bought today
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DailyDrop;
