
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Share2, ChevronDown, Award, Star, Check, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AiAssistant from "@/components/AiAssistant";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import VideoPreview from "@/components/VideoPreview";

const ProductPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWatching, setIsWatching] = useState(false);
  
  // Sample product data - in a real app, this would be fetched based on the id
  const product = {
    id: id || "1",
    name: "LED Cloud Light",
    price: "$24.99",
    originalPrice: "$34.99",
    rating: 4.8,
    reviewCount: 1245,
    buyAgainPercentage: 92,
    description: "This viral TikTok cloud light creates the perfect ambiance for any room. It features soft LED lighting with 3 brightness levels and remote control.",
    features: [
      "3 brightness levels",
      "Remote controlled",
      "USB rechargeable",
      "Perfect for bedroom or dorm",
      "As seen on TikTok with over 5M views"
    ],
    tiktokMentions: [
      { creator: "@roomdecorgirl", views: "1.2M" },
      { creator: "@aestheticfinds", views: "800K" },
      { creator: "@dorm.life", views: "650K" }
    ],
    images: [
      "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&sat=-100",
      "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&sat=50",
    ],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    challenge: "Watch this in 30 seconds without buying 🔥",
    colors: ["White", "Blue", "Pink"],
    shippingInfo: "Free shipping on orders over $35",
    inStock: true,
    category: "roomVibes"
  };
  
  const handleAddToCart = () => {
    toast({
      title: `${product.name} added to cart!`,
      description: "TikTok trend added to your cart",
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: `${product.name} × ${quantity}`,
    });
  };
  
  const handleWatchItem = () => {
    setIsWatching(!isWatching);
    toast({
      title: isWatching ? "Stopped watching" : "Price drop alert set!",
      description: isWatching 
        ? "You will no longer receive alerts for this item" 
        : "We'll notify you when this product goes on sale",
    });
  };
  
  // Recent purchases for the live tracker
  const recentPurchases = [
    { city: "New York", timestamp: "2 mins ago" },
    { city: "Los Angeles", timestamp: "5 mins ago" },
    { city: "Chicago", timestamp: "12 mins ago" },
    { city: "Miami", timestamp: "15 mins ago" },
  ];
  
  // Record reaction functionality
  const handleRecordReaction = () => {
    toast({
      title: "Record your reaction",
      description: "Feature coming soon! Share your thoughts on this product.",
    });
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Product Gallery and Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Images/Video Gallery */}
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-100 mb-4">
                {selectedImage === product.images.length && product.videoUrl ? (
                  <VideoPreview 
                    videoUrl={product.videoUrl} 
                    thumbnailUrl={product.images[0]} 
                    className="w-full h-full"
                  />
                ) : (
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* 30-Second Dare Challenge Badge */}
                <div className="absolute top-4 left-4 bg-orange/90 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg animate-pulse">
                  {product.challenge}
                </div>
                
                {/* TikTok badge */}
                <div className="absolute bottom-4 left-4 bg-black text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                  <TikTokIcon size={14} className="text-white" />
                  <span>TikTok Viral</span>
                </div>
                
                {/* Record Reaction Button */}
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-softBlack rounded-xl flex items-center gap-1"
                  onClick={handleRecordReaction}
                >
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-1"></div>
                  React to This
                </Button>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 ${selectedImage === index ? 'border-orange' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
                {product.videoUrl && (
                  <button 
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 ${selectedImage === product.images.length ? 'border-orange' : 'border-transparent'} relative`}
                    onClick={() => setSelectedImage(product.images.length)}
                  >
                    <img src={product.images[0]} alt={`${product.name} video preview`} className="w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange/90 rounded-full flex items-center justify-center">
                        <div className="border-l-8 border-t-4 border-b-4 border-white border-t-transparent border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h1 className="text-2xl md:text-3xl font-bold text-softBlack mb-2">{product.name}</h1>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`rounded-full h-10 w-10 ${isWatching ? 'bg-orange/10 text-orange' : 'text-softBlack/70'}`}
                    onClick={handleWatchItem}
                  >
                    {isWatching ? <Bell className="h-5 w-5 fill-orange" /> : <Bell className="h-5 w-5" />}
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <div className="text-orange">★★★★★</div>
                    <span className="text-sm text-softBlack/70">{product.rating} ({product.reviewCount})</span>
                  </div>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <div className="text-sm text-softBlack/70 flex items-center gap-1">
                    <span className="text-orange">🔥</span>
                    <span>{product.buyAgainPercentage}% would buy again</span>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-2xl font-bold text-orange">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-softBlack/50 line-through">{product.originalPrice}</span>
                  )}
                  <span className="bg-orange/10 text-orange text-xs font-semibold px-2 py-1 rounded-full">Save 30%</span>
                </div>
                
                <p className="text-softBlack/80 mb-6">{product.description}</p>
                
                {/* Color Selection */}
                {product.colors && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Color</h3>
                    <div className="flex gap-2">
                      {product.colors.map((color, index) => (
                        <button 
                          key={index}
                          className="px-3 py-1 border rounded-full text-sm hover:border-orange transition-colors"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Quantity Selector */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Quantity</h3>
                  <div className="flex items-center w-32 border rounded-full overflow-hidden">
                    <button 
                      className="w-10 h-10 flex items-center justify-center text-softBlack/70 hover:bg-gray-100"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <div className="flex-1 text-center">{quantity}</div>
                    <button 
                      className="w-10 h-10 flex items-center justify-center text-softBlack/70 hover:bg-gray-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart and Buy Now Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl border-orange/30 text-orange hover:bg-orange/5"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                  <Button 
                    className="flex-1 bg-orange hover:bg-orange/90 text-white rounded-xl"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>
                
                {/* Shipping Info */}
                <div className="text-sm text-softBlack/70 flex items-center gap-2 mb-6">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                  <div className="h-3 w-px bg-gray-300"></div>
                  <span>{product.shippingInfo}</span>
                </div>
                
                {/* Top TikTok Mentions Board */}
                <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 mb-6">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <TikTokIcon size={16} /> 
                    <span>This product was featured by...</span>
                  </h3>
                  <div className="space-y-2">
                    {product.tiktokMentions.map((mention, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="font-medium">{mention.creator}</span>
                        <span className="text-orange/90">{mention.views} views</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Live Product Tracker */}
                <div className="border border-gray-100 rounded-xl p-4 bg-orange/5">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <span className="text-orange">⚡</span>
                    <span>Live Product Tracker</span>
                  </h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {recentPurchases.map((purchase, index) => (
                      <div key={index} className="flex justify-between items-center text-sm animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                        <span>Just bought in <strong>{purchase.city}</strong></span>
                        <span className="text-xs text-softBlack/50">{purchase.timestamp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="border-b p-4">
                  <h2 className="text-xl font-semibold">Features & Benefits</h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 bg-orange/10 text-orange rounded-full p-1">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="overflow-hidden h-full">
                <div className="border-b p-4">
                  <h2 className="text-xl font-semibold">Why You'll Love It</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">⭐</div>
                      <div>
                        <div className="font-medium">TikTok Viral Sensation</div>
                        <div className="text-sm text-softBlack/70">Over 5M+ views on TikTok</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">💯</div>
                      <div>
                        <div className="font-medium">Satisfaction Guaranteed</div>
                        <div className="text-sm text-softBlack/70">30-day money back guarantee</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🔋</div>
                      <div>
                        <div className="font-medium">Long Battery Life</div>
                        <div className="text-sm text-softBlack/70">Up to 10 hours of continuous use</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Mystery Box Generator */}
          <div className="mb-12 bg-gradient-to-r from-orange/10 to-mint/10 rounded-2xl p-6 md:p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🎁 Mystery TikTok Box</h2>
              <p className="text-softBlack/70 mb-6">Let our AI curate a surprise box of viral TikTok products just for you! You'll only see what's inside after purchase.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-xl bg-black hover:bg-black/90 text-white">
                  Build My $25 Viral Box
                </Button>
                <Button className="rounded-xl bg-gradient-to-r from-orange to-mint text-white hover:opacity-90">
                  Premium $50 Surprise Box
                </Button>
              </div>
            </div>
          </div>
          
          {/* AI "Trend Prediction Engine" */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">What's About to Go Viral Next</h2>
              <Button variant="ghost" className="text-orange">
                View All Predictions
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <img 
                      src={`https://images.unsplash.com/photo-16081556863${90 + item}3-8fdd966d784d?auto=format&fit=crop&w=500&q=60`} 
                      alt="Trending product" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      Trending Soon
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">Upcoming TikTok Trend #{item}</h3>
                    <p className="text-sm text-softBlack/70 mb-3">Based on our AI trend prediction engine</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-orange font-medium">
                        <TikTokIcon size={12} className="inline mr-1" />
                        Rising hashtags
                      </div>
                      <Button variant="link" className="p-0 h-auto text-xs text-orange">
                        Get notified
                      </Button>
                    </div>
                  </div>
                </Card>
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

export default ProductPage;
