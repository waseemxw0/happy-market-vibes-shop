
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, Search, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VoiceShoppingGenie = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();
  
  // Sample results data - in a real app, this would be based on AI processing of the transcript
  const sampleResults = [
    {
      name: "LED Cloud Light",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Smart Plant Monitor",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "3D Moon Lamp",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ];
  
  const handleStartListening = () => {
    setIsListening(true);
    
    // Simulate speech recognition - in a real app, this would use the Web Speech API
    setTimeout(() => {
      setTranscript("Show me the best LED lights for my room");
      setIsListening(false);
      setIsProcessing(true);
      
      setTimeout(() => {
        setIsProcessing(false);
        setShowResults(true);
      }, 1500);
    }, 2000);
    
    toast({
      title: "Voice recognition activated",
      description: "Tell me what you're looking for...",
    });
  };
  
  const handleReset = () => {
    setTranscript("");
    setShowResults(false);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (transcript) {
      setIsProcessing(true);
      
      setTimeout(() => {
        setIsProcessing(false);
        setShowResults(true);
      }, 1500);
    }
  };
  
  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-medium flex items-center gap-2">
          <span>💬</span>
          Voice-Powered AI Shopping Genie
        </h3>
      </div>
      
      <div className="p-4">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative mb-4">
            <input
              type="text"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Ask me anything about products..."
              className="w-full px-4 py-3 pr-20 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/30"
            />
            
            <div className="absolute right-2 top-2 flex items-center gap-1">
              {transcript && (
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full"
                  onClick={handleReset}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              
              <Button 
                type="button"
                variant={isListening ? "destructive" : "ghost"} 
                size="icon" 
                className={`h-8 w-8 rounded-full ${isListening ? 'animate-pulse' : ''}`}
                onClick={handleStartListening}
                disabled={isListening || isProcessing}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              
              <Button 
                type="submit"
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full"
                disabled={!transcript || isProcessing}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
        
        {isProcessing && (
          <div className="flex flex-col items-center py-8">
            <div className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm text-softBlack/70">Processing your request...</p>
          </div>
        )}
        
        {showResults && (
          <div className="space-y-4">
            <div className="p-3 bg-orange/10 rounded-lg text-sm">
              <p className="font-medium mb-1">AI Genie Response:</p>
              <p>Based on your request, here are the best LED lights that are trending on TikTok right now:</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {sampleResults.map((result, index) => (
                <div 
                  key={index} 
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="aspect-square bg-gray-100">
                    <img 
                      src={result.image} 
                      alt={result.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm truncate">{result.name}</h4>
                    <p className="text-orange text-xs font-semibold">{result.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              className="w-full bg-orange hover:bg-orange/90 text-white rounded-xl"
            >
              View All Results
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default VoiceShoppingGenie;
