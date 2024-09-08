import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import productImage from '../assets/banner.png'; // Import your product image

function Banner() {
  return (
    <motion.div 
      className="bg-red-600 py-16 px-10 rounded-[30px] bg-opacity-10"
      initial={{ opacity: 0, scale: 0.9 }} // Initial state
      animate={{ opacity: 1, scale: 1 }} // Animate to final state
      transition={{ duration: 0.8 }} // Transition duration
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Banner Text */}
        <motion.div 
          className="text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }} // Initial animation: slide from left
          animate={{ opacity: 1, x: 0 }} // Animate to final position
          transition={{ duration: 0.8, delay: 0.3 }} // Adding a delay for staggered animation
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Featured Product
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our latest collection of premium products, designed with the highest quality and attention to detail.
          </p>
          <motion.button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.1 }} // Scale button on hover
            whileTap={{ scale: 0.9 }} // Scale down when clicked
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Product Image */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }} // Initial animation: slide from right
          animate={{ opacity: 1, x: 0 }} // Animate to final position
          transition={{ duration: 0.8, delay: 0.5 }} // Delay to sync with the text animation
        >
          <img
            src={productImage}
            alt="Product"
            className="w-full max-w-sm rounded-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Banner;
