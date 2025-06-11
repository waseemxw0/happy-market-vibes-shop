
import React, { useState, useEffect, useCallback } from "react";
import { ShoppingBag, Menu, X, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navbar = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const NavLink = React.memo(({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to} className="text-softBlack hover:text-orange transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ));

  NavLink.displayName = 'NavLink';

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300 backdrop-blur-md",
      isScrolled 
        ? "bg-white/95 shadow-sm py-3" 
        : "bg-white/90 py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center z-10">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/shop">Shop All</NavLink>
          <NavLink to="/top10">Trending</NavLink>
          <NavLink to="/new-arrivals">New Arrivals</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full h-10 w-10 hover:scale-110 transition-transform duration-200">
              <Search className="h-5 w-5 text-softBlack/70" />
            </Button>
          </Link>
          
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full h-10 w-10 hover:scale-110 transition-transform duration-200">
              <Heart className="h-5 w-5 text-softBlack/70" />
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative rounded-full h-10 w-10 hover:scale-110 transition-transform duration-200" 
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
            className="md:hidden rounded-full h-10 w-10 hover:scale-110 transition-transform duration-200"
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
          onClick={closeMobileMenu}
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
                  className="w-full py-3 px-4 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white shadow-sm transition-all duration-200"
                />
                <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="space-y-2">
              {[
                { to: "/shop", label: "Shop All" },
                { to: "/top10", label: "Trending" },
                { to: "/new-arrivals", label: "New Arrivals" },
                { to: "/about", label: "About Us" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="flex items-center justify-between py-4 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                  onClick={closeMobileMenu}
                >
                  <span className="text-softBlack font-medium">{link.label}</span>
                  <span className="text-orange">→</span>
                </Link>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <Link to="/wishlist" className="block" onClick={closeMobileMenu}>
                <Button 
                  variant="outline" 
                  className="w-full justify-center rounded-xl py-3 border-orange/20 text-orange hover:bg-orange/5 transition-all duration-200 hover:scale-105"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
              </Link>
              
              <Link to="/cart" className="block" onClick={closeMobileMenu}>
                <Button 
                  className="w-full justify-center bg-orange text-white rounded-xl py-3 hover:bg-orange/90 transition-all duration-200 hover:scale-105 relative"
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
});

Navbar.displayName = 'Navbar';

export default Navbar;
