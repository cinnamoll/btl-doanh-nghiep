import { useState, useEffect } from 'react';
import { orderService } from '../services/orderService';
import { useNotification } from './useNotification';

export const useOrders = (page = 0, pageSize = 10) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const { error: showError } = useNotification();

  useEffect(() => {
    loadOrders();
  }, [page, pageSize]);

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await orderService.getUserOrders(page, pageSize);
      setOrders(response.content || []);
      setTotalPages(response.totalPages || 0);
    } catch (err) {
      setError(err.message);
      showError('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    loadOrders();
  };

  return {
    orders,
    loading,
    error,
    totalPages,
    refresh,
  };
};