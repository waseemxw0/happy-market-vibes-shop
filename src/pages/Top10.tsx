import React from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, ShoppingBag, Calendar } from "lucide-react";
import ProductCardEnhanced from "@/components/ProductCardEnhanced";
import { useToast } from "@/hooks/use-toast";
import AiAssistant from "@/components/AiAssistant";

const Top10 = () => {
  const { toast } = useToast();
  
  // Generate random date for last update
  const lastUpdated = new Date();
  lastUpdated.setDate(lastUpdated.getDate() - 2);
  
  // Formatted date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(lastUpdated);
  
  // Top 10 trending products
  const trendingProducts = [
    {
      rank: 1,
      name: "Cloud LED Light",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=500&auto=format&fit=crop",
      views: "3.2M",
      specialBadge: "Most Popular",
      growth: "+42%"
    },
    {
      rank: 2,
      name: "Sunset Projection Lamp",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&auto=format&fit=crop",
      views: "2.8M",
      specialBadge: "Rising Fast",
      growth: "+36%"
    },
    {
      rank: 3,
      name: "Smart Plant Monitor",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&auto=format&fit=crop",
      views: "2.5M",
      growth: "+18%"
    },
    {
      rank: 4,
      name: "Magnetic Phone Mount",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=500&auto=format&fit=crop",
      views: "2.1M",
      growth: "+23%"
    },
    {
      rank: 5,
      name: "3D Moon Lamp",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=500&auto=format&fit=crop",
      views: "1.9M",
      growth: "+15%"
    },
    {
      rank: 6,
      name: "Galaxy Projector",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&auto=format&fit=crop",
      views: "1.7M",
      growth: "+20%"
    },
    {
      rank: 7,
      name: "Self-Cleaning Water Bottle",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop",
      views: "1.5M",
      growth: "+28%"
    },
    {
      rank: 8,
      name: "Portable Blender",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop",
      views: "1.2M",
      growth: "+12%"
    },
    {
      rank: 9,
      name: "Mini Waffle Maker",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1598233847491-f16487adee2f?w=500&auto=format&fit=crop",
      views: "1.1M",
      growth: "+8%"
    },
    {
      rank: 10,
      name: "Digital Alarm Clock",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1564429097439-eac9c95e3091?w=500&auto=format&fit=crop",
      views: "0.9M",
      growth: "+5%"
    }
  ];
  
  const handleQuickAdd = (product: typeof trendingProducts[0]) => {
    toast({
      title: `${product.name} added to cart!`,
      description: "TikTok trend added to your cart",
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  return (
    <LayoutWrapper>
      <div className="bg-gradient-to-r from-orange/10 to-mint/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange/20 text-orange rounded-full p-2">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">TikTok's Top 10</h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-softBlack/70 max-w-xl mb-2">
                These are the most viral products on TikTok right now, updated weekly based on views, engagement, and sales.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-softBlack/60" />
                <span className="text-softBlack/60">Last updated: {formattedDate}</span>
              </div>
            </div>
            
            <div>
              <Button className="bg-black hover:bg-black/90 text-white rounded-xl">
                Subscribe to Weekly Top 10
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          {trendingProducts.map((product) => (
            <div 
              key={product.rank} 
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Rank */}
              <div className="w-full md:w-20 bg-gray-100 flex items-center justify-center p-4 md:p-0">
                <span className="text-3xl md:text-4xl font-bold text-softBlack/30">#{product.rank}</span>
              </div>
              
              {/* Product Image */}
              <div className="w-full md:w-48 h-48 md:h-auto">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {product.specialBadge && (
                      <div className="bg-orange/20 text-orange px-2 py-1 rounded-full text-xs font-semibold">
                        {product.specialBadge}
                      </div>
                    )}
                    <div className="bg-black/10 text-softBlack/80 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>{product.views} views</span>
                    </div>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {product.growth} this week
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-orange font-semibold mb-4">{product.price}</p>
                  
                  <div className="mb-4">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange to-mint rounded-full" 
                        style={{ width: `${100 - (product.rank * 8)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-softBlack/60">TikTok Popularity Score</span>
                      <span className="text-xs font-medium">{100 - (product.rank * 8)}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 bg-orange hover:bg-orange/90 text-white rounded-xl"
                    onClick={() => handleQuickAdd(product)}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Quick Add
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-orange/30 text-orange hover:bg-orange/5 rounded-xl"
                    onClick={() => window.location.href = `/product/${product.rank}`}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <AiAssistant />
    </LayoutWrapper>
  );
};

export default Top10;
