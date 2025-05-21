
import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

interface InstagramSectionProps {
  title: string;
}

const instagramPosts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    caption: "Starting the morning right with our Happy Vibes mug ☕️✨ #MorningRoutine"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    caption: "Self-care Sunday essentials from @HappyMarketVibes 💆‍♀️ #SelfCareSunday"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    caption: "Cozy vibes only with our new weighted blanket 🧸 #CozyHome"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    caption: "The perfect gift for any occasion 🎁 #GiftIdeas"
  }
];

const InstagramSection = ({ title }: InstagramSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Instagram className="text-[#FEC6A1] h-6 w-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-center">{title}</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {instagramPosts.map((post) => (
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              key={post.id}
              className="group block overflow-hidden"
            >
              <Card className="border-0 overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <img 
                    src={post.image} 
                    alt="Instagram post" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <p className="text-white text-xs md:text-sm p-3 text-center line-clamp-3">
                      {post.caption}
                    </p>
                  </div>
                </AspectRatio>
              </Card>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="rounded-full border-[#FEC6A1] text-[#FEC6A1] hover:bg-[#FEC6A1]/5"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram className="mr-2 h-4 w-4" />
            Follow @HappyMarketVibes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
