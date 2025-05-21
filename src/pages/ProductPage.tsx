import React, { useState } from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import AiAssistant from "@/components/AiAssistant";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Heart, ShoppingBag, Star, Share2, ChevronDown, Plus, Minus, Check, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ProductCardEnhanced from "@/components/ProductCardEnhanced";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("White");
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Mock product data - in a real app, this would come from an API
  const product = {
    id,
    name: "Cloud LED Ceiling Light",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviewCount: 256,
    description: "Transform your space with this viral TikTok cloud light. Features RGB color changing modes, remote control, and music sync capabilities. Perfect for bedrooms, living rooms, or as a unique night light for kids.",
    longDescription: `
      <p>The Cloud LED Ceiling Light has taken TikTok by storm with over 2.4 million views! This stunning light fixture creates a magical atmosphere in any room with its realistic cloud design and customizable lighting options.</p>
      
      <p>Key Features:</p>
      <ul>
        <li>16 million RGB color options with remote control</li>
        <li>Music sync mode that pulses with your favorite songs</li>
        <li>Timer function for automatic shut-off</li>
        <li>Dimmable brightness levels</li>
        <li>Easy installation with included mounting hardware</li>
        <li>Energy-efficient LED technology</li>
      </ul>
      
      <p>Dimensions: 24" x 16" x 8"</p>
      <p>Power: AC 110-240V, 50/60Hz</p>
      <p>Remote Control: Included (batteries not included)</p>
    `,
    colors: ["White", "Gray", "Pink"],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=800&auto=format&fit=crop",
    ],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    stock: 12,
    tags: ["Lighting", "Home Decor", "TikTok Viral"],
    tikTokViews: "2.4M",
  };
  
  // Similar products
  const similarProducts = [
    {
      name: "Galaxy Projector",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&auto=format&fit=crop",
    },
    {
      name: "Sunset Lamp",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1617503752587-97d2103a96b9?w=500&auto=format&fit=crop",
    },
    {
      name: "LED Strip Lights",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1608543588099-91a941e0a62b?w=500&auto=format&fit=crop",
    },
    {
      name: "Moon Lamp",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=500&auto=format&fit=crop",
    },
  ];
  
  // Mock reviews
  const reviews = [
    {
      id: 1,
      user: "Michelle K.",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      date: "2 weeks ago",
      text: "This cloud light is AMAZING! It looks exactly like the TikTok videos. My daughter loves it and it's the perfect night light for her room. The color changing feature is so cool!",
      likes: 42
    },
    {
      id: 2,
      user: "James T.",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 4,
      date: "1 month ago",
      text: "Great product overall. The light is beautiful and creates a wonderful ambiance. The only reason I'm giving 4 stars is because the remote is a bit finicky sometimes.",
      likes: 28
    },
    {
      id: 3,
      user: "Sarah L.",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 5,
      date: "2 months ago",
      text: "Worth every penny! This cloud light transformed my bedroom completely. The music sync feature is my favorite - it's like having my own little dance party every night!",
      likes: 56
    },
  ];
  
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedColor}) x ${quantity}`,
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-3/5">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 mb-4 aspect-square">
              {selectedImage.includes("video") ? (
                <video 
                  src={product.videoUrl} 
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              )}
              
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full px-3 py-1.5 font-semibold flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                <span>{product.tikTokViews} views</span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage === image ? 'border-orange' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {product.videoUrl && (
                <div 
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage === product.videoUrl ? 'border-orange' : 'border-transparent'} relative bg-gray-900`}
                  onClick={() => setSelectedImage(product.videoUrl)}
                >
                  <video 
                    src={product.videoUrl}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-white/80 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-2/5">
            <div className="flex flex-wrap gap-2 mb-2">
              {product.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-softBlack/70">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-softBlack/60">({product.reviewCount} reviews)</span>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold text-orange">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg line-through text-softBlack/50">${product.originalPrice.toFixed(2)}</span>
              )}
              <span className="bg-orange/20 text-orange px-2 py-1 rounded-full text-xs font-semibold">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            </div>
            
            <p className="text-softBlack/70 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`h-10 px-4 rounded-full border ${selectedColor === color ? 'border-orange bg-orange/10' : 'border-gray-200'}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center border border-gray-200 rounded-xl w-32">
                <button 
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-orange"
                  onClick={decrementQuantity}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button 
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-orange"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-softBlack/60 mt-1">
                {product.stock} items available
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button 
                className="bg-orange hover:bg-orange/90 text-white rounded-xl py-6 flex-1 flex items-center gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="border-orange/30 text-orange hover:bg-orange/5 rounded-xl py-6"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-200 rounded-xl py-6"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Check className="h-3 w-3" />
                </div>
                <span>Free shipping on orders over $35</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Check className="h-3 w-3" />
                </div>
                <span>30-day money back guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Check className="h-3 w-3" />
                </div>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
              <TabsTrigger 
                value="details" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
              >
                Reviews ({product.reviewCount})
              </TabsTrigger>
              <TabsTrigger 
                value="shipping" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
              >
                Shipping & Returns
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-0">
              <div className={`prose max-w-none ${isExpanded ? '' : 'max-h-96 overflow-hidden relative'}`}
                dangerouslySetInnerHTML={{ __html: product.longDescription }}
              />
              
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
              )}
              
              <Button 
                variant="ghost" 
                className="mt-4 flex items-center gap-1"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show Less' : 'Read More'}
                <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </Button>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-0">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
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
                    
                    <p className="text-softBlack/80 mb-4">{review.text}</p>
                    
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
                ))}
                
                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-0">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Shipping</h3>
                  <p className="text-softBlack/70 mb-4">
                    We offer free standard shipping on all orders over $35. Orders typically ship within 1-2 business days and arrive within 3-5 business days.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-medium mb-2">Shipping Options</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Standard Shipping (3-5 business days)</span>
                        <span>$4.99 (Free over $35)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Express Shipping (2-3 business days)</span>
                        <span>$9.99</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Next Day Delivery (order by 2pm)</span>
                        <span>$14.99</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">Returns & Refunds</h3>
                  <p className="text-softBlack/70 mb-4">
                    We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-medium mb-2">Return Process</h4>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Contact our customer service team to initiate a return</li>
                      <li>Pack the item in its original packaging if possible</li>
                      <li>Use the provided return shipping label</li>
                      <li>Drop off the package at any authorized shipping location</li>
                      <li>Refunds are processed within 5-7 business days after we receive the return</li>
                    </ol>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarProducts.map((product, index) => (
              <ProductCardEnhanced 
                key={index}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
      
      <AiAssistant />
    </LayoutWrapper>
  );
};

export default ProductPage;
