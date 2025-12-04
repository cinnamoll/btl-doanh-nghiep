import React from 'react';
import { Package, DollarSign, Box } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { useNotification } from '../hooks/useNotification';

export const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const { isClient } = useAuth();
  const { success } = useNotification();

  const handleAddToCart = () => {
    addToCart(product, 1);
    success(`${product.name} added to cart!`);
  };

  const inStock = product.inventory > 0;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-12 flex items-center justify-center">
        <Package className="w-48 h-48 text-blue-400" />
      </div>

      {/* Product Info */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <Badge variant={inStock ? 'success' : 'danger'} size="lg">
            {inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-3xl font-bold text-blue-600">${product.price?.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Box className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Available Stock</p>
              <p className="text-lg font-semibold text-gray-800">{product.inventory} units</p>
            </div>
          </div>
        </div>

        {isClient && (
          <Button
            variant="primary"
            size="lg"
            fullWidth
            disabled={!inStock}
            onClick={handleAddToCart}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        )}
      </div>
    </div>
  );
};