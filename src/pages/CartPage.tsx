import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  
  const shipping = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process payment here
    setCheckoutComplete(true);
    clearCart();
  };
  
  if (checkoutComplete) {
    return (
      <div className="section">
        <div className="container max-w-3xl">
          <div className="text-center py-12 px-6 bg-white rounded-lg shadow-md animate-fade-in">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your purchase. Your order has been placed and will be processed shortly.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="btn-secondary">
                Return to Home
              </Link>
              <Link to="/supplements" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section bg-light">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
          <Link to="/supplements" className="text-primary hover:underline inline-flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Continue Shopping
          </Link>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any supplements to your cart yet.
            </p>
            <Link to="/supplements" className="btn-primary">
              Browse Supplements
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">
                      Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-gray-500 hover:text-error text-sm flex items-center"
                    >
                      <Trash2 size={14} className="mr-1" />
                      Clear Cart
                    </button>
                  </div>
                </div>
                
                {/* Cart Items */}
                <div className="divide-y">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                      <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <p className="text-gray-500 text-sm mb-4">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-primary font-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-500 hover:text-error text-sm mt-2 flex items-center"
                            >
                              <Trash2 size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              {isCheckingOut ? (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Checkout</h2>
                  <form onSubmit={handleCheckout}>
                    <div className="space-y-4 mb-6">
                      <div className="form-control">
                        <label htmlFor="cardName" className="form-label">Name on Card</label>
                        <input id="cardName" type="text" className="form-input" required />
                      </div>
                      <div className="form-control">
                        <label htmlFor="cardNumber" className="form-label">Card Number</label>
                        <input id="cardNumber" type="text" className="form-input" placeholder="•••• •••• •••• ••••" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                          <label htmlFor="expiry" className="form-label">Expiry Date</label>
                          <input id="expiry" type="text" className="form-input" placeholder="MM/YY" required />
                        </div>
                        <div className="form-control">
                          <label htmlFor="cvc" className="form-label">CVC</label>
                          <input id="cvc" type="text" className="form-input" placeholder="•••" required />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mb-4">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <button type="submit" className="btn-primary">
                        <CreditCard size={18} className="mr-2" />
                        Complete Payment
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setIsCheckingOut(false)}
                        className="btn-secondary"
                      >
                        Back to Cart
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsCheckingOut(true)}
                    className="btn-primary w-full"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
              
              {/* Recently Viewed */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h3 className="font-semibold mb-4">Secure Checkout</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We use secure transmission and encrypted storage to protect your personal information.
                </p>
                <div className="flex justify-between">
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;