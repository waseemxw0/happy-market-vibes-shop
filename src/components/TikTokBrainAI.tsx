
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TikTokBrainAIProps {
  userId?: string;
  onToggleAI?: (enabled: boolean) => void;
}

const TikTokBrainAI = ({ userId, onToggleAI }: TikTokBrainAIProps) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [insights, setInsights] = useState<string[]>([]);
  const { toast } = useToast();
  
  // Simulate AI insights
  useEffect(() => {
    if (isEnabled) {
      const possibleInsights = [
        "You seem to like gadgets with LED lights",
        "Based on your browsing, you might enjoy room decor items",
        "We notice you've been looking at TikTok viral beauty products",
        "You appear to be interested in eco-friendly tech items",
        "Your shopping pattern shows interest in unique gift ideas"
      ];
      
      // Select random insights
      const selectedInsights = [];
      const insightCount = Math.floor(Math.random() * 3) + 1; // 1-3 insights
      
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
  
  return (
    <Card className="overflow-hidden border-orange/20">
      <div className="bg-gradient-to-r from-orange/10 to-mint/10 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-orange" />
          <h3 className="font-medium">TikTok Brain AI</h3>
        </div>
        <Button
          variant="outline"
          size="sm"
          className={`rounded-full ${isEnabled ? 'bg-orange/10 text-orange border-orange/30' : 'bg-gray-100 text-gray-500'}`}
          onClick={handleToggleAI}
        >
          {isEnabled ? 'Enabled' : 'Disabled'}
        </Button>
      </div>
      
      {isEnabled && (
        <div className="p-4">
          <div className="text-sm text-softBlack/70 mb-3">
            Our AI is personalizing your experience based on your browsing habits.
          </div>
          
          <div className="space-y-2">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className="flex items-start gap-2 text-xs bg-orange/5 p-2 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Sparkles className="h-4 w-4 text-orange mt-0.5" />
                <div>{insight}</div>
              </div>
            ))}
          </div>
          
          <Button 
            variant="link" 
            className="text-xs text-orange p-0 h-auto mt-2"
            onClick={() => {
              toast({
                title: "AI recommendations refreshed",
                description: "We've updated your personalized product feed",
              });
            }}
          >
            Refresh recommendations
          </Button>
        </div>
      )}
    </Card>
  );
};

export default TikTokBrainAI;
