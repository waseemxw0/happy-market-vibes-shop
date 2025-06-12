
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Truck, RefreshCw, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-10 md:py-16">
          {/* Header */}
          <div className="mb-8">
            <Link to="/trust" className="inline-flex items-center gap-2 text-orange hover:text-orange/80 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Trust & Safety
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Returns & Exchanges</h1>
            <p className="text-softBlack/70 text-lg max-w-3xl">
              We want you to love every purchase! If you're not completely satisfied, we make returns and exchanges easy.
            </p>
          </div>

          {/* Return Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-orange/5 rounded-xl">
              <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-6 w-6 text-orange" />
              </div>
              <h3 className="font-bold mb-2">1. Request Return</h3>
              <p className="text-sm text-softBlack/70">Start your return request online or contact our support team</p>
            </div>
            
            <div className="text-center p-6 bg-orange/5 rounded-xl">
              <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-orange" />
              </div>
              <h3 className="font-bold mb-2">2. Ship It Back</h3>
              <p className="text-sm text-softBlack/70">Use our prepaid return label to send your item back to us</p>
            </div>
            
            <div className="text-center p-6 bg-orange/5 rounded-xl">
              <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-6 w-6 text-orange" />
              </div>
              <h3 className="font-bold mb-2">3. We Process</h3>
              <p className="text-sm text-softBlack/70">We'll inspect your return and process your refund or exchange</p>
            </div>
            
            <div className="text-center p-6 bg-orange/5 rounded-xl">
              <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-orange" />
              </div>
              <h3 className="font-bold mb-2">4. Complete</h3>
              <p className="text-sm text-softBlack/70">Receive your refund or exchange within 5-7 business days</p>
            </div>
          </div>

          {/* Return Policy Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange">Return Policy</h2>
              <ul className="space-y-3 text-softBlack/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>30-day return window from delivery date</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Items must be unused and in original packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Free return shipping on defective items</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Refunds processed within 5-7 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Original payment method refund preferred</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange">Exchange Policy</h2>
              <ul className="space-y-3 text-softBlack/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Free exchanges for different sizes/colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Subject to availability of requested item</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Faster processing than returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Same 30-day window applies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>New item ships as soon as we receive yours</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange/10 to-mint/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need to Start a Return?</h2>
            <p className="text-softBlack/70 mb-6 max-w-2xl mx-auto">
              Our customer service team is here to help make your return process as smooth as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/account">
                <Button className="bg-orange hover:bg-orange/90 text-white rounded-xl px-8">
                  Start Return Request
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="rounded-xl px-8">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnsPage;
