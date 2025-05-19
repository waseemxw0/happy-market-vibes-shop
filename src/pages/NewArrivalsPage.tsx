
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCardEnhanced from "@/components/ProductCardEnhanced";
import { Button } from "@/components/ui/button";
import { Calendar, ShoppingBag } from "lucide-react";

const NewArrivalsPage = () => {
  // Generate some new arrivals data
  const newArrivals = [
    {
      id: "1",
      name: "Anti-Gravity Phone Case",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop",
      category: "Tech Accessories",
      date: "3 days ago"
    },
    {
      id: "2",
      name: "Smart Plant Monitor",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?w=500&auto=format&fit=crop",
      category: "Home",
      date: "5 days ago"
    },
    {
      id: "3",
      name: "Sunset Mood Lamp",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1617503752587-97d2103a96b9?w=500&auto=format&fit=crop",
      category: "Lighting",
      date: "1 week ago"
    },
    {
      id: "4",
      name: "Foldable Bluetooth Keyboard",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1616509091215-57bbf92cc2a9?w=500&auto=format&fit=crop",
      category: "Tech Gadgets",
      date: "1 week ago"
    },
    {
      id: "5",
      name: "LED Light Strip Kit",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1608495580251-d67f7a4ca602?w=500&auto=format&fit=crop",
      category: "Lighting",
      date: "2 weeks ago"
    },
    {
      id: "6",
      name: "Portable Blender",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop",
      category: "Kitchen",
      date: "2 weeks ago"
    },
    {
      id: "7",
      name: "Self-Cleaning Water Bottle",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop",
      category: "Health",
      date: "2 weeks ago"
    },
    {
      id: "8",
      name: "Galaxy Projector Light",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1633501883354-ca6c1a35ff94?w=500&auto=format&fit=crop",
      category: "Lighting",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="bg-gradient-to-r from-orange/5 to-mint/5 py-12 mb-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Just Landed</h1>
            <p className="text-softBlack/70 max-w-xl mx-auto mb-6">
              The latest viral TikTok products that everyone's talking about. Updated weekly with fresh finds!
            </p>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <Calendar className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium">Last updated: May 18, 2025</span>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap gap-6 mb-10">
            <Button 
              variant="outline" 
              className="w-full md:w-auto border-orange/30 text-orange hover:bg-orange/5 rounded-xl"
            >
              All Categories
            </Button>
            {["Tech", "Home", "Beauty", "Kitchen", "Lighting"].map((category, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="w-full md:w-auto border-gray-200 rounded-xl"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {newArrivals.map((product, index) => (
              <div key={index} className="flex flex-col">
                <ProductCardEnhanced
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  specialBadge={index === 0 || index === 1 ? "NEW" : undefined}
                  videoUrl={index % 3 === 0 ? "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" : undefined}
                />
                <div className="mt-2 flex items-center justify-between px-1">
                  <div className="text-xs text-softBlack/60 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                    Added {product.date}
                  </div>
                  <div className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-softBlack/70 mb-4">Can't find what you're looking for?</p>
            <Button className="bg-orange hover:bg-orange/90 text-white rounded-xl py-6 px-8 flex items-center gap-2 mx-auto">
              <ShoppingBag className="h-5 w-5" />
              Shop All Products
            </Button>
          </div>
          
          <div className="mt-16 p-6 bg-gray-50 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-2">Get Notified About New Arrivals</h2>
            <p className="text-softBlack/70 mb-6 max-w-xl mx-auto">
              Be the first to know when we add new viral TikTok products to our store
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50"
              />
              <Button className="bg-orange hover:bg-orange/90 text-white rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivalsPage;
