
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-softBlack/70 hover:text-orange">Shop All</Link></li>
              <li><Link to="/new-arrivals" className="text-sm text-softBlack/70 hover:text-orange">New Arrivals</Link></li>
              <li><Link to="/top10" className="text-sm text-softBlack/70 hover:text-orange">Top 10</Link></li>
              <li><Link to="/bundles" className="text-sm text-softBlack/70 hover:text-orange">Bundles</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-softBlack/70 hover:text-orange">Our Story</Link></li>
              <li><Link to="/trust" className="text-sm text-softBlack/70 hover:text-orange">Trust & Safety</Link></li>
              <li><Link to="/reviews" className="text-sm text-softBlack/70 hover:text-orange">Reviews</Link></li>
              <li><Link to="/contact" className="text-sm text-softBlack/70 hover:text-orange">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-softBlack/70 hover:text-orange">FAQ</Link></li>
              <li><Link to="#" className="text-sm text-softBlack/70 hover:text-orange">Shipping</Link></li>
              <li><Link to="#" className="text-sm text-softBlack/70 hover:text-orange">Returns</Link></li>
              <li><Link to="#" className="text-sm text-softBlack/70 hover:text-orange">Track Order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm text-softBlack/70 hover:text-orange">TikTok</Link></li>
              <li><Link to="#" className="text-sm text-softBlack/70 hover:text-orange">Instagram</Link></li>
              <li><Link to="#" className="text-sm text-softBlack/70 hover:text-orange">Twitter</Link></li>
              <li><Link to="#" className="text-sm text-softBlack/70 hover:text-orange">Facebook</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-softBlack/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Trendora. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Link to="#" className="text-xs text-softBlack/60 hover:text-orange">Privacy Policy</Link>
            <Link to="#" className="text-xs text-softBlack/60 hover:text-orange">Terms of Service</Link>
            <Link to="#" className="text-xs text-softBlack/60 hover:text-orange">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
