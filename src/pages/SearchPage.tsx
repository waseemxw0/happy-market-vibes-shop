
import React, { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-softBlack mb-4">Search Products</h1>
            
            <div className="relative">
              <input 
                type="search" 
                placeholder="Search for trending products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 px-6 pr-16 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white shadow-sm text-lg"
              />
              <Search className="absolute right-6 top-4 h-6 w-6 text-gray-400" />
            </div>
            
            <div className="flex gap-3 mt-4">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm" className="rounded-full">
                  Electronics
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Beauty
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Home & Garden
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Trending
                </Button>
              </div>
            </div>
          </div>

          {showFilters && (
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-softBlack">Filters</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-softBlack mb-2">Price Range</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Under $25</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$25 - $50</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$50 - $100</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Over $100</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-softBlack mb-2">Rating</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">4+ Stars</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">3+ Stars</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-softBlack mb-2">Availability</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">In Stock</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Free Shipping</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-softBlack mb-2">Start searching</h3>
            <p className="text-softBlack/70">Enter a keyword to find trending products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
