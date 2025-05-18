
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Shield, Truck, RotateCcw, CheckCircle, Star } from "lucide-react";
import AiAssistant from "@/components/AiAssistant";

const Trust = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="bg-gradient-to-r from-white to-orange/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium">Trust & Transparency</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Why Shop with Trendora</h1>
            <p className="text-softBlack/70 max-w-xl mx-auto">
              We're committed to making your shopping experience exceptional from start to finish
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: <Shield className="h-8 w-8" />, 
                title: "Quality Guaranteed", 
                description: "Every product is tested and verified to ensure it meets our high standards" 
              },
              { 
                icon: <Truck className="h-8 w-8" />, 
                title: "Fast Shipping", 
                description: "Free standard shipping on orders over $35, with most items shipping within 24-48 hours" 
              },
              { 
                icon: <RotateCcw className="h-8 w-8" />, 
                title: "30-Day Returns", 
                description: "Not happy with your purchase? Return it within 30 days for a full refund" 
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-sm rounded-xl p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-orange/20 text-orange flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-softBlack/70">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Promises to You</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Quality First",
                  description: "We personally test or thoroughly research every product we sell to ensure it meets our strict quality standards. If it doesn't live up to the TikTok hype, we don't sell it."
                },
                {
                  title: "Transparent Pricing",
                  description: "No hidden fees or surprise charges. The price you see is the price you pay, and we're committed to offering competitive prices on everything we sell."
                },
                {
                  title: "Secure Shopping",
                  description: "Your information is always protected. We use industry-standard encryption and secure payment processing to keep your personal and financial information safe."
                },
                {
                  title: "Customer Satisfaction",
                  description: "Your happiness is our priority. If you're not completely satisfied with your purchase, our customer service team is here to make it right."
                }
              ].map((promise, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{promise.title}</h3>
                    <p className="text-softBlack/70">{promise.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Jessica T.",
                  rating: 5,
                  text: "I've purchased several viral TikTok products from Trendora and they actually work! The cloud light is exactly as advertised and arrived quickly."
                },
                {
                  name: "Michael R.",
                  rating: 5,
                  text: "Amazing customer service! I had an issue with my order and they resolved it immediately. Will definitely shop here again."
                },
                {
                  name: "Alyssa K.",
                  rating: 4,
                  text: "Love that I can find all the trending TikTok products in one place without having to search all over the internet."
                }
              ].map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex text-orange mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5" fill={i < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <p className="text-softBlack/80 mb-4 italic">"{review.text}"</p>
                  <p className="font-medium">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
      <AiAssistant />
    </div>
  );
};

export default Trust;
