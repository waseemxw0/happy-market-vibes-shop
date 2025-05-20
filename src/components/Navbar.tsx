
import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";

// Desktop-only Navbar component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
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
        
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-gray-100">
            <Search className="h-5 w-5 text-softBlack/70" />
          </Button>
          
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-gray-100">
              <Heart className="h-5 w-5 text-softBlack/70" />
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative rounded-full h-10 w-10 hover:bg-gray-100" 
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
