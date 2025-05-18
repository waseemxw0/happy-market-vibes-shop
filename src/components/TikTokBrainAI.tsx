
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, ChevronRight, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TikTokBrainAIProps {
  userId?: string;
  onToggleAI?: (enabled: boolean) => void;
}

const TikTokBrainAI = ({ userId, onToggleAI }: TikTokBrainAIProps) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [insights, setInsights] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const { toast } = useToast();
  
  // Simulate AI insights
  useEffect(() => {
    if (isEnabled) {
      const possibleInsights = [
        "You seem to like gadgets with LED lights",
        "Based on your browsing, you might enjoy room decor items",
        "We notice you've been looking at TikTok viral beauty products",
        "You appear to be interested in eco-friendly tech items",
        "Your shopping pattern shows interest in unique gift ideas",
        "Products with dynamic lighting are catching your attention",
        "You might enjoy our selection of desk accessories",
        "Your recent activity suggests interest in smart home gadgets"
      ];
      
      // Select random insights
      const selectedInsights = [];
      const insightCount = Math.floor(Math.random() * 3) + 2; // 2-4 insights
      
      for (let i = 0; i < insightCount; i++) {
        const randomIndex = Math.floor(Math.random() * possibleInsights.length);
        selectedInsights.push(possibleInsights[randomIndex]);
        possibleInsights.splice(randomIndex, 1);
      }
      
      setInsights(selectedInsights);
    }
  }, [isEnabled]);
  
  const handleToggleAI = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    
    toast({
      title: newState ? "TikTok Brain AI enabled" : "TikTok Brain AI disabled",
      description: newState 
        ? "We'll personalize your shopping experience" 
        : "You'll now see our standard product recommendations",
    });
    
    if (onToggleAI) {
      onToggleAI(newState);
    }
  };
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const refreshInsights = () => {
    // Trigger the useEffect to get new insights
    setInsights([]);
    
    toast({
      title: "AI recommendations refreshed",
      description: "We've updated your personalized product feed",
      variant: "default",
    });
    
    // Small delay to make the refresh feel more realistic
    setTimeout(() => {
      if (isEnabled) {
        const possibleInsights = [
          "You might be interested in our trending tech gadgets",
          "Your browsing suggests you'd enjoy aesthetic home decor",
          "Based on your activity, check out our beauty essentials",
          "We've noticed you like items with unique designs",
          "Products with vibrant colors seem to catch your interest",
          "Smart devices align with your browsing habits",
          "Eco-friendly products match your interests",
          "Your activity suggests interest in portable electronics"
        ];
        
        const selectedInsights = [];
        const insightCount = Math.floor(Math.random() * 3) + 2; // 2-4 insights
        
        for (let i = 0; i < insightCount; i++) {
          const randomIndex = Math.floor(Math.random() * possibleInsights.length);
          selectedInsights.push(possibleInsights[randomIndex]);
          possibleInsights.splice(randomIndex, 1);
        }
        
        setInsights(selectedInsights);
      }
    }, 600);
  };
  
  return (
    <Card className="overflow-hidden border-orange/20 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="bg-gradient-to-r from-orange/10 to-mint/10 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-orange/20 to-mint/20 p-1.5 rounded-lg">
            <Brain className="h-5 w-5 text-orange" />
          </div>
          <h3 className="font-medium">TikTok Brain AI</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${isEnabled ? 'bg-orange/10 text-orange border-orange/30 hover:bg-orange/20' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            onClick={handleToggleAI}
          >
            {isEnabled ? 'Enabled' : 'Disabled'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full"
            onClick={toggleExpanded}
          >
            <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
          </Button>
        </div>
      </div>
      
      {isEnabled && isExpanded && (
        <div className="p-4 bg-gradient-to-b from-white to-orange/5">
          <div className="text-sm text-softBlack/70 mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-orange" />
            <span>Our AI is personalizing your shopping experience based on your browsing habits</span>
          </div>
          
          <div className="space-y-2 mb-4">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className="flex items-start gap-2 text-xs bg-white p-2.5 rounded-lg shadow-sm border border-orange/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-orange/10 p-0.5 rounded mt-0.5">
                  <Sparkles className="h-3.5 w-3.5 text-orange" />
                </div>
                <div className="flex-1">{insight}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <Button 
              variant="link" 
              className="text-xs text-orange p-0 h-auto"
              onClick={refreshInsights}
            >
              Refresh recommendations
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-xs h-7 px-2.5 rounded-lg bg-white/80 border border-orange/10 flex items-center gap-1.5 hover:bg-white"
              onClick={() => {
                toast({
                  title: "AI Settings",
                  description: "Customize your AI personalization settings",
                });
              }}
            >
              <Settings className="h-3 w-3" />
              <span>Customize AI</span>
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TikTokBrainAI;
