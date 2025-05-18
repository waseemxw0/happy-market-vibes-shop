
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Share2, Star, ChevronRight, TrendingUp, Shield, Truck, RotateCcw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TikTokIcon from "./icons/TikTokIcon";
import { useToast } from "@/hooks/use-toast";
import AiAssistant from "@/components/AiAssistant";
import SocialProofBubble from "@/components/SocialProofBubble";
import TrendingCountdown from "@/components/TrendingCountdown";
import ProductCardEnhanced from "@/components/ProductCardEnhanced";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  
  // Mock product data - in a real app, you'd fetch this from an API
  const product = {
    id: id || "1",
    name: "Cloud LED Night Light",
    price: "$24.99",
    originalPrice: "$34.99",
    discount: "30% OFF",
    colors: ["#C2F5D3", "#F9D5E5", "#EEEEEE"],
    description: "This viral TikTok cloud light creates the perfect cozy ambient lighting for any room. With remote-controlled color changing capabilities and a soft glowing effect, it's the ultimate mood setter for your space.",
    features: [
      "Color changing with remote control",
      "USB rechargeable",
      "Timer function",
      "Safe for kids' rooms",
      "Perfect gift idea"
    ],
    rating: 4.8,
    reviewCount: 1247,
    stockLevel: "low",
    shippingInfo: "Fast shipping: 3-5 days",
    images: [
      "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611237316593-633e91f23470?w=800&auto=format&fit=crop"
    ],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    reviews: [
      {
        id: 1,
        user: "Michelle K.",
        avatar: "https://i.pravatar.cc/100?img=1",
        rating: 5,
        date: "2 weeks ago",
        text: "TikTok made me buy this and I'm so glad I did! My daughter loves it and it's the perfect night light."
      },
      {
        id: 2,
        user: "James T.",
        avatar: "https://i.pravatar.cc/100?img=2",
        rating: 4,
        date: "1 month ago",
        text: "Great quality, just wish it was a bit brighter. Still love it though!"
      },
      {
        id: 3,
        user: "Sarah L.",
        avatar: "https://i.pravatar.cc/100?img=3",
        rating: 5,
        date: "2 months ago",
        text: "Absolutely perfect! I've bought 3 more as gifts for friends after getting mine."
      }
    ]
  };
  
  // Used for social proof bubbles
  const socialProofMessages = [
    "Michelle from New York just bought this",
    "This item was added to 5 carts in the last hour",
    "Over 300 sold in the last 24 hours",
    "James from Chicago just saved this to his wishlist",
    `${product.reviewCount} verified reviews for this item`
  ];
  
  // Demo related products
  const relatedProducts = [
    {
      name: "Star Projector Light",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&auto=format&fit=crop"
    },
    {
      name: "Moon Lamp",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=500&auto=format&fit=crop"
    },
    {
      name: "Sunset Projection Lamp",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&auto=format&fit=crop"
    },
    {
      name: "Rainbow Light",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=500&auto=format&fit=crop"
    }
  ];
  
  // Set end time to 24 hours from now
  const saleEndTime = new Date();
  saleEndTime.setHours(saleEndTime.getHours() + 24);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} x${quantity} has been added to your cart.`,
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: "We're preparing your order...",
    });
    // In a real app, you'd redirect to checkout
  };
  
  const handleToggleWishlist = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isLiked ? "removed from" : "added to"} your wishlist.`,
    });
  };
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center text-xs text-softBlack/60 mb-4">
            <button onClick={() => navigate('/')} className="hover:text-orange">Home</button>
            <ChevronRight className="h-3 w-3 mx-1" />
            <button onClick={() => navigate('/collection/roomvibes')} className="hover:text-orange">RoomVibes</button>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-softBlack/80">{product.name}</span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Images */}
            <div className="w-full lg:w-3/5">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4 relative">
                {showVideo ? (
                  <video 
                    src={product.videoUrl} 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted
                    controls
                  />
                ) : (
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* TikTok badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <TikTokIcon size={14} className="text-white" />
                    <span>TikTok Viral</span>
                  </div>
                  
                  {product.stockLevel === "low" && (
                    <div className="bg-orange/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      Low Stock
                    </div>
                  )}
                </div>
                
                {/* Play/pause video button */}
                <button 
                  className="absolute bottom-4 right-4 bg-black/70 text-white rounded-full p-2 backdrop-blur-sm"
                  onClick={() => setShowVideo(!showVideo)}
                >
                  {showVideo ? (
                    <img src={product.images[selectedImage]} alt="Thumbnail" className="w-8 h-8 object-cover rounded-md" />
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4L18 12L6 20V4Z" fill="white"/>
                    </svg>
                  )}
                </button>
              </div>
              
              <div className="flex gap-2 mb-4">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-orange' : 'border-transparent'}`}
                    onClick={() => {
                      setSelectedImage(index);
                      setShowVideo(false);
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                <button 
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${showVideo ? 'border-orange' : 'border-transparent'}`}
                  onClick={() => setShowVideo(true)}
                >
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img 
                      src={product.images[0]} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-orange/90 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 4L18 12L6 20V4Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="w-full lg:w-2/5">
              <h1 className="text-2xl md:text-3xl font-bold text-softBlack mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-orange">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-current" 
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-sm text-softBlack/70">{product.rating}</span>
                <span className="text-sm text-softBlack/70">|</span>
                <span className="text-sm text-softBlack/70">{product.reviewCount} reviews</span>
                <span className="text-sm text-softBlack/70">|</span>
                <div className="flex items-center gap-1 text-emerald-500 text-sm">
                  <TrendingUp className="h-3 w-3" />
                  <span>Trending</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-orange">{product.price}</span>
                  <span className="text-lg line-through text-softBlack/50">{product.originalPrice}</span>
                  <span className="bg-orange/20 text-orange px-2 py-1 rounded-full text-xs font-semibold">
                    {product.discount}
                  </span>
                </div>
                
                <div className="mt-2 flex items-center gap-2">
                  <TrendingCountdown endTime={saleEndTime} label="Sale ends in:" />
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-softBlack/80 mb-4">{product.description}</p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-softBlack/70">
                      <div className="h-5 w-5 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Color selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Select Color:</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button 
                      key={index}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedColor === color ? 'ring-2 ring-offset-2 ring-orange' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Quantity selector */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Quantity:</h3>
                <div className="flex items-center w-32 h-12 border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-12 h-full flex items-center justify-center text-softBlack/70 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </button>
                  <div className="flex-1 h-full flex items-center justify-center font-medium">
                    {quantity}
                  </div>
                  <button 
                    className="w-12 h-full flex items-center justify-center text-softBlack/70 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <Button 
                  className="bg-orange hover:bg-orange/90 text-white rounded-xl h-14 flex items-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="border-orange/30 text-orange hover:bg-orange/5 rounded-xl flex-1 h-12"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className={`${isLiked ? 'bg-red-50 text-red-500 border-red-200' : 'border-gray-200 text-softBlack/70'} rounded-xl h-12 w-12 p-0 flex items-center justify-center`}
                    onClick={handleToggleWishlist}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-gray-200 text-softBlack/70 rounded-xl h-12 w-12 p-0 flex items-center justify-center"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Shipping and returns */}
              <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Fast Shipping</h4>
                    <p className="text-xs text-softBlack/70">Free shipping on orders over $35</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">
                    <RotateCcw className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">30-Day Returns</h4>
                    <p className="text-xs text-softBlack/70">Hassle-free returns policy</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Secure Checkout</h4>
                    <p className="text-xs text-softBlack/70">Safe & secure payment processing</p>
                  </div>
                </div>
              </div>
              
              {/* Social proof */}
              <div className="bg-orange/10 rounded-xl p-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-orange/20 flex items-center justify-center">
                    <TikTokIcon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-softBlack/80">
                      <span className="font-semibold">16.2M</span> TikTok views
                    </p>
                    <p className="text-xs text-softBlack/60">Trending in 8 countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="w-full justify-start border-b rounded-none p-0 h-auto mb-6">
                <TabsTrigger 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:text-orange py-3 px-5" 
                  value="details"
                >
                  Product Details
                </TabsTrigger>
                <TabsTrigger 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:text-orange py-3 px-5" 
                  value="reviews"
                >
                  Reviews ({product.reviewCount})
                </TabsTrigger>
                <TabsTrigger 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:text-orange py-3 px-5" 
                  value="shipping"
                >
                  Shipping & Returns
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="mt-0">
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">About This Product</h3>
                  <p className="text-softBlack/80">
                    The Cloud LED Night Light is one of TikTok's most viral home decor items. This adorable light adds a warm, cozy ambiance to any room while serving as both a functional light source and stylish décor piece.
                  </p>
                  <p className="text-softBlack/80">
                    With a remote control that lets you change between multiple colors and brightness levels, you can customize this light to match your mood or room décor. The soft, diffused light is perfect for creating a relaxing atmosphere.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-medium mb-2">Specifications</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between text-sm">
                          <span className="text-softBlack/60">Dimensions</span>
                          <span>9.5" × 6.5" × 3"</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-softBlack/60">Material</span>
                          <span>Eco-friendly silicone</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-softBlack/60">Power Source</span>
                          <span>USB rechargeable battery</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-softBlack/60">Light Colors</span>
                          <span>7 colors + warm white</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-softBlack/60">Runtime</span>
                          <span>Up to 12 hours</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">In The Box</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <div className="h-4 w-4 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">✓</div>
                          <span>1 × Cloud LED Light</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <div className="h-4 w-4 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">✓</div>
                          <span>1 × Remote Control</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <div className="h-4 w-4 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">✓</div>
                          <span>1 × USB Charging Cable</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <div className="h-4 w-4 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">✓</div>
                          <span>1 × User Manual</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-3xl font-bold text-center mb-2">{product.rating}</h3>
                        <div className="flex items-center justify-center text-orange mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className="h-5 w-5 fill-current" 
                              fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <p className="text-center text-sm text-softBlack/70 mb-6">{product.reviewCount} total reviews</p>
                        
                        {/* Rating breakdown */}
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex items-center gap-2">
                              <span className="text-xs text-softBlack/70 w-6">{star} ★</span>
                              <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-orange rounded-full" 
                                  style={{ 
                                    width: `${star === 5 ? 72 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 2 : 1}%`
                                  }}
                                ></div>
                              </div>
                              <span className="text-xs text-softBlack/70 w-8">
                                {star === 5 ? "72%" : star === 4 ? "20%" : star === 3 ? "5%" : star === 2 ? "2%" : "1%"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 bg-orange hover:bg-orange/90 text-white rounded-xl">
                        Write a Review
                      </Button>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="space-y-6">
                        {product.reviews.map((review) => (
                          <div key={review.id} className="p-4 border border-gray-100 rounded-xl">
                            <div className="flex justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full overflow-hidden">
                                  <img 
                                    src={review.avatar} 
                                    alt={review.user} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm">{review.user}</h4>
                                  <p className="text-xs text-softBlack/60">{review.date}</p>
                                </div>
                              </div>
                              <div className="flex items-center text-orange">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className="h-4 w-4 fill-current" 
                                    fill={i < review.rating ? "currentColor" : "none"}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-softBlack/80">{review.text}</p>
                          </div>
                        ))}
                        
                        <Button 
                          variant="outline" 
                          className="border-orange/30 text-orange hover:bg-orange/5 rounded-xl w-full"
                        >
                          Load More Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="mt-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg mb-3">Shipping Information</h3>
                    <p className="text-softBlack/80 mb-2">
                      We offer fast and reliable shipping on all orders. Here's what you need to know:
                    </p>
                    <ul className="space-y-2 ml-5 list-disc text-sm text-softBlack/70">
                      <li>Free standard shipping on all orders over $35</li>
                      <li>Standard shipping (3-5 business days): $4.99</li>
                      <li>Express shipping (1-2 business days): $9.99</li>
                      <li>International shipping available to select countries</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-3">Return Policy</h3>
                    <p className="text-softBlack/80 mb-2">
                      We stand behind our products with a 30-day satisfaction guarantee:
                    </p>
                    <ul className="space-y-2 ml-5 list-disc text-sm text-softBlack/70">
                      <li>Hassle-free returns within 30 days of delivery</li>
                      <li>Product must be in original condition and packaging</li>
                      <li>Return shipping is free for defective items</li>
                      <li>Refunds are processed within 5-7 business days</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((product, index) => (
                <ProductCardEnhanced 
                  key={index}
                  {...product}
                  specialBadge={index === 1 ? "Trending" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
      <AiAssistant />
      <SocialProofBubble messages={socialProofMessages} />
    </div>
  );
};

export default ProductPage;
