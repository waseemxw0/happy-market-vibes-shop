
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import TikTokIcon from "./icons/TikTokIcon";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange/10 to-mint/20 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-orange/20 text-orange font-medium rounded-full text-sm mb-4 animate-fade-in">
            <TikTokIcon size={16} />
            <span>Viral Products, Curated For You</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-softBlack mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.2s" }}>
            TikTok's Favorite Products in One Store
          </h1>
          
          <p className="text-lg md:text-xl text-softBlack/80 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            Handpicked gadgets, tools & vibes that just hit different
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              className="btn-primary text-lg group transition-all duration-300 hover:pr-12" 
            >
              Shop the Trends
              <ArrowRight className="ml-2 group-hover:translate-x-4 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-orange/30 text-orange hover:bg-orange/5"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              View Categories
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product floating cards */}
      <div className="hidden lg:block absolute -right-16 top-1/4 w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-6 animate-float opacity-90">
        <img 
          src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d" 
          alt="Product" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="hidden lg:block absolute -left-10 bottom-1/4 w-28 h-36 bg-white rounded-lg shadow-lg transform -rotate-12 animate-float-delayed opacity-90">
        <img 
          src="https://images.unsplash.com/photo-1596394723269-b2cbca4e6313" 
          alt="Product" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-mint/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-16 w-48 h-48 bg-orange/20 rounded-full blur-3xl"></div>
      
      {/* Animated gradient circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-mint/10 via-orange/5 to-transparent opacity-60 animate-spin-slow -z-10"></div>
    </div>
  );
};

export default HeroSection;
