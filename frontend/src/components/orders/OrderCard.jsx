import React from 'react';
import { Eye, Package } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const OrderCard = ({ order, onViewDetails }) => {
  const { id, createdAt, total, status, items } = order;
  
  const statusColors = {
    PENDING: 'bg-yellow-100 text-yellow-700',
    PROCESSING: 'bg-blue-100 text-blue-700',
    SHIPPED: 'bg-indigo-100 text-indigo-700',
    DELIVERED: 'bg-green-100 text-green-700',
    CANCELLED: 'bg-red-100 text-red-700',
  };

  return (
    <Card hover>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">
              Order #{id}
            </h3>
            <p className="text-sm text-gray-600">
              {new Date(createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              statusColors[status] || statusColors.PENDING
            }`}
          >
            {status || 'PENDING'}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <Package className="w-4 h-4" />
          <span className="text-sm">
            {items?.length || 0} item{items?.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${parseFloat(total || 0).toFixed(2)}
          </span>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(order)}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default OrderCard;
