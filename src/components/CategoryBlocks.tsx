
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Heart, Shirt, Home } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "wellness",
    name: "Wellness",
    description: "For mind, body & soul",
    icon: Heart,
    color: "#E5DEFF",
    textColor: "#6C5DD3",
    link: "/collection/wellness"
  },
  {
    id: "gifts",
    name: "Gifts",
    description: "Thoughtful presents",
    icon: Gift,
    color: "#FFDEE2",
    textColor: "#E06C9F",
    link: "/collection/gifts"
  },
  {
    id: "apparel",
    name: "Apparel",
    description: "Comfy & stylish",
    icon: Shirt,
    color: "#D3E4FD",
    textColor: "#4285F4",
    link: "/collection/apparel"
  },
  {
    id: "home",
    name: "Home Vibes",
    description: "Cozy space essentials",
    icon: Home,
    color: "#FEF7CD",
    textColor: "#F4B400",
    link: "/collection/home"
  }
];

const CategoryBlocks = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link to={category.link} key={category.id}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full border-0">
                <div 
                  className="aspect-square flex flex-col items-center justify-center p-6 text-center"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon 
                    size={56} 
                    className="mb-4"
                    style={{ color: category.textColor }}
                  />
                  <h3 className="font-bold text-lg md:text-xl mb-1" style={{ color: category.textColor }}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBlocks;
