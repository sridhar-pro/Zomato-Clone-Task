import React from 'react';

const GridSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-96 mx-auto">
            <img src="/grid1.png" alt="Image 1" className="w-full h-40 object-cover" />
            <div className="p-3">
              <h2 className="text-xl font-normal tracking-normal mb-2 font-inter text-gray-800">Order Online</h2>
              <p className="text-gray-600 font-normal tracking-normal font-inter">Stay home and order to your doorstep</p>
            </div>
          </div>

          <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-96 mx-auto">
            <img src="/grid2.png" alt="Image 2" className="w-full h-40 object-cover" />
            <div className="p-3">
              <h2 className="text-xl font-normal tracking-normal mb-2 font-inter text-gray-800">Dining</h2>
              <p className="text-gray-600 font-normal tracking-normal font-inter">View the city's favourite dining venues</p>
            </div>
          </div>

          <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-96 mx-auto">
            <img src="/grid3.jpg" alt="Image 3" className="w-full h-40 object-cover" />
            <div className="p-3">
              <h2 className="text-xl font-normal tracking-normal mb-2 font-inter text-gray-800">Live Events</h2>
              <p className="text-gray-600 font-normal tracking-normal font-inter">Discover India's best events & concerts</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GridSection;
