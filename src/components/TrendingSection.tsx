
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Play, TrendingUp, Flame } from "lucide-react";
import ProductCardEnhanced from "./ProductCardEnhanced";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const TrendingSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Create date objects for countdowns (random times within next 24 hours)
  const getRandomEndTime = () => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + Math.floor(Math.random() * 24) + 1);
    return endTime;
  };
  
  const trendingProducts = [
    {
      id: "cloud-light",
      name: "LED Cloud Light",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      specialBadge: "🔥 Selling Fast",
      reviewQuote: "TikTok made me buy it!",
      isTrending: true,
      endTime: getRandomEndTime(),
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      views: "2.3M",
      sales: "15K sold"
    },
    {
      id: "sunset-lamp",
      name: "Sunset Projection Lamp",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      reviewQuote: "Worth every penny!",
      isTrending: true,
      endTime: getRandomEndTime(),
      views: "1.8M",
      sales: "12K sold"
    },
    {
      id: "plant-monitor",
      name: "Smart Plant Monitor",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      specialBadge: "TikTok Pick",
      reviewQuote: "My plants love this!",
      isTrending: true,
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      views: "3.1M",
      sales: "8K sold"
    },
    {
      id: "phone-mount",
      name: "Magnetic Phone Mount",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      specialBadge: "Viral Tech",
      reviewQuote: "Game changer for my car!",
      isTrending: true,
      endTime: getRandomEndTime(),
      views: "950K",
      sales: "22K sold"
    },
    {
      id: "moon-lamp",
      name: "3D Moon Lamp",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      specialBadge: "Staff Pick",
      reviewQuote: "Beautiful ambient light!",
      isTrending: true,
      endTime: getRandomEndTime(),
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      views: "1.2M",
      sales: "9K sold"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-orange/3 to-mint/5 relative overflow-hidden" data-section="trending">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-gradient-to-r from-orange/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-gradient-to-l from-mint/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full text-orange font-bold text-sm mb-6 shadow-xl animate-bounce-in">
            <Flame className="w-5 h-5 animate-pulse" />
            <span>Live Trending Now</span>
            <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="section-title mb-6">
            🔥 Viral Products
            <span className="block text-luxury">Everyone's Buying</span>
          </h2>
          
          <p className="text-xl text-softBlack/70 max-w-3xl mx-auto font-medium leading-relaxed">
            The hottest products breaking the internet right now. Join millions who've already discovered these viral sensations.
          </p>
        </div>

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="glass-effect px-6 py-3 rounded-full shadow-xl">
              <div className="flex items-center gap-2 text-softBlack font-semibold">
                <TrendingUp className="w-5 h-5 text-orange" />
                <span>50K+ viewing now</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm text-softBlack/60">
              <div className="w-2 h-2 bg-gradient-to-r from-orange to-mint rounded-full animate-pulse"></div>
              <span>Updated every 5 minutes</span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-3">
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full h-14 w-14 glass-effect shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-white/40 group"
              onClick={() => {
                if (carouselRef.current) {
                  const carousel = carouselRef.current.querySelector('.embla__container');
                  if (carousel) {
                    carousel.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }
              }}
            >
              <ChevronLeft className="h-6 w-6 group-hover:text-orange transition-colors duration-300" />
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full h-14 w-14 glass-effect shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-white/40 group"
              onClick={() => {
                if (carouselRef.current) {
                  const carousel = carouselRef.current.querySelector('.embla__container');
                  if (carousel) {
                    carousel.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }
              }}
            >
              <ChevronRight className="h-6 w-6 group-hover:text-orange transition-colors duration-300" />
            </Button>
          </div>
        </div>
        
        <Carousel 
          ref={carouselRef}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-6">
            {trendingProducts.map((product, index) => (
              <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div 
                  className="relative group"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                      <ProductCardEnhanced {...product} />
                      
                      {/* Premium overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center justify-between text-white">
                            <div>
                              <div className="text-sm font-semibold opacity-90">{product.views} views</div>
                              <div className="text-xs opacity-70">{product.sales}</div>
                            </div>
                            {product.videoUrl && (
                              <div className="flex items-center gap-2 text-sm font-semibold">
                                <Play className="w-4 h-4" />
                                <span>Watch</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Trending indicator */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 glass-effect px-3 py-1.5 rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-orange">TRENDING</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/collection/trending">
            <Button 
              className="btn-primary px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl"
              size="lg"
            >
              View All Trending Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Button 
            variant="outline"
            className="glass-effect text-softBlack hover:bg-white/40 rounded-full px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 border-white/40"
            size="lg"
          >
            <TrendingUp className="mr-3 h-5 w-5" />
            See What's Rising
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
