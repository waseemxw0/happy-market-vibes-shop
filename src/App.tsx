
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";

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

// App layout wrapper to conditionally show MobileNav
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Don't show MobileNav on 404 page
  const showMobileNav = location.pathname !== "*";
  
  return (
    <>
      <Navbar />
      {children}
      {showMobileNav && <MobileNav />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Index />
                <MobileNav />
              </>
            } />
            
            <Route path="/collection/:category" element={
              <AppLayout>
                <CollectionPage />
              </AppLayout>
            } />
            
            <Route path="/product/:id" element={
              <AppLayout>
                <ProductPage />
              </AppLayout>
            } />
            
            <Route path="/tiktok-feed" element={
              <AppLayout>
                <TikTokFeed />
              </AppLayout>
            } />
            
            <Route path="/rewards" element={
              <AppLayout>
                <Rewards />
              </AppLayout>
            } />
            
            <Route path="/bundles" element={
              <AppLayout>
                <Bundles />
              </AppLayout>
            } />
            
            <Route path="/top10" element={
              <AppLayout>
                <Top10 />
              </AppLayout>
            } />
            
            <Route path="/about" element={
              <AppLayout>
                <About />
              </AppLayout>
            } />
            
            <Route path="/trust" element={
              <AppLayout>
                <Trust />
              </AppLayout>
            } />
            
            <Route path="/reviews" element={
              <AppLayout>
                <Reviews />
              </AppLayout>
            } />
            
            <Route path="/contact" element={
              <AppLayout>
                <Contact />
              </AppLayout>
            } />
            
            <Route path="/faq" element={
              <AppLayout>
                <FAQ />
              </AppLayout>
            } />
            
            <Route path="/drops" element={
              <AppLayout>
                <DropsPage />
              </AppLayout>
            } />
            
            <Route path="/wishlist" element={
              <AppLayout>
                <WishlistPage />
              </AppLayout>
            } />
            
            <Route path="/cart" element={
              <AppLayout>
                <CartPage />
              </AppLayout>
            } />
            
            <Route path="/shop" element={
              <AppLayout>
                <ShopAllPage />
              </AppLayout>
            } />
            
            <Route path="/new-arrivals" element={
              <AppLayout>
                <NewArrivalsPage />
              </AppLayout>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
