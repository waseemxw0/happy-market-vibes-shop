
import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";
import TikTokIcon from "./icons/TikTokIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Trendora</h3>
            <p className="text-softBlack/70 mb-4">
              Your one-stop shop for viral TikTok products that actually work.
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
              <li><Link to="/about" className="text-softBlack/70 hover:text-orange transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="text-softBlack/70 hover:text-orange transition-colors">Shop All</Link></li>
              <li><Link to="/new-arrivals" className="text-softBlack/70 hover:text-orange transition-colors">New Arrivals</Link></li>
              <li><Link to="/bundles" className="text-softBlack/70 hover:text-orange transition-colors">Gift Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-softBlack/70 hover:text-orange transition-colors">FAQ</Link></li>
              <li><Link to="/trust" className="text-softBlack/70 hover:text-orange transition-colors">Shipping</Link></li>
              <li><Link to="/trust" className="text-softBlack/70 hover:text-orange transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="text-softBlack/70 hover:text-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-softBlack/70">
              <li>hello@trendora.com</li>
              <li>1-800-TRENDING</li>
              <li>123 Viral Street</li>
              <li>TikTok City, TC 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-softBlack/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Trendora. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-softBlack/60">
            <Link to="/trust" className="hover:text-orange transition-colors">Terms</Link>
            <Link to="/trust" className="hover:text-orange transition-colors">Privacy</Link>
            <Link to="/trust" className="hover:text-orange transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
