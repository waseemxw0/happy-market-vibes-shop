
import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating cart once user has scrolled down a bit
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // This would be replaced with real cart logic in a production app
  const handleClick = () => {
    setCartCount(prev => prev + 1);
  };
  
  if (!isVisible) return null;
  
  return (
    <Button
      size="icon"
      className="floating-cart h-14 w-14 shadow-orange/20"
      onClick={handleClick}
    >
      <ShoppingBag className="h-6 w-6" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-white text-orange text-xs rounded-full h-5 w-5 flex items-center justify-center border border-orange/20">
          {cartCount}
        </span>
      )}
    </Button>
  );
};

export default FloatingCart;
