import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const GiftFinder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const questions = [
    {
      id: "recipient",
      text: "Who are you shopping for?",
      options: ["Friend", "Partner", "Family Member", "Myself", "Coworker"]
    },
    {
      id: "interest",
      text: "What are they interested in?",
      options: ["Tech", "Beauty", "Home", "Fitness", "Pets", "Cooking"]
    },
    {
      id: "budget",
      text: "What's your budget?",
      options: ["Under $25", "$25-$50", "$50-$100", "$100+"]
    }
  ];
  
  const handleOptionSelect = (option: string) => {
    setAnswers({...answers, [questions[question].id]: option});
    
    if (question < questions.length - 1) {
      setQuestion(question + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const resetFinder = () => {
    setQuestion(0);
    setAnswers({});
    setShowResults(false);
  };
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      resetFinder();
    }
  };
  
  // Mock gift recommendations based on answers
  const recommendedGifts = [
    {
      name: "Smart LED Light Strip",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      match: "95% Match"
    },
    {
      name: "Mini Bluetooth Speaker",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      match: "87% Match"
    },
    {
      name: "Plant Moisture Sensor",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      match: "82% Match"
    }
  ];
  
  return (
    <>
      <Button
        onClick={toggleOpen}
        className="fixed left-5 bottom-40 z-50 bg-white text-softBlack shadow-xl px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange/10 hover:scale-105 transition-all duration-300 border border-orange/30"
        aria-label="Open AI Gift Finder"
        style={{ minWidth: 44, minHeight: 44 }}
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline text-sm">Gift Finder</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-xs sm:max-w-md max-h-[80vh] overflow-auto relative animate-scale-in shadow-2xl border-orange/20 rounded-3xl">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange to-mint rounded-t-3xl"></div>
            <Button
              variant="ghost"
              className="absolute top-3 right-3 text-softBlack/70 hover:text-softBlack z-10"
              onClick={toggleOpen}
              aria-label="Close Gift Finder"
              style={{ minWidth: 32, minHeight: 32 }}
            >
              ✕
            </Button>
            <CardContent className="pt-10 pb-6">
              {!showResults ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-1">AI Gift Finder</h3>
                    <p className="text-softBlack/70 text-sm">
                      Answer a few questions to find the perfect TikTok viral gift
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-4">{questions[question].text}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {questions[question].options.map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className="border-gray-200 hover:bg-orange/10 hover:text-orange hover:border-orange text-xs p-2 h-auto"
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      className="text-softBlack/70 text-sm"
                      onClick={resetFinder}
                      disabled={question === 0 && Object.keys(answers).length === 0}
                    >
                      Reset
                    </Button>
                    
                    <div className="flex gap-1">
                      {questions.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-2 w-2 rounded-full ${i === question ? 'bg-orange' : i < question ? 'bg-orange/40' : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-1">Perfect Gifts Found!</h3>
                    <p className="text-softBlack/70 text-sm">
                      Based on your answers, we think these viral TikTok finds would be perfect:
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {recommendedGifts.map((gift, index) => (
                      <div key={index} className="flex items-center gap-3 border rounded-lg p-2 hover:shadow-sm transition-shadow">
                        <img 
                          src={gift.image} 
                          alt={gift.name} 
                          className="h-12 w-12 rounded-lg object-cover"
                          loading="lazy"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{gift.name}</h4>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-orange font-semibold">{gift.price}</span>
                            <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs">
                              {gift.match}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={resetFinder}
                      className="text-sm"
                    >
                      Try Again
                    </Button>
                    
                    <Button
                      className="bg-orange text-white hover:bg-orange/90 text-sm"
                      onClick={toggleOpen}
                    >
                      View All
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
export default GiftFinder;
