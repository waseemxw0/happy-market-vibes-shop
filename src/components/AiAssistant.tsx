
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <div className="fixed bottom-20 md:bottom-8 right-4 z-40">
          <Button 
            onClick={() => setIsOpen(true)}
            className="h-12 w-12 rounded-full bg-gradient-to-r from-orange to-mint shadow-lg flex items-center justify-center"
          >
            <MessageSquare className="h-5 w-5 text-white" />
          </Button>
        </div>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-8 md:right-4 w-full md:w-80 h-64 bg-white rounded-t-xl md:rounded-xl shadow-xl z-40 flex flex-col border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange to-mint p-3 flex items-center justify-between">
            <span className="text-white font-medium">Shopping Assistant</span>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="bg-white p-3 rounded-xl mb-3 shadow-sm">
              <p className="text-sm">Hi there! I'm your TikTok shopping assistant. How can I help you find the perfect viral product today?</p>
            </div>
          </div>
          
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Ask about products..." 
                className="flex-grow px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30" 
              />
              <Button size="sm" className="bg-orange hover:bg-orange/90 rounded-lg">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
