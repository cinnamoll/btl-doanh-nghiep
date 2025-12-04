import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              E-commerce platform built with Spring Boot and React
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/orders" className="hover:text-white">Orders</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email: support@ecommerce.com<br />
              Phone: +84 123 456 789
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 E-commerce Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
