import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import Button from '../common/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { id, name, description, price, quantity } = item;
  const subtotal = price * quantity;

  return (
    <div className="flex items-center gap-4 p-4 border-b last:border-b-0">
      {/* Product Image */}
      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-2xl">📦</span>
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{description}</p>
        <p className="text-lg font-bold text-blue-600 mt-1">
          ${parseFloat(price).toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(id, quantity - 1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          disabled={quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <span className="w-12 text-center font-semibold">{quantity}</span>
        
        <button
          onClick={() => onUpdateQuantity(id, quantity + 1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-right min-w-[100px]">
        <p className="text-lg font-bold text-gray-800">
          ${subtotal.toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(id)}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartItem;