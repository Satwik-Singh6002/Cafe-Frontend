// src/pages/OrderStatusDemo.jsx
import React, { useState, useEffect } from 'react';
import OrderStatus from '../components/OrderStatus';

const OrderStatusDemo = () => {
  const statuses = ['Order Confirmed', 'Preparing', 'Out for Delivery', 'Served'];
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatusIndex((prev) => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return <OrderStatus status={statuses[statusIndex]} />;
};

export default OrderStatusDemo;
