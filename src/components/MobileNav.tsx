import React, { memo } from "react";
import { Home, Search, ShoppingBag, Heart, Calendar, TrendingUp, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import TikTokIcon from "./icons/TikTokIcon";
import { useCart } from "@/contexts/CartContext";

const MobileNav = memo(() => {
  const location = useLocation();
  const path = location.pathname;
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const { getTotalItems } = useCart();
  
  return (
    <>
      {showMoreMenu && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden" onClick={() => setShowMoreMenu(false)}>
          <div className="absolute bottom-20 left-2 right-2 bg-white rounded-3xl shadow-2xl p-4 md:p-6 animate-slide-in-up border border-gray-100 max-h-[70vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
            <h3 className="text-lg font-bold text-center mb-4 md:mb-6 text-softBlack">More Options</h3>
            
            <div className="grid grid-cols-3 gap-3 mb-4 md:mb-6">
              <MenuButton icon={<User className="h-5 w-5" />} label="Account" href="/account" onClick={() => setShowMoreMenu(false)} />
              <MenuButton icon={<Calendar className="h-5 w-5" />} label="New" href="/new-arrivals" onClick={() => setShowMoreMenu(false)} />
              <MenuButton icon={<ShoppingBag className="h-5 w-5" />} label="Orders" href="/orders" onClick={() => setShowMoreMenu(false)} />
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link 
                to="/rewards" 
                className="py-2 px-3 text-center rounded-xl bg-gradient-to-r from-orange/10 to-orange/5 text-orange font-semibold border border-orange/20 hover:from-orange/20 hover:to-orange/10 transition-all text-xs"
                onClick={() => setShowMoreMenu(false)}
              >
                🎉 Rewards
              </Link>
              <Link 
                to="/contact" 
                className="py-2 px-3 text-center rounded-xl bg-gray-50 font-semibold text-softBlack hover:bg-gray-100 transition-colors text-xs"
                onClick={() => setShowMoreMenu(false)}
              >
                💬 Help
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40 md:hidden shadow-lg safe-area-pb">
        <div className="grid grid-cols-7 py-1.5 px-1">
          {/* Left side icons */}
          <NavItem 
            icon={<TikTokIcon size={16} />} 
            label="Feed" 
            href="/tiktok-feed"
            isActive={path.includes("/tiktok-feed")}
          />
          
          <NavItem 
            icon={<Heart className="h-4 w-4" />} 
            label="Wishlist" 
            href="/wishlist"
            isActive={path.includes("/wishlist")}
          />
          
          <NavItem 
            icon={<Search className="h-4 w-4" />} 
            label="Search" 
            href="/search"
            isActive={path.includes("/search")}
          />
          
          {/* Center icons */}
          <NavItem 
            icon={<Home className="h-4 w-4" />} 
            label="Home" 
            href="/" 
            isActive={path === "/"}
          />
          
          <NavItem 
            icon={<TrendingUp className="h-4 w-4" />} 
            label="Trending" 
            href="/top10"
            isActive={path.includes("/top10")}
          />
          
          {/* Right side icons */}
          <NavItem 
            icon={<Menu className="h-4 w-4" />} 
            label="More" 
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            isActive={showMoreMenu}
          />
          
          <NavItem 
            icon={<ShoppingBag className="h-4 w-4" />} 
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
});

MobileNav.displayName = 'MobileNav';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  isActive: boolean;
  badge?: number;
  onClick?: () => void;
  isCart?: boolean;
}

const NavItem = memo(({ icon, label, href, isActive, badge, onClick, isCart }: NavItemProps) => {
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
          <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center font-bold animate-pulse min-w-[14px] text-[10px]">
            {badge > 99 ? '99+' : badge}
          </span>
        )}
      </div>
      <span className={cn(
        "text-xs mt-0.5 font-medium transition-all duration-200 leading-tight",
        isActive && "scale-95"
      )}>
        {label}
      </span>
    </>
  );
  
  const classes = cn(
    "flex flex-col items-center justify-center py-1.5 px-0.5 transition-all duration-200 relative min-h-[56px]",
    isActive 
      ? "text-orange" 
      : "text-softBlack/60 hover:text-softBlack/80",
    isCart && "bg-orange/5 rounded-t-xl mx-0.5",
    !isCart && isActive && "after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange after:rounded-full"
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
});

NavItem.displayName = 'NavItem';

interface MenuButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick: () => void;
}

const MenuButton = memo(({ icon, label, href, onClick }: MenuButtonProps) => (
  <Link 
    to={href} 
    className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-200 group"
    onClick={onClick}
  >
    <div className="text-softBlack group-hover:text-orange transition-colors mb-1">{icon}</div>
    <span className="text-xs text-softBlack/80 font-medium group-hover:text-softBlack transition-colors leading-tight">{label}</span>
  </Link>
));

MenuButton.displayName = 'MenuButton';

export default MobileNav;
