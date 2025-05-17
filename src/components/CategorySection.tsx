
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
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="category-title" style={{ color }}>
              {title}
            </h2>
            <p className="text-softBlack/70 max-w-xl">{subtitle}</p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-1 mt-4 md:mt-0" style={{ color }}>
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full flex items-center justify-center gap-1" style={{ color }}>
            View All {title} <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
