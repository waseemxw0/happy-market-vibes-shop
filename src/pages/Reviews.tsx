
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Upload, Heart } from "lucide-react";
import AiAssistant from "@/components/AiAssistant";
import ProductCardEnhanced from "@/components/ProductCardEnhanced";

const Reviews = () => {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      user: "Michelle K.",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      date: "2 weeks ago",
      product: {
        name: "Cloud LED Light",
        price: "$24.99",
        image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=100&auto=format&fit=crop"
      },
      text: "TikTok made me buy this and I'm so glad I did! My daughter loves it and it's the perfect night light for her room. The color changing feature is amazing.",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=500&auto=format&fit=crop",
      likes: 42
    },
    {
      id: 2,
      user: "James T.",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 4,
      date: "1 month ago",
      product: {
        name: "Galaxy Projector",
        price: "$39.99",
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=100&auto=format&fit=crop"
      },
      text: "The galaxy projector totally transformed my bedroom! It's so relaxing to fall asleep under the stars. The only reason I'm giving 4 stars is because the remote is a bit finicky.",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&auto=format&fit=crop",
      likes: 28
    },
    {
      id: 3,
      user: "Sarah L.",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 5,
      date: "2 months ago",
      product: {
        name: "Smart Plant Monitor",
        price: "$19.99",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=100&auto=format&fit=crop"
      },
      text: "This little device saved my plants! I now know exactly when to water them and they've never looked better. I've already bought 3 more as gifts for friends.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&auto=format&fit=crop",
      likes: 56
    },
    {
      id: 4,
      user: "David K.",
      avatar: "https://i.pravatar.cc/100?img=4",
      rating: 5,
      date: "3 weeks ago",
      product: {
        name: "3D Moon Lamp",
        price: "$34.99",
        image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=100&auto=format&fit=crop"
      },
      text: "The detail on this moon lamp is incredible! It looks just like the real thing and gives off the perfect amount of light. A great conversation piece in my living room.",
      image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=500&auto=format&fit=crop",
      likes: 37
    }
  ];
  
  // Products you might like to review
  const productsToReview = [
    {
      name: "Self-Cleaning Water Bottle",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop",
    },
    {
      name: "Portable Blender",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop",
    },
    {
      name: "Digital Alarm Clock",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1564429097439-eac9c95e3091?w=500&auto=format&fit=crop",
    }
  ];
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="bg-gradient-to-r from-orange/10 to-mint/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <MessageCircle className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium">Community Reviews</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Real People, Real Reviews</h1>
            <p className="text-softBlack/70 max-w-xl mx-auto mb-8">
              See what our community is saying about their favorite TikTok viral products
            </p>
            <Button 
              className="bg-orange hover:bg-orange/90 text-white rounded-xl"
              onClick={() => document.getElementById('submit-review')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Upload className="mr-2 h-5 w-5" />
              Submit Your Review
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img 
                          src={review.avatar} 
                          alt={review.user} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{review.user}</h3>
                        <p className="text-xs text-softBlack/60">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-orange">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4" fill={i < review.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg mb-4">
                    <img 
                      src={review.product.image} 
                      alt={review.product.name} 
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-medium text-sm">{review.product.name}</p>
                      <p className="text-xs text-orange">{review.product.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-softBlack/80 mb-4">{review.text}</p>
                  
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src={review.image} 
                      alt="Product review" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-softBlack/70 hover:text-orange"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Helpful ({review.likes})
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="border-orange/30 text-orange hover:bg-orange/5 rounded-xl">
              Load More Reviews
            </Button>
          </div>
          
          <div id="submit-review" className="mt-24 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Share Your Experience</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold mb-6">Submit Your Review</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Product</label>
                  <select className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/50">
                    <option value="">-- Select a product you've purchased --</option>
                    <option value="1">Cloud LED Light</option>
                    <option value="2">Galaxy Projector</option>
                    <option value="3">Smart Plant Monitor</option>
                    <option value="4">3D Moon Lamp</option>
                    <option value="5">Self-Cleaning Water Bottle</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Rating</label>
                  <div className="flex text-gray-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-8 w-8 cursor-pointer hover:text-orange" />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Review</label>
                  <textarea 
                    className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/50 min-h-[150px]"
                    placeholder="Share your experience with this product..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Photos (optional)</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-softBlack/30 mb-2" />
                    <p className="text-sm text-softBlack/60 mb-2">Drag and drop your photos here, or click to select files</p>
                    <Button variant="outline" size="sm" className="border-orange/30 text-orange hover:bg-orange/5">
                      Select Files
                    </Button>
                  </div>
                </div>
                
                <Button className="w-full bg-orange hover:bg-orange/90 text-white rounded-xl">
                  Submit Review
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8 text-center">Products You Might Like to Review</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productsToReview.map((product, index) => (
                <ProductCardEnhanced 
                  key={index}
                  {...product}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
      <AiAssistant />
    </div>
  );
};

export default Reviews;
