import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LocationPopup from './components/LocationPopup';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import TrackOrder from './pages/TrackOrder';
import Wishlist from './pages/Wishlist';
import PayNow from './pages/PayNow';

import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import { CartProvider } from './context/cartcontext';
import About from './pages/About';


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const permission = localStorage.getItem('locationPermission');
    if (!permission || permission === 'denied') {
      setShowPopup(true);
    }
  }, []);

  useEffect(() => {
    const admin = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(admin);
  }, []);

  const handleAllow = () => {
    localStorage.setItem('locationPermission', 'granted');
    setShowPopup(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('📍 Location:', position.coords);
        },
        (error) => {
          console.error('⚠️ Location error:', error);
        }
      );
    }
  };

  const handleDeny = () => {
    localStorage.setItem('locationPermission', 'denied');
    setShowPopup(true);
    console.log('🚫 Location access denied');
  };

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {showPopup && <LocationPopup onAllow={handleAllow} onDeny={handleDeny} />}
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
              <Route path="/track" element={<TrackOrder />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/pay" element={<PayNow />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/dashboard"
                element={
                  isAdmin ? <AdminDashboard /> : <Navigate to="/admin/login" />
                }
              />
              <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
              <Route path="/about" element={<About />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
