
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TikTokIcon from "./icons/TikTokIcon";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CommunitySection = () => {
  const { toast } = useToast();
  
  const comments = [
    {
      id: 1,
      user: "tiktoker342",
      avatar: "https://i.pravatar.cc/100?img=1",
      comment: "Finally found this after seeing it on my FYP for weeks! Worth it 💯",
      likes: 248,
      product: "LED Cloud Light",
      productImage: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      user: "glowup_queen",
      avatar: "https://i.pravatar.cc/100?img=5",
      comment: "This saved my morning routine! 10/10 recommend to everyone 👸",
      likes: 187,
      product: "Smart Plant Monitor",
      productImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      user: "tech_gadget_lover",
      avatar: "https://i.pravatar.cc/100?img=3",
      comment: "My apartment feels so much cooler with this! All my friends want one now lol",
      likes: 324,
      product: "3D Moon Lamp",
      productImage: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];
  
  const [likedComments, setLikedComments] = useState<number[]>([]);
  
  const handleLike = (commentId: number) => {
    if (likedComments.includes(commentId)) {
      setLikedComments(prev => prev.filter(id => id !== commentId));
    } else {
      setLikedComments(prev => [...prev, commentId]);
      toast({
        title: "Comment liked!",
        description: "Thanks for engaging with our community"
      });
    }
  };
  
  const handleShare = () => {
    toast({
      title: "Share this product",
      description: "Copied link to clipboard!",
    });
  };
  
  const handleReply = () => {
    toast({
      title: "Reply to comment",
      description: "Feature coming soon!"
    });
  };
  
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-white to-mint/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white rounded-full text-sm mb-4">
            <TikTokIcon size={16} className="text-white" />
            <span>Community Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Talk from TikTok</h2>
          <p className="text-softBlack/70 max-w-xl mx-auto">
            See what people are saying about our products on TikTok
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comments.map(comment => (
            <Card key={comment.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={comment.avatar} 
                      alt={comment.user} 
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{comment.user}</div>
                      <div className="text-xs text-softBlack/60 flex items-center gap-1">
                        <TikTokIcon size={12} />
                        <span>TikTok User</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-3">{comment.comment}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`p-0 h-auto text-sm flex items-center gap-1 ${likedComments.includes(comment.id) ? 'text-red-500' : 'text-softBlack/70'}`}
                        onClick={() => handleLike(comment.id)}
                      >
                        <Heart className={`h-4 w-4 ${likedComments.includes(comment.id) ? 'fill-red-500' : ''}`} />
                        <span>
                          {likedComments.includes(comment.id) ? comment.likes + 1 : comment.likes}
                        </span>
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-0 h-auto text-sm flex items-center gap-1 text-softBlack/70"
                        onClick={handleReply}
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Reply</span>
                      </Button>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-0 h-auto text-softBlack/70"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 flex items-center gap-3">
                  <img 
                    src={comment.productImage} 
                    alt={comment.product} 
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                  <div>
                    <div className="text-xs text-softBlack/60">About product:</div>
                    <div className="font-medium">{comment.product}</div>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-orange text-sm"
                    >
                      View Product
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-black hover:bg-black/90 text-white rounded-xl">
            <TikTokIcon size={16} className="mr-2" />
            See More From TikTok
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
