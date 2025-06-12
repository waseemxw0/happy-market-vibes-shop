
import React from "react";
import ProductCardEnhanced from "./ProductCardEnhanced";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategorySectionProps {
  title: string;
  subtitle: string;
  color: string;
  categoryKey?: string;
  products: {
    id?: string;
    name: string;
    price: string;
    image: string;
  }[];
}

const CategorySection = ({ title, subtitle, color, categoryKey, products }: CategorySectionProps) => {
  // Generate some review quotes for the products
  const reviewQuotes = [
    "TikTok made me buy it!",
    "Absolute game changer!",
    "So worth the hype!",
    "Can't live without this now!",
    "Best purchase this year!",
    "Everyone needs this!",
    "Exactly as shown in videos!",
    "Changed my daily routine!",
    "Exceeded my expectations!",
    "Worth every penny!"
  ];
  
  // Function to get a random review quote
  const getRandomReviewQuote = () => {
    return reviewQuotes[Math.floor(Math.random() * reviewQuotes.length)];
  };
  
  // Generate some sample video URLs
  const sampleVideoUrls = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  ];
  
  // Random video URL for some products
  const getRandomVideoUrl = (index: number) => {
    // Only add videos to some products (e.g., products with even indices)
    if (index % 2 === 0) {
      return sampleVideoUrls[index % sampleVideoUrls.length];
    }
    return undefined;
  };
  
  // Create proper category keys for routing
  const categoryRoutes: { [key: string]: string } = {
    "Eco Gadgets": "eco-gadgets",
    "Glow-Up Essentials": "glow-up-essentials", 
    "Viral Home": "viral-home",
    "Smart Tools": "smart-tools",
    "Wellness & Self-Care": "wellness-self-care",
    "Gaming & Tech": "gaming-tech"
  };
  
  // Get the proper route for this category
  const categoryRoute = categoryKey || categoryRoutes[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return (
    <section className="py-14 md:py-20 relative" data-section="categories">
      {/* Background decoration with gradient */}
      <div 
        className="absolute inset-0 opacity-10 -z-10 overflow-hidden"
        style={{ background: `linear-gradient(45deg, ${color}20, transparent)` }}
      >
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-30" 
             style={{ background: color, top: '10%', right: '-10%' }}></div>
        <div className="absolute w-64 h-64 rounded-full blur-3xl opacity-20" 
             style={{ background: color, bottom: '20%', left: '-5%' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-6 h-6 rounded-md shadow-sm"
                style={{ backgroundColor: color }}
              ></div>
              <h2 className="category-title text-3xl md:text-4xl font-bold tracking-tight" style={{ color }}>
                {title}
              </h2>
            </div>
            <p className="text-softBlack/70 max-w-xl">{subtitle}</p>
          </div>
          <Link to={`/collection/${categoryRoute}`}>
            <Button 
              variant="ghost" 
              className="hidden md:flex items-center gap-1 mt-4 md:mt-0 group rounded-2xl hover:bg-opacity-10 transition-all duration-300" 
              style={{ color, backgroundColor: `${color}10` }}
            >
              See All {title} Products 
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {products.map((product, index) => (
            <ProductCardEnhanced 
              key={index} 
              {...product} 
              specialBadge={index === 0 ? "Most Popular" : (index === 1 ? "Trending" : undefined)}
              reviewQuote={getRandomReviewQuote()}
              videoUrl={getRandomVideoUrl(index)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to={`/collection/${categoryRoute}`}>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-1 group rounded-2xl transition-all duration-300 hover:scale-105" 
              style={{ color, borderColor: `${color}40` }}
            >
              See All {title} Products 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
