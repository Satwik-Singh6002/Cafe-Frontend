import React, { useState } from 'react';
import { useCart } from '../context/cartcontext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [mode, setMode] = useState('dinein');
  const [tableNumber, setTableNumber] = useState('');
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    fullAddress: '',
    pincode: '',
  });

  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = 25;
  const delivery = mode === 'delivery' ? 20 : 0;
  const total = subtotal + tax + delivery;

  const handlePlaceOrder = () => {
  const estimatedTime = mode === 'dinein' ? '15–20 mins (Dine-In)' : '30–40 mins (Delivery)';

  const orderDetails = {
    items: cart,
    mode,
    tableNumber: mode === 'dinein' ? tableNumber : null,
    address: mode === 'delivery' ? address : null,
    subtotal,
    tax,
    delivery,
    total,
    estimatedTime,
  };

  clearCart();
  navigate('/success', { state: orderDetails });
};

  const isDeliveryValid =
    address.name.trim() &&
    address.phone.trim() &&
    address.fullAddress.trim() &&
    address.pincode.trim();

  const isDineInValid = tableNumber.trim();

  return (
    <div className="min-h-screen bg-[#1e1a15] text-white p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      {/* Toggle Mode */}
      <div className="flex items-center gap-4 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="delivery"
            checked={mode === 'delivery'}
            onChange={() => setMode('delivery')}
          />
          <span className="font-semibold">🚚 DELIVERY</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="dinein"
            checked={mode === 'dinein'}
            onChange={() => setMode('dinein')}
          />
          <span className="text-orange-400 font-bold">🍽️ DINE-IN/TAKEAWAY</span>
        </label>
      </div>

      {/* Dine-in Input */}
      {mode === 'dinein' && (
        <div className="flex items-center gap-2 mb-6">
          <span className="text-orange-400 font-bold">🍽️ TABLE NO:</span>
          <input
            type="number"
            min="1"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="flex-1 p-2 rounded-md bg-white text-black outline-none"
            placeholder="Enter table number"
          />
        </div>
      )}

      {/* Delivery Address Form */}
      {mode === 'delivery' && (
        <div className="bg-[#2b2317] p-4 rounded-md mb-6 space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Full Name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="10-digit number"
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Full Address</label>
            <textarea
              className="w-full p-2 rounded bg-white text-black"
              placeholder="House number, street, landmark..."
              value={address.fullAddress}
              onChange={(e) => setAddress({ ...address, fullAddress: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Pincode</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="6-digit Pincode"
              value={address.pincode}
              onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
            />
          </div>
        </div>
      )}

      {/* Order Summary */}
      <div className="space-y-2 text-sm text-gray-300 mb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{tax}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>{delivery === 0 ? 'Free' : `₹${delivery}`}</span>
        </div>
        <div className="flex justify-between font-bold text-white text-base mt-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handlePlaceOrder}
        disabled={
          (mode === 'dinein' && !isDineInValid) ||
          (mode === 'delivery' && !isDeliveryValid)
        }
        className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 transition disabled:opacity-50"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
