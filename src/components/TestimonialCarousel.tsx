
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCarouselProps {
  title: string;
}

const testimonials = [
  {
    id: "1",
    name: "Sarah J.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    testimonial: "The weighted blanket has completely changed my sleep quality. I fall asleep faster and wake up feeling refreshed. Worth every penny!",
    product: "Calming Weighted Blanket"
  },
  {
    id: "2",
    name: "Michael T.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    testimonial: "I purchased the Self-Care Journal as a gift for my wife and she absolutely loves it. The quality is outstanding and the prompts are so thoughtful.",
    product: "Self-Care Journal"
  },
  {
    id: "3",
    name: "Emma L.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    testimonial: "The Mom's Spa Box was the perfect treat for myself after a long week. The products complement each other so well and create the perfect at-home spa experience.",
    product: "Mom's Spa Box"
  },
  {
    id: "4",
    name: "David K.",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 4,
    testimonial: "I've received so many compliments on my Happy Vibes mug. It's become my favorite morning companion and brightens my day just looking at it.",
    product: "Happy Vibes Mug"
  },
  {
    id: "5",
    name: "Jessica P.",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    testimonial: "The lavender candle set has the most authentic scent I've ever experienced in a candle. Burns evenly and lasts so long. Already ordered more!",
    product: "Lavender Candle Set"
  }
];

const TestimonialCarousel = ({ title }: TestimonialCarouselProps) => {
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  
  // Auto scroll functionality
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Scroll every 5 seconds
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-14 bg-[#FDE1D3]/20 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
        
        <div className="relative px-4 md:px-10">
          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="mr-3">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 mb-4 flex-grow italic text-sm">
                        "{testimonial.testimonial}"
                      </blockquote>
                      
                      <div className="text-xs text-gray-500 mt-auto">
                        Product: <span className="font-medium">{testimonial.product}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white" />
            </div>
          </Carousel>
        </div>
        
        {/* "As Seen On" logo strip */}
        <div className="mt-16">
          <h3 className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">As Seen On</h3>
          <div className="flex justify-center items-center flex-wrap gap-8 opacity-60">
            <div className="h-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="YouTube" className="h-full grayscale" />
            </div>
            <div className="h-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png" alt="Instagram" className="h-full grayscale" />
            </div>
            <div className="h-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TikTok_logo.svg/103px-TikTok_logo.svg.png" alt="TikTok" className="h-full grayscale" />
            </div>
            <div className="h-7">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/BuzzFeed_Logo.svg/512px-BuzzFeed_Logo.svg.png" alt="Buzzfeed" className="h-full grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
