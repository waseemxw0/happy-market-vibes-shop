
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

const Newsletter = () => {
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
        description: "Thanks for joining our newsletter.",
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
    <section className="py-12 md:py-16 bg-gradient-to-r from-orange/10 to-mint/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-mint/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-16 w-48 h-48 bg-orange/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-2 flex justify-center">
            <div className="bg-orange/20 w-12 h-12 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-orange" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay In The Loop</h2>
          <p className="text-softBlack/70 mb-6">
            Subscribe to get special offers, free giveaways, and trending product alerts.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 relative z-10">
            <div className="flex-1 relative">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className={`rounded-full bg-white border-gray-200 h-12 pr-10 ${error ? 'border-red-300 focus:ring-red-500' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSuccess}
              />
              {isSuccess && (
                <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
              )}
            </div>
            
            <Button 
              className={`btn-primary h-12 sm:w-auto ${isSuccess ? 'bg-green-500 hover:bg-green-600' : ''}`}
              type="submit"
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
              {!isSubmitting && !isSuccess && <ArrowRight className="ml-2" />}
            </Button>
          </form>
          
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          
          <p className="text-xs text-softBlack/50 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
