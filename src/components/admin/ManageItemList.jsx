import React from "react";
import menuItems from "../../data/menu";
import MenuCardAdmin from "./MenuCardAdmin";

const ManageItemList = () => {
  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">🍽️ Manage Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://cdn-icons-png.flaticon.com/512/130/130884.png"; // fallback image
              }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
              <p className="text-gray-600 mb-2">₹{item.price}</p>
              <div className="flex gap-2 flex-wrap">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                  Delete
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                  Duplicate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItemList;
