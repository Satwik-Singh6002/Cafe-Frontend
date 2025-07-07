import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail'; // ✅ Import Product Detail

import { CartProvider } from './context/cartcontext';
import Checkout from './pages/Checkout'; // 👈 Import the checkout page
import Success from './pages/Success'; // Optional
import TrackOrder from './pages/TrackOrder';
import Wishlist from './pages/Wishlist'; // new import

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<ProductDetail />} /> {/* ✅ Add this route */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} /> {/* 👈 Add this */}
              <Route path="/success" element={<Success />} />
              <Route path="/track" element={<TrackOrder />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
          <Footer />
          <BottomNav />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
