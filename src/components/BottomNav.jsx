import React, { useState } from 'react';
import { FaHome, FaBars, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontext'; // ✅ Custom cart hook

const BottomNav = () => {
  const navigate = useNavigate();
  const [showAuthMenu, setShowAuthMenu] = useState(false);

  const { cart } = useCart(); // ✅ useCart inside the component
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Auth menu panel */}
      {showAuthMenu && (
        <div className="fixed bottom-16 right-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 w-40 text-center space-y-3">
          <button
            onClick={() => {
              setShowAuthMenu(false);
              navigate('/login');
            }}
            className="block w-full bg-orange-500 text-white py-1 rounded hover:bg-orange-600"
          >
            Login
          </button>
          <button
            onClick={() => {
              setShowAuthMenu(false);
              navigate('/signup');
            }}
            className="block w-full bg-orange-500 text-white py-1 rounded hover:bg-orange-600"
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-[#2d240f] text-[#f5e7c3] shadow-lg border-t border-[#3d3217] z-40">
        <div className="flex justify-around items-center py-3">
          <button onClick={() => navigate('/')} className="flex flex-col items-center">
            <FaHome size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>

          <button onClick={() => navigate('/menu')} className="flex flex-col items-center">
            <FaBars size={20} />
            <span className="text-xs mt-1">Menu</span>
          </button>

          <button onClick={() => navigate('/cart')} className="relative flex flex-col items-center">
            <FaShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
            <span className="text-xs mt-1">Cart</span>
          </button>

          <button onClick={() => setShowAuthMenu(!showAuthMenu)} className="flex flex-col items-center">
            <FaUser size={20} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
