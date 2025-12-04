import React from 'react';
import { ShoppingCart, Package, Edit } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const ProductCard = ({ product, onAddToCart, onEdit, showActions = true, isMerchant = false }) => {
  const { id, name, description, price, inventory } = product;
  const isAvailable = inventory > 0;

  return (
    <Card hover className="overflow-hidden">
      {/* Product Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
        <Package className="w-20 h-20 text-blue-400" />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
          {description}
        </p>

        {/* Price and Stock */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">
            ${parseFloat(price).toFixed(2)}
          </span>
          
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isAvailable
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {isAvailable ? `${inventory} in stock` : 'Out of stock'}
          </span>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex gap-2">
            {isMerchant ? (
              <Button
                variant="outline"
                onClick={() => onEdit(product)}
                className="w-full flex items-center justify-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            ) : (
              <Button
                variant={isAvailable ? 'primary' : 'secondary'}
                disabled={!isAvailable}
                onClick={() => onAddToCart(product)}
                className="w-full flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                {isAvailable ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;