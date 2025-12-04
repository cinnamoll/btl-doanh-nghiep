import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Package } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const { user, logout, isAuthenticated, isMerchant } = useAuth();
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">
              {process.env.REACT_APP_NAME || 'E-Commerce'}
            </span>
          </Link>

          {/* Navigation */}
          {isAuthenticated && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Products
              </Link>
              
              {isMerchant ? (
                <Link
                  to="/merchant/products"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  My Products
                </Link>
              ) : (
                <Link
                  to="/cart"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Cart
                </Link>
              )}
              
              <Link
                to="/orders"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Orders
              </Link>
            </nav>
          )}

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {!isMerchant && (
                  <Link
                    to="/cart"
                    className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    {getCartItemsCount() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                        {getCartItemsCount()}
                      </span>
                    )}
                  </Link>
                )}

                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {user?.username}
                    </span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                      {user?.role}
                    </span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;