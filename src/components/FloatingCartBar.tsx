
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCartBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  
  // Show floating cart bar when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Sample cart data for demo
  useEffect(() => {
    // In a real app, this would come from a cart context or store
    setCartItems(2);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 md:hidden transform transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Your Cart</p>
          <p className="text-xs text-gray-500">{cartItems} {cartItems === 1 ? 'item' : 'items'}</p>
        </div>
        
        <Link to="/cart">
          <Button className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-white rounded-full">
            <ShoppingBag className="mr-2 h-4 w-4" />
            View Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FloatingCartBar;
