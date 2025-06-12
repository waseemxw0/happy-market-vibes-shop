
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Send, ShoppingBag, Mic, MicOff, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'ai';
  includesProducts?: boolean;
}

// Demo products for the assistant to recommend
const demoProducts = [
  {
    id: 1,
    name: "Cloud Light",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=150&h=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sunset Lamp",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=150&h=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Portable Blender",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=150&h=150&auto=format&fit=crop"
  }
];

// Pre-defined assistant responses
const assistantResponses: { [key: string]: Message } = {
  gift: {
    id: 2,
    content: "Looking for a gift? I've got some viral picks that are super giftable right now! Here are the most popular gifts on TikTok this week:",
    sender: 'ai',
    includesProducts: true
  },
  under30: {
    id: 3,
    content: "Want something amazing under $30? These viral TikTok finds are all budget-friendly and trending right now:",
    sender: 'ai',
    includesProducts: true
  },
  trending: {
    id: 4,
    content: "Here's what's absolutely blowing up on TikTok today! These products are getting millions of views:",
    sender: 'ai',
    includesProducts: true
  },
  hello: {
    id: 1,
    content: "Hi there! I'm the Trendora AI assistant with advanced voice capabilities. I can help you find viral TikTok products! Try asking me about gifts, trending items, or products under $30. You can also use voice commands!",
    sender: 'ai',
    includesProducts: false
  }
};

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    assistantResponses.hello
  ]);

  // Text-to-speech function
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
      // Try to use a more pleasant voice
      const voices = speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Google') || 
        voice.name.includes('Microsoft') ||
        voice.name.includes('female') ||
        voice.name.includes('Samantha')
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  // Speech recognition function
  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      setIsListening(true);
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        
        toast({
          title: "Voice recognized!",
          description: `I heard: "${transcript}"`,
        });
      };
      
      recognition.onerror = () => {
        setIsListening(false);
        toast({
          title: "Voice recognition error",
          description: "Please try again or type your message",
          variant: "destructive"
        });
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      toast({
        title: "Voice not supported",
        description: "Your browser doesn't support voice recognition",
        variant: "destructive"
      });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      content: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Determine AI response based on keywords
    setTimeout(() => {
      let response: Message;
      
      if (input.toLowerCase().includes('gift')) {
        response = assistantResponses.gift;
      } else if (input.toLowerCase().includes('under') || input.toLowerCase().includes('$30')) {
        response = assistantResponses.under30;
      } else if (input.toLowerCase().includes('trend') || input.toLowerCase().includes('popular')) {
        response = assistantResponses.trending;
      } else {
        response = {
          id: Date.now(),
          content: "I'm here to help you find the perfect TikTok viral products! Ask me about gifts, trending items, or products under $30. You can also use voice commands!",
          sender: 'ai',
          includesProducts: true
        };
      }
      
      const newResponse = {...response, id: Date.now()};
      setMessages(prev => [...prev, newResponse]);
      
      // Speak the response
      speakText(newResponse.content);
    }, 500);
  };

  return (
    <>
      {/* Chat bubble button - positioned further from cart */}
      <button 
        className={cn(
          "fixed bottom-36 right-4 z-40 bg-gradient-to-r from-orange to-orange/90 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl",
          isOpen && "rotate-90 bg-softBlack"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {/* Voice indicator */}
        {(isListening || isSpeaking) && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        )}
      </button>
      
      {/* Chat window */}
      <div className={cn(
        "fixed bottom-52 right-4 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-30 transition-all duration-300 overflow-hidden",
        isOpen ? "opacity-100 transform translate-y-0" : "opacity-0 pointer-events-none transform translate-y-10"
      )}>
        {/* Header */}
        <div className="bg-gradient-to-r from-orange to-orange/90 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">AI Voice Assistant</span>
            {isSpeaking && <Volume2 className="h-4 w-4 animate-pulse" />}
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 flex flex-col gap-3">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={cn(
                "max-w-[80%] p-3 rounded-lg",
                message.sender === 'user' 
                  ? "bg-orange/10 ml-auto rounded-tr-none" 
                  : "bg-gray-100 mr-auto rounded-tl-none"
              )}
            >
              <p className="text-sm">{message.content}</p>
              
              {message.includesProducts && (
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {demoProducts.map((product) => (
                    <div key={product.id} className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="text-xs font-medium">{product.name}</h4>
                        <p className="text-xs text-orange">{product.price}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Speak button for AI messages */}
              {message.sender === 'ai' && (
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="mt-2 h-6 text-xs"
                  onClick={() => speakText(message.content)}
                  disabled={isSpeaking}
                >
                  <Volume2 className="h-3 w-3 mr-1" />
                  {isSpeaking ? 'Speaking...' : 'Speak'}
                </Button>
              )}
            </div>
          ))}
        </div>
        
        {/* Input */}
        <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about trending products or use voice..."
            className="flex-1 py-2 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange/50"
          />
          <Button 
            type="button"
            size="sm" 
            variant={isListening ? "destructive" : "ghost"}
            className={cn("rounded-lg", isListening && "animate-pulse")}
            onClick={startListening}
            disabled={isListening}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button 
            type="submit" 
            size="sm" 
            className="bg-orange hover:bg-orange/90 rounded-lg"
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default AiAssistant;
