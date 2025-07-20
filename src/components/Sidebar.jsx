import React from 'react';
import { FaHome, FaUtensils, FaUsers, FaChartPie, FaStore } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5 fixed">
      <h2 className="text-2xl font-bold text-orange-600 mb-8">🍽️ Riday Admin</h2>
      <ul className="space-y-6 text-gray-700">
        <li className="flex items-center gap-3 cursor-pointer hover:text-orange-500" onClick={() => navigate('/')}>
          <FaHome /> Dashboard
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-orange-500" onClick={() => navigate('/menu')}>
          <FaUtensils /> Menu List
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-orange-500">
          <FaUsers /> Customers
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-orange-500">
          <FaChartPie /> Analytics
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-orange-500">
          <FaStore /> Online Store
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
