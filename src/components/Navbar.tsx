
import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md"
    )}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-softBlack">The Happy Market</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-softBlack hover:text-orange transition-colors">
            Shop All
          </a>
          <a href="#" className="text-softBlack hover:text-orange transition-colors">
            Trending
          </a>
          <a href="#" className="text-softBlack hover:text-orange transition-colors">
            New Arrivals
          </a>
          <a href="#" className="text-softBlack hover:text-orange transition-colors">
            About Us
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 bg-white z-40 transform transition-transform duration-300",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="py-6 px-4 flex flex-col gap-4">
          <a href="#" className="text-softBlack hover:text-orange transition-colors py-3 border-b">
            Shop All
          </a>
          <a href="#" className="text-softBlack hover:text-orange transition-colors py-3 border-b">
            Trending
          </a>
          <a href="#" className="text-softBlack hover:text-orange transition-colors py-3 border-b">
            New Arrivals
          </a>
          <a href="#" className="text-softBlack hover:text-orange transition-colors py-3 border-b">
            About Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
