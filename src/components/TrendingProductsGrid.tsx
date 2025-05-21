
import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface TrendingProductsGridProps {
  title: string;
  subtitle: string;
}

const trendingProducts = [
  {
    id: "1",
    name: "Calming Weighted Blanket",
    price: "$59.99",
    rating: 4.9,
    numReviews: 128,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    lowStock: true,
    link: "/product/calming-weighted-blanket"
  },
  {
    id: "2",
    name: "Self-Care Journal",
    price: "$24.99",
    rating: 4.8,
    numReviews: 93,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    lowStock: false,
    link: "/product/self-care-journal"
  },
  {
    id: "3",
    name: "Happy Vibes Mug",
    price: "$19.99",
    rating: 4.7,
    numReviews: 57,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    lowStock: false,
    link: "/product/happy-vibes-mug"
  },
  {
    id: "4",
    name: "Lavender Candle Set",
    price: "$34.99",
    rating: 4.9,
    numReviews: 82,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    lowStock: true,
    link: "/product/lavender-candle-set"
  },
  {
    id: "5",
    name: "Zen Meditation Cushion",
    price: "$49.99",
    rating: 4.6,
    numReviews: 48,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    lowStock: false,
    link: "/product/zen-meditation-cushion"
  },
  {
    id: "6",
    name: "Affirmation Cards",
    price: "$17.99",
    rating: 4.8,
    numReviews: 74,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    lowStock: false,
    link: "/product/affirmation-cards"
  }
];

const TrendingProductsGrid = ({ title, subtitle }: TrendingProductsGridProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleAddToCart = (e: React.MouseEvent, product: typeof trendingProducts[0]) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const handleQuickView = (e: React.MouseEvent, product: typeof trendingProducts[0]) => {
    e.preventDefault();
    e.stopPropagation();
    
    // In a real implementation, this would open a quick view modal
    toast({
      title: "Quick view",
      description: `Opening quick view for ${product.name}.`,
    });
  };
  
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} className="w-3.5 h-3.5 text-gray-200" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProducts.map((product) => (
            <a 
              href={product.link} 
              key={product.id}
              className="block group transition-all duration-300 hover:scale-[1.03]"
            >
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <AspectRatio ratio={1 / 1}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                  
                  {/* Low stock badge */}
                  {product.lowStock && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full animate-pulse">
                      Only 3 left!
                    </div>
                  )}
                  
                  {/* Action buttons (appear on hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/50 to-transparent">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 text-xs flex items-center justify-center gap-1 rounded-full shadow-sm"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
                    </Button>
                    
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full shadow-sm p-1.5"
                      onClick={(e) => handleQuickView(e, product)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium truncate mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-[#FEC6A1]">{product.price}</p>
                    <div className="flex items-center gap-1.5">
                      {renderRatingStars(product.rating)}
                      <span className="text-xs text-gray-500">({product.numReviews})</span>
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            className="rounded-full border-[#FEC6A1] text-[#FEC6A1] hover:bg-[#FEC6A1]/5"
            onClick={() => navigate('/shop')}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProductsGrid;
