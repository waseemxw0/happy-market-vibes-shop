
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const orders = [
    {
      id: "#12347",
      date: "2024-01-20",
      status: "processing",
      total: "$89.99",
      items: [
        { name: "LED Cloud Light", image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d", price: "$45.99" },
        { name: "Phone Ring Holder", image: "https://images.unsplash.com/photo-1567461220746-b55d84a4e3ce", price: "$12.99" }
      ]
    },
    {
      id: "#12346",
      date: "2024-01-18",
      status: "shipping",
      total: "$124.50",
      items: [
        { name: "Wireless Earbuds", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df", price: "$89.99" },
        { name: "Portable Charger", image: "https://images.unsplash.com/photo-1609592864588-d47e4715c1ba", price: "$34.51" }
      ]
    },
    {
      id: "#12345",
      date: "2024-01-15",
      status: "delivered",
      total: "$67.99",
      items: [
        { name: "Smart Water Bottle", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", price: "$67.99" }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "shipping":
        return <Truck className="h-4 w-4 text-orange" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-mint" />;
      default:
        return <Package className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "text-blue-500 bg-blue-50";
      case "shipping":
        return "text-orange bg-orange/10";
      case "delivered":
        return "text-mint bg-mint/10";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-softBlack mb-2">My Orders</h1>
            <p className="text-softBlack/70">Track and manage your recent purchases</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex gap-4 mb-6">
              <Button 
                variant={activeTab === "all" ? "default" : "outline"}
                onClick={() => setActiveTab("all")}
                className={activeTab === "all" ? "bg-orange hover:bg-orange/90" : ""}
              >
                All Orders
              </Button>
              <Button 
                variant={activeTab === "processing" ? "default" : "outline"}
                onClick={() => setActiveTab("processing")}
                className={activeTab === "processing" ? "bg-orange hover:bg-orange/90" : ""}
              >
                Processing
              </Button>
              <Button 
                variant={activeTab === "shipping" ? "default" : "outline"}
                onClick={() => setActiveTab("shipping")}
                className={activeTab === "shipping" ? "bg-orange hover:bg-orange/90" : ""}
              >
                Shipping
              </Button>
              <Button 
                variant={activeTab === "delivered" ? "default" : "outline"}
                onClick={() => setActiveTab("delivered")}
                className={activeTab === "delivered" ? "bg-orange hover:bg-orange/90" : ""}
              >
                Delivered
              </Button>
            </div>

            <div className="space-y-4">
              {orders
                .filter(order => activeTab === "all" || order.status === activeTab)
                .map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-softBlack">{order.id}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-softBlack/70">Ordered on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-softBlack">{order.total}</p>
                      <p className="text-sm text-softBlack/70">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-softBlack">{item.name}</p>
                          <p className="text-sm text-softBlack/70">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                    <Button variant="outline" size="sm">
                      Track Order
                    </Button>
                    {order.status === "delivered" && (
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Review
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {orders.filter(order => activeTab === "all" || order.status === activeTab).length === 0 && (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-softBlack mb-2">No orders found</h3>
                <p className="text-softBlack/70 mb-4">You haven't placed any orders in this category yet.</p>
                <Button className="bg-orange hover:bg-orange/90 text-white">
                  Start Shopping
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
