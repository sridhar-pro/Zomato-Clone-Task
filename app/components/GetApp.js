"use client";
import React, { useState } from 'react';

const GetApp = () => {
  const [selectedOption, setSelectedOption] = useState('Email');

  return (
    <div className="flex flex-col md:flex-row items-center p-6 md:p-10 bg-white mt-8 md:mt-20">
      <div className="w-full md:w-1/3 mb-6 md:mb-0 md:ml-10">
        <img src="/getapp.png" alt="App Promotion" className="max-w-full h-auto" />
      </div>
      <div className="w-full md:w-2/3 pl-0 md:pl-10">
        <h2 className="text-3xl md:text-5xl font-light tracking-normal mb-4">Get the Zomato app</h2>
        <p className="text-gray-500 mb-1 font-extralight tracking-wider">We will send you a link, open it on your phone to download</p>
        <p className='text-gray-500 mb-6 font-extralight tracking-wider'>the app</p>

        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4 font-light text-base tracking-widest">
            <input 
              type="radio" 
              id="email" 
              name="contact" 
              value="Email" 
              checked={selectedOption === 'Email'} 
              onChange={() => setSelectedOption('Email')} 
              className="mr-2"
            />
            <label htmlFor="email" className="text-gray-500">Email</label>
          </div>
          <div className="flex items-center font-light text-base tracking-widest">
            <input 
              type="radio" 
              id="phone" 
              name="contact" 
              value="Phone" 
              checked={selectedOption === 'Phone'} 
              onChange={() => setSelectedOption('Phone')} 
              className="mr-2"
            />
            <label htmlFor="phone" className="text-gray-500">Phone</label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
          <input 
            type="text" 
            placeholder={selectedOption === 'Email' ? 'Email' : 'Phone'} 
            className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
          />
          <button className="w-full md:w-1/3 py-2 text-white bg-red-500 font-light rounded-md">
            Share app link
          </button>
        </div>

        <p className="text-gray-600 mb-2">Download app from</p>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
          <img src="/playstore.webp" alt="Play Store" className="w-32 h-8 md:w-36 md:h-10 mb-2 md:mb-0" />
          <img src="/appstore.webp" alt="App Store" className="w-32 h-8 md:w-36 md:h-10" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
