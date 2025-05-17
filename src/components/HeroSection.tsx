
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange/10 to-mint/20 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-orange/20 text-orange font-medium rounded-full text-sm mb-4 animate-fade-in">
            Viral Products, Curated For You
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-softBlack mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.2s" }}>
            TikTok's Favorite Products in One Store
          </h1>
          <p className="text-lg md:text-xl text-softBlack/80 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            Handpicked gadgets, tools & vibes that just hit different
          </p>
          <Button 
            className="btn-primary text-lg animate-fade-in group transition-all duration-300 hover:pr-12" 
            style={{ animationDelay: "0.6s" }}
          >
            Shop the Trends
            <ArrowRight className="ml-2 group-hover:translate-x-4 transition-transform duration-300" />
          </Button>
        </div>
      </div>
      
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-mint/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-16 w-48 h-48 bg-orange/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
