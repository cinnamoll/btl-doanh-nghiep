import React from 'react';
import Button from '../common/Button';
import Card from '../common/Card';

const CartSummary = ({ total, itemsCount, onCheckout, loading }) => {
  const shipping = 5.00;
  const tax = total * 0.1; // 10% tax
  const grandTotal = total + shipping + tax;

  return (
    <Card className="p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({itemsCount} items)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">Total</span>
            <span className="text-2xl font-bold text-blue-600">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={onCheckout}
        loading={loading}
        disabled={itemsCount === 0}
      >
        Proceed to Checkout
      </Button>

      <p className="text-xs text-gray-500 text-center mt-4">
        Taxes and shipping calculated at checkout
      </p>
    </Card>
  );
};

export default CartSummary;