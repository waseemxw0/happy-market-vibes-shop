
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Gift, Star, Award, TrendingUp, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const LoyaltyProgram = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState(120);
  const [tier, setTier] = useState<"Bronze" | "Silver" | "Gold" | "Platinum">("Bronze");
  const { toast } = useToast();
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSignUp = () => {
    toast({
      title: "Welcome to Vibe Rewards!",
      description: "You've earned 50 bonus points for joining",
    });
    setPoints(points + 50);
  };
  
  const tierProgress = {
    Bronze: {
      current: points,
      next: 200,
      color: "#CD7F32",
      nextTier: "Silver"
    },
    Silver: {
      current: points - 200,
      next: 500,
      color: "#C0C0C0",
      nextTier: "Gold"
    },
    Gold: {
      current: points - 500,
      next: 1000,
      color: "#FFD700",
      nextTier: "Platinum"
    },
    Platinum: {
      current: points - 1000,
      next: 0,
      color: "#E5E4E2",
      nextTier: ""
    }
  };
  
  const currentTierInfo = tierProgress[tier];
  const progressPercentage = currentTierInfo.next > 0 
    ? (currentTierInfo.current / currentTierInfo.next) * 100
    : 100;
  
  return (
    <>
      <button 
        onClick={toggleOpen}
        className="fixed bottom-24 right-4 z-30 bg-gradient-to-r from-orange to-mint text-white rounded-full p-3 shadow-lg flex items-center justify-center"
      >
        <Star className="h-5 w-5" />
      </button>
      
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={cn(
            "bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-auto transition-transform duration-300",
            isOpen ? "transform scale-100" : "transform scale-90"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 relative">
            <div className="absolute top-4 right-4">
              <button 
                className="text-softBlack/60 hover:text-softBlack"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-orange" />
                <h2 className="text-2xl font-bold">Vibe Rewards</h2>
              </div>
              <p className="text-softBlack/70 text-sm">Earn points, get exclusive rewards</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange/10 to-mint/10 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-sm text-softBlack/70">Your points</span>
                  <h3 className="text-2xl font-bold">{points}</h3>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center" 
                    style={{backgroundColor: `${currentTierInfo.color}20`}}
                  >
                    <span className="text-sm font-semibold" style={{color: currentTierInfo.color}}>{tier}</span>
                  </div>
                </div>
              </div>
              
              {currentTierInfo.next > 0 && (
                <div className="mb-1">
                  <Progress value={progressPercentage} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-softBlack/70">
                    <span>{currentTierInfo.current} points</span>
                    <span>{currentTierInfo.next} points to {currentTierInfo.nextTier}</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Ways to earn</h3>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                    <Gift className="h-5 w-5 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Make a purchase</h4>
                    <p className="text-xs text-softBlack/70">Earn 10 points per $1 spent</p>
                  </div>
                  <span className="text-orange font-semibold">+10pts</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Share on social</h4>
                    <p className="text-xs text-softBlack/70">Share your favorite products</p>
                  </div>
                  <span className="text-orange font-semibold">+25pts</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Write a review</h4>
                    <p className="text-xs text-softBlack/70">Review your purchased items</p>
                  </div>
                  <span className="text-orange font-semibold">+50pts</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Refer a friend</h4>
                    <p className="text-xs text-softBlack/70">When they make first purchase</p>
                  </div>
                  <span className="text-orange font-semibold">+100pts</span>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Redeem rewards</h3>
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  variant="outline" 
                  className={cn(
                    "justify-between",
                    points >= 200 ? "border-orange/20 text-orange hover:bg-orange/5" : "opacity-50 cursor-not-allowed"
                  )}
                  disabled={points < 200}
                >
                  <span className="flex items-center gap-2">
                    <Gift className="h-4 w-4" />
                    $5 off your next order
                  </span>
                  <span className="bg-orange/10 rounded-full px-2 py-1 text-xs">
                    200 pts
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className={cn(
                    "justify-between",
                    points >= 500 ? "border-orange/20 text-orange hover:bg-orange/5" : "opacity-50 cursor-not-allowed"
                  )}
                  disabled={points < 500}
                >
                  <span className="flex items-center gap-2">
                    <Gift className="h-4 w-4" />
                    Free shipping for a month
                  </span>
                  <span className="bg-orange/10 rounded-full px-2 py-1 text-xs">
                    500 pts
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className={cn(
                    "justify-between",
                    points >= 1000 ? "border-orange/20 text-orange hover:bg-orange/5" : "opacity-50 cursor-not-allowed"
                  )}
                  disabled={points < 1000}
                >
                  <span className="flex items-center gap-2">
                    <Gift className="h-4 w-4" />
                    Exclusive product early access
                  </span>
                  <span className="bg-orange/10 rounded-full px-2 py-1 text-xs">
                    1000 pts
                  </span>
                </Button>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                className="w-full bg-orange hover:bg-orange/90 text-white"
                onClick={handleSignUp}
              >
                Join Now & Get 50 Bonus Points
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoyaltyProgram;
