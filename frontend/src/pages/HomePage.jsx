import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Package, TrendingUp } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/products');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Welcome to E-Commerce Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Shop the latest products or start selling your own items today
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Us?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <ShoppingBag className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Easy Shopping
                </h3>
                <p className="text-gray-600">
                  Browse thousands of products with just a few clicks
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                  <Package className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Secure Delivery
                </h3>
                <p className="text-gray-600">
                  Fast and reliable shipping to your doorstep
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                  <TrendingUp className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sell Your Products
                </h3>
                <p className="text-gray-600">
                  Join as a merchant and grow your business
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;