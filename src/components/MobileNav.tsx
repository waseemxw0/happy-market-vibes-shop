
import React from "react";
import { Home, Search, ShoppingBag, Heart, Calendar, TrendingUp, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import TikTokIcon from "./icons/TikTokIcon";

const MobileNav = () => {
  const location = useLocation();
  const path = location.pathname;
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  
  return (
    <>
      {/* More menu overlay with improved design */}
      {showMoreMenu && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={() => setShowMoreMenu(false)}>
          <div className="absolute bottom-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-8 animate-slide-in-up border border-gray-100" onClick={e => e.stopPropagation()}>
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3 className="text-lg font-bold text-center mb-6 text-softBlack">More Options</h3>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <MenuButton icon={<Search className="h-6 w-6" />} label="Search" href="/search" />
              <MenuButton icon={<User className="h-6 w-6" />} label="Account" href="/account" />
              <MenuButton icon={<TikTokIcon size={24} />} label="Feed" href="/tiktok-feed" />
              <MenuButton icon={<Calendar className="h-6 w-6" />} label="New" href="/new-arrivals" />
              <MenuButton icon={<Heart className="h-6 w-6" />} label="Saved" href="/wishlist" />
              <MenuButton icon={<ShoppingBag className="h-6 w-6" />} label="Orders" href="/orders" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Link to="/rewards" className="py-4 px-6 text-center rounded-2xl bg-gradient-to-r from-orange/10 to-orange/5 text-orange font-semibold border border-orange/20 hover:from-orange/20 hover:to-orange/10 transition-all">
                🎉 Loyalty Rewards
              </Link>
              <Link to="/contact" className="py-4 px-6 text-center rounded-2xl bg-gray-50 font-semibold text-softBlack hover:bg-gray-100 transition-colors">
                💬 Help Center
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/80 z-40 md:hidden shadow-2xl">
        <div className="grid grid-cols-6 py-1">
          <NavItem 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            href="/" 
            isActive={path === "/"}
          />
          
          <NavItem 
            icon={<TrendingUp className="h-5 w-5" />} 
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
            icon={<Menu className="h-5 w-5" />} 
            label="More" 
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            isActive={showMoreMenu}
          />
          
          {/* Enhanced Cart Icon with better separation */}
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
            <NavItem 
              icon={<ShoppingBag className="h-5 w-5" />} 
              label="Cart" 
              href="/cart"
              isActive={path.includes("/cart")}
              badge={3}
              isCart={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  isActive: boolean;
  badge?: number;
  onClick?: () => void;
  isCart?: boolean;
}

const NavItem = ({ icon, label, href, isActive, badge, onClick, isCart }: NavItemProps) => {
  const content = (
    <>
      <div className="relative">
        <div className={cn(
          "transition-all duration-200",
          isActive && "scale-110"
        )}>
          {icon}
        </div>
        {badge && badge > 0 && (
          <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold animate-pulse">
            {badge}
          </span>
        )}
      </div>
      <span className={cn(
        "text-xs mt-1 font-medium transition-all duration-200",
        isActive && "scale-95"
      )}>
        {label}
      </span>
    </>
  );
  
  const classes = cn(
    "flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 relative",
    isActive 
      ? "text-orange" 
      : "text-softBlack/60 hover:text-softBlack/80",
    isCart && "bg-orange/5 ml-1 rounded-t-2xl",
    !isCart && isActive && "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange after:rounded-full"
  );
  
  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }
  
  return (
    <Link to={href || "#"} className={classes}>
      {content}
    </Link>
  );
};

interface MenuButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const MenuButton = ({ icon, label, href }: MenuButtonProps) => (
  <Link to={href} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-200 group">
    <div className="text-softBlack group-hover:text-orange transition-colors">{icon}</div>
    <span className="text-xs mt-2 text-softBlack/80 font-medium group-hover:text-softBlack transition-colors">{label}</span>
  </Link>
);

export default MobileNav;
