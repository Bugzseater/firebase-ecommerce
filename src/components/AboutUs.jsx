import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/logo.jpg'; // Replace with your image path

function AboutUs() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </motion.div>

        {/* Right Section: Text */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 text-lg">
            Welcome to our company! We are dedicated to delivering high-quality
            products that meet your needs and exceed your expectations. With a
            passion for innovation and customer satisfaction, we strive to make
            a positive impact on every individual we serve.
          </p>
          <p className="text-gray-600 text-lg">
            Our journey began with a simple idea, and today, we stand tall as a
            leader in the industry, thanks to the trust of our valued customers.
            Our team is committed to continuous growth and improvement, ensuring
            that we stay at the forefront of industry trends and technology.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
