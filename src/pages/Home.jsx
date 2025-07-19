import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFire, FaStar } from 'react-icons/fa';
import menuItems from '../data/menu';

const Home = () => {
  const navigate = useNavigate();
  const popularItems = menuItems.slice(0, 6); // Show top 6

  return (
    <div className="bg-peach min-h-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/coffee-beans-top-view-white-background-space-text_176474-5028.jpg?semt=ais_hybrid&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md animate-fadeInUp">
            Welcome to Our Cafe
          </h1>
          <p className="text-lg md:text-xl text-white mt-4 max-w-md drop-shadow animate-fadeInUp">
            Delicious coffee and tasty meals served fresh!
          </p>
        </div>
      </div>

      {/* Popular Items */}
      <div className="py-12 px-4 md:px-10 bg-peach">
        <div className="flex items-center gap-2 mb-6">
          <FaFire className="text-orange-500 text-2xl" />
          <h2 className="text-2xl font-semibold text-gray-800">Popular Items</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <div className="flex items-center text-yellow-500 text-sm mt-1">
                  {Array.from({ length: Math.floor(item.rating) }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="ml-1 text-gray-600">({item.rating})</span>
                </div>
                <p className="mt-2 text-orange-500 font-semibold">₹{item.price}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button to Full Menu */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/menu')}
            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Explore Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
