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
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [showDiscount, setShowDiscount] = useState(false);
  const [showVoiceGenie, setShowVoiceGenie] = useState(false);
  const { addToCart } = useCart();
  
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
  
  const handleMysteryBoxPurchase = (boxType: string, price: number) => {
    addToCart({
      id: `mystery-box-${boxType.toLowerCase()}`,
      name: `Mystery TikTok Box - ${boxType}`,
      price: price,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop"
    });
    
    toast({
      title: "Mystery Box Added!",
      description: `${boxType} Mystery Box added to cart - surprise awaits!`,
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col luxury-gradient">
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
        
        {/* Enhanced Voice Genie Prompt Button */}
        {!showVoiceGenie && (
          <div className="container mx-auto px-4 py-8 flex justify-center">
            <button 
              onClick={handleShowVoiceGenie}
              className="group flex items-center gap-3 px-8 py-4 glass-effect rounded-full text-softBlack font-semibold hover:bg-white/40 transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow"
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gradient-to-r from-orange to-mint rounded-full animate-pulse"></span>
                <span className="text-lg">Ask our AI Shopping Genie</span>
                <span className="w-3 h-3 bg-gradient-to-r from-mint to-orange rounded-full animate-pulse"></span>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        )}
        
        {/* Enhanced Product categories */}
        <div className="py-20 md:py-24 luxury-gradient" data-section="categories">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Shop By Category</h2>
              <p className="text-xl text-softBlack/70 max-w-2xl mx-auto font-medium">
                Discover curated collections of viral TikTok products, handpicked by our experts
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.entries(categoryData).map(([key, category], index) => (
                <Link 
                  key={index} 
                  to={`/collection/${key}`}
                  className="category-card text-center group hover-lift"
                  style={{ 
                    borderTop: `4px solid ${category.color}`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" 
                    style={{ 
                      background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`
                    }}
                  >
                    <div 
                      className="w-8 h-8 rounded-xl shadow-md" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:scale-105 transition-transform duration-300" style={{ color: category.color }}>
                    {category.title}
                  </h3>
                  <p className="text-sm text-softBlack/60 line-clamp-2 group-hover:text-softBlack/80 transition-colors duration-300">
                    {category.subtitle}
                  </p>
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
        
        {/* Enhanced Mystery Box Generator */}
        <div className="py-20 md:py-24 bg-gradient-to-br from-white via-orange/5 to-mint/5">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl shadow-2xl overflow-hidden border border-white/30">
              <div className="p-8 md:p-16 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange/20 to-mint/20 rounded-full text-sm font-semibold text-softBlack mb-6">
                  ✨ Limited Time Offer
                </div>
                <h2 className="section-title mb-6">🎁 Mystery TikTok Box</h2>
                <p className="text-xl text-softBlack/70 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                  Let our AI curate a surprise box of viral TikTok products just for you! 
                  <span className="block mt-2 text-orange font-semibold">
                    You'll only see what's inside after purchase - it's a surprise! 🎉
                  </span>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                  <div className="glass-effect rounded-2xl p-8 text-center hover-lift group shadow-xl">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💝</div>
                    <h3 className="font-bold text-xl mb-2 font-playfair">Basic Box</h3>
                    <p className="text-orange font-bold text-3xl mb-3">$25</p>
                    <p className="text-sm text-softBlack/70 mb-6">3 surprise viral items</p>
                    <Button 
                      className="btn-primary w-full"
                      onClick={() => handleMysteryBoxPurchase("Basic", 25)}
                    >
                      Get This Box
                    </Button>
                  </div>
                  
                  <div className="glass-effect rounded-2xl p-8 text-center hover-lift group shadow-2xl relative border-2 border-orange/30">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange to-mint text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                    <h3 className="font-bold text-xl mb-2 font-playfair">Premium Box</h3>
                    <p className="text-orange font-bold text-3xl mb-3">$50</p>
                    <p className="text-sm text-softBlack/70 mb-6">5 trending items + free shipping</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-orange via-orange-500 to-mint text-white hover:opacity-90 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => handleMysteryBoxPurchase("Premium", 50)}
                    >
                      Get This Box
                    </Button>
                  </div>
                  
                  <div className="glass-effect rounded-2xl p-8 text-center hover-lift group shadow-xl">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👑</div>
                    <h3 className="font-bold text-xl mb-2 font-playfair">Luxury Box</h3>
                    <p className="text-orange font-bold text-3xl mb-3">$100</p>
                    <p className="text-sm text-softBlack/70 mb-6">7 premium viral products</p>
                    <Button 
                      className="btn-primary w-full"
                      onClick={() => handleMysteryBoxPurchase("Luxury", 100)}
                    >
                      Get This Box
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 text-softBlack/70 font-medium">
                  <span className="text-xl">⭐</span>
                  <span>Over 10,000 mystery boxes sold with 95% satisfaction rate</span>
                  <span className="text-xl">⭐</span>
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
      
      {/* Enhanced Discount Popup */}
      {showDiscount && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-3xl max-w-md w-full p-8 relative animate-bounce-in shadow-2xl border border-white/30">
            <button 
              className="absolute top-4 right-4 text-softBlack/50 hover:text-softBlack transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
              onClick={handleCloseDiscount}
            >
              ✕
            </button>
            
            <div className="bg-gradient-to-r from-orange/20 to-mint/20 text-orange font-bold text-sm px-4 py-2 rounded-full w-fit mx-auto mb-6 shadow-lg">
              🎉 New Visitor Offer
            </div>
            
            <h3 className="text-3xl font-bold text-center mb-3 font-playfair">WAIT! Get 10% OFF</h3>
            <p className="text-center text-softBlack/70 mb-8 font-medium">
              Join thousands of TikTok shoppers and get a special discount on your first order!
            </p>
            
            <div className="bg-gradient-to-r from-orange/20 via-mint/20 to-orange/20 p-8 rounded-2xl text-center mb-8 shadow-inner">
              <span className="text-5xl font-bold text-luxury block mb-2">10% OFF</span>
              <p className="text-softBlack/70 font-semibold">Use code: <span className="text-orange font-bold">TIKTOK10</span></p>
            </div>
            
            <div className="flex flex-col gap-4">
              <button 
                className="btn-primary w-full py-4 text-lg font-bold"
                onClick={handleClaimDiscount}
              >
                Claim My Discount 🎉
              </button>
              
              <button 
                className="text-softBlack/70 py-2 text-sm hover:text-softBlack transition-colors"
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
