import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaPlus, FaList, FaThLarge } from 'react-icons/fa';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('Add Item');

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/adminlogin');
  };

  const menuItems = [
    { label: 'Add Item', icon: <FaPlus /> },
    { label: 'Manage Item', icon: <FaList /> },
    { label: 'Item Bulk Update', icon: <FaThLarge /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#2f2f4f] text-white flex flex-col p-4">
        <div className="text-xl font-bold mb-6">
          <span className="text-yellow-400">Cafe</span>
        </div>

        <div className="flex-1 space-y-2">
          <div className="text-sm text-gray-400 uppercase tracking-wide">Item Management</div>
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveMenu(item.label)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-yellow-500 hover:text-black transition ${
                activeMenu === item.label ? 'bg-orange-500 text-white shadow-md' : ''
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg p-6 shadow">
          <h1 className="text-2xl font-bold mb-4">Welcome Admin 👋</h1>
          <p className="text-gray-700">This is your admin dashboard content for: <strong>{activeMenu}</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
