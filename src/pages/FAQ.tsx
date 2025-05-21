import React from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import AiAssistant from "@/components/AiAssistant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              How do you select your products?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              We carefully monitor TikTok trends and viral products, selecting only items that meet our quality standards. Each product is personally tested by our team before being added to the store. We look for innovation, practicality, and that special "wow factor" that makes products go viral.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              What are your shipping times?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              We ship to most U.S. locations within 3-5 business days. International shipping typically takes 7-14 business days depending on the destination country. Express shipping options are available at checkout for faster delivery times.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              We offer a 30-day satisfaction guarantee on all products. If you're not completely satisfied, you can return unused items in their original packaging for a full refund or exchange. Simply contact our customer service team to initiate the return process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              How does the rewards program work?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              Our rewards program lets you earn points with every purchase and activity. Buying products earns 10 points per dollar spent, sharing products on social media earns 5 points, and leaving reviews earns 15 points. Points can be redeemed for discounts, exclusive products, or early access to new releases.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              Are your products the same as seen on TikTok?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              Yes! We source authentic products featured in viral TikTok videos. We verify suppliers and test products to ensure they match what you've seen online. Our product pages include links to the original TikTok videos so you can see them in action.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are securely processed and your financial information is never stored on our servers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              How do I track my order?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              Once your order ships, you'll receive an email with tracking information. You can also log into your account on our website to view order status and tracking details. Our system provides real-time updates on your package's journey to your doorstep.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              Do you ship internationally?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any import duties or taxes that may apply according to their country's regulations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              What is the Daily Drop?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              Our Daily Drop is a special daily release of a trending product at 9AM EST. These items are often limited in quantity and feature special pricing. You can sign up for Daily Drop notifications to be the first to know when new products are released.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border rounded-xl px-5 shadow-sm">
            <AccordionTrigger className="text-left font-medium py-4">
              How can I become a TikTok affiliate for Trendora?
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-softBlack/70">
              We're always looking for TikTok creators to partner with! If you have an engaged audience and love our products, contact us at partners@trendora.com with your TikTok handle and engagement metrics. Approved affiliates earn commission on sales and receive free products to review.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <AiAssistant />
    </LayoutWrapper>
  );
};

export default FAQ;
