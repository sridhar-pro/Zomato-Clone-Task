"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa';

const Locations = () => {
  const [showMore, setShowMore] = useState(false);

  const locations = [
    { name: 'Anna Nagar', places: '370 places' },
    { name: 'T. Nagar', places: '450 places' },
    { name: 'Adyar', places: '320 places' },
    { name: 'Velachery', places: '400 places' },
    { name: 'Besant Nagar', places: '350 places' },
    { name: 'Nungambakkam', places: '380 places' },
    { name: 'Mylapore', places: '310 places' },
    { name: 'Thiruvanmiyur', places: '290 places' },
    { name: 'Guindy', places: '330 places' },
    { name: 'Royapettah', places: '270 places' },
    { name: 'Egmore', places: '340 places' },
    { name: 'Alwarpet', places: '300 places' },
    { name: 'Teynampet', places: '360 places' },
    { name: 'Kodambakkam', places: '390 places' },
    { name: 'Perambur', places: '280 places' },
    { name: 'Kilpauk', places: '320 places' },
    { name: 'Triplicane', places: '310 places' },
    { name: 'Saidapet', places: '370 places' },
    { name: 'Ashok Nagar', places: '340 places' },
    { name: 'Vadapalani', places: '360 places' },
  ];

  const initialLocations = locations.slice(0, 8);
  const additionalLocations = locations.slice(8);

  return (
    <div className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-left mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-light mb-2 font-geologica text-gray-800">
            Popular localities in and around
            <span className="text-3xl md:text-4xl font-normal ml-2 font-geologica text-gray-800">
              Chennai
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {initialLocations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg md:text-xl font-extralight font-geologica text-gray-800">{location.name}</h2>
                <p className="text-sm md:text-base text-gray-600 font-extralight font-geologica">{location.places}</p>
              </div>
              <FaChevronRight className="text-gray-500" />
            </div>
          ))}
          {showMore &&
            additionalLocations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg md:text-xl font-geologica font-extralight text-gray-800">{location.name}</h2>
                  <p className="text-sm md:text-base text-gray-600 font-geologica font-extralight ">{location.places}</p>
                </div>
                <FaChevronRight className="text-gray-500" />
              </div>
            ))}
          <div
            className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex justify-between items-center cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            <div>
              <h2 className="text-lg md:text-xl font-geologica text-gray-800">
                {showMore ? 'See Less' : 'See More'}
              </h2>
            </div>
            {showMore ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
