import api from './api';

export const orderService = {
  // Lấy danh sách đơn hàng của user
  getUserOrders: async (page = 0, pageSize = 10) => {
    const response = await api.get(`/order/list/user`, {
      params: { page, pageSize },
    });
    return response.data;
  },

  // Lấy chi tiết đơn hàng
  getOrderById: async (orderId) => {
    const response = await api.get(`/order/${orderId}`);
    return response.data;
  },

  // Tạo đơn hàng mới (Client only)
  createOrder: async (orderData) => {
    const response = await api.post('/order/save', orderData);
    return response.data;
  },

  // Cập nhật đơn hàng (Client only)
  updateOrder: async (orderData) => {
    const response = await api.put('/order/save', orderData);
    return response.data;
  },
};

// Export tất cả services
export default orderService;