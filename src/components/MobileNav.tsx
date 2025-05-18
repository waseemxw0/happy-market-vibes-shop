
import React from "react";
import { Home, Search, ShoppingBag, Heart, Calendar, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 z-40 md:hidden">
      <div className="flex items-center justify-around py-3">
        <NavItem 
          icon={<Home className="h-6 w-6" />} 
          label="Home" 
          href="/" 
          isActive={path === "/"}
        />
        
        <NavItem 
          icon={<TrendingUp className="h-6 w-6" />} 
          label="Trending" 
          href="/top10"
          isActive={path.includes("/top10")}
        />
        
        <NavItem 
          icon={<Calendar className="h-6 w-6" />} 
          label="Drops" 
          href="#daily-drop"
          isActive={false}
        />
        
        <NavItem 
          icon={<Heart className="h-6 w-6" />} 
          label="Wishlist" 
          href="/wishlist"
          isActive={path.includes("wishlist")}
        />
        
        <NavItem 
          icon={<ShoppingBag className="h-6 w-6" />} 
          label="Cart" 
          href="#cart"
          isActive={false}
          badge={3}
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  badge?: number;
}

const NavItem = ({ icon, label, href, isActive, badge }: NavItemProps) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex flex-col items-center justify-center w-16",
        isActive ? "text-orange" : "text-softBlack/70"
      )}
    >
      <div className="relative">
        {icon}
        {badge && badge > 0 && (
          <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default MobileNav;
