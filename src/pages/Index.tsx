
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import WhyShopWithUs from "@/components/WhyShopWithUs";
import TrendingSection from "@/components/TrendingSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import { categoryData } from "@/components/CategoryData";
import FilterSection from "@/components/FilterSection";
import TrendingCountdownSection from "@/components/TrendingCountdownSection";
import CommunitySection from "@/components/CommunitySection";
import MobileNav from "@/components/MobileNav";
import GiftFinder from "@/components/GiftFinder";
import { useToast } from "@/hooks/use-toast";
import DailyDrop from "@/components/DailyDrop";
import AiAssistant from "@/components/AiAssistant";
import SocialProofBubble from "@/components/SocialProofBubble";
import { Link } from "react-router-dom";
import TikTokBrainAI from "@/components/TikTokBrainAI";
import VoiceShoppingGenie from "@/components/VoiceShoppingGenie";
import { Button } from "@/components/ui/button";
import LoyaltyProgram from "@/components/LoyaltyProgram";

const Index = () => {
  const { toast } = useToast();
  const [showDiscount, setShowDiscount] = useState(false);
  const [showVoiceGenie, setShowVoiceGenie] = useState(false);
  
  // Social proof messages
  const socialProofMessages = [
    "Michelle from New York just purchased Cloud LED Light",
    "James from Chicago added 3D Moon Lamp to cart",
    "Over 200 people viewing trending products now",
    "Sarah from Miami just bought the Galaxy Projector",
    "The Smart Plant Monitor is selling fast: 14 sold in last hour"
  ];
  
  useEffect(() => {
    // Show discount popup after 5 seconds
    const timer = setTimeout(() => {
      setShowDiscount(true);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  const handleCloseDiscount = () => {
    setShowDiscount(false);
  };
  
  const handleClaimDiscount = () => {
    setShowDiscount(false);
    toast({
      title: "Discount Applied!",
      description: "10% off your first order",
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  const handleShowVoiceGenie = () => {
    setShowVoiceGenie(true);
    
    // Scroll to the voice genie component
    setTimeout(() => {
      const voiceGenieElement = document.getElementById('voice-genie');
      if (voiceGenieElement) {
        voiceGenieElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <HeroSection />
        
        <FilterSection />
        
        <div id="daily-drop">
          <DailyDrop />
        </div>
        
        {/* TikTok Brain AI */}
        <div className="container mx-auto px-4 py-6">
          <TikTokBrainAI />
        </div>
        
        {/* Voice Shopping Genie */}
        {showVoiceGenie && (
          <div id="voice-genie" className="container mx-auto px-4 py-6">
            <VoiceShoppingGenie />
          </div>
        )}
        
        {/* Voice Genie Prompt Button (if not showing) */}
        {!showVoiceGenie && (
          <div className="container mx-auto px-4 py-6 flex justify-center">
            <button 
              onClick={handleShowVoiceGenie}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange/20 to-mint/20 rounded-full text-sm text-softBlack font-medium hover:from-orange/30 hover:to-mint/30 transition-colors animate-pulse"
            >
              <span className="w-3 h-3 bg-orange rounded-full"></span>
              <span>Ask our AI Shopping Genie what you're looking for</span>
              <span className="w-3 h-3 bg-mint rounded-full"></span>
            </button>
          </div>
        )}
        
        {/* Product categories */}
        <div className="py-16 md:py-20" data-section="categories">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-softBlack tracking-tight">Shop By Category</h2>
            <p className="text-softBlack/70 text-center mb-10 max-w-xl mx-auto">Find exactly what you're looking for with our curated collections</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {Object.entries(categoryData).map(([key, category], index) => (
                <Link 
                  key={index} 
                  to={`/collection/${key}`}
                  className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center group"
                  style={{ borderTop: `4px solid ${category.color}` }}
                >
                  <div 
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" 
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <div 
                      className="w-6 h-6" 
                      style={{ backgroundColor: category.color, borderRadius: "0.5rem" }}
                    ></div>
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: category.color }}>{category.title}</h3>
                  <p className="text-xs text-softBlack/60 line-clamp-2">{category.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <TrendingCountdownSection />
        
        <TrendingSection />
        
        <CategorySection 
          title={categoryData.ecoGadgets.title} 
          subtitle={categoryData.ecoGadgets.subtitle} 
          color={categoryData.ecoGadgets.color}
          categoryKey="ecoGadgets" 
          products={categoryData.ecoGadgets.products}
        />
        
        <CategorySection 
          title={categoryData.techStyle.title} 
          subtitle={categoryData.techStyle.subtitle} 
          color={categoryData.techStyle.color}
          categoryKey="techStyle" 
          products={categoryData.techStyle.products}
        />
        
        <WhyShopWithUs />
        
        <CommunitySection />
        
        <CategorySection 
          title={categoryData.glowUp.title} 
          subtitle={categoryData.glowUp.subtitle} 
          color={categoryData.glowUp.color}
          categoryKey="glowUp" 
          products={categoryData.glowUp.products}
        />
        
        <CategorySection 
          title={categoryData.petStuff.title} 
          subtitle={categoryData.petStuff.subtitle} 
          color={categoryData.petStuff.color}
          categoryKey="petStuff" 
          products={categoryData.petStuff.products}
        />
        
        <ReviewsCarousel />
        
        <CategorySection 
          title={categoryData.roomVibes.title} 
          subtitle={categoryData.roomVibes.subtitle} 
          color={categoryData.roomVibes.color}
          categoryKey="roomVibes" 
          products={categoryData.roomVibes.products}
        />
        
        <CategorySection 
          title={categoryData.fitKit.title} 
          subtitle={categoryData.fitKit.subtitle} 
          color={categoryData.fitKit.color}
          categoryKey="fitKit" 
          products={categoryData.fitKit.products}
        />
        
        {/* Mystery Box Generator */}
        <div className="py-14 md:py-20 bg-gradient-to-br from-white to-orange/5">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange/10">
              <div className="p-6 md:p-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">🎁 Mystery TikTok Box</h2>
                <p className="text-softBlack/70 mb-8 max-w-2xl mx-auto">
                  Let our AI curate a surprise box of viral TikTok products just for you! You'll only see what's inside after purchase.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                  <div className="bg-orange/5 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">💝</div>
                    <h3 className="font-bold text-lg mb-1">Basic Box</h3>
                    <p className="text-orange font-semibold text-xl mb-2">$25</p>
                    <p className="text-sm text-softBlack/70 mb-4">3 surprise TikTok viral items</p>
                    <Button className="w-full bg-orange hover:bg-orange/90 text-white rounded-xl">
                      Get This Box
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-b from-orange/10 to-mint/10 rounded-xl p-6 text-center shadow-md relative border border-orange/20">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                    <div className="text-3xl mb-2">🌟</div>
                    <h3 className="font-bold text-lg mb-1">Premium Box</h3>
                    <p className="text-orange font-semibold text-xl mb-2">$50</p>
                    <p className="text-sm text-softBlack/70 mb-4">5 trending items + free shipping</p>
                    <Button className="w-full bg-gradient-to-r from-orange to-mint text-white hover:opacity-90 rounded-xl">
                      Get This Box
                    </Button>
                  </div>
                  
                  <div className="bg-orange/5 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">👑</div>
                    <h3 className="font-bold text-lg mb-1">Luxury Box</h3>
                    <p className="text-orange font-semibold text-xl mb-2">$100</p>
                    <p className="text-sm text-softBlack/70 mb-4">7 premium viral products</p>
                    <Button className="w-full bg-orange hover:bg-orange/90 text-white rounded-xl">
                      Get This Box
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-sm text-softBlack/70">
                  <span>⭐</span>
                  <span>Over 10,000 mystery boxes sold with 95% satisfaction rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Newsletter />
        <FloatingCart />
        <GiftFinder />
        <AiAssistant />
        <LoyaltyProgram />
        <SocialProofBubble messages={socialProofMessages} />
      </main>
      <Footer />
      
      {/* Discount Popup */}
      {showDiscount && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-scale-in">
            <button 
              className="absolute top-4 right-4 text-softBlack/50 hover:text-softBlack"
              onClick={handleCloseDiscount}
            >
              ✕
            </button>
            
            <div className="bg-orange/20 text-orange font-semibold text-sm px-3 py-1 rounded-full w-fit mx-auto mb-4">
              New Visitor Offer
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-2">WAIT! Get 10% OFF</h3>
            <p className="text-center text-softBlack/70 mb-6">
              Join thousands of TikTok shoppers and get a special discount on your first order!
            </p>
            
            <div className="bg-gradient-to-r from-orange/20 to-mint/20 p-6 rounded-xl text-center mb-6">
              <span className="text-4xl font-bold text-orange">10% OFF</span>
              <p className="text-sm text-softBlack/70 mt-2">Use code: TIKTOK10</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button 
                className="bg-orange text-white py-3 rounded-xl font-medium hover:bg-orange/90 transition-colors"
                onClick={handleClaimDiscount}
              >
                Claim My Discount
              </button>
              
              <button 
                className="text-softBlack/70 py-2 text-sm"
                onClick={handleCloseDiscount}
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
