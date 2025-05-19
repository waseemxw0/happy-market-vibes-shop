
import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const location = useLocation();

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

  // Sample function to add items to cart (would be replaced with actual cart functionality)
  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-sm py-3" 
        : "bg-white py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center z-20">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/shop" className="text-softBlack hover:text-orange transition-colors relative group">
                  Shop All
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/top10" className="text-softBlack hover:text-orange transition-colors relative group ml-8">
                  Trending
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/new-arrivals" className="text-softBlack hover:text-orange transition-colors relative group ml-8">
                  New Arrivals
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-softBlack hover:text-orange transition-colors relative group ml-8">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex rounded-full h-10 w-10">
            <Search className="h-5 w-5 text-softBlack/70" />
          </Button>
          
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
              onClick={addToCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full h-10 w-10 z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu with solid background */}
      <div className={cn(
        "md:hidden fixed inset-0 top-[57px] bg-white z-40 transform transition-transform duration-300 shadow-lg",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="py-8 px-6 flex flex-col gap-4 bg-white">
          <div className="mb-6">
            <div className="relative w-full mb-4">
              <input 
                type="search" 
                placeholder="Search products..." 
                className="w-full py-3 px-5 pr-10 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white shadow-sm"
              />
              <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <Link to="/shop" className="text-softBlack hover:text-orange transition-colors py-4 border-b flex items-center justify-between">
            Shop All
            <span className="text-orange">→</span>
          </Link>
          <Link to="/top10" className="text-softBlack hover:text-orange transition-colors py-4 border-b flex items-center justify-between">
            Trending
            <span className="text-orange">→</span>
          </Link>
          <Link to="/new-arrivals" className="text-softBlack hover:text-orange transition-colors py-4 border-b flex items-center justify-between">
            New Arrivals
            <span className="text-orange">→</span>
          </Link>
          <Link to="/about" className="text-softBlack hover:text-orange transition-colors py-4 border-b flex items-center justify-between">
            About Us
            <span className="text-orange">→</span>
          </Link>
          
          <div className="mt-6 flex gap-4">
            <Link to="/wishlist" className="flex-1">
              <Button 
                variant="default" 
                className="w-full bg-orange text-white rounded-2xl"
              >
                <Heart className="h-5 w-5 mr-2" />
                Wishlist
              </Button>
            </Link>
            <Link to="/cart" className="flex-1">
              <Button 
                variant="default" 
                className="w-full bg-mint text-softBlack rounded-2xl"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
