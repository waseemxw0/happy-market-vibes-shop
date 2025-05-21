
import React, { useState, useRef } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrendingCountdown from "./TrendingCountdown";
import { Link } from "react-router-dom";

interface ProductCardEnhancedProps {
  id?: string;
  name: string;
  price: string;
  image: string;
  specialBadge?: string;
  reviewQuote?: string;
  videoUrl?: string;
  endTime?: Date;
  isTrending?: boolean;
  category?: string;
}

const ProductCardEnhanced = ({
  id = "1",
  name,
  price,
  image,
  specialBadge,
  reviewQuote,
  videoUrl,
  endTime,
  isTrending = false,
  category
}: ProductCardEnhancedProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Handle mouse interaction for video playback
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoUrl) {
      videoRef.current.play().catch(e => console.error("Video play error:", e));
      setIsPlaying(true);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && videoUrl) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  return (
    <div 
      className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Product image or video */}
      <div className="aspect-square w-full relative overflow-hidden bg-gray-100">
        {videoUrl && isHovered ? (
          <video 
            ref={videoRef}
            src={videoUrl}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        
        {/* Special badges */}
        {specialBadge && (
          <div className="absolute top-2 left-2 bg-orange text-white text-xs rounded-full px-2 py-1 font-semibold">
            {specialBadge}
          </div>
        )}
        
        {isTrending && (
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full px-2 py-1 font-semibold flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Trending
          </div>
        )}
        
        {/* Countdown timer */}
        {endTime && (
          <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full px-3 py-1.5 font-medium">
            <TrendingCountdown endTime={endTime} label="Limited offer: " />
          </div>
        )}
        
        {/* Quick action buttons - appear on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button 
              size="icon"
              className="h-10 w-10 rounded-full bg-white text-black hover:bg-orange hover:text-white"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              size="icon"
              className="h-10 w-10 rounded-full bg-orange text-white hover:bg-orange/90"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-3">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium line-clamp-1 group-hover:text-orange transition-colors">{name}</h3>
        </Link>
        <div className="flex justify-between items-center mt-1">
          <p className="font-bold text-orange">{price}</p>
          {category && (
            <span className="text-xs text-softBlack/60 bg-gray-100 px-2 py-0.5 rounded-full">
              {category}
            </span>
          )}
        </div>
        
        {/* Review quote - only show if provided */}
        {reviewQuote && (
          <div className="mt-2 py-1 px-2 bg-gray-50 rounded-md">
            <p className="text-xs italic text-softBlack/70 line-clamp-1">"{reviewQuote}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardEnhanced;
