import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { NotificationProvider } from './contexts/NotificationContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import MerchantProductsPage from './pages/MerchantProductsPage';

// Notification Component
const NotificationContainer = () => {
  const { notifications, removeNotification } = React.useContext(
    require('./contexts/NotificationContext').NotificationContext
  );

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`px-6 py-4 rounded-lg shadow-lg text-white slide-in ${
            notif.type === 'success' ? 'bg-green-500' :
            notif.type === 'error' ? 'bg-red-500' :
            notif.type === 'warning' ? 'bg-yellow-500' :
            'bg-blue-500'
          }`}
          onClick={() => removeNotification(notif.id)}
        >
          {notif.message}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <AuthProvider>
          <CartProvider>
            <NotificationContainer />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              <Route
                path="/products"
                element={
                  <ProtectedRoute>
                    <ProductsPage />
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="/cart"
                element={
                  <ProtectedRoute requireClient>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute requireClient>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <OrdersPage />
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="/merchant/products"
                element={
                  <ProtectedRoute requireMerchant>
                    <MerchantProductsPage />
                  </ProtectedRoute>
                }
              />
              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;