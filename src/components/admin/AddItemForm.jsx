import React, { useState } from 'react';

const AddItemForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🚀 New item: ${name}, ₹${price}`);
    // You can later connect this with backend or localStorage
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price ₹"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
