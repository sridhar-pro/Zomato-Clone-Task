"use client";
import React, { useState } from 'react';

const GetApp = () => {
  const [selectedOption, setSelectedOption] = useState('Email');

  return (
    <div className="flex items-center p-10 bg-white mt-20">
      <div className="ml-64 w-64">
        <img src="/getapp.png" alt="App Promotion" className="max-w-full h-auto" />
      </div>
      <div className="w-1/2 pl-10">
        <h2 className="text-5xl font-light tracking-normal mb-4">Get the Zomato app</h2>
        <p className="text-gray-500 mb-1 font-extralight tracking-wider">We will send you a link, open it on your phone to download</p>
        <p className='text-gray-500 mb-6 font-extralight tracking-wider'>the app</p>

        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4 font-light text-base tracking-widest">
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
          <div className="flex items-center ml-8 font-light text-base tracking-widest">
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

        <div className="flex mb-4">
          <input 
            type="text" 
            placeholder={selectedOption === 'Email' ? 'Email' : 'Phone'} 
            className="w-full p-2 border border-gray-300 rounded-md mr-2"
          />
          <button className="w-60 py-2 text-white bg-red-500 font-light rounded-md mr-36">
            Share app link
          </button>
        </div>

        <p className="text-gray-600 mb-2">Download app from</p>

        <div className="flex space-x-2">
          <img src="/playstore.webp" alt="Play Store" className="w-36 h-10" />
          <img src="/appstore.webp" alt="App Store" className="w-36 h-10" />
          
        </div>
      </div>
    </div>
  );
};

export default GetApp;
