
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cube, X, Camera, Smartphone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface AugmentedRealityPreviewProps {
  productImage: string;
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}

const AugmentedRealityPreview = ({
  productImage,
  productName,
  isOpen,
  onClose
}: AugmentedRealityPreviewProps) => {
  const [step, setStep] = useState<'intro' | 'scan' | 'preview'>('intro');
  const { toast } = useToast();
  
  const handleStartAR = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setStep('scan');
      
      // Simulate AR scanning
      setTimeout(() => {
        setStep('preview');
      }, 2000);
    } else {
      toast({
        title: "Camera Access Required",
        description: "Please allow camera access to use AR preview",
        className: "bg-red-500 text-white"
      });
    }
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-hidden relative">
        <button 
          className="absolute right-4 top-4 text-softBlack/60 hover:text-softBlack z-10"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        
        {step === 'intro' && (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cube className="h-8 w-8 text-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">See {productName} in your space</h3>
            <p className="text-softBlack/70 mb-6">
              Use your camera to see how this product will look in your home before buying
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                className="bg-orange hover:bg-orange/90 text-white w-full gap-2"
                onClick={handleStartAR}
              >
                <Camera className="h-4 w-4" />
                Try in AR
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-orange/20 text-orange hover:bg-orange/5"
                onClick={onClose}
              >
                Maybe Later
              </Button>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center justify-center gap-2 text-xs text-softBlack/60">
                <Smartphone className="h-3 w-3" />
                <span>Compatible with most devices</span>
              </div>
            </div>
          </div>
        )}
        
        {step === 'scan' && (
          <div className="flex flex-col h-[70vh]">
            <div className="bg-black h-full relative">
              {/* Simulated camera view */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 flex items-center justify-center">
                <div className="w-40 h-40 border-2 border-white/50 rounded-lg relative animate-pulse">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center text-white">
                <p className="text-sm">
                  Point your camera at a flat surface
                </p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
        
        {step === 'preview' && (
          <div className="flex flex-col h-[70vh]">
            <div className="bg-black h-full relative">
              {/* Simulated AR view */}
              <img 
                src={productImage} 
                alt={productName}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-contain" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    className="text-white bg-white/10 hover:bg-white/20"
                    onClick={() => setStep('intro')}
                  >
                    Restart
                  </Button>
                  <Button 
                    className="bg-orange hover:bg-orange/90 text-white gap-1"
                    onClick={onClose}
                  >
                    Add to Cart
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AugmentedRealityPreview;
