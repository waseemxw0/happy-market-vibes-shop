
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FilterSection = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(prev => prev.filter(f => f !== filter));
    } else {
      setActiveFilters(prev => [...prev, filter]);
    }
  };
  
  const clearFilters = () => {
    setActiveFilters([]);
  };
  
  return (
    <section className="py-6 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Filter Products</h3>
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                label="Under $25" 
                active={activeFilters.includes("under25")} 
                onClick={() => toggleFilter("under25")} 
              />
              <FilterButton 
                label="Viral Tech" 
                active={activeFilters.includes("viralTech")} 
                onClick={() => toggleFilter("viralTech")} 
              />
              <FilterButton 
                label="Must-Have Home" 
                active={activeFilters.includes("mustHaveHome")} 
                onClick={() => toggleFilter("mustHaveHome")} 
              />
              <FilterButton 
                label="Weird But Genius" 
                active={activeFilters.includes("weirdButGenius")} 
                onClick={() => toggleFilter("weirdButGenius")} 
              />
              <FilterButton 
                label="TikTok Beauty" 
                active={activeFilters.includes("tikTokBeauty")} 
                onClick={() => toggleFilter("tikTokBeauty")} 
              />
            </div>
          </div>
          
          {activeFilters.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-softBlack/70 hover:text-softBlack"
            >
              Clear All
            </Button>
          )}
        </div>
        
        {activeFilters.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-softBlack/70">Active filters:</span>
            {activeFilters.includes("under25") && (
              <Badge className="bg-orange/20 text-orange hover:bg-orange/30">
                Under $25
              </Badge>
            )}
            {activeFilters.includes("viralTech") && (
              <Badge className="bg-orange/20 text-orange hover:bg-orange/30">
                Viral Tech
              </Badge>
            )}
            {activeFilters.includes("mustHaveHome") && (
              <Badge className="bg-orange/20 text-orange hover:bg-orange/30">
                Must-Have Home
              </Badge>
            )}
            {activeFilters.includes("weirdButGenius") && (
              <Badge className="bg-orange/20 text-orange hover:bg-orange/30">
                Weird But Genius
              </Badge>
            )}
            {activeFilters.includes("tikTokBeauty") && (
              <Badge className="bg-orange/20 text-orange hover:bg-orange/30">
                TikTok Beauty
              </Badge>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, active, onClick }: FilterButtonProps) => {
  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={`rounded-full text-sm ${
        active 
          ? "bg-orange text-white hover:bg-orange/90" 
          : "border-gray-200 text-softBlack/70 hover:bg-orange/10 hover:text-orange hover:border-orange/30"
      }`}
    >
      {label}
    </Button>
  );
};

export default FilterSection;
