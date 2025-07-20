import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaPlus, FaList, FaThLarge } from 'react-icons/fa';
import AddItemForm from '../components/Admin/AddItemForm';
import ManageItemList from '../components/Admin/ManageItemList';
import BulkUpdate from '../components/Admin/BulkUpdate';
import AdminTopbar from '../components/Admin/AdminTopbar';
import OrderList from '../components/OrderList'; // ✅ Imported Order List

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('Add Item');

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const menuItems = [
    { label: 'Add Item', icon: <FaPlus /> },
    { label: 'Manage Item', icon: <FaList /> },
    { label: 'Item Bulk Update', icon: <FaThLarge /> },
    { label: 'Orders', icon: <FaList /> }, // ✅ Added Orders option
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'Add Item':
        return <AddItemForm />;
      case 'Manage Item':
        return <ManageItemList />;
      case 'Item Bulk Update':
        return <BulkUpdate />;
      case 'Orders':
        return <OrderList />;
      default:
        return <div>Select a menu option.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#2f2f4f] text-white flex flex-col p-4">
        <div className="text-xl font-bold mb-6">
          <span className="text-yellow-400">Cafe Admin</span>
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
      <div className="flex-1 p-6 overflow-auto">
        <AdminTopbar />
        <div className="mt-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
