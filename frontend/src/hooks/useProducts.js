import { useState, useEffect } from 'react';
import { productService } from '../services/productService';
import { useNotification } from './useNotification';

export const useProducts = (page = 0, pageSize = 10, availableOnly = false) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const { error: showError } = useNotification();

  useEffect(() => {
    loadProducts();
  }, [page, pageSize, availableOnly]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = availableOnly
        ? await productService.getAvailableProducts(page, pageSize)
        : await productService.getAllProducts(page, pageSize);
      
      setProducts(response.content || []);
      setTotalPages(response.totalPages || 0);
    } catch (err) {
      setError(err.message);
      showError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    loadProducts();
  };

  return {
    products,
    loading,
    error,
    totalPages,
    refresh,
  };
};