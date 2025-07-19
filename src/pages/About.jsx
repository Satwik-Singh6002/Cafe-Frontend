import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-10 px-6 md:px-16 bg-orange-50 min-h-screen text-[#2d240f]">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">About Our Café</h1>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Cafe"
          className="w-full md:w-1/2 rounded-2xl shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Our Cozy Corner</h2>
          <p className="text-sm md:text-base text-gray-700">
            At our café, we believe in creating not just great coffee and food—but unforgettable
            experiences. Whether you're stopping by for a morning brew or staying for brunch with friends,
            our goal is to make you feel at home.
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center my-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">☕ Handcrafted Coffee</h3>
          <p className="text-gray-600 text-sm">
            We brew each cup with care using ethically sourced beans.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">🍽️ Fresh Meals</h3>
          <p className="text-gray-600 text-sm">
            Enjoy delicious food made with the freshest local ingredients.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">🎶 Relaxing Vibe</h3>
          <p className="text-gray-600 text-sm">
            Unwind in our cozy space with chill music and friendly service.
          </p>
        </div>
      </div>

      {/* Optional: Team Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-gray-700 max-w-xl mx-auto text-sm md:text-base">
          Our passionate chefs, skilled baristas, and smiling staff are what make our café truly special.
          We’re here to serve you the best—every day.
        </p>
      </div>
    </div>
  );
};

export default About;
