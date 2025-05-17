
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <Button 
          variant="secondary" 
          size="sm" 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
        >
          <Eye className="h-4 w-4" /> Quick View
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-softBlack truncate">{name}</h3>
        <p className="text-orange font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
