import React from 'react';
import { motion } from 'framer-motion';
import mobileImage from '../assets/banner.png'; // Import your mobile image
import laptopImage from '../assets/banner.png'; // Import your laptop image
import { useInView } from 'react-intersection-observer'; // To detect scrolling into view

function Explore() {
  // Hook to track when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true,   // Animates only once
    threshold: 0.1,      // When 10% of the component is visible
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  return (
    <div ref={ref} className="container mx-auto py-16 px-10 w-full">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Left side - Description and Button */}
        <motion.div variants={fadeInUp} className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Explore Our Products
          </h1>
          <p className="text-gray-600 text-lg">
            Discover a variety of products ranging from the latest mobile gadgets to high-performance laptops. Dive into our collection for the best deals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Explore
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Explore;
