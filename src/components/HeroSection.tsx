
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import TikTokIcon from "./icons/TikTokIcon";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleShopTrending = () => {
    // Scroll to the trending section on the current page
    const trendingSection = document.querySelector('[data-section="trending"]');
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleViewCategories = () => {
    // Scroll to the categories section on the current page
    const categoriesSection = document.querySelector('[data-section="categories"]');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-mint/10 py-24 md:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-mint/10 via-orange/5 to-transparent opacity-60 animate-spin-slow -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-orange/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-orange/20 text-orange font-medium rounded-2xl text-sm mb-6 animate-fade-in shadow-sm">
            <TikTokIcon size={16} />
            <span>TikTok's Viral Favorites in One Place</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-softBlack mb-6 animate-fade-in leading-tight tracking-tight" style={{ animationDelay: "0.2s" }}>
            Shop What's Trending Now
          </h1>
          
          <p className="text-lg md:text-xl text-softBlack/70 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            Curated tools, gadgets & glow-ups for your vibe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white rounded-2xl text-lg group transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
              onClick={handleShopTrending}
            >
              Shop What's Trending
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-orange/30 text-orange hover:bg-orange/5 hover:border-orange/50 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md transform"
              onClick={handleViewCategories}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              View Categories
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product floating cards with glassmorphism */}
      <div className="hidden lg:block absolute -right-16 top-1/4 w-32 h-40 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transform rotate-6 animate-float opacity-90 border border-white/40">
        <Link to="/product/cloud-light">
          <img 
            src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d" 
            alt="Product" 
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-2 left-2 bg-orange/90 text-white text-xs font-semibold px-2 py-1 rounded-full">
            🔥 Hot
          </div>
        </Link>
      </div>
      
      <div className="hidden lg:block absolute -left-10 bottom-1/4 w-28 h-36 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transform -rotate-12 animate-float-delayed opacity-90 border border-white/40">
        <Link to="/product/moon-lamp">
          <img 
            src="https://images.unsplash.com/photo-1596394723269-b2cbca4e6313" 
            alt="Product" 
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-2 left-2 bg-mint/90 text-softBlack text-xs font-semibold px-2 py-1 rounded-full">
            Eco Fav
          </div>
        </Link>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-mint/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-16 w-48 h-48 bg-orange/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
