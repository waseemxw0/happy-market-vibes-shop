
import React from "react";
import { Home, Search, ShoppingBag, Heart, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

interface MobileNavProps {
  className?: string;
}

const MobileNav = ({ className }: MobileNavProps) => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div className={cn("fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg md:hidden", className)}>
      <div className="flex items-center justify-around py-3">
        <NavItem 
          icon={<Home className="h-5 w-5" />} 
          label="Home" 
          href="/" 
          isActive={path === "/"}
        />
        
        <NavItem 
          icon={<Search className="h-5 w-5" />} 
          label="Trending" 
          href="/top10"
          isActive={path.includes("/top10")}
        />
        
        <NavItem 
          icon={<Calendar className="h-5 w-5" />} 
          label="Drops" 
          href="/drops"
          isActive={path.includes("/drops")}
        />
        
        <NavItem 
          icon={<Heart className="h-5 w-5" />} 
          label="Wishlist" 
          href="/wishlist"
          isActive={path.includes("/wishlist")}
        />
        
        <NavItem 
          icon={<ShoppingBag className="h-5 w-5" />} 
          label="Cart" 
          href="/cart"
          isActive={path.includes("/cart")}
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
        "flex flex-col items-center justify-center w-16 transition-colors duration-200 hover:text-orange",
        isActive ? "text-orange" : "text-softBlack/70"
      )}
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

export default MobileNav;
