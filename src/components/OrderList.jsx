import React from 'react';

const orders = [
  { id: '#245879', date: '14 April 2021, 03:13 AM', name: 'Aaliyah Clark', location: '1623 E Updahl Ct, Harrison, ID, 83833', amount: '$124.6', status: 'Delivery' },
  { id: '#245880', date: '25 April 2021, 11:22 AM', name: 'Boone Doe', location: '261 Poplar Ave, Devon, PA, 19333', amount: '$74.99', status: 'New Order' },
  { id: '#245881', date: '25 April 2021, 11:52 AM', name: 'Carlie Paton', location: '8959 State 405 Rte, Maceo, KY, 42355', amount: '$66.21', status: 'Delivery' },
  { id: '#245882', date: '27 April 2021, 02:25 PM', name: 'Delilah', location: '4480 Ka Haku Rd, Princeville, HI, 96722', amount: '$89.32', status: 'New Order' },
  { id: '#245883', date: '27 April 2021, 02:30 PM', name: 'Hannah Doe', location: '128 Mclemore Rd, Taft, TN, 38488', amount: '$85.2', status: 'Delivery' },
  { id: '#245884', date: '27 April 2021, 12:42 AM', name: 'Emerson Clark', location: '505 E 14th St, Scotland Neck, NC, 27874', amount: '$18.5', status: 'Delivery' },
  { id: '#245885', date: '27 April 2021, 12:32 AM', name: 'Crystal Doe', location: '312 S Judd St, Sioux City, IA, 51103', amount: '$125.2', status: 'Delivery' },
  { id: '#245886', date: '29 April 2021, 11:12 AM', name: 'Jenny Don', location: '4381 Rutledge Pike, Rutledge, TN, 37861', amount: '$39.25', status: 'On Delivery' },
  { id: '#245887', date: '29 April 2021, 10:35 AM', name: 'Joanne Clark', location: 'Po Box 232, Bimble, KY, 40915', amount: '$55.2', status: 'On Delivery' },
  { id: '#245888', date: '30 April 2021, 10:42 AM', name: 'Madeline Doe', location: '146 Patterson Dr, Hayneville, AL, 36040', amount: '$24.55', status: 'On Delivery' },
];

const statusColors = {
  'Delivery': 'bg-blue-100 text-blue-600',
  'New Order': 'bg-red-100 text-red-500',
  'On Delivery': 'bg-yellow-100 text-yellow-500',
};

const OrderList = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Order List</h2>
      <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
          <tr>
            <th className="py-3 px-6 text-left">Order ID</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Customer Name</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-left">Status Order</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6">{order.id}</td>
              <td className="py-3 px-6">{order.date}</td>
              <td className="py-3 px-6">{order.name}</td>
              <td className="py-3 px-6">{order.location}</td>
              <td className="py-3 px-6">{order.amount}</td>
              <td className="py-3 px-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center space-x-2 mt-4">
        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">1</button>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">2</button>
        <span className="text-gray-500">Next</span>
      </div>
    </div>
  );
};

export default OrderList;
