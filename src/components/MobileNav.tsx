
import React from "react";
import { Home, Search, ShoppingBag, Heart, Calendar, TrendingUp, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import TikTokIcon from "./icons/TikTokIcon";
import { useCart } from "@/contexts/CartContext";

const MobileNav = () => {
  const location = useLocation();
  const path = location.pathname;
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const { getTotalItems } = useCart();
  
  return (
    <>
      {showMoreMenu && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={() => setShowMoreMenu(false)}>
          <div className="absolute bottom-20 left-4 right-4 glass-effect rounded-3xl shadow-2xl p-6 animate-slide-in-up border border-white/20" onClick={e => e.stopPropagation()}>
            <div className="w-12 h-1 bg-gradient-to-r from-orange to-mint rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-center mb-6 text-softBlack font-playfair">More Options</h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <MenuButton icon={<Search className="h-6 w-6" />} label="Search" href="/search" onClick={() => setShowMoreMenu(false)} />
              <MenuButton icon={<User className="h-6 w-6" />} label="Account" href="/account" onClick={() => setShowMoreMenu(false)} />
              <MenuButton icon={<TikTokIcon size={24} />} label="Feed" href="/tiktok-feed" onClick={() => setShowMoreMenu(false)} />
              <MenuButton icon={<Calendar className="h-6 w-6" />} label="New" href="/new-arrivals" onClick={() => setShowMoreMenu(false)} />
              <MenuButton icon={<Heart className="h-6 w-6" />} label="Saved" href="/wishlist" onClick={() => setShowMoreMenu(false)} />
              <MenuButton icon={<ShoppingBag className="h-6 w-6" />} label="Orders" href="/orders" onClick={() => setShowMoreMenu(false)} />
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link 
                to="/rewards" 
                className="py-3 px-4 text-center rounded-xl bg-gradient-to-r from-orange/20 to-orange/10 text-orange font-semibold border border-orange/30 hover:from-orange/30 hover:to-orange/20 transition-all transform hover:scale-105 shadow-lg"
                onClick={() => setShowMoreMenu(false)}
              >
                🎉 Rewards
              </Link>
              <Link 
                to="/contact" 
                className="py-3 px-4 text-center rounded-xl glass-effect font-semibold text-softBlack hover:bg-white/40 transition-all transform hover:scale-105 shadow-lg"
                onClick={() => setShowMoreMenu(false)}
              >
                💬 Help
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-white/30 z-40 md:hidden shadow-2xl">
        <div className="grid grid-cols-6 py-2">
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
          
          <NavItem 
            icon={<ShoppingBag className="h-5 w-5" />} 
            label="Cart" 
            href="/cart"
            isActive={path.includes("/cart")}
            badge={getTotalItems()}
            isCart={true}
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
  isCart?: boolean;
}

const NavItem = ({ icon, label, href, isActive, badge, onClick, isCart }: NavItemProps) => {
  const content = (
    <>
      <div className="relative">
        <div className={cn(
          "transition-all duration-300",
          isActive && "scale-110 transform"
        )}>
          {icon}
        </div>
        {badge && badge > 0 && (
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange to-orange/90 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce-in shadow-lg">
            {badge}
          </span>
        )}
      </div>
      <span className={cn(
        "text-xs mt-1 font-medium transition-all duration-300",
        isActive && "scale-95 font-semibold"
      )}>
        {label}
      </span>
    </>
  );
  
  const classes = cn(
    "flex flex-col items-center justify-center py-3 px-2 transition-all duration-300 relative group",
    isActive 
      ? "text-orange" 
      : "text-softBlack/60 hover:text-softBlack/80",
    isCart && "bg-gradient-to-t from-orange/10 to-transparent rounded-t-xl",
    !isCart && isActive && "after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-gradient-to-r after:from-orange after:to-mint after:rounded-full after:animate-pulse"
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
  onClick: () => void;
}

const MenuButton = ({ icon, label, href, onClick }: MenuButtonProps) => (
  <Link 
    to={href} 
    className="flex flex-col items-center justify-center p-4 glass-effect rounded-xl hover:bg-white/40 hover:scale-105 transition-all duration-300 group shadow-lg"
    onClick={onClick}
  >
    <div className="text-softBlack group-hover:text-orange transition-colors duration-300">{icon}</div>
    <span className="text-xs mt-2 text-softBlack/80 font-medium group-hover:text-softBlack transition-colors duration-300">{label}</span>
  </Link>
);

export default MobileNav;
