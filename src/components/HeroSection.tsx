
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange/10 to-mint/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-softBlack mb-4 animate-fade-in">
            TikTok's Favorite Products in One Store
          </h1>
          <p className="text-lg md:text-xl text-softBlack/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Handpicked gadgets, tools & vibes that just hit different
          </p>
          <Button className="btn-primary text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Shop the Trends
          </Button>
        </div>
      </div>
      
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
