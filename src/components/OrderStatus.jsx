// src/components/OrderStatus.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const OrderStatus = ({ status }) => {
  const steps = ['Order Confirmed', 'Preparing', 'Out for Delivery', 'Served'];

  const getStatusClass = (index) => {
    const currentIndex = steps.indexOf(status);
    if (index < currentIndex) return 'text-green-600';
    if (index === currentIndex) return 'text-yellow-500 animate-pulse';
    return 'text-gray-400';
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Live Order Status</h2>
      <div className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <div key={step} className={`flex items-center gap-3 ${getStatusClass(index)}`}>
            <FaCheckCircle />
            <span className="font-medium">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
