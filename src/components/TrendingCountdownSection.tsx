
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrendingCountdown from "./TrendingCountdown";
import TikTokIcon from "./icons/TikTokIcon";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const TrendingCountdownSection = () => {
  // Set end time to 24 hours from now
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 24);
  
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleShopTheDeal = () => {
    addToCart({
      id: "sunset-projection-lamp",
      name: "Sunset Projection Lamp",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    });
    
    toast({
      title: "Flash Deal Added!",
      description: "Sunset Projection Lamp added to cart with 38% discount",
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden bg-gradient-to-r from-orange/10 to-mint/10 border-none shadow-md">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-full text-sm mb-4 w-fit">
                  <TikTokIcon size={16} className="text-white" />
                  <span>TikTok's Most Viral</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Flash Deal: TikTok's Most Wanted</h2>
                <p className="text-softBlack/70 mb-6">These viral products are flying off the shelves. Grab yours before they're gone!</p>
                
                <div className="mb-6">
                  <TrendingCountdown endTime={endTime} label="Ends in:" />
                </div>
                
                <Button 
                  className="bg-black hover:bg-black/90 text-white w-full md:w-auto rounded-xl"
                  onClick={handleShopTheDeal}
                >
                  Shop the Deal
                </Button>
              </div>
              
              <div className="w-full md:w-1/2 bg-black relative min-h-[200px] md:min-h-0">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Trending Product" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                  <h3 className="font-bold text-lg">Sunset Projection Lamp</h3>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2">
                      <span className="line-through text-softBlack/50">$39.99</span>
                      <span className="text-orange font-bold">$24.99</span>
                    </div>
                    <div className="bg-orange/20 text-orange px-2 py-1 rounded-full text-xs font-semibold">
                      Save 38%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrendingCountdownSection;
