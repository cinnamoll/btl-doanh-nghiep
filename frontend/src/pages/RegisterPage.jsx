import React from 'react';
import { ShoppingCart } from 'lucide-react';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-blue-600 rounded-full mb-4">
          <ShoppingCart className="w-12 h-12 text-white" />
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
