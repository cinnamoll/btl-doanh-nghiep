import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductList from '../components/products/ProductList';
import ProductSearch from '../components/products/ProductSearch';
import ProductFilters from '../components/products/ProductFilters';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';
import { useNotification } from '../hooks/useNotification';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availableOnly, setAvailableOnly] = useState(false);
  const { isMerchant } = useAuth();
  const { addToCart } = useCart();
  const { products, loading } = useProducts(0, 50, availableOnly);
  const { success } = useNotification();

  const handleAddToCart = (product) => {
    addToCart(product);
    success(`${product.name} added to cart!`);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Browse Products
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <ProductSearch value={searchTerm} onChange={setSearchTerm} />
            <ProductFilters
              availableOnly={availableOnly}
              onToggleAvailable={() => setAvailableOnly(!availableOnly)}
            />
          </div>
        </div>

        <ProductList
          products={filteredProducts}
          loading={loading}
          onAddToCart={handleAddToCart}
          isMerchant={isMerchant}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
