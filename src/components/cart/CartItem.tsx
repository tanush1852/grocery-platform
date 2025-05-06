import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { CartItem as CartItemType } from '../../contexts/CartContext';
import { useCart } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div className="flex items-center border-b border-neutral-200 py-4 animate-fade-in">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="ml-4 flex-1">
        <h3 className="text-base font-medium text-neutral-800">{item.name}</h3>
        <p className="mt-1 text-sm text-neutral-500">${item.price.toFixed(2)} / {item.unit}</p>
      </div>

      <div className="flex items-center border border-neutral-300 rounded-md">
        <button
          onClick={handleDecrement}
          className="p-1 text-neutral-600 hover:text-neutral-900"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="px-2 text-neutral-800 min-w-[36px] text-center">
          {item.quantity}
        </span>
        <button
          onClick={handleIncrement}
          className="p-1 text-neutral-600 hover:text-neutral-900"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="ml-4 text-right min-w-[80px]">
        <p className="text-base font-medium text-neutral-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="ml-4 text-neutral-400 hover:text-neutral-800"
        aria-label="Remove item"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;