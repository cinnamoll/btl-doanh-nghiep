import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children, requireMerchant = false, requireClient = false }) => {
  const { isAuthenticated, isMerchant, isClient, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireMerchant && !isMerchant) {
    return <Navigate to="/products" replace />;
  }

  if (requireClient && !isClient) {
    return <Navigate to="/merchant/products" replace />;
  }

  return children;
};

export default ProtectedRoute;