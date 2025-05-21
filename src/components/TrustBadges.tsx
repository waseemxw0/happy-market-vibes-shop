
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, RotateCcw, ThumbsUp } from "lucide-react";

const trustBadges = [
  {
    id: "secure",
    title: "Secure Checkout",
    description: "Your data is protected with SSL encryption",
    icon: ShieldCheck,
    color: "#E5DEFF",
    iconColor: "#6C5DD3"
  },
  {
    id: "returns",
    title: "30-Day Returns",
    description: "Shop with confidence, hassle-free returns",
    icon: RotateCcw,
    color: "#FEF7CD",
    iconColor: "#F4B400"
  },
  {
    id: "satisfaction",
    title: "100% Satisfaction",
    description: "Love it or we'll make it right",
    icon: ThumbsUp,
    color: "#FDE1D3",
    iconColor: "#E86C3A"
  }
];

const TrustBadges = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trustBadges.map((badge) => (
            <Card key={badge.id} className="border-0 overflow-hidden">
              <CardContent className="p-6 flex items-center">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mr-4 shrink-0"
                  style={{ backgroundColor: badge.color }}
                >
                  <badge.icon 
                    className="h-6 w-6" 
                    style={{ color: badge.iconColor }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{badge.title}</h3>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
