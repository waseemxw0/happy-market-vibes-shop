
import React, { useState } from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import ProductCardEnhanced from "@/components/ProductCardEnhanced";
import { Button } from "@/components/ui/button";
import { Filter, Grid3X3, List, ShoppingBag, Heart, SlidersHorizontal, ChevronDown } from "lucide-react";
import { categoryData } from "@/components/CategoryData";

const ShopAllPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  // Combine all products from all categories
  const allProducts = Object.values(categoryData).flatMap(category => 
    category.products.map(product => ({
      ...product,
      category: category.title
    }))
  );
  
  return (
    <LayoutWrapper>
      <div className="bg-gray-50 py-8 mb-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Shop All Products</h1>
            <p className="text-softBlack/70 mt-2">Browse our complete collection of viral TikTok products</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar (hidden on mobile) */}
            <div className={`md:w-64 md:block ${filtersVisible ? 'block' : 'hidden'}`}>
              <div className="p-4 border border-gray-200 rounded-2xl sticky top-4">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {Object.values(categoryData).map((category, index) => (
                      <div key={index} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`category-${index}`} 
                          className="rounded text-orange focus:ring-orange"
                        />
                        <label htmlFor={`category-${index}`} className="ml-2 text-sm">
                          {category.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Min" 
                      className="w-full p-2 text-sm border border-gray-200 rounded-lg"
                    />
                    <span className="text-gray-400">-</span>
                    <input 
                      type="text" 
                      placeholder="Max" 
                      className="w-full p-2 text-sm border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">TikTok Popularity</h3>
                  <div className="space-y-2">
                    {["Trending Now", "Most Viewed", "Highly Rated", "Staff Picks"].map((option, index) => (
                      <div key={index} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`popularity-${index}`} 
                          className="rounded text-orange focus:ring-orange"
                        />
                        <label htmlFor={`popularity-${index}`} className="ml-2 text-sm">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-orange hover:bg-orange/90 text-white rounded-xl">
                  Apply Filters
                </Button>
              </div>
            </div>
            
            <div className="flex-1">
              {/* Mobile filter controls */}
              <div className="flex items-center justify-between mb-4 md:hidden">
                <Button 
                  variant="outline" 
                  className="border-gray-200 rounded-xl flex items-center gap-2"
                  onClick={() => setFiltersVisible(!filtersVisible)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                
                <Button variant="outline" className="border-gray-200 rounded-xl flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Sort
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Desktop controls */}
              <div className="hidden md:flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-softBlack/70">
                    Showing {allProducts.length} products
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Sort by:</span>
                    <select className="border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange">
                      <option>Featured</option>
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Most Popular</option>
                    </select>
                  </div>
                  
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className={`p-2 ${viewMode === 'grid' ? 'bg-orange text-white' : 'bg-white text-softBlack'}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3X3 className="h-5 w-5" />
                    </button>
                    <button
                      className={`p-2 ${viewMode === 'list' ? 'bg-orange text-white' : 'bg-white text-softBlack'}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product grid */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {allProducts.map((product, index) => (
                    <ProductCardEnhanced 
                      key={index}
                      {...product}
                      specialBadge={index === 0 ? "Best Seller" : (index === 1 ? "TikTok Famous" : undefined)}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {allProducts.map((product, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4 flex gap-4">
                      <div className="w-36 h-36 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{product.name}</h3>
                        <p className="text-orange font-medium mt-1">{product.price}</p>
                        <p className="text-softBlack/70 text-sm mt-2 line-clamp-2">
                          {product.category} - The viral TikTok product everyone is talking about. Seen in over 2M videos.
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" className="bg-orange hover:bg-orange/90 text-white rounded-xl flex items-center gap-1">
                            <ShoppingBag className="h-4 w-4" />
                            Add to Cart
                          </Button>
                          <Button size="sm" variant="outline" className="rounded-xl">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map(page => (
                    <Button 
                      key={page} 
                      variant={page === 1 ? "default" : "outline"} 
                      className={page === 1 ? "bg-orange hover:bg-orange/90 text-white" : "border-gray-200"} 
                      size="sm"
                    >
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" className="border-gray-200" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </LayoutWrapper>
  );
};

export default ShopAllPage;
