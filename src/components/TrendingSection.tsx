
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "./ProductCard";

const TrendingSection = () => {
  const trendingProducts = [
    {
      name: "LED Cloud Light",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Sunset Projection Lamp",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Smart Plant Monitor",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Magnetic Phone Mount",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "3D Moon Lamp",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title mb-0">TikTok Trending Picks</h2>
          <div className="hidden md:flex gap-2">
            <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 overflow-x-auto pb-4">
          {trendingProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
