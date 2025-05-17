
import React from "react";
import { Truck, Shield, Package } from "lucide-react";

const WhyShopWithUs = () => {
  return (
    <section className="py-12 md:py-16 bg-softBlack text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 text-white">Why Shop With Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-white/70">Get your trending items delivered quickly with our express shipping options</p>
          </div>
          
          <div className="text-center">
            <div className="bg-mint/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-mint" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curated Products</h3>
            <p className="text-white/70">We handpick only the highest quality viral products that are actually worth it</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Support</h3>
            <p className="text-white/70">Our friendly team is here to help with any questions or concerns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShopWithUs;
