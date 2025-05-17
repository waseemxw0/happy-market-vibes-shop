
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-orange/10 to-mint/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay In The Loop</h2>
          <p className="text-softBlack/70 mb-6">
            Subscribe to get special offers, free giveaways, and trending product alerts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="rounded-full bg-white border-gray-200 h-12"
            />
            <Button className="btn-primary h-12 sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
