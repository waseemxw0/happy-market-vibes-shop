
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Clock, BellRing, CheckCircle } from "lucide-react";
import TrendingCountdown from "@/components/TrendingCountdown";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const DropsPage = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [notifiedDrops, setNotifiedDrops] = useState<Set<number>>(new Set());
  
  // Set next drop times (today, tomorrow, and day after)
  const getDropTime = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    date.setHours(9, 0, 0, 0);
    return date;
  };
  
  const handleNotifyMe = (dropId: number, dropName: string) => {
    setNotifiedDrops(prev => new Set(prev).add(dropId));
    
    // Save to localStorage
    const savedNotifications = JSON.parse(localStorage.getItem('dropNotifications') || '[]');
    if (!savedNotifications.includes(dropId)) {
      savedNotifications.push(dropId);
      localStorage.setItem('dropNotifications', JSON.stringify(savedNotifications));
    }
    
    toast({
      title: "🔔 Notification Set!",
      description: `We'll notify you when ${dropName} drops at 9AM EST!`,
      className: "bg-gradient-to-r from-green-500 to-green-600 text-white border-none"
    });
  };

  const handleAddToCart = (drop: any) => {
    addToCart({
      id: drop.id.toString(),
      name: drop.name,
      price: parseFloat(drop.price.replace('$', '')),
      image: drop.image
    });
    
    toast({
      title: "✨ Added to Cart!",
      description: `${drop.name} added successfully`,
      className: "bg-gradient-to-r from-orange to-orange/90 text-white border-none"
    });
  };
  
  const dropsData = [
    {
      id: 1,
      name: "Viral Cloud LED Lamp",
      image: "https://images.unsplash.com/photo-1573375697824-160e9fb5bc1b?w=500&auto=format&fit=crop",
      description: "The most popular cloud lamp on TikTok with over 2.4 million views. Floats magically in your room.",
      price: "$59.99",
      originalPrice: "$79.99",
      dropTime: getDropTime(0),
      status: "live"
    },
    {
      id: 2,
      name: "Smart Plant Monitor",
      image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?w=500&auto=format&fit=crop",
      description: "TikTok's favorite plant care device. Tells you when to water and monitors soil health.",
      price: "$29.99",
      originalPrice: "$44.99",
      dropTime: getDropTime(1),
      status: "upcoming"
    },
    {
      id: 3,
      name: "Galaxy Night Projector Pro",
      image: "https://images.unsplash.com/photo-1633501883354-ca6c1a35ff94?w=500&auto=format&fit=crop",
      description: "The upgraded version of TikTok's viral night projector with new star patterns and app control.",
      price: "$49.99",
      originalPrice: "$69.99",
      dropTime: getDropTime(2),
      status: "upcoming"
    },
    {
      id: 4,
      name: "Sunset Mood Lamp 2.0",
      image: "https://images.unsplash.com/photo-1629976801524-03b1c1668ff0?w=500&auto=format&fit=crop",
      description: "The enhanced version of the viral sunset lamp with multiple color modes and remote control.",
      price: "$39.99",
      originalPrice: "$54.99",
      dropTime: getDropTime(3),
      status: "upcoming"
    },
    {
      id: 5,
      name: "Smart Water Bottle",
      image: "https://images.unsplash.com/photo-1620705323288-696d20761ed9?w=500&auto=format&fit=crop",
      description: "Track your hydration with this smart water bottle that glows to remind you to drink.",
      price: "$34.99",
      originalPrice: "$49.99",
      dropTime: getDropTime(4),
      status: "upcoming"
    }
  ];
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">TikTok Viral Drops</h1>
            <p className="text-softBlack/70 max-w-2xl mx-auto">
              Get exclusive access to the most viral TikTok products before they sell out.
              New drops every day at 9AM EST.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dropsData.map((drop) => {
              const isNotified = notifiedDrops.has(drop.id);
              
              return (
                <div 
                  key={drop.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="relative">
                    <img 
                      src={drop.image} 
                      alt={drop.name} 
                      className="w-full h-56 object-cover"
                    />
                    
                    <div className="absolute top-4 right-4">
                      {drop.status === "live" ? (
                        <div className="bg-orange text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          LIVE NOW
                        </div>
                      ) : (
                        <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          UPCOMING
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{drop.name}</h3>
                    <p className="text-softBlack/70 text-sm mb-4">{drop.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-orange text-xl font-bold">{drop.price}</span>
                      <span className="line-through text-softBlack/50 text-sm">{drop.originalPrice}</span>
                    </div>
                    
                    {drop.status === "live" ? (
                      <Button 
                        className="bg-orange hover:bg-orange/90 text-white rounded-xl py-6 w-full flex items-center gap-2 mt-auto transition-all duration-300 hover:scale-105"
                        onClick={() => handleAddToCart(drop)}
                      >
                        <ShoppingBag className="h-5 w-5" />
                        Add to Cart
                      </Button>
                    ) : (
                      <div className="mt-auto">
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl mb-3">
                          <Clock className="h-5 w-5 text-softBlack/70" />
                          <div className="flex-1">
                            <div className="text-xs text-softBlack/70 mb-1">Drops in:</div>
                            <TrendingCountdown endTime={drop.dropTime} label="" />
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className={`rounded-xl py-5 w-full flex items-center gap-2 transition-all duration-300 ${
                            isNotified 
                              ? 'border-green-300 text-green-700 bg-green-50 hover:bg-green-100' 
                              : 'border-orange/30 text-orange hover:bg-orange/5'
                          }`}
                          onClick={() => handleNotifyMe(drop.id, drop.name)}
                          disabled={isNotified}
                        >
                          {isNotified ? (
                            <>
                              <CheckCircle className="h-5 w-5" />
                              Notifications On
                            </>
                          ) : (
                            <>
                              <BellRing className="h-5 w-5" />
                              Notify Me
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DropsPage;
