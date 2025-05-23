import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";
import TikTokIcon from "./icons/TikTokIcon";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">The Happy Market</h3>
            <p className="text-softBlack/70 mb-4">
              Your one-stop shop for trending products that spark joy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-softBlack hover:text-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-softBlack hover:text-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-softBlack hover:text-orange transition-colors">
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-softBlack hover:text-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-softBlack/70 hover:text-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-softBlack/70 hover:text-orange transition-colors">Shop All</a></li>
              <li><a href="#" className="text-softBlack/70 hover:text-orange transition-colors">Trending Now</a></li>
              <li><a href="#" className="text-softBlack/70 hover:text-orange transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-softBlack/70 hover:text-orange transition-colors">FAQ</a></li>
              <li><a href="#" className="text-softBlack/70 hover:text-orange transition-colors">Shipping</a></li>
              <li><a href="#" className="text-softBlack/70 hover:text-orange transition-colors">Returns</a></li>
              <li><a href="#" className="text-softBlack/70 hover:text-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-softBlack/70">
              <li>hello@thehappymarket.com</li>
              <li>1-800-HAPPY-SHOP</li>
              <li>123 Happy Street</li>
              <li>Viral City, TK 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-softBlack/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} The Happy Market. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-softBlack/60">
            <a href="#" className="hover:text-orange transition-colors">Terms</a>
            <a href="#" className="hover:text-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
