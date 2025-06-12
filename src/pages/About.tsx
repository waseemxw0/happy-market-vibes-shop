import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle, Users, Star, Package, Clock, RotateCcw, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import AiAssistant from "@/components/AiAssistant";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-white to-orange/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Logo className="mx-auto mb-6" />
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-softBlack">The Story Behind Trendora</h1>
              <p className="text-softBlack/70 text-lg mb-8">
                We curate the most viral TikTok products so you don't have to scroll endlessly to find what's worth buying.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our mission */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop" 
                  alt="Our mission" 
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-softBlack/70 mb-6">
                  In a world of endless scrolling and fleeting trends, we founded Trendora with a simple mission: to help you discover the products that are actually worth your attention and money.
                </p>
                <p className="text-softBlack/70 mb-6">
                  We carefully evaluate every viral TikTok product to ensure it lives up to the hype. Our team tests each item, reads thousands of reviews, and only brings you the best of the best — products that are genuinely useful, well-made, and deliver on their promises.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: <TrendingUp className="h-5 w-5" />, text: "Discover only what's truly trending" },
                    { icon: <CheckCircle className="h-5 w-5" />, text: "Every product is quality-verified" },
                    { icon: <Users className="h-5 w-5" />, text: "Community-driven recommendations" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <p className="font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How we curate */}
        <div className="py-16 md:py-24 bg-gradient-to-r from-mint/10 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Curate</h2>
              <p className="text-softBlack/70">
                Our rigorous selection process ensures you only see products that truly deserve your attention.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Track TikTok Trends",
                  description: "Our team monitors TikTok constantly to identify products that are genuinely going viral across the platform."
                },
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "Quality Test",
                  description: "We personally test each product or analyze thousands of verified reviews to ensure it lives up to the hype."
                },
                {
                  icon: <Package className="h-8 w-8" />,
                  title: "Curate & Share",
                  description: "Only the best products that pass our quality standards make it to the Trendora collection."
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="h-16 w-16 rounded-xl bg-orange/20 text-orange flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-softBlack/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Our values */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-softBlack/70">
                These core principles guide everything we do at Trendora.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Quality Over Quantity",
                  description: "We'd rather offer fewer excellent products than hundreds of mediocre ones."
                },
                {
                  title: "Transparency",
                  description: "We're honest about every product — the good, the bad, and everything in between."
                },
                {
                  title: "Customer Satisfaction",
                  description: "Your happiness is our priority. We stand behind every product we sell."
                },
                {
                  title: "Community",
                  description: "We value the power of social proof and real experiences from our customers."
                }
              ].map((value, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gray-50">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-softBlack/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Our guarantees */}
        <div className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Guarantees</h2>
              <p className="text-white/70">
                Shop with confidence knowing we stand behind every product.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Package className="h-8 w-8" />,
                  title: "Quality Promise",
                  description: "Every product meets our strict quality standards or it doesn't make the cut."
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Fast Shipping",
                  description: "Most orders ship within 24-48 hours for quick delivery."
                },
                {
                  icon: <RotateCcw className="h-8 w-8" />,
                  title: "30-Day Returns",
                  description: "Not satisfied? Return any item within 30 days, hassle-free."
                }
              ].map((guarantee, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="h-16 w-16 rounded-xl bg-orange text-white flex items-center justify-center mb-6">
                    {guarantee.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                  <p className="text-white/70">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Meet the team */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet the Team</h2>
              <p className="text-softBlack/70">
                The passionate people who bring Trendora to life every day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Founder & CEO",
                  image: "https://i.pravatar.cc/300?img=1",
                  bio: "Former TikTok trend analyst with a passion for discovering the next big thing."
                },
                {
                  name: "Michael Torres",
                  role: "Head of Curation",
                  image: "https://i.pravatar.cc/300?img=2",
                  bio: "Expert at separating genuine viral hits from short-lived trends."
                },
                {
                  name: "Aisha Johnson",
                  role: "Customer Experience",
                  image: "https://i.pravatar.cc/300?img=3",
                  bio: "Dedicated to making every Trendora shopping experience exceptional."
                },
                {
                  name: "David Kim",
                  role: "Product Tester",
                  image: "https://i.pravatar.cc/300?img=4",
                  bio: "Puts every product through rigorous real-world testing before it's approved."
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-orange font-medium mb-2">{member.role}</p>
                  <p className="text-softBlack/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="py-16 md:py-24 bg-gradient-to-r from-orange/10 to-mint/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to discover viral products that actually work?</h2>
              <p className="text-softBlack/70 mb-8">
                Join thousands of shoppers who trust Trendora to find the best TikTok products.
              </p>
              <Link to="/">
                <Button 
                  className="bg-orange hover:bg-orange/90 text-white rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  Shop Trending Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
      <AiAssistant />
    </div>
  );
};

export default About;
