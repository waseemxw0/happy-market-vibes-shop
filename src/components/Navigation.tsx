
import React, { useState, useEffect } from "react";
import { Home, Search, ShoppingBag, Heart, Calendar, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 3; // This would come from a cart context in a real app

  useEffect(() => {
    // Detect if we're on mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Desktop Navigation
  const DesktopNav = () => (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center z-20">
          <Logo />
        </Link>
        
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link to="/shop" className="text-softBlack hover:text-orange transition-colors relative group">
                  Shop All
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/top10" className="text-softBlack hover:text-orange transition-colors relative group">
                  Trending
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-softBlack hover:text-orange transition-colors relative group">
                  New Arrivals
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-softBlack hover:text-orange transition-colors relative group">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
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

  // Mobile Navigation
  const MobileNav = () => (
    <>
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex items-center z-20">
            <Logo />
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10" 
            onClick={toggleMenu}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-16 animate-fade-in">
            <div className="container mx-auto px-4 py-8">
              <nav>
                <ul className="flex flex-col gap-6">
                  <li>
                    <Link 
                      to="/" 
                      className="text-xl font-medium flex items-center gap-3"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Home className="h-5 w-5" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/shop" 
                      className="text-xl font-medium flex items-center gap-3"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Search className="h-5 w-5" />
                      Shop All
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/top10" 
                      className="text-xl font-medium flex items-center gap-3"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Search className="h-5 w-5" />
                      Trending
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/drops" 
                      className="text-xl font-medium flex items-center gap-3"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Calendar className="h-5 w-5" />
                      Drops
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/wishlist" 
                      className="text-xl font-medium flex items-center gap-3"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Heart className="h-5 w-5" />
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/cart" 
                      className="text-xl font-medium flex items-center gap-3"
                      onClick={() => setMenuOpen(false)}
                    >
                      <ShoppingBag className="h-5 w-5" />
                      Cart {cartCount > 0 && <span className="bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg">
        <div className="flex items-center justify-around py-3">
          <NavItem 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            href="/" 
            isActive={path === "/"}
            onClick={() => setMenuOpen(false)}
          />
          
          <NavItem 
            icon={<Search className="h-5 w-5" />} 
            label="Trending" 
            href="/top10"
            isActive={path.includes("/top10")}
            onClick={() => setMenuOpen(false)}
          />
          
          <NavItem 
            icon={<Calendar className="h-5 w-5" />} 
            label="Drops" 
            href="/drops"
            isActive={path.includes("/drops")}
            onClick={() => setMenuOpen(false)}
          />
          
          <NavItem 
            icon={<Heart className="h-5 w-5" />} 
            label="Wishlist" 
            href="/wishlist"
            isActive={path.includes("/wishlist")}
            onClick={() => setMenuOpen(false)}
          />
          
          <NavItem 
            icon={<ShoppingBag className="h-5 w-5" />} 
            label="Cart" 
            href="/cart"
            isActive={path.includes("/cart")}
            badge={cartCount}
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </>
  );

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  badge?: number;
  onClick?: () => void;
}

const NavItem = ({ icon, label, href, isActive, badge, onClick }: NavItemProps) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex flex-col items-center justify-center w-16 transition-colors duration-200 hover:text-orange",
        isActive ? "text-orange" : "text-softBlack/70"
      )}
      onClick={onClick}
    >
      <div className="relative">
        {icon}
        {badge && badge > 0 && (
          <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-scale-in">
            {badge}
          </span>
        )}
      </div>
      <span className="text-xs mt-1 font-medium">{label}</span>
    </Link>
  );
};

export default Navigation;
