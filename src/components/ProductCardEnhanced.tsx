
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ShoppingBag, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TrendingCountdown from "./TrendingCountdown";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface ProductCardEnhancedProps {
  id?: string;
  name: string;
  price: string;
  image: string;
  specialBadge?: string;
  rating?: number;
  reviewCount?: number;
  reviewQuote?: string;
  videoUrl?: string;
  isTrending?: boolean;
  endTime?: Date;
}

const ProductCardEnhanced = ({ 
  id,
  name, 
  price, 
  image, 
  specialBadge, 
  rating = 4.5,
  reviewCount = 120,
  reviewQuote,
  videoUrl,
  isTrending,
  endTime 
}: ProductCardEnhancedProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add animation to the button
    const button = e.currentTarget as HTMLButtonElement;
    button.classList.add("animate-bounce");
    setTimeout(() => button.classList.remove("animate-bounce"), 1000);
    
    const productId = id || name.toLowerCase().replace(/\s+/g, '-');
    const priceNumber = parseFloat(price.replace('$', ''));
    
    addToCart({
      id: productId,
      name,
      price: priceNumber,
      image
    });
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    
    toast({
      title: isLiked ? "Removed from wishlist" : "Added to wishlist",
      description: `${name} has been ${isLiked ? "removed from" : "added to"} your wishlist.`,
    });
  };
  
  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Generate a safe URL slug from the product name if no ID is provided
    const productId = id || name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${productId}`);
  };

  // Calculate a random percentage for "would buy again" between 85-98%
  const wouldBuyAgain = Math.floor(Math.random() * (98 - 85 + 1)) + 85;

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewDetails}
    >
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ${videoUrl ? 'group-hover:opacity-0' : ''}`}
        />
        
        {videoUrl && (
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'z-10' : 'z-0'}`}>
            <video 
              src={videoUrl} 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        
        {/* Quick actions */}
        <div className="absolute top-3 right-3 z-20">
          <Button 
            size="icon"
            variant="ghost" 
            className={`h-9 w-9 rounded-full ${isLiked ? 'bg-red-50 text-red-500' : 'bg-white/80 backdrop-blur-sm text-softBlack/70'} hover:bg-white/90 shadow-sm`}
            onClick={handleToggleLike}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <Button 
            variant="secondary" 
            size="sm" 
            className="flex-1 bg-white/90 backdrop-blur-sm hover:bg-white text-softBlack flex items-center gap-1 rounded-xl shadow-sm"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4" /> Add to Cart
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon"
            className="h-9 w-9 bg-white/90 backdrop-blur-sm hover:bg-white text-softBlack rounded-xl shadow-sm"
            onClick={handleViewDetails}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Top left badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          {specialBadge && (
            <div className="bg-white/90 backdrop-blur-sm text-softBlack text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-orange/20">
              {specialBadge}
            </div>
          )}
          
          {isTrending && (
            <div className="bg-orange/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
              <span className="text-base">🔥</span> Trending
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-softBlack truncate">{name}</h3>
        
        <div className="flex justify-between items-center mt-1">
          <p className="text-orange font-semibold">{price}</p>
          <div className="text-xs text-softBlack/70 flex items-center gap-1">
            <span className="text-orange">★★★★★</span>
            <span>({reviewCount})</span>
          </div>
        </div>
        
        {/* Would buy again rating */}
        <div className="mt-2 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange to-mint rounded-full" 
            style={{ width: `${wouldBuyAgain}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-1 text-xs text-softBlack/70">
          <span>🔥 {wouldBuyAgain}% would buy again</span>
          {endTime && <TrendingCountdown endTime={endTime} label="" />}
        </div>
        
        {/* Review quote */}
        {reviewQuote && (
          <div className="mt-2 p-2 bg-gray-50 rounded-lg text-xs italic text-softBlack/80">
            "{reviewQuote}"
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCardEnhanced;
