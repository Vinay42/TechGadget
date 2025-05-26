import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight, Building } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';

export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isRequestingQuotation, setIsRequestingQuotation] = useState(false);
  const [quotationFormData, setQuotationFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/checkout' } } });
    } else {
      navigate('/checkout');
    }
  };
  
  const handleQuotationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the quotation request to the server
    alert('Quotation request submitted successfully! We will contact you soon.');
    
    // Reset form and state
    setIsRequestingQuotation(false);
    setQuotationFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuotationFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // If cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <ShoppingCart size={64} className="text-gray-300" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <Button size="lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Cart Items ({items.length})</h2>
                  <button 
                    onClick={() => clearCart()}
                    className="text-gray-500 hover:text-error-500 transition-colors text-sm flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Clear Cart
                  </button>
                </div>
                
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.product.id} className="py-6 flex flex-col sm:flex-row">
                      <div className="sm:w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      <div className="sm:ml-6 flex-1 flex flex-col mt-4 sm:mt-0">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-base font-medium text-gray-900">
                              <Link to={`/products/${item.product.id}`} className="hover:text-primary-600">
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                          </div>
                          
                          <p className="text-base font-medium text-gray-900">
                            ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              type="button"
                              className="p-2 text-gray-600 hover:text-primary-600"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-1 text-gray-900 select-none">{item.quantity}</span>
                            <button
                              type="button"
                              className="p-2 text-gray-600 hover:text-primary-600"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button
                            type="button"
                            className="text-error-600 hover:text-error-500"
                            onClick={() => removeItem(item.product.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <Link to="/products">
                <Button variant="outline">
                  Continue Shopping
                </Button>
              </Link>
              
              <Button
                variant="secondary"
                leftIcon={<Building size={18} />}
                onClick={() => setIsRequestingQuotation(!isRequestingQuotation)}
              >
                {isRequestingQuotation ? 'Cancel Quotation' : 'Request Quotation'}
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            {isRequestingQuotation ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Request a Quotation</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below to request a quotation for the items in your cart.
                </p>
                
                <form onSubmit={handleQuotationSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      required
                      value={quotationFormData.companyName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      required
                      value={quotationFormData.contactName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      required
                      value={quotationFormData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      required
                      value={quotationFormData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      value={quotationFormData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    fullWidth
                    className="mt-6"
                  >
                    Submit Quotation Request
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button
                  fullWidth
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p>
                    By proceeding to checkout, you agree to our{' '}
                    <Link to="/terms-of-service" className="text-primary-600 hover:text-primary-500">
                      Terms of Service
                    </Link>{' '}
                    and acknowledge our{' '}
                    <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-500">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};