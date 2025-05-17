
import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CategorySectionProps {
  title: string;
  subtitle: string;
  color: string;
  products: {
    name: string;
    price: string;
    image: string;
  }[];
}

const CategorySection = ({ title, subtitle, color, products }: CategorySectionProps) => {
  return (
    <section className="py-14 md:py-20 relative">
      {/* Background decoration with gradient */}
      <div 
        className="absolute inset-0 opacity-10 -z-10 overflow-hidden"
        style={{ background: `linear-gradient(45deg, ${color}20, transparent)` }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="category-title text-3xl md:text-4xl font-bold tracking-tight" style={{ color }}>
              {title}
            </h2>
            <p className="text-softBlack/70 max-w-xl mt-2">{subtitle}</p>
          </div>
          <Button 
            variant="ghost" 
            className="hidden md:flex items-center gap-1 mt-4 md:mt-0 group rounded-2xl" 
            style={{ color }}
          >
            See All {title} Products 
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-1 group rounded-2xl" 
            style={{ color, borderColor: `${color}40` }}
          >
            See All {title} Products 
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
