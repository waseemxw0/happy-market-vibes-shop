import React from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useParams } from "react-router-dom";
import { categoryData } from "@/components/CategoryData";
import ProductCardEnhanced from "@/components/ProductCardEnhanced";
import AiAssistant from "@/components/AiAssistant";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const CollectionPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // Find category data based on URL param
  const categoryKey = Object.keys(categoryData).find(key => 
    key.toLowerCase() === category?.toLowerCase()
  ) || "ecoGadgets";
  
  const currentCategory = categoryData[categoryKey as keyof typeof categoryData];
  
  // Generate more products for the collection page
  const products = [
    ...currentCategory.products,
    ...currentCategory.products.map((product, index) => ({
      ...product,
      name: `${product.name} Pro`,
      price: `$${(parseInt(product.price.replace('$', '')) + 10).toFixed(2)}`
    }))
  ];
  
  // Random video URLs for some products
  const sampleVideoUrls = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  ];
  
  // Create endTime dates for countdown timers
  const getRandomEndTime = () => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + Math.floor(Math.random() * 24) + 1);
    return endTime;
  };
  
  return (
    <LayoutWrapper>
      <div className="bg-gradient-to-r from-white to-orange/5 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: currentCategory.color }}
          >
            {currentCategory.title}
          </h1>
          <p className="text-softBlack/70 max-w-xl mb-4">
            {currentCategory.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 py-4">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="bg-white rounded-xl text-sm flex items-center gap-1">
                <SlidersHorizontal className="h-4 w-4 mr-1" />
                Filters
              </Button>
              <Button variant="outline" className="bg-white rounded-xl text-sm">
                Price: Low to High
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="outline" className="bg-white rounded-xl text-sm">
                Most Viral
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="md:ml-auto text-xs text-softBlack/60">
              Showing {products.length} products
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCardEnhanced 
              key={index}
              {...product}
              specialBadge={index % 5 === 0 ? "TikTok Pick" : undefined}
              reviewQuote={index % 3 === 0 ? "TikTok made me buy it!" : "Worth every penny!"}
              videoUrl={index % 3 === 0 ? sampleVideoUrls[index % sampleVideoUrls.length] : undefined}
              endTime={index % 4 === 0 ? getRandomEndTime() : undefined}
              isTrending={index % 7 === 0}
            />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="border-orange/30 text-orange hover:bg-orange/5 rounded-xl"
          >
            Load More Products
          </Button>
        </div>
      </div>
      
      <AiAssistant />
    </LayoutWrapper>
  );
};

export default CollectionPage;
