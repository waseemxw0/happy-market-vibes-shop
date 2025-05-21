import React from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Button } from "@/components/ui/button";
import { Trophy, Gift, ShoppingBag, Heart, MessageCircle, Share2, ArrowRight } from "lucide-react";
import AiAssistant from "@/components/AiAssistant";

const Rewards = () => {
  return (
    <LayoutWrapper>
      <div className="bg-gradient-to-br from-black to-orange/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Trophy className="h-4 w-4" />
            <span className="text-sm font-medium">Trendora Rewards</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Earn Rewards on Every Purchase</h1>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join our loyalty program and earn points for every action you take. Redeem for exclusive discounts and early access to trending products.
          </p>
          <Button className="bg-white text-black hover:bg-white/90 rounded-xl">
            Join Rewards Program
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How to Earn Points</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <ShoppingBag className="h-6 w-6" />, action: "Shop", points: 10, description: "Earn 10 points for every $1 spent" },
              { icon: <Heart className="h-6 w-6" />, action: "Like & Save", points: 5, description: "Earn 5 points when you save products to wishlist" },
              { icon: <MessageCircle className="h-6 w-6" />, action: "Review", points: 15, description: "Earn 15 points when you leave a product review" },
              { icon: <Share2 className="h-6 w-6" />, action: "Share", points: 5, description: "Earn 5 points when you share products on social media" },
              { icon: <Trophy className="h-6 w-6" />, action: "Refer", points: 50, description: "Earn 50 points for each friend who makes a purchase" },
              { icon: <Gift className="h-6 w-6" />, action: "Birthday", points: 100, description: "Get 100 bonus points on your birthday" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-orange/20 text-orange flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-1">{item.action}</h3>
                <p className="text-orange font-bold text-lg mb-2">+{item.points} pts</p>
                <p className="text-sm text-softBlack/70">{item.description}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Reward Tiers</h2>
          
          <div className="space-y-6 mb-12">
            {[
              { name: "TikTok Fan", points: "0-499", benefits: ["Free shipping on orders $50+", "Early access to weekly sales"] },
              { name: "TikTok Star", points: "500-999", benefits: ["Free shipping on all orders", "Early access to new arrivals", "Birthday gift"] },
              { name: "TikTok VIP", points: "1000+", benefits: ["Free express shipping", "Exclusive product access", "Double points days", "Surprise gifts"] },
            ].map((tier, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange/20 to-orange/5 p-4">
                  <h3 className="font-bold text-lg">{tier.name}</h3>
                  <p className="text-sm text-softBlack/70">{tier.points} points</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-orange/10 rounded-xl p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Ready to start earning rewards?</h2>
            <Button className="bg-orange hover:bg-orange/90 text-white rounded-xl">
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <AiAssistant />
    </LayoutWrapper>
  );
};

export default Rewards;
