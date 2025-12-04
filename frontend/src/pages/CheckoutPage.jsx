import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CheckoutForm from '../components/cart/CheckoutForm';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../hooks/useCart';
import { useNotification } from '../hooks/useNotification';
import { orderService } from '../services/orderService';

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { cart, getCartTotal, getCartItemsCount, clearCart } = useCart();
  const { success, error } = useNotification();

  const handleSubmit = async (shippingData) => {
    setLoading(true);

    try {
      const orderData = {
        items: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        shippingAddress: shippingData,
        total: getCartTotal(),
      };

      await orderService.createOrder(orderData);
      success('Order placed successfully!');
      clearCart();
      navigate('/orders');
    } catch (err) {
      error('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm onSubmit={handleSubmit} loading={loading} />
          </div>

          <div className="lg:col-span-1">
            <CartSummary
              total={getCartTotal()}
              itemsCount={getCartItemsCount()}
              onCheckout={() => {}}
              loading={loading}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;