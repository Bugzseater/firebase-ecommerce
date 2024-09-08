import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa"; // Icons from React Icons

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-400 bg-opacity-10 text-[#2f2f2f] shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">
            MyStore
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="/" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-gray-400">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Icons (Search and Cart) */}
        <div className="hidden md:flex space-x-4 items-center justify-center">
          
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400" />
          <button className="bg-yellow-200 p-3 w-[100px] rounded-[30px] font-bold hover:bg-red-400">LogIn</button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 text-center">
          <ul className="space-y-4 p-4 text-lg">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-gray-400">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li className="flex justify-center space-x-4">
              <FaSearch className="text-xl cursor-pointer hover:text-gray-400" />
              <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
