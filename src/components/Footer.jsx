import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-10 px-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <motion.div
          className="space-y-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="text-gray-400">
            We are a leading e-commerce platform offering a wide range of products at unbeatable prices. Our mission is to provide quality and value to our customers.
          </p>
        </motion.div>

        {/* Customer Service Section */}
        <motion.div
          className="space-y-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl font-bold">Customer Service</h2>
          <ul className="text-gray-400 space-y-2">
            <li>Contact Us</li>
            <li>Returns & Refunds</li>
            <li>Shipping Policy</li>
            <li>FAQs</li>
          </ul>
        </motion.div>

        {/* Newsletter Subscription Section */}
        <motion.div
          className="space-y-4"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl font-bold">Newsletter</h2>
          <p className="text-gray-400">
            Subscribe to our newsletter to receive updates on new arrivals and special offers.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-lg text-gray-800"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <motion.div
        className="flex justify-center space-x-6 mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <FaFacebookF size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <FaInstagram size={24} />
        </a>
      </motion.div>

      {/* Footer Bottom Text */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} E-Commerce Store. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
