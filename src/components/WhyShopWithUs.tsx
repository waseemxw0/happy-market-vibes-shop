
import React from "react";
import { Truck, Shield, Package } from "lucide-react";

const WhyShopWithUs = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-softBlack to-softBlack/95 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white tracking-tight">Why Shop With Trendora</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-orange/30 to-orange/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-orange/20 transition-all duration-300">
              <Truck className="h-10 w-10 text-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast U.S. Shipping</h3>
            <p className="text-white/70 max-w-xs mx-auto">Get your trending items delivered quickly with our express shipping options</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-mint/30 to-mint/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-mint/20 transition-all duration-300">
              <Package className="h-10 w-10 text-mint" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Curated Only</h3>
            <p className="text-white/70 max-w-xs mx-auto">We handpick only the highest quality viral products that are actually worth it</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-orange/30 to-orange/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-orange/20 transition-all duration-300">
              <Shield className="h-10 w-10 text-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real Support</h3>
            <p className="text-white/70 max-w-xs mx-auto">Our friendly team is here to help with any questions or concerns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShopWithUs;
