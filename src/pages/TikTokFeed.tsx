import React from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { useToast } from "@/hooks/use-toast";
import AiAssistant from "@/components/AiAssistant";

const TikTokFeed = () => {
  const { toast } = useToast();
  
  // Sample TikTok videos
  const tiktokVideos = [
    {
      id: 1,
      creator: "@techreviewgirl",
      views: "2.4M",
      title: "This cloud light is everything! #cloudlight #roomdecor",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      productName: "Cloud LED Light",
      productPrice: "$24.99",
      productImage: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=100&auto=format&fit=crop"
    },
    {
      id: 2,
      creator: "@homedesignpro",
      views: "1.8M",
      title: "The sunset lamp that broke TikTok #sunsetlamp #tiktokmademebuyit",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      productName: "Sunset Projection Lamp",
      productPrice: "$29.99",
      productImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&auto=format&fit=crop"
    },
    {
      id: 3,
      creator: "@gadgetlover",
      views: "3.1M",
      title: "This smart plant monitor saved my plants! #plantsoftiktok",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      productName: "Smart Plant Monitor",
      productPrice: "$19.99",
      productImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=100&auto=format&fit=crop"
    },
    {
      id: 4,
      creator: "@lifehacks",
      views: "1.2M",
      title: "Best car phone mount ever #carcheck #amazonfinds",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      productName: "Magnetic Phone Mount",
      productPrice: "$14.99",
      productImage: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=100&auto=format&fit=crop"
    },
    {
      id: 5,
      creator: "@roomdecoration",
      views: "4.7M",
      title: "This moon lamp is stunning at night! #moolamp #homedecor",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      productName: "3D Moon Lamp",
      productPrice: "$34.99",
      productImage: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=100&auto=format&fit=crop"
    },
    {
      id: 6,
      creator: "@techworld",
      views: "3.5M",
      title: "This galaxy projector will transform your room! #projector",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      productName: "Galaxy Projector",
      productPrice: "$39.99",
      productImage: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=100&auto=format&fit=crop"
    }
  ];
  
  const handleAddToCart = (productName: string) => {
    toast({
      title: `${productName} added to cart!`,
      description: "TikTok trend added to your cart",
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  return (
    <LayoutWrapper>
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-sm mb-6">
            <TikTokIcon size={16} className="text-white" />
            <span>As Seen on TikTok</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">TikTok Viral Products</h1>
          <p className="text-white/70 max-w-xl mx-auto mb-6">
            Watch real TikTok creators using our viral products and shop directly from their videos.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiktokVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="aspect-[9/16] w-full relative">
                <video 
                  src={video.videoUrl} 
                  className="w-full h-full object-cover"
                  controls
                  poster="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop"
                  preload="metadata"
                />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <TikTokIcon size={14} className="text-white" />
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-softBlack">{video.creator}</h3>
                    <p className="text-sm text-softBlack/70 line-clamp-1">{video.title}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                  <img 
                    src={video.productImage} 
                    alt={video.productName} 
                    className="w-14 h-14 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{video.productName}</h4>
                    <p className="text-orange text-xs font-semibold">{video.productPrice}</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0 rounded-full bg-orange/10 text-orange"
                    onClick={() => handleAddToCart(video.productName)}
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-black hover:bg-black/90 text-white rounded-xl">
            Load More TikTok Videos
          </Button>
        </div>
      </div>
      
      <AiAssistant />
    </LayoutWrapper>
  );
};

export default TikTokFeed;
