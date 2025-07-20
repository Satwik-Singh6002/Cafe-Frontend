import React from "react";
import { FaExpand, FaBell, FaEnvelope, FaCog } from "react-icons/fa";

const AdminTopbar = () => {
  return (
    <div className="flex justify-end items-center space-x-6 p-2 bg-white rounded-md shadow-sm">
      <div className="flex space-x-4">
        {/* Fullscreen */}
        <div className="relative bg-purple-100 p-2 rounded-md">
          <FaExpand className="text-purple-600" />
        </div>

        {/* Notifications */}
        <div className="relative bg-blue-100 p-2 rounded-md">
          <FaBell className="text-blue-600" />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1">5</span>
        </div>

        {/* Messages */}
        <div className="relative bg-blue-100 p-2 rounded-md">
          <FaEnvelope className="text-blue-600" />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1">3</span>
        </div>

        {/* Settings */}
        <div className="relative bg-orange-100 p-2 rounded-md">
          <FaCog className="text-orange-600" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1">5</span>
        </div>
      </div>

      {/* Greeting & Avatar */}
      <div className="flex items-center space-x-2 border-l pl-4">
        <span className="text-gray-700 font-medium">Hello <span className="font-bold">Buddy</span></span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default AdminTopbar;
