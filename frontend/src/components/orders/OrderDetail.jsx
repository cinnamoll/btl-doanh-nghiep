import React from 'react';
import Card from '../common/Card';
import { Package, MapPin, CreditCard } from 'lucide-react';

const OrderDetail = ({ order }) => {
  if (!order) return null;

  const { id, createdAt, status, total, items, shippingAddress } = order;

  return (
    <div className="space-y-6">
      {/* Order Header */}
      <Card className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Order #{id}
            </h2>
            <p className="text-gray-600">
              Placed on {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
          
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
            {status}
          </span>
        </div>
      </Card>

      {/* Order Items */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Package className="w-5 h-5" />
          Order Items
        </h3>
        
        <div className="space-y-4">
          {items?.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
              <div>
                <p className="font-semibold text-gray-800">{item.productName}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="font-bold text-blue-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">Total</span>
            <span className="text-2xl font-bold text-blue-600">
              ${parseFloat(total).toFixed(2)}
            </span>
          </div>
        </div>
      </Card>

      {/* Shipping Info */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Shipping Address
        </h3>
        
        <div className="text-gray-600">
          <p>{shippingAddress?.fullName}</p>
          <p>{shippingAddress?.address}</p>
          <p>{shippingAddress?.city}, {shippingAddress?.zipCode}</p>
          <p>{shippingAddress?.phone}</p>
        </div>
      </Card>
    </div>
  );
};

export default OrderDetail;