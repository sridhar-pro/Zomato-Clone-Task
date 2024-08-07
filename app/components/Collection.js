import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Collection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="text-left mb-12">
          <h1 className="text-3xl sm:text-4xl font-normal mb-2 font-geologica text-gray-800">
            Collections
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4">
            <p className="text-gray-700 font-geologica font-extralight text-base">
              Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends
            </p>
            <p className="text-red-400 flex items-center font-geologica mt-4 sm:mt-0">
              All collections in Chennai <FaArrowRight className="ml-2" />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative group shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full h-60 sm:h-80 mx-auto">
            <img src="/collection1.webp" alt="Collection 1" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4 text-gray-200">
              <h2 className="text-lg sm:text-xl font-normal tracking-normal mb-2 font-geologica">Newly Opened Places</h2>
              <p className="font-normal tracking-normal font-geologica">
                20 Places <FaArrowRight className="inline ml-2" />
              </p>
            </div>
          </div>

          <div className="relative group shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full h-60 sm:h-80 mx-auto">
            <img src="/collection2.jpg" alt="Collection 2" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4 text-gray-200">
              <h2 className="text-lg sm:text-xl font-normal tracking-normal mb-2 font-geologica">Sea View Dining</h2>
              <p className="font-normal tracking-normal font-geologica">
                10 Places <FaArrowRight className="inline ml-2" />
              </p>
            </div>
          </div>

          <div className="relative group shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full h-60 sm:h-80 mx-auto">
            <img src="/collection3.jpg" alt="Collection 3" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4 text-gray-200">
              <h2 className="text-lg sm:text-xl font-normal tracking-normal mb-2 font-geologica">Best Insta-Worthy Places</h2>
              <p className="font-normal tracking-normal font-geologica">
                11 Places <FaArrowRight className="inline ml-2" />
              </p>
            </div>
          </div>

          <div className="relative group shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full h-60 sm:h-80 mx-auto">
            <img src="/collection4.jpg" alt="Collection 4" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4 text-gray-200">
              <h2 className="text-lg sm:text-xl font-normal tracking-normal mb-2 font-geologica">Best Buffets In Town</h2>
              <p className="font-normal tracking-normal font-geologica">
                13 Places <FaArrowRight className="inline ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
