import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../App';

const Navbar = () => {
  let { cartItems } = useContext(mainContext)
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl">
          MyShop
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/products"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Cart ({cartItems.reduce((t, x) => t += x.qty, 0)})
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            aria-label="Toggle menu"
          >
            {/* You can integrate an icon (e.g., menu icon from Heroicons) here */}
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
