
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialProofBubbleProps {
  messages: string[];
}

const SocialProofBubble = ({ messages }: SocialProofBubbleProps) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show a new message every 5 seconds
    const messageInterval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(messageInterval);
  }, [messages.length]);

  return (
    <div className="fixed bottom-24 left-4 z-40 max-w-[250px] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-3 border border-gray-100"
          >
            <p className="text-xs text-softBlack/80">{messages[currentMessage]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialProofBubble;
