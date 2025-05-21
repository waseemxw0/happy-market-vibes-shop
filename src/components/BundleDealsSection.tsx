
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Package, ShoppingBag } from "lucide-react";

interface BundleDealsSectionProps {
  title: string;
  subtitle: string;
}

const bundles = [
  {
    id: "1",
    name: "Self-Care Starter Kit",
    description: "Essential items to kickstart your self-care routine",
    price: "$89.99",
    originalPrice: "$124.99",
    savings: "Save $35",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    products: ["Weighted Blanket", "Lavender Candle", "Journal"]
  },
  {
    id: "2",
    name: "Mom's Spa Box",
    description: "Perfect gift for mom or any special woman in your life",
    price: "$79.99",
    originalPrice: "$109.99",
    savings: "Save $30",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    products: ["Bath Salts", "Face Mask", "Scented Candle", "Tea Sampler"]
  },
  {
    id: "3",
    name: "Cozy Home Bundle",
    description: "Transform your space into a cozy sanctuary",
    price: "$99.99",
    originalPrice: "$149.99",
    savings: "Save $50",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    products: ["Throw Blanket", "Pillow Set", "Scented Candle", "Vase"]
  }
];

const BundleDealsSection = ({ title, subtitle }: BundleDealsSectionProps) => {
  const { toast } = useToast();
  
  const handleAddToCart = (bundle: typeof bundles[0]) => {
    toast({
      title: "Bundle added to cart!",
      description: `${bundle.name} has been added to your cart.`,
    });
  };
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Package className="text-[#FEC6A1] h-6 w-6" />
          <h2 className="text-3xl font-bold text-center">{title}</h2>
        </div>
        <p className="text-center text-gray-600 mb-10">{subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <Card key={bundle.id} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[4/3]">
                <img 
                  src={bundle.image} 
                  alt={bundle.name} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
                  {bundle.savings}
                </div>
              </div>
              
              <CardContent className="p-5">
                <h3 className="font-bold text-xl mb-2">{bundle.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{bundle.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-500 mb-2">Includes:</div>
                  <ul className="space-y-1">
                    {bundle.products.map((product, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <span className="h-1.5 w-1.5 bg-[#FEC6A1] rounded-full mr-2"></span>
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-[#FEC6A1] font-bold text-xl">{bundle.price}</p>
                    <p className="text-gray-500 text-sm line-through">{bundle.originalPrice}</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-white rounded-full"
                  onClick={() => handleAddToCart(bundle)}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add Bundle to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundleDealsSection;
