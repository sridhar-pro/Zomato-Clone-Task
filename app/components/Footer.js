"use client"
import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaGlobe, FaChevronDown } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-center mb-8">
          <img src="/logo-2.png" alt="Logo" className="h-7" />
          <div className="flex space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 font-extralight text-sm text-gray-500 p-2 rounded-md flex items-center w-20">
                <option value="IN">India 🇮🇳</option>
                <option value="UAE">UAE 🇦🇪</option>
              </select>
              <FaChevronDown className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border font-extralight text-sm text-gray-500 border-gray-300 p-2 rounded-md flex items-center">
                <option value="EN">English</option>
                <option value="ES">Spanish</option>
                <option value="FR">French</option>
                <option value="DE">German</option>
                <option value="CN">Chinese</option>
                <option value="JA">Japanese</option>
                <option value="RU">Russian</option>
                <option value="IT">Italian</option>
                <option value="KO">Korean</option>
                <option value="PT">Portuguese</option>
                <option value="AR">Arabic</option>
              </select>
              <FaChevronDown className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 tracking-wide">
          <div>
            <h2 className="font-light text-base uppercase mb-2">About Zomato</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button className="font-extralight">Who We Are</button></li>
              <li><button className="font-extralight">Blog</button></li>
              <li><button className="font-extralight">Work With Us</button></li>
              <li><button className="font-extralight">Investor Relations</button></li>
              <li><button className="font-extralight">Report Fraud</button></li>
              <li><button className="font-extralight">Press Kit</button></li>
              <li><button className="font-extralight">Contact Us</button></li>
            </ul>
          </div>
          <div>
            <h2 className="font-light text-base uppercase mb-2">Zomaverse</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button className="font-extralight">Zomato</button></li>
              <li><button className="font-extralight">Blinkit</button></li>
              <li><button className="font-extralight">Feeding India</button></li>
              <li><button className="font-extralight">Hyperpure</button></li>
              <li><button className="font-extralight">Zomato Live</button></li>
              <li><button className="font-extralight">Zomaland</button></li>
              <li><button className="font-extralight">Weather Union</button></li>
            </ul>
          </div>
          <div>
            <h2 className="font-light text-base uppercase mb-2">For Restaurants</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button className="font-extralight">Partner With Us</button></li>
              <li><button className="font-extralight">Apps For You</button></li>
            </ul>
          </div>
          <div>
            <h2 className="font-light text-base uppercase mb-2">Learn More</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button className="font-extralight">Privacy</button></li>
              <li><button className="font-extralight">Security</button></li>
              <li><button className="font-extralight">Terms</button></li>
              <li><button className="font-extralight">Sitemap</button></li>
            </ul>
          </div>
          <div>
            <h2 className="font-light text-base uppercase mb-2">Social Links</h2>
            <div className="flex space-x-4 mb-4">
              <FaLinkedin className="h-4 w-4" />
              <FaInstagram className="h-4 w-4" />
              <FaTwitter className="h-4 w-4" />
              <FaYoutube className="h-4 w-4" />
              <FaFacebook className="h-4 w-4" />
            </div>
            <div className="flex flex-col space-y-4">
              <img src="/appstore.webp" alt="App Store" className="w-36 h-10" />
              <img src="/playstore.webp" alt="Play Store" className="w-36 h-10" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 text-sm font-extralight text-gray-500">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
