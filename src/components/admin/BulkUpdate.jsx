import React, { useState } from "react";

const BulkUpdate = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Cappuccino", price: 150, available: true },
    { id: 2, name: "Latte", price: 180, available: true },
    { id: 3, name: "Espresso", price: 120, available: true },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);
  const [newPrice, setNewPrice] = useState("");
  const [newAvailability, setNewAvailability] = useState(true);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleBulkUpdate = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        selectedIds.includes(item.id)
          ? {
              ...item,
              price: newPrice ? parseFloat(newPrice) : item.price,
              available: newAvailability,
            }
          : item
      )
    );
    setSelectedIds([]);
    setNewPrice("");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bulk Update Items</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left font-medium">Select</th>
              <th className="p-4 text-left font-medium">Item Name</th>
              <th className="p-4 text-left font-medium">Price (₹)</th>
              <th className="p-4 text-left font-medium">Availability</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.price}</td>
                <td className="p-4">
                  {item.available ? (
                    <span className="text-green-600 font-medium">Available</span>
                  ) : (
                    <span className="text-red-500 font-medium">Unavailable</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4 items-center mt-6">
        <input
          type="number"
          placeholder="New Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-40 shadow-sm focus:ring-2 focus:ring-blue-300"
        />

        <select
          value={newAvailability ? "available" : "unavailable"}
          onChange={(e) => setNewAvailability(e.target.value === "available")}
          className="border border-gray-300 rounded-md px-4 py-2 w-40 shadow-sm focus:ring-2 focus:ring-blue-300"
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>

        <button
          onClick={handleBulkUpdate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition duration-150"
        >
          Update Selected
        </button>
      </div>
    </div>
  );
};

export default BulkUpdate;
