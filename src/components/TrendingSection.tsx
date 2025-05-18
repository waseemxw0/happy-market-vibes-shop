
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCardEnhanced from "./ProductCardEnhanced";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const TrendingSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
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
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    },
    {
      id: "sunset-lamp",
      name: "Sunset Projection Lamp",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      reviewQuote: "Worth every penny!",
      isTrending: true,
      endTime: getRandomEndTime()
    },
    {
      id: "plant-monitor",
      name: "Smart Plant Monitor",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      specialBadge: "TikTok Pick",
      reviewQuote: "My plants love this!",
      isTrending: true,
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: "phone-mount",
      name: "Magnetic Phone Mount",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      specialBadge: "Viral Tech",
      reviewQuote: "Game changer for my car!",
      isTrending: true,
      endTime: getRandomEndTime()
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
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white to-orange/5" data-section="trending">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-orange text-xl">🔥</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-softBlack">Trending Right Now</h2>
            </div>
            <p className="text-softBlack/70">The products everyone's talking about on TikTok</p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full h-12 w-12 bg-white shadow-sm hover:shadow"
              onClick={() => {
                if (carouselRef.current) {
                  const carousel = carouselRef.current.querySelector('.embla__container');
                  if (carousel) {
                    carousel.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full h-12 w-12 bg-white shadow-sm hover:shadow"
              onClick={() => {
                if (carouselRef.current) {
                  const carousel = carouselRef.current.querySelector('.embla__container');
                  if (carousel) {
                    carousel.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }
              }}
            >
              <ChevronRight className="h-5 w-5" />
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
          <CarouselContent className="-ml-4">
            {trendingProducts.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link to={`/product/${product.id}`}>
                  <ProductCardEnhanced 
                    {...product}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="mt-8 flex justify-center">
          <Link to="/collection/trending">
            <Button 
              className="bg-orange/10 text-orange hover:bg-orange/20 rounded-full shadow-sm"
              size="lg"
            >
              View All Trending Products
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
