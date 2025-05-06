import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';
import Button from '../components/ui/Button';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  
  const shippingFee = getCartTotal() >= 35 ? 0 : 4.99;
  const total = getCartTotal() + shippingFee;

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 min-h-screen container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center text-center">
          <ShoppingBag className="h-16 w-16 text-neutral-300 mb-4" />
          <h2 className="text-2xl font-semibold text-neutral-800 mb-2">Your cart is empty</h2>
          <p className="text-neutral-600 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200 mb-4">
                <h2 className="text-xl font-semibold">Shopping Cart ({items.length} items)</h2>
                <button 
                  onClick={clearCart}
                  className="text-neutral-600 hover:text-red-600 flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Clear Cart
                </button>
              </div>
              
              <div>
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              
              <div className="mt-6 flex justify-between">
                <Link to="/shop" className="text-primary-600 hover:text-primary-700 flex items-center">
                  &larr; Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold pb-4 border-b border-neutral-200 mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium">
                    {shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                {getCartTotal() < 35 && (
                  <div className="text-xs text-neutral-500">
                    Add ${(35 - getCartTotal()).toFixed(2)} more to qualify for free shipping.
                  </div>
                )}
              </div>
              
              <div className="border-t border-neutral-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                fullWidth 
                size="lg"
                onClick={() => navigate('/checkout')}
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;