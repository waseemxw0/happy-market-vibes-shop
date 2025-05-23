
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Trash, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      name: "Smart LED Ceiling Lamp",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: "2",
      name: "Self-Cleaning Water Bottle",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: "3",
      name: "Sunset Mood Light",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1617503752587-97d2103a96b9?w=500&auto=format&fit=crop",
      inStock: false,
    }
  ]);

  const removeItem = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-2">
            <Heart className="text-orange h-8 w-8" />
            My Wishlist
            <span className="text-softBlack/50 text-lg ml-2">({wishlistItems.length} items)</span>
          </h1>

          {wishlistItems.length > 0 ? (
            <div className="flex flex-col gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                  <div className="w-full sm:w-48 h-48 sm:h-auto">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 p-6 flex flex-col sm:flex-row">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-orange font-bold mb-2">{item.price}</p>
                      <p className={`text-sm ${item.inStock ? 'text-green-600' : 'text-red-500'}`}>
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-3 sm:w-44 mt-4 sm:mt-0">
                      <Button 
                        disabled={!item.inStock}
                        className="bg-orange hover:bg-orange/90 text-white rounded-xl flex items-center gap-2 w-full"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Add to Cart
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="border-red-300 text-red-500 hover:bg-red-50 rounded-xl flex items-center gap-2 w-full"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash className="h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center mt-8">
                <Link to="/">
                  <Button variant="outline" className="rounded-xl">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 border border-gray-100 rounded-2xl bg-gray-50">
              <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-orange" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
              <p className="text-softBlack/70 mb-6">Save items you love to your wishlist and they'll appear here</p>
              <Link to="/">
                <Button className="bg-orange hover:bg-orange/90 text-white rounded-xl">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;
