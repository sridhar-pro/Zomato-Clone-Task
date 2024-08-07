"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CollapsibleBox = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 md:p-6 mb-4 rounded-lg shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg md:text-xl font-extralight font-geologica text-gray-800">{title}</h2>
        {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
      </div>
      {isOpen && (
        <ul className="mt-4 ml-4 list-none flex flex-wrap text-gray-600 font-extralight font-geologica text-sm md:text-base">
          {content.map((item, index) => (
            <li key={index} className="mr-4 mb-2 flex items-center">
              <span className="mr-2">&#8226;</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Explore = () => {
  const popularCuisines = [
    "Bakery food near me",
    "Beverages food near me",
    "Biryani food near me",
    "Burger food near me",
    "Chinese food near me",
    "Desserts food near me",
    "Ice Cream food near me",
    "Juices food near me",
    "Momos food near me",
    "Mughlai food near me",
    "North Indian food near me",
    "Pizza food near me",
    "Rolls food near me",
    "Sandwich food near me",
    "Seafood food near me",
    "Shake food near me",
    "Sichuan food near me",
    "South Indian food near me",
    "Street food near me",
    "Tea food near me",
  ];

  const popularRestaurantTypes = [
    "Fine Dining",
    "Casual Dining",
    "Family Style",
    "Fast Casual",
    "Cafe",
    "Buffet",
    "Food Truck",
    "Pop-Up Restaurant",
    "Ghost Restaurant",
  ];

  const topRestaurantChains = [
    "McDonald's",
    "Subway",
    "Starbucks",
    "KFC",
    "Burger King",
    "Domino's Pizza",
    "Pizza Hut",
    "Taco Bell",
    "Dunkin'",
    "Chick-fil-A",
  ];

  const citiesWeDeliverTo = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  return (
    <div className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="text-left mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-normal font-geologica mb-2 text-gray-800">
            Explore options near me
          </h1>
        </div>
        <CollapsibleBox title="Popular cuisines near me" content={popularCuisines} />
        <CollapsibleBox title="Popular restaurant types near me" content={popularRestaurantTypes} />
        <CollapsibleBox title="Top Restaurant Chains" content={topRestaurantChains} />
        <CollapsibleBox title="Cities We Deliver To" content={citiesWeDeliverTo} />
      </div>
    </div>
  );
};

export default Explore;
