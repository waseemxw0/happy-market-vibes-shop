
import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutWrapperProps {
  children: ReactNode;
  hideFooter?: boolean;
}

// This component will wrap all pages with common layout elements
const LayoutWrapper = ({ children, hideFooter = false }: LayoutWrapperProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pb-[var(--main-bottom-padding)]">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default LayoutWrapper;
