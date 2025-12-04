import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductList from '../components/products/ProductList';
import ProductForm from '../components/products/ProductForm';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { productService } from '../services/productService';
import { useNotification } from '../hooks/useNotification';

const MerchantProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const { success, error } = useNotification();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await productService.getMerchantProducts(0, 100);
      setProducts(response.content || []);
    } catch (err) {
      error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProduct = async (productData) => {
    setFormLoading(true);

    try {
      if (editingProduct) {
        await productService.updateProduct({ ...productData, id: editingProduct.id });
        success('Product updated successfully!');
      } else {
        await productService.createProduct(productData);
        success('Product created successfully!');
      }
      
      setShowForm(false);
      setEditingProduct(null);
      loadProducts();
    } catch (err) {
      error('Failed to save product');
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Products</h1>
          
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              setEditingProduct(null);
              setShowForm(true);
            }}
            className="flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Product
          </Button>
        </div>

        <ProductList
          products={products}
          loading={loading}
          onEdit={handleEdit}
          isMerchant={true}
        />

        <Modal
          isOpen={showForm}
          onClose={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
          title={editingProduct ? 'Edit Product' : 'New Product'}
          size="md"
        >
          <ProductForm
            product={editingProduct}
            onSave={handleSaveProduct}
            onCancel={() => {
              setShowForm(false);
              setEditingProduct(null);
            }}
            loading={formLoading}
          />
        </Modal>
      </main>

      <Footer />
    </div>
  );
};

export default MerchantProductsPage;