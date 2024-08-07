"use client"
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  return (
    <div className="relative w-full mt-8"> 
      <div className="flex items-center bg-white rounded-md shadow-lg overflow-hidden h-14">
        <div className="flex items-center px-4">
          <FaMapMarkerAlt className="text-red-400 mr-2" />
          <select 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="text-gray-700 font-geologica text-base py-2 outline-none bg-transparent">
            <option value="" disabled>Select Location</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
           
          </select>
        </div>
        <div className="w-px h-6 bg-gray-300 mx-4"></div>
        <div className="flex items-center flex-1 px-4">
          <FaSearch className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search for restaurant, cuisine or a dish" 
            className="w-full text-gray-700 font-geologica text-base font-extralight py-2 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
