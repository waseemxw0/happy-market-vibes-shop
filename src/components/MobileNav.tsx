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
      {/* More menu overlay with solid background */}
      {showMoreMenu && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setShowMoreMenu(false)}>
          <div className="absolute bottom-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 animate-slide-in-up border border-gray-100" onClick={e => e.stopPropagation()}>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <MenuButton icon={<Search className="h-6 w-6" />} label="Search" href="/search" />
              <MenuButton icon={<User className="h-6 w-6" />} label="Account" href="/account" />
              <MenuButton icon={<TikTokIcon size={24} />} label="Feed" href="/tiktok-feed" />
              <MenuButton icon={<Calendar className="h-6 w-6" />} label="New" href="/new-arrivals" />
              <MenuButton icon={<Heart className="h-6 w-6" />} label="Saved" href="/wishlist" />
              <MenuButton icon={<ShoppingBag className="h-6 w-6" />} label="Orders" href="/orders" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/rewards" className="py-2 px-4 text-center rounded-lg bg-orange/10 text-orange">Loyalty Rewards</Link>
              <Link to="/contact" className="py-2 px-4 text-center rounded-lg bg-gray-100">Help Center</Link>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
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
            href="/drops"
            isActive={path.includes("/drops")}
          />
          
          <NavItem 
            icon={<Heart className="h-6 w-6" />} 
            label="Wishlist" 
            href="/wishlist"
            isActive={path.includes("/wishlist")}
          />
          
          <NavItem 
            icon={<ShoppingBag className="h-6 w-6" />} 
            label="Cart" 
            href="/cart"
            isActive={path.includes("/cart")}
            badge={3}
          />
          
          <NavItem 
            icon={<Menu className="h-6 w-6" />} 
            label="More" 
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            isActive={showMoreMenu}
          />
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
}

const NavItem = ({ icon, label, href, isActive, badge, onClick }: NavItemProps) => {
  const content = (
    <>
      <div className="relative">
        {icon}
        {badge && badge > 0 && (
          <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </>
  );
  
  const classes = cn(
    "flex flex-col items-center justify-center w-14",
    isActive ? "text-orange" : "text-softBlack/70"
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
  <Link to={href} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
    <div className="text-softBlack">{icon}</div>
    <span className="text-xs mt-1 text-softBlack/80">{label}</span>
  </Link>
);

export default MobileNav;
