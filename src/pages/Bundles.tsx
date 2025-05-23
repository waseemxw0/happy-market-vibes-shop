
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Package, ShoppingBag, Heart, Check } from "lucide-react";
import TrendingCountdown from "@/components/TrendingCountdown";
import AiAssistant from "@/components/AiAssistant";
import { useToast } from "@/hooks/use-toast";

const Bundles = () => {
  const { toast } = useToast();
  
  // Set end time for limited-time bundles
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 48);
  
  // Sample bundles data
  const bundles = [
    {
      id: 1,
      name: "TikTok Starter Pack",
      description: "The essentials that every TikTok fan needs to get started",
      price: "$79.99",
      originalPrice: "$120.99",
      savings: "Save 34%",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=800&auto=format&fit=crop",
      products: [
        { name: "Cloud LED Light", price: "$24.99", image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=100&auto=format&fit=crop" },
        { name: "Galaxy Projector", price: "$39.99", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=100&auto=format&fit=crop" },
        { name: "Mini Ring Light", price: "$19.99", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&auto=format&fit=crop" },
        { name: "Phone Stand", price: "$14.99", image: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=100&auto=format&fit=crop" },
      ]
    },
    {
      id: 2,
      name: "Glow-Up Kit",
      description: "All the viral beauty essentials for your perfect TikTok glow-up",
      price: "$89.99",
      originalPrice: "$145.99",
      savings: "Save 38%",
      image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=800&auto=format&fit=crop",
      products: [
        { name: "Ice Roller", price: "$19.99", image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=100&auto=format&fit=crop" },
        { name: "LED Face Mask", price: "$59.99", image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=100&auto=format&fit=crop" },
        { name: "Jade Gua Sha", price: "$24.99", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=100&auto=format&fit=crop" },
        { name: "Vitamin C Serum", price: "$19.99", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=100&auto=format&fit=crop" },
        { name: "Sleep Mask", price: "$14.99", image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?w=100&auto=format&fit=crop" },
      ]
    },
    {
      id: 3,
      name: "Room Transformation Bundle",
      description: "Transform your space with these viral TikTok room decor pieces",
      price: "$129.99",
      originalPrice: "$189.99",
      savings: "Save 32%",
      image: "https://images.unsplash.com/photo-1611237316593-633e91f23470?w=800&auto=format&fit=crop",
      products: [
        { name: "LED Strip Lights", price: "$29.99", image: "https://images.unsplash.com/photo-1608543588099-91a941e0a62b?w=100&auto=format&fit=crop" },
        { name: "Moon Lamp", price: "$34.99", image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=100&auto=format&fit=crop" },
        { name: "Cloud Light", price: "$24.99", image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=100&auto=format&fit=crop" },
        { name: "Floating Shelf", price: "$19.99", image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=100&auto=format&fit=crop" },
        { name: "Digital Alarm Clock", price: "$29.99", image: "https://images.unsplash.com/photo-1564429097439-eac9c95e3091?w=100&auto=format&fit=crop" },
        { name: "Galaxy Projector", price: "$39.99", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=100&auto=format&fit=crop" },
      ]
    }
  ];
  
  const handleAddToCart = (bundle: typeof bundles[0]) => {
    toast({
      title: `${bundle.name} added to cart!`,
      description: "Bundle successfully added to your cart",
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="bg-gradient-to-r from-orange/10 to-mint/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Package className="h-4 w-4" />
              <span className="text-sm font-medium">Save with Bundles</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">TikTok Viral Bundles</h1>
            <p className="text-softBlack/70 max-w-xl mx-auto mb-8">
              Save up to 40% when you buy our carefully curated bundles of the most viral TikTok products
            </p>
            
            <div className="inline-flex items-center gap-2 bg-white rounded-full pl-3 pr-4 py-2 shadow-md">
              <div className="bg-orange/20 p-1 rounded-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="#FFA94D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Limited Time Bundle Offer</span>
              <TrendingCountdown endTime={endTime} label="" />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-16">
            {bundles.map((bundle) => (
              <div key={bundle.id} className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="lg:w-1/3">
                  <img 
                    src={bundle.image} 
                    alt={bundle.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="lg:w-2/3 p-6 md:p-8 flex flex-col">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-orange/20 text-orange px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {bundle.savings}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{bundle.name}</h2>
                    <p className="text-softBlack/70 mb-4">{bundle.description}</p>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl font-bold text-orange">{bundle.price}</span>
                      <span className="text-lg line-through text-softBlack/50">{bundle.originalPrice}</span>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                      <h3 className="font-medium mb-3">Bundle Includes:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {bundle.products.map((product, index) => (
                          <div key={index} className="flex items-center gap-3 bg-white p-2 rounded-lg">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-12 h-12 object-cover rounded-md"
                            />
                            <div>
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-xs text-softBlack/60">{product.price}</p>
                            </div>
                            <div className="ml-auto">
                              <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                <Check className="h-3 w-3" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="bg-orange hover:bg-orange/90 text-white rounded-xl py-6 flex-1 flex items-center gap-2"
                        onClick={() => handleAddToCart(bundle)}
                      >
                        <ShoppingBag className="h-5 w-5" />
                        Add Bundle to Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-orange/30 text-orange hover:bg-orange/5 rounded-xl py-6"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
      <AiAssistant />
    </div>
  );
};

export default Bundles;
