
import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
        : "bg-white/90 backdrop-blur-sm py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center z-10">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className="text-softBlack hover:text-orange transition-colors relative group">
            Shop All
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/top10" className="text-softBlack hover:text-orange transition-colors relative group">
            Trending
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/new-arrivals" className="text-softBlack hover:text-orange transition-colors relative group">
            New Arrivals
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="text-softBlack hover:text-orange transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full h-10 w-10">
              <Search className="h-5 w-5 text-softBlack/70" />
            </Button>
          </Link>
          
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full h-10 w-10">
              <Heart className="h-5 w-5 text-softBlack/70" />
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative rounded-full h-10 w-10" 
            >
              <ShoppingBag className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in font-medium">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full h-10 w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 top-[73px] z-40 transform transition-transform duration-300",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl">
          <div className="py-6 px-6 flex flex-col gap-4 h-full overflow-y-auto">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative w-full">
                <input 
                  type="search" 
                  placeholder="Search products..." 
                  className="w-full py-3 px-4 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white shadow-sm"
                />
                <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="space-y-2">
              <Link 
                to="/shop" 
                className="flex items-center justify-between py-4 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-softBlack font-medium">Shop All</span>
                <span className="text-orange">→</span>
              </Link>
              
              <Link 
                to="/top10" 
                className="flex items-center justify-between py-4 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-softBlack font-medium">Trending</span>
                <span className="text-orange">→</span>
              </Link>
              
              <Link 
                to="/new-arrivals" 
                className="flex items-center justify-between py-4 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-softBlack font-medium">New Arrivals</span>
                <span className="text-orange">→</span>
              </Link>
              
              <Link 
                to="/about" 
                className="flex items-center justify-between py-4 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-softBlack font-medium">About Us</span>
                <span className="text-orange">→</span>
              </Link>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <Link to="/wishlist" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  variant="outline" 
                  className="w-full justify-center rounded-xl py-3 border-orange/20 text-orange hover:bg-orange/5"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
              </Link>
              
              <Link to="/cart" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="w-full justify-center bg-orange text-white rounded-xl py-3 hover:bg-orange/90 transition-colors relative"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Cart
                  {getTotalItems() > 0 && (
                    <span className="ml-2 bg-white text-orange text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
            
            {/* Bottom spacing for mobile nav */}
            <div className="pb-20"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
