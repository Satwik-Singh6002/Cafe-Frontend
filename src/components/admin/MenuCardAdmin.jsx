import React from 'react';

const MenuCardAdmin = ({ item, onEdit, onDelete, onDuplicate }) => {
  const fallbackImg =
    'https://via.placeholder.com/100x100.png?text=No+Image';

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between transition-transform hover:scale-105 duration-200">
      <img
        src={item.image || fallbackImg}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md mb-2 border"
        onError={(e) => (e.target.src = fallbackImg)}
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600">₹{item.price}</p>
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(item.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
        >
          Delete
        </button>
        <button
          onClick={() => onDuplicate(item.id)}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition"
        >
          Duplicate
        </button>
      </div>
    </div>
  );
};

export default MenuCardAdmin;
