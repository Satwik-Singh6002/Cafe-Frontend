import React from 'react';

function Navbar() {
  return (
    <nav className="bg-orange-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://i.pinimg.com/736x/9c/ad/5a/9cad5aba21bccddbdc5354bdf1935610.jpg"
          alt="Cafe Logo"
          className="w-10 h-10 object-contain rounded-full"
        />
        {/* Removed Home link */}
      </div>
    </nav>
  );
}

export default Navbar;
