
import React from "react";
import { Button } from "@/components/ui/button";
import { User, Settings, MapPin, CreditCard, Bell, Lock, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-orange" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-softBlack">John Doe</h1>
                <p className="text-softBlack/70">john.doe@example.com</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-mint/20 text-mint px-2 py-1 rounded-full text-xs font-medium">VIP Member</span>
                  <span className="text-orange text-sm">⭐ 1,250 points</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-softBlack mb-4">Account Settings</h2>
              
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-orange" />
                  <div className="flex-1">
                    <h3 className="font-medium text-softBlack">Personal Information</h3>
                    <p className="text-sm text-softBlack/70">Update your profile details</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-orange" />
                  <div className="flex-1">
                    <h3 className="font-medium text-softBlack">Addresses</h3>
                    <p className="text-sm text-softBlack/70">Manage shipping addresses</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-orange" />
                  <div className="flex-1">
                    <h3 className="font-medium text-softBlack">Payment Methods</h3>
                    <p className="text-sm text-softBlack/70">Manage cards and payment options</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-orange" />
                  <div className="flex-1">
                    <h3 className="font-medium text-softBlack">Notifications</h3>
                    <p className="text-sm text-softBlack/70">Email and push notification preferences</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-softBlack mb-4">Quick Actions</h2>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-softBlack mb-3">Recent Orders</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-softBlack/70">#12345</span>
                    <span className="text-sm font-medium text-mint">Delivered</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-softBlack/70">#12346</span>
                    <span className="text-sm font-medium text-orange">Shipping</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-softBlack/70">#12347</span>
                    <span className="text-sm font-medium text-blue-500">Processing</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-3" size="sm">
                  View All Orders
                </Button>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-softBlack mb-3">Loyalty Points</h3>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-orange mb-2">1,250</div>
                  <p className="text-sm text-softBlack/70 mb-3">Points available</p>
                  <Button className="bg-orange hover:bg-orange/90 text-white" size="sm">
                    Redeem Points
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-orange" />
                  <div className="flex-1">
                    <h3 className="font-medium text-softBlack">Security</h3>
                    <p className="text-sm text-softBlack/70">Change password</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>

              <Button variant="outline" className="w-full flex items-center gap-2 text-red-500 border-red-200 hover:bg-red-50">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
