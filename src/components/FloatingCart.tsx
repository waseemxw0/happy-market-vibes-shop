
import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search, ArrowUp, Sparkles, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const FloatingCart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();
  const { getTotalItems } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      if (window.scrollY > 1000) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleWishlistClick = () => {
    toast({ 
      title: "Wishlist ❤️", 
      description: "View your saved items",
      className: "glass-effect border-mint/30"
    });
  };

  const handleSearchClick = () => {
    toast({ 
      title: "Search 🔍", 
      description: "Find your favorite products",
      className: "glass-effect border-orange/30"
    });
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Premium floating action buttons */}
      <div className={`flex flex-col gap-3 transition-all duration-500 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        {/* Back to top button */}
        {showBackToTop && (
          <Button
            size="icon"
            className="h-12 w-12 glass-effect text-softBlack rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 border border-white/30 hover:shadow-3xl group"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5 group-hover:text-orange transition-colors duration-300" />
          </Button>
        )}
        
        {/* Gift finder */}
        <Button
          size="icon"
          className="h-12 w-12 bg-gradient-to-br from-mint to-mint/80 text-softBlack rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-glow"
          onClick={() => toast({ 
            title: "Gift Finder 🎁", 
            description: "Find the perfect gift for anyone",
            className: "glass-effect border-mint/30"
          })}
        >
          <Gift className="h-5 w-5" />
        </Button>

        {/* AI recommendations */}
        <Button
          size="icon"
          className="h-12 w-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 relative overflow-hidden group"
          onClick={() => toast({ 
            title: "AI Recommendations ✨", 
            description: "Personalized picks just for you",
            className: "glass-effect border-purple/30"
          })}
        >
          <Sparkles className="h-5 w-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </Button>

        {/* Flash deals */}
        <Button
          size="icon"
          className="h-12 w-12 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          onClick={() => toast({ 
            title: "Flash Deals ⚡", 
            description: "Limited time offers ending soon!",
            className: "glass-effect border-yellow/30"
          })}
        >
          <Zap className="h-5 w-5" />
        </Button>
        
        {/* Wishlist button */}
        <Link to="/wishlist">
          <Button
            size="icon"
            className="h-12 w-12 bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 relative group"
            onClick={handleWishlistClick}
          >
            <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </Button>
        </Link>
        
        {/* Search button */}
        <Link to="/search">
          <Button
            size="icon"
            className="h-12 w-12 glass-effect text-softBlack rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 border border-white/30 group"
            onClick={handleSearchClick}
          >
            <Search className="h-5 w-5 group-hover:text-orange transition-colors duration-300" />
          </Button>
        </Link>
      </div>

      {/* Main floating cart button */}
      <div className="relative">
        <Link to="/cart">
          <Button
            size="icon"
            className="h-16 w-16 bg-gradient-to-br from-orange via-orange-500 to-orange-600 text-white rounded-3xl shadow-2xl z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-3xl relative overflow-hidden group"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ShoppingBag className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {getTotalItems() > 0 && (
              <>
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-mint to-mint/90 text-softBlack text-xs font-bold h-7 w-7 p-0 flex items-center justify-center border-2 border-white shadow-xl animate-bounce-in rounded-full">
                  {getTotalItems()}
                </Badge>
                
                {/* Pulsing ring */}
                <div className="absolute inset-0 border-2 border-mint/50 rounded-3xl animate-ping"></div>
              </>
            )}
          </Button>
        </Link>

        {/* Expand toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-mint to-mint/90 rounded-full shadow-lg flex items-center justify-center text-softBlack text-xs font-bold hover:scale-110 transition-all duration-300"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
    </div>
  );
};

export default FloatingCart;
