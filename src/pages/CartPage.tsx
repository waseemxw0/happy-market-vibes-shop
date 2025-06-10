import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  const subtotal = getTotalPrice();
  const shipping = 4.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-2">
            <ShoppingBag className="text-orange h-8 w-8" />
            Shopping Cart
            <span className="text-softBlack/50 text-lg ml-2">({getTotalItems()} items)</span>
          </h1>

          {cartItems.length > 0 ? (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                {cartItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row mb-4">
                    <div className="w-full sm:w-36 h-36 sm:h-auto">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col sm:flex-row">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                        <p className="text-orange font-bold mb-2">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex flex-col gap-3 sm:w-44 mt-4 sm:mt-0">
                        <div className="flex items-center border border-gray-200 rounded-xl">
                          <button 
                            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-orange"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="flex-1 text-center">{item.quantity}</span>
                          <button 
                            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-orange"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="border-red-300 text-red-500 hover:bg-red-50 rounded-xl flex items-center gap-2 w-full"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash className="h-4 w-4" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:w-96 bg-gray-50 rounded-2xl p-6 h-fit sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-softBlack/70">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-softBlack/70">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-orange">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button 
                    className="bg-orange hover:bg-orange/90 text-white rounded-xl w-full py-6 mb-3 flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                
                <Link to="/">
                  <Button variant="outline" className="rounded-xl w-full">
                    Continue Shopping
                  </Button>
                </Link>
                
                <div className="mt-4 text-xs text-center text-softBlack/50">
                  We accept: Credit Cards, PayPal, Apple Pay
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 border border-gray-100 rounded-2xl bg-gray-50">
              <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-10 w-10 text-orange" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-softBlack/70 mb-6">Looks like you haven't added any products to your cart yet</p>
              <Link to="/">
                <Button className="bg-orange hover:bg-orange/90 text-white rounded-xl">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
