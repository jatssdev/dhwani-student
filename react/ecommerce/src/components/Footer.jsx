import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
