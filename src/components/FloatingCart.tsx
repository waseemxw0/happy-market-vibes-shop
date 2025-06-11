
import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const FloatingCart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { toast } = useToast();
  const { getTotalItems } = useCart();
  const { scrollToTop } = useSmoothScroll();
  
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsVisible(scrollY > 300);
          setShowBackToTop(scrollY > 1000);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Back to top button */}
      {showBackToTop && (
        <Button
          size="icon"
          className="h-10 w-10 bg-white text-softBlack rounded-full shadow-lg hover:scale-110 transition-all duration-300 will-change-transform"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
      
      {/* TikTok button */}
      <Button
        size="icon"
        className="h-12 w-12 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 hidden md:flex will-change-transform"
        onClick={() => window.open("https://tiktok.com", "_blank")}
      >
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
          <path d="M37.5 15.625a9.5 9.5 0 01-3.45.75c1.35-.8 2.25-2.15 2.7-3.7-.85.5-3.4 1.3-4.7 1.3a6.25 6.25 0 00-6.25-6.25c-3.45 0-6.25 2.8-6.25 6.25 0 .5 0 1 .15 1.5-5.2-.25-9.85-2.75-12.9-6.6-.55.95-.85 2-.85 3.3 0 2.2 1.1 4.1 2.8 5.25-1.05 0-2-.3-2.85-.8v.05c0 3.05 2.15 5.6 5 6.15-.5.15-1.05.2-1.65.2-.4 0-.8 0-1.2-.1.8 2.5 3.1 4.3 5.85 4.35-2.15 1.7-4.85 2.7-7.8 2.7-.5 0-1 0-1.5-.1 2.75 1.8 6.05 2.85 9.6 2.85 11.5 0 17.8-9.55 17.8-17.8v-.8c1.25-.9 2.35-2 3.2-3.3z" fill="currentColor"/>
        </svg>
      </Button>
      
      {/* Wishlist button */}
      <Button
        size="icon"
        className="h-12 w-12 bg-mint text-softBlack rounded-full shadow-lg hover:scale-110 transition-all duration-300 hidden md:flex will-change-transform"
        onClick={() => toast({ title: "Wishlist", description: "View your saved items" })}
      >
        <Heart className="h-5 w-5" />
      </Button>
      
      {/* Search button */}
      <Button
        size="icon"
        className="h-12 w-12 bg-white text-softBlack rounded-full shadow-lg hover:scale-110 transition-all duration-300 hidden md:flex will-change-transform"
        onClick={() => toast({ title: "Search", description: "Find your favorite products" })}
      >
        <Search className="h-5 w-5" />
      </Button>
      
      {/* Cart button */}
      <Link to="/cart">
        <Button
          size="icon"
          className="h-16 w-16 bg-gradient-to-r from-orange to-orange/90 text-white rounded-2xl shadow-lg z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 will-change-transform"
        >
          <ShoppingBag className="h-6 w-6" />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-white text-orange text-xs font-medium h-6 w-6 p-0 flex items-center justify-center border border-orange/20 shadow-sm">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCart;
