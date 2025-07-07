import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#1e1a15]">
        <p>No order found. Please go back and place an order.</p>
      </div>
    );
  }

  const {
    items,
    mode,
    tableNumber,
    address,
    subtotal,
    tax,
    delivery,
    total,
    estimatedTime,
  } = state;

  return (
    <div className="min-h-screen bg-[#1e1a15] text-white p-6">
      {/* Confirmation Text */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold animate-pulse">🎉 Order Successful!</h2>
        <p className="text-green-400 font-semibold mt-2">{estimatedTime}</p>
      </div>

      {/* Order Summary */}
      <div className="bg-[#2a2219] p-4 rounded-lg mb-6 shadow-md">
        <h3 className="text-lg font-semibold mb-3">🧾 Order Details</h3>
        <ul className="space-y-2 text-sm">
          {items.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-600 mt-4 pt-4 space-y-1 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
          <div className="flex justify-between"><span>Tax</span><span>₹{tax}</span></div>
          <div className="flex justify-between"><span>Delivery</span><span>{delivery === 0 ? 'Free' : `₹${delivery}`}</span></div>
          <div className="flex justify-between font-bold text-white text-base mt-2">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>

      {/* Mode Specific Information */}
      {mode === 'dinein' && (
        <p className="text-center text-sm">🪑 Table Number: <span className="font-semibold">{tableNumber}</span></p>
      )}

      {mode === 'delivery' && address && (
        <div className="text-sm bg-[#2a2219] p-4 rounded-lg mt-4 space-y-1">
          <p className="mb-2 font-semibold">📦 Delivery Address</p>
          <p>👤 {address.name}</p>
          <p>📞 {address.phone}</p>
          <p>📍 {address.fullAddress}</p>
          <p>🏷️ {address.pincode}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        {mode === 'delivery' && (
          <button
            onClick={() =>
              navigate('/track', {
                state: {
                  orderMode: mode,
                  orderedItems: items,
                  estimatedTime,
                  address,
                  tableNumber,
                  total,
                },
              })
            }
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Track Order
          </button>
        )}
        <button
          onClick={() => navigate('/')}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
