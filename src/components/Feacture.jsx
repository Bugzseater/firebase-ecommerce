import React from 'react';
import productImage from '../assets/banner.png'; // Assuming this path is correct
import { useInView } from 'react-intersection-observer';

function Feature() {
  const { ref: firstProductRef, inView: firstProductVisible } = useInView({ triggerOnce: true });
  const { ref: secondProductRef, inView: secondProductVisible } = useInView({ triggerOnce: true });
  const { ref: thirdProductRef, inView: thirdProductVisible } = useInView({ triggerOnce: true });

  return (
    <div>
      {/* Title */}
      <div className="text-center text-[2rem] md:text-[4rem] font-bold ">
        <h1 className="hover:text-red-600 cursor-pointer">Feature Products</h1>
      </div>

      {/* Product List */}
      <div className="bg-red-200 w-[90%] items-center flex flex-wrap gap-5 justify-center m-auto p-10 rounded-[20px]">
        {/* Product 1 */}
        <div
          ref={firstProductRef}
          className={`bg-white w-full md:w-[45%] lg:w-[30%] bg-opacity-20 rounded-[30px] p-10 transition-all duration-700 transform ${
            firstProductVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <img src={productImage} alt="Product" className="w-[350px] mx-auto" />
          <h1 className="text-[2rem] font-bold text-center">HeadPhone</h1>
          <p className="text-[1.5rem] font-semibold text-center">Rs 300.00</p>
          <p className="text-center">This is product HeadPhone <br /> <span className="font-bold text-[1.5rem] text-gray-600">Brand</span> Sony</p>
        </div>

        {/* Product 2 */}
        <div
          ref={secondProductRef}
          className={`bg-white w-full md:w-[45%] lg:w-[30%] bg-opacity-20 rounded-[30px] p-10 transition-all duration-700 transform ${
            secondProductVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <img src={productImage} alt="Product" className="w-[350px] mx-auto" />
          <h1 className="text-[2rem] font-bold text-center">HeadPhone</h1>
          <p className="text-[1.5rem] font-semibold text-center">Rs 300.00</p>
          <p className="text-center">This is product HeadPhone <br /> <span className="font-bold text-[1.5rem] text-gray-600">Brand</span> Sony</p>
        </div>

        {/* Product 3 */}
        <div
          ref={thirdProductRef}
          className={`bg-white w-full md:w-[45%] lg:w-[30%] bg-opacity-20 rounded-[30px] p-10 transition-all duration-700 transform ${
            thirdProductVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <img src={productImage} alt="Product" className="w-[350px] mx-auto" />
          <h1 className="text-[2rem] font-bold text-center">HeadPhone</h1>
          <p className="text-[1.5rem] font-semibold text-center">Rs 300.00</p>
          <p className="text-center">This is product HeadPhone <br /> <span className="font-bold text-[1.5rem] text-gray-600">Brand</span> Sony</p>
        </div>
      </div>
      
    </div>
  );
}

export default Feature;
