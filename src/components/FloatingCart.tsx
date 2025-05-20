
import React from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface FloatingCartProps {
  className?: string;
}

const FloatingCart: React.FC<FloatingCartProps> = ({ className }) => {
  // The count would typically come from a cart context or state
  const cartCount = 3;
  
  return (
    <div className={cn("hidden md:block", className)}>
      <Link to="/cart">
        <Button 
          variant="default" 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-lg bg-orange hover:bg-orange/90 transition-all duration-300"
        >
          <ShoppingBag className="h-6 w-6 text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-orange text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center border border-orange">
              {cartCount}
            </span>
          )}
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCart;
