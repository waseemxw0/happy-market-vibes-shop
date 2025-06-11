
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Sparkles, Star } from "lucide-react";
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
    <div className="relative overflow-hidden hero-gradient py-32 md:py-40">
      {/* Premium background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-gradient-to-tr from-orange/5 via-mint/5 to-transparent opacity-80 animate-spin-slow"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>
      
      {/* Floating luxury elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="w-4 h-4 text-orange/30 floating-element" />
            ) : i % 3 === 1 ? (
              <Star className="w-3 h-3 text-mint/40 floating-element" />
            ) : (
              <div className="w-2 h-2 bg-gradient-to-r from-orange/40 to-mint/40 rounded-full floating-element" />
            )}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full text-orange font-semibold text-sm mb-8 animate-bounce-in shadow-xl">
            <div className="flex items-center gap-2">
              <TikTokIcon size={18} />
              <span className="font-bold">5M+ Products Sold</span>
            </div>
            <div className="w-px h-4 bg-orange/30"></div>
            <span className="text-softBlack/80">Trusted by Creators</span>
          </div>
          
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold text-softBlack mb-8 animate-fade-in leading-none" style={{ animationDelay: "0.2s" }}>
            Shop What's
            <span className="block text-luxury animate-shimmer bg-gradient-to-r from-orange-600 via-orange-500 to-mint-500 bg-clip-text text-transparent">
              Trending Now
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-softBlack/70 mb-12 animate-fade-in max-w-3xl mx-auto font-medium leading-relaxed" style={{ animationDelay: "0.4s" }}>
            Curated viral products from TikTok's biggest creators.
            <span className="block mt-2 text-lg">
              🔥 <strong>Trending</strong> • ✨ <strong>Verified</strong> • 🚀 <strong>Fast Shipping</strong>
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-16" style={{ animationDelay: "0.6s" }}>
            <Button 
              className="btn-primary px-12 py-4 text-lg font-bold rounded-full shadow-2xl group transform hover:scale-105 transition-all duration-300"
              onClick={handleShopTrending}
            >
              <span className="relative z-10 flex items-center gap-3">
                Shop Viral Trends
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              className="glass-effect text-softBlack hover:bg-white/30 rounded-full px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 border-white/40"
              onClick={handleViewCategories}
            >
              <ShoppingBag className="mr-3 h-5 w-5" />
              Browse Categories
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="glass-effect p-6 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-orange mb-2">2M+</div>
              <div className="text-softBlack/70 font-medium">Happy Customers</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-mint-600 mb-2">4.9★</div>
              <div className="text-softBlack/70 font-medium">Average Rating</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-orange mb-2">24h</div>
              <div className="text-softBlack/70 font-medium">Fast Shipping</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium floating product cards */}
      <div className="hidden lg:block absolute -right-20 top-1/4 w-40 h-48 glass-effect rounded-3xl shadow-2xl transform rotate-6 animate-float opacity-90 overflow-hidden group">
        <Link to="/product/cloud-light" className="block h-full">
          <img 
            src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d" 
            alt="Premium Product" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 glass-effect text-white text-xs font-bold px-3 py-1.5 rounded-full">
            🔥 Viral Hit
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white font-bold text-sm">Cloud LED Light</div>
            <div className="text-white/80 text-xs">$24.99</div>
          </div>
        </Link>
      </div>
      
      <div className="hidden lg:block absolute -left-16 bottom-1/4 w-36 h-44 glass-effect rounded-3xl shadow-2xl transform -rotate-12 animate-float opacity-90 overflow-hidden group" style={{ animationDelay: "-2s" }}>
        <Link to="/product/moon-lamp" className="block h-full">
          <img 
            src="https://images.unsplash.com/photo-1596394723269-b2cbca4e6313" 
            alt="Premium Product" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 glass-effect text-white text-xs font-bold px-3 py-1.5 rounded-full">
            ✨ Premium
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white font-bold text-sm">Moon Lamp</div>
            <div className="text-white/80 text-xs">$34.99</div>
          </div>
        </Link>
      </div>
      
      {/* Decorative luxury elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-orange/20 to-mint/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-24 w-64 h-64 bg-gradient-to-tr from-mint/20 to-orange/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
