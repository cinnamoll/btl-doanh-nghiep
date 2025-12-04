import api from './api';

export const productService = {
  // Lấy tất cả sản phẩm (có phân trang)
  getAllProducts: async (page = 0, pageSize = 10) => {
    const response = await api.get(`/product/list`, {
      params: { page, pageSize },
    });
    return response.data;
  },

  // Lấy sản phẩm còn hàng
  getAvailableProducts: async (page = 0, pageSize = 10) => {
    const response = await api.get(`/product/list/available`, {
      params: { page, pageSize },
    });
    return response.data;
  },

  // Lấy sản phẩm hết hàng
  getUnavailableProducts: async (page = 0, pageSize = 10) => {
    const response = await api.get(`/product/list/not-available`, {
      params: { page, pageSize },
    });
    return response.data;
  },

  // Lấy sản phẩm của Merchant hiện tại
  getMerchantProducts: async (page = 0, pageSize = 10) => {
    const response = await api.get(`/product/list/merchant`, {
      params: { page, pageSize },
    });
    return response.data;
  },

  // Tạo sản phẩm mới (Merchant only)
  createProduct: async (productData) => {
    const response = await api.post('/product/save', productData);
    return response.data;
  },

  // Cập nhật sản phẩm (Merchant only)
  updateProduct: async (productData) => {
    const response = await api.put('/product/save', productData);
    return response.data;
  },

  // Lấy chi tiết sản phẩm theo ID
  getProductById: async (productId) => {
    const response = await api.get(`/product/${productId}`);
    return response.data;
  },
};

export default productService