
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Review {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}

const ReviewsCarousel = () => {
  const reviews: Review[] = [
    {
      name: "Jamie S.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "This color-changing light transforms my room completely! Perfect TikTok vibes ✨",
      product: "RGB Light Strip"
    },
    {
      name: "Michael T.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "My cat is obsessed with this toy! Best pet purchase ever!",
      product: "Interactive Cat Toy"
    },
    {
      name: "Sophia L.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
      text: "The face roller feels amazing and definitely reduces my morning puffiness!",
      product: "Jade Face Roller"
    },
    {
      name: "Alex W.",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      text: "This water bottle reminds me to stay hydrated all day. Game changer!",
      product: "Smart Water Bottle"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-mint/20 to-orange/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-10">Real Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-softBlack">{review.name}</h4>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "text-orange fill-orange" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-softBlack/80 mb-3">"{review.text}"</p>
              <p className="text-sm text-softBlack/60">On: {review.product}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="bg-white">
            See All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
