
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import AiAssistant from "@/components/AiAssistant";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="bg-gradient-to-r from-white to-orange/5 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-softBlack tracking-tight">Contact Us</h1>
            <p className="text-softBlack/70 max-w-xl mb-6">
              Have questions about your order or our viral products? We're here to help!
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-full text-orange">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-softBlack/70 mb-1">For general inquiries and support</p>
                    <a href="mailto:hello@trendora.com" className="text-orange hover:underline">hello@trendora.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-full text-orange">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-softBlack/70 mb-1">Monday-Friday, 9am-5pm EST</p>
                    <a href="tel:+1800555123" className="text-orange hover:underline">+1 (800) 555-1234</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-full text-orange">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-softBlack/70">
                      123 TikTok Avenue<br />
                      Suite 456<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                <div className="flex gap-4">
                  <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-black/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692A6.33 6.33 0 0 0 10.294 16a6.337 6.337 0 0 0 5.116-2.57 6.3 6.3 0 0 0 1.616-4.234V7.865c1.359.77 2.912 1.2 4.554 1.2V5.604a4.801 4.801 0 0 1-1.991 1.082Z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1DA1F2]/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#FFDC80] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-softBlack mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/30" 
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-softBlack mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/30" 
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-softBlack mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/30" 
                    placeholder="Enter message subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-softBlack mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/30" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-orange hover:bg-orange/90 text-white py-3 rounded-xl">
                  Send Message
                </Button>
              </form>
              
              <p className="text-xs text-center text-softBlack/60 mt-6">
                We typically respond within 24 hours to all inquiries.
              </p>
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

export default Contact;
