
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import FloatingCart from "./components/FloatingCart";

// Eager load critical pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load non-critical pages for better performance
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const TikTokFeed = lazy(() => import("./pages/TikTokFeed"));
const Rewards = lazy(() => import("./pages/Rewards"));
const Bundles = lazy(() => import("./pages/Bundles"));
const Top10 = lazy(() => import("./pages/Top10"));
const About = lazy(() => import("./pages/About"));
const Trust = lazy(() => import("./pages/Trust"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const DropsPage = lazy(() => import("./pages/DropsPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ShopAllPage = lazy(() => import("./pages/ShopAllPage"));
const NewArrivalsPage = lazy(() => import("./pages/NewArrivalsPage"));

// Create loading fallback
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-12 w-12 rounded-full bg-orange/30 mb-4"></div>
      <div className="h-4 w-32 bg-gray-200 rounded"></div>
    </div>
  </div>
);

// Create a singleton query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  // Set CSS Variable for mobile navigation padding
  if (typeof window !== 'undefined') {
    document.documentElement.style.setProperty('--main-bottom-padding', '64px');
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoading />}>
            <div className="flex flex-col min-h-screen relative">
              {/* Desktop Navbar (hidden on mobile) */}
              <Navbar />
              
              <main className="flex-grow pb-[var(--main-bottom-padding)] md:pb-0">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/collection/:category" element={<CollectionPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/tiktok-feed" element={<TikTokFeed />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/bundles" element={<Bundles />} />
                  <Route path="/top10" element={<Top10 />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/trust" element={<Trust />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/drops" element={<DropsPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/shop" element={<ShopAllPage />} />
                  <Route path="/new-arrivals" element={<NewArrivalsPage />} />
                  
                  {/* Catch-all route for 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              
              {/* Mobile Navigation (hidden on desktop) */}
              <MobileNav />
              
              {/* Floating Cart (hidden on mobile) */}
              <FloatingCart className="fixed bottom-6 right-6 z-40" />
            </div>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
