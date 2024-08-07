import React from 'react';
import SearchBar from "./components/SearchBar";
import GridSection from './components/GridSection';
import Collection from './components/Collection';
import Locations from './components/Locations';
import Explore from './components/Explore';
import Footer from './components/Footer';
import GetApp from './components/GetApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <div className="relative h-[60vh] text-white bg-cover bg-center" style={{ backgroundImage: "url('/background3.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-0 left-0 right-0 p-4 flex flex-col md:flex-row justify-between items-center z-50">
          <div className="flex items-center mb-4 md:mb-0">
            <a href="/get-the-app" className="text-sm font-medium font-geologica flex items-center space-x-2">
              <FontAwesomeIcon icon={faDownload} className="w-4" /> 
              <span>Get the App</span>
            </a>
          </div>
          <div className="flex flex-wrap space-x-4 md:space-x-10">
            <a href="/investor-relations" className="text-base font-extralight font-geologica">Investor Relations</a>
            <a href="/add-restaurant" className="text-base font-extralight font-geologica">Add Restaurant</a>
            <a href="/login" className="text-base font-extralight font-geologica">Log In</a>
            <a href="/signup" className="text-base font-extralight font-geologica">Sign Up</a>
          </div>
        </div>
        <main className="relative flex flex-col items-center text-center pt-24">
          <div className="flex flex-col items-center mt-3">
            <img 
              src="/logo.png" 
              alt="Zomato logo" 
              className="mb-4 w-64 h-auto md:w-72"  
            />
            <h1 className="text-3xl md:text-4xl font-extralight font-geologica mt-4">
              Discover the best food & drinks in{' '}
              <span className="text-white">Chennai</span>
            </h1>
            <SearchBar />
          </div>
        </main>
      </div>
      <GridSection />
      <Collection />
      <Locations />
      <GetApp />
      <Explore />
      <Footer />
    </div>
  );
}
