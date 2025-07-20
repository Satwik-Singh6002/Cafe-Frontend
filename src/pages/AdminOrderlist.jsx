import React from "react";

const AdminOrderList = () => {
  // Sample orders data - you can replace this with your API data later.
  const orders = [
    { id: 1, customer: "John Doe", item: "Cappuccino", quantity: 2, status: "Delivered" },
    { id: 2, customer: "Jane Smith", item: "Latte", quantity: 1, status: "In Progress" },
    { id: 3, customer: "Alice Johnson", item: "Espresso", quantity: 3, status: "Cancelled" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Order List</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Item</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="py-2 px-4 border-b">{order.id}</td>
              <td className="py-2 px-4 border-b">{order.customer}</td>
              <td className="py-2 px-4 border-b">{order.item}</td>
              <td className="py-2 px-4 border-b">{order.quantity}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderList;
