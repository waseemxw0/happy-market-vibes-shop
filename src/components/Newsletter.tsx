
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

interface NewsletterProps {
  headline: string;
  description: string;
}

const Newsletter = ({ headline, description }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Your 15% discount code has been sent to your email.",
      });
      setEmail("");
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 800);
  };

  return (
    <section className="py-14 bg-[#FFDEE2]/30 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-[#FFDEE2] w-14 h-14 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-[#E06C9F]" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-3">{headline}</h2>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto">
            {description}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className={`rounded-full border-gray-200 h-12 pr-10 ${error ? 'border-red-300 focus:ring-red-500' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSuccess}
              />
              {isSuccess && (
                <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
              )}
            </div>
            
            <Button 
              className={`h-12 rounded-full bg-[#E06C9F] hover:bg-[#E06C9F]/90 text-white sm:w-auto ${isSuccess ? 'bg-green-500 hover:bg-green-600' : ''}`}
              type="submit"
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Get 15% Off"}
              {!isSubmitting && !isSuccess && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
