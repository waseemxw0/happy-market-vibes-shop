
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  headline: string;
  ctaText: string;
}

const HeroSection = ({ headline, ctaText }: HeroSectionProps) => {
  const navigate = useNavigate();
  
  const handleShopClick = () => {
    navigate('/shop');
  };
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FDE1D3] to-[#F2FCE2] py-20 md:py-28 rounded-3xl">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FFDEE2]/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-16 w-48 h-48 bg-[#D3E4FD]/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-[#FFDEE2]/30 text-[#FEC6A1] font-medium rounded-full text-sm mb-6 animate-fade-in shadow-sm">
            <span>✨ Happy Market Vibes</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] mb-6 animate-fade-in leading-tight tracking-tight" style={{ animationDelay: "0.2s" }}>
            {headline}
          </h1>
          
          <p className="text-lg md:text-xl text-[#1E1E1E]/70 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            Premium wellness products designed to elevate your everyday moments
          </p>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={handleShopClick}
              className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-white rounded-full text-lg py-6 px-8 font-medium group transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product floating images */}
      <div className="hidden lg:block absolute -right-10 top-1/4 w-40 h-48 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg transform rotate-6 animate-float border border-white/40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
          alt="Wellness product" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-[#FEC6A1]/90 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Best Seller
        </div>
      </div>
      
      <div className="hidden lg:block absolute -left-8 bottom-1/4 w-36 h-44 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg transform -rotate-12 animate-float-delayed border border-white/40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
          alt="Home product" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-[#F2FCE2]/90 text-[#1E1E1E] text-xs font-semibold px-2 py-1 rounded-full">
          New Arrival
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
