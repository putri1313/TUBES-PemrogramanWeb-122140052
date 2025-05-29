import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-600 pb-10">
        {/* senandung.id Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-4">senandung.id</h2>
          <p className="text-sm text-gray-400 mb-4">
            easier to buy tickets using senandung.id
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/concerts" className="hover:text-gray-400">Browse Concerts</Link></li>
            <li><Link to="/my-tickets" className="hover:text-gray-400">My Tickets</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-gray-400">FAQs</Link></li>
            <li><Link to="/terms" className="hover:text-gray-400">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">Institut Teknologi Sumatera</p>
          <p className="text-sm text-gray-300">Lampung Selatan, Indonesia</p>
          <p className="text-sm text-gray-300 mt-2">info@senandung.id</p>
          <p className="text-sm text-gray-300">0857 5842 6911</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} senandung.id All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;