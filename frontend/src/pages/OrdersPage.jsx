import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import OrderList from '../components/orders/OrderList';
import OrderDetail from '../components/orders/OrderDetail';
import Modal from '../components/common/Modal';
import { useOrders } from '../hooks/useOrders';

const OrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const { orders, loading } = useOrders(0, 50);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowDetail(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

        <OrderList
          orders={orders}
          loading={loading}
          onViewDetails={handleViewDetails}
        />

        <Modal
          isOpen={showDetail}
          onClose={() => setShowDetail(false)}
          title="Order Details"
          size="lg"
        >
          <OrderDetail order={selectedOrder} />
        </Modal>
      </main>

      <Footer />
    </div>
  );
};

export default OrdersPage;
