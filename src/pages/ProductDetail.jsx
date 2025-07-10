import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from '../context/cartcontext';
import { useWishlist } from '../context/wishlistcontext';
import menuItems from '../data/menu';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = menuItems.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [addons, setAddons] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleAddonToggle = (addon) => {
    setAddons((prev) =>
      prev.includes(addon)
        ? prev.filter((a) => a !== addon)
        : [...prev, addon]
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedSize,
      addons,
      feedback,
      cartKey: `${product.id}-${selectedSize}-${addons.sort().join(',')}`,
    };
    addToCart(cartItem);
    navigate('/cart');
  };

  if (!product) return <p className="p-4 text-center">Item not found</p>;

  return (
    <div className="bg-[#1e1a15] text-white min-h-screen p-4 pb-40">
      {/* Header with back button only */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="text-white text-lg">←</button>
        <h2 className="text-lg font-semibold">Details</h2>
        <div className="w-6" /> {/* Spacer to center title */}
      </div>

      {/* Product image with wishlist icon */}
      <div className="relative rounded-2xl overflow-hidden mb-4">
        <img src={product.image} alt={product.name} className="w-full object-cover h-64" />
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          {wishlisted ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FaRegHeart className="text-gray-700 text-lg" />
          )}
        </button>
      </div>

      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>

      <div className="flex gap-2 mb-4">
        {product.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-[#3d3428] text-xs">
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{product.rating}</span>
          <div className="text-yellow-400 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-600'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">1.2k reviews</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-1">Description</h4>
        <p className="text-sm text-gray-300">{product.description || 'Delicious and freshly prepared just for you.'}</p>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Size</h4>
        <div className="flex gap-3">
          {['S', 'M', 'L'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full border border-gray-600 text-sm transition-all duration-200 ${
                selectedSize === size ? 'bg-white text-black' : ''
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Add-ons</h4>
        <div className="flex gap-2 flex-wrap">
          {['Extra Shot', 'Soy Milk', 'Vanilla Syrup'].map((addon) => (
            <button
              key={addon}
              onClick={() => handleAddonToggle(addon)}
              className={`px-3 py-1 rounded-full border border-gray-500 text-xs ${
                addons.includes(addon) ? 'bg-orange-600 text-white' : ''
              }`}
            >
              {addon}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Give Feedback</h4>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tell us what you think about this item..."
          className="w-full p-3 rounded-lg bg-[#2f261b] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          rows={4}
        />
      </div>

      {/* Bottom cart bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#2a2217] p-4 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="bg-gray-700 text-white px-3 py-1 rounded"
          >
            -
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-700 text-white px-3 py-1 rounded"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-orange-700"
        >
          Add to Cart ₹{product.price * quantity}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
