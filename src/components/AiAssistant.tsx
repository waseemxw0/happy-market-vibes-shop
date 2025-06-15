import React, { useState, useRef, useCallback } from "react";
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
  const chatInputRef = useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        chatInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Text-to-speech function
  const speakText = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
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
  }, []);

  // Speech recognition function
  const startListening = useCallback(() => {
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
  }, [toast]);

  const handleSendMessage = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now(),
      content: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
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
      speakText(newResponse.content);
    }, 500);
  }, [input, speakText]);

  return (
    <>
      {/* Chat bubble button */}
      <button
        aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
        className={cn(
          "fixed bottom-24 right-6 z-50 bg-gradient-to-r from-orange to-orange/90 text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-orange/40",
          isOpen && "rotate-90 bg-softBlack"
        )}
        style={{ minWidth: 56, minHeight: 56 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {(isListening || isSpeaking) && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        )}
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed z-40 transition-all duration-300 overflow-hidden",
          "bottom-36 right-2 left-2 max-w-[500px] mx-auto",
          "sm:bottom-36 sm:right-8 sm:left-auto sm:w-full sm:max-w-md",
          "bg-white rounded-3xl shadow-2xl border border-gray-200",
          "animate-scale-in",
          isOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-12 scale-95 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={{ minWidth: 320, maxWidth: "95vw" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange to-orange/90 text-white p-4 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">AI Voice Assistant</span>
            {isSpeaking && <Volume2 className="h-4 w-4 animate-pulse" />}
          </div>
          <button
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 rounded-full p-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange"
            style={{ minWidth: 32, minHeight: 32 }}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50/30 scrollbar-thin">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={cn(
                "max-w-[85%] p-3 rounded-2xl text-sm animate-fade-in",
                message.sender === 'user' 
                  ? "bg-orange/10 ml-auto rounded-tr-md border border-orange/20" 
                  : "bg-white mr-auto rounded-tl-md shadow-sm border border-gray-100"
              )}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              
              {message.includesProducts && (
                <div className="mt-3 grid grid-cols-1 gap-2">
                  {demoProducts.map((product) => (
                    <div key={product.id} className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{product.name}</h4>
                        <p className="text-sm text-orange font-semibold">{product.price}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 flex-shrink-0 hover:bg-orange/10">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              
              {message.sender === 'ai' && (
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="mt-2 h-6 text-xs hover:bg-orange/10"
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
        <form
          onSubmit={handleSendMessage}
          className="border-t p-3 flex gap-2 bg-white rounded-b-3xl"
        >
          <input
            ref={chatInputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about trending products..."
            className="flex-1 py-2 px-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-transparent"
            aria-label="Message AI assistant"
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                // let submit handle
              }
            }}
          />
          <Button
            type="button"
            aria-label={isListening ? "Listening..." : "Start voice input"}
            size="sm"
            variant={isListening ? "destructive" : "ghost"}
            className={cn("rounded-xl p-2", isListening && "animate-pulse")}
            onClick={startListening}
            disabled={isListening}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button
            type="submit"
            aria-label="Send message"
            size="sm"
            className="bg-orange hover:bg-orange/90 rounded-xl p-2"
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
