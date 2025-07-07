import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const TrackOrder = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    orderMode,
    orderedItems = [],
    estimatedTime = '30–40 mins',
    address,
    tableNumber,
    total,
  } = state || {};

  const [orderStatus, setOrderStatus] = useState('preparing');
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(15);

  const orderId = '#BRW20250706';
  const paymentMode = 'UPI / Card / COD';

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) toast.success("Your order has been delivered!");
        return prev > 0 ? prev - 1 : 0;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const statusTimer = setTimeout(() => {
      setOrderStatus('out-for-delivery');
    }, 5000);
    return () => clearTimeout(statusTimer);
  }, []);

  const handleFeedbackSubmit = () => {
    console.log({ rating, comment });
    setSubmitted(true);
    setTimeout(() => {
      setShowFeedback(false);
      setRating(0);
      setComment('');
      setSubmitted(false);
    }, 2000);
  };

  if (orderMode === 'dinein') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1e1a15] text-white p-4 text-center">
        <h2 className="text-xl font-bold mb-2">Tracking Not Available</h2>
        <p className="text-sm text-gray-300 mb-4">
          Since this is a Dine-In order, live tracking is not applicable.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e1a15] text-white p-4 max-w-md mx-auto relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate(-1)} className="text-white text-xl font-bold">&times;</button>
        <h2 className="text-lg font-bold">📍 Order Tracking</h2>
        <div className="w-6" />
      </div>

      {/* Ordered Items */}
      {orderedItems.length > 0 && (
        <div className="bg-[#2b2317] p-4 rounded mb-6">
          <h3 className="text-sm font-semibold mb-2 text-gray-300">Items Ordered</h3>
          <ul className="space-y-3">
            {orderedItems.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover mr-3" />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">₹{item.price} × {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Order Info */}
      <div className="bg-[#2b2317] p-4 rounded mb-6 text-sm">
        <div className="flex justify-between border-b border-gray-600 pb-2 mb-2">
          <div>
            <p className="text-gray-400">Order ID</p>
            <p className="font-medium">{orderId}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Estimated Time</p>
            <p className="font-medium">{estimatedTime}</p>
          </div>
        </div>
        {address && (
          <div className="flex justify-between gap-4">
            <div className="w-1/2">
              <p className="text-gray-400 mb-1">Delivery Address</p>
              <p className="text-xs">{address.fullAddress}</p>
            </div>
            <div className="w-1/2 text-right">
              <p className="text-gray-400 mb-1">Payment</p>
              <p className="text-xs">{paymentMode}</p>
            </div>
          </div>
        )}
      </div>

      {/* Live Tracking Animation */}
      <div className="bg-[#2b2317] p-4 rounded mt-6 text-sm">
        <p className="font-bold mb-3">🗺️ Live Tracking</p>
        <div className="relative">
          <div className="h-10 relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-dotted-pattern" />
            <div className="absolute top-[-10px] left-0 animate-ride z-10">
              <span className="text-2xl">🚴</span>
            </div>
          </div>
          <div className="flex justify-between mt-2 px-1 text-xs text-white">
            <span>✅ Confirmed</span>
            <span>⏳ Preparing</span>
            <span>📦 Out</span>
          </div>
        </div>
      </div>

      {/* Delivery Partner */}
      <div className="bg-[#2b2317] p-4 rounded mt-6 text-sm">
        <p className="font-bold mb-3">🚴 Delivery Partner</p>
        <div className="flex items-center gap-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
            alt="Partner"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">Rahul Verma</p>
            <p className="text-gray-400 text-xs">+91 9876543210</p>
          </div>
          <a href="tel:+919876543210" className="ml-auto text-blue-400 text-sm underline">Call</a>
        </div>
      </div>

      {/* Feedback */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowFeedback(true)}
          className="text-sm bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          💬 Give Feedback
        </button>
      </div>

      {showFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-80 p-5 text-black">
            {submitted ? (
              <p className="text-center text-green-600 font-semibold">Thank you for your feedback!</p>
            ) : (
              <>
                <h3 className="text-lg font-semibold mb-2">Rate Your Delivery</h3>
                <div className="flex gap-1 mb-3 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={star <= rating ? 'text-yellow-400 text-2xl' : 'text-gray-400 text-2xl'}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <textarea
                  placeholder="Write your feedback..."
                  className="w-full border border-gray-300 p-2 rounded mb-3 text-sm"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  onClick={handleFeedbackSubmit}
                  className="bg-green-600 text-white w-full py-2 rounded font-semibold hover:bg-green-700"
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
