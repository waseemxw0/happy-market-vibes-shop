
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Verified, Heart } from "lucide-react";

interface Review {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
  verified: boolean;
  likes: number;
  date: string;
  location: string;
}

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews: Review[] = [
    {
      name: "Jamie S.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "This color-changing light transforms my room completely! Perfect TikTok vibes ✨ The quality exceeded my expectations and it arrived faster than promised.",
      product: "RGB Light Strip",
      verified: true,
      likes: 847,
      date: "2 days ago",
      location: "New York, NY"
    },
    {
      name: "Michael T.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "My cat is obsessed with this toy! Best pet purchase ever! It keeps her entertained for hours and the build quality is fantastic.",
      product: "Interactive Cat Toy",
      verified: true,
      likes: 1203,
      date: "1 week ago",
      location: "Los Angeles, CA"
    },
    {
      name: "Sophia L.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "The face roller feels amazing and definitely reduces my morning puffiness! I've been using it for 3 weeks and can see real results.",
      product: "Jade Face Roller",
      verified: true,
      likes: 656,
      date: "3 days ago",
      location: "Miami, FL"
    },
    {
      name: "Alex W.",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      text: "This water bottle reminds me to stay hydrated all day. Game changer! The smart features work perfectly and battery lasts weeks.",
      product: "Smart Water Bottle",
      verified: true,
      likes: 924,
      date: "5 days ago",
      location: "Austin, TX"
    },
    {
      name: "Emma R.",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      rating: 5,
      text: "Absolutely love this purchase! The quality is premium and it looks exactly like in the videos. Fast shipping too!",
      product: "Moon Night Light",
      verified: true,
      likes: 1456,
      date: "1 day ago",
      location: "Seattle, WA"
    },
    {
      name: "David K.",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      rating: 5,
      text: "Perfect for my home office setup! The design is sleek and it works flawlessly. Highly recommend to anyone looking for quality.",
      product: "Wireless Charger",
      verified: true,
      likes: 789,
      date: "4 days ago",
      location: "Chicago, IL"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
    setIsAutoPlaying(false);
  };

  const getVisibleReviews = () => {
    const startIndex = currentIndex * 3;
    return reviews.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-mint/5 to-orange/5 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange/10 to-mint/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-mint/10 to-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 glass-effect rounded-full text-sm font-semibold text-orange mb-6 shadow-xl">
            <Verified className="w-4 h-4" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="section-title mb-6">What Our Community Says</h2>
          <p className="text-xl text-softBlack/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Join over 2 million satisfied customers who trust us for the latest viral products
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation buttons */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-gradient-to-r from-orange to-mint scale-125" 
                        : "bg-softBlack/30 hover:bg-softBlack/50"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-softBlack/60 font-medium">
                {currentIndex + 1} of {Math.ceil(reviews.length / 3)}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full h-12 w-12 glass-effect shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-white/40"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full h-12 w-12 glass-effect shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-white/40"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleReviews().map((review, index) => (
              <div 
                key={`${currentIndex}-${index}`}
                className="glass-effect rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105 border border-white/30 relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                        />
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange to-mint rounded-full flex items-center justify-center shadow-lg">
                            <Verified className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-softBlack group-hover:text-luxury transition-colors duration-300">{review.name}</h4>
                        <p className="text-sm text-softBlack/60">{review.location}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-orange fill-orange" : "text-softBlack/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-softBlack/50 font-medium">{review.date}</div>
                  </div>

                  {/* Review text */}
                  <p className="text-softBlack/80 mb-6 leading-relaxed font-medium text-lg">
                    "{review.text}"
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="glass-effect px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-softBlack/80">
                        {review.product}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-softBlack/60">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">{review.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass-effect rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-luxury mb-2">4.9★</div>
              <div className="text-softBlack/70 font-medium">Average Rating</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-luxury mb-2">50K+</div>
              <div className="text-softBlack/70 font-medium">Reviews</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-luxury mb-2">98%</div>
              <div className="text-softBlack/70 font-medium">Satisfaction</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-luxury mb-2">24/7</div>
              <div className="text-softBlack/70 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
