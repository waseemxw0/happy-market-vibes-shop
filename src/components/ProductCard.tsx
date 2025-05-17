
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ShoppingBag, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  specialBadge?: string;
}

const ProductCard = ({ name, price, image, specialBadge }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
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

  return (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        
        {/* Quick actions */}
        <div className="absolute top-3 right-3">
          <Button 
            size="icon"
            variant="ghost" 
            className={`h-9 w-9 rounded-full ${isLiked ? 'bg-red-50 text-red-500' : 'bg-white/80 backdrop-blur-sm text-softBlack/70'} hover:bg-white/90 shadow-sm`}
            onClick={handleToggleLike}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Badge */}
        {specialBadge && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-softBlack text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-orange/20">
            {specialBadge}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-softBlack truncate">{name}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-orange font-semibold">{price}</p>
          <div className="text-xs text-orange/70">★★★★★</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
