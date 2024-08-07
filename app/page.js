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
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
          <div className="flex items-center">
            <a href="/get-the-app" className="mt-3 ml-20 text-sm font-medium font-geologica tracking-normal flex items-center">
              <FontAwesomeIcon icon={faDownload} className="mr-2 w-3" /> 
              Get the App
            </a>
          </div>
          <div className="flex space-x-10 mr-36">
            <a href="/investor-relations" className="mt-3 text-base font-extralight font-geologica tracking-wide">Investor Relations</a>
            <a href="/add-restaurant" className="mt-3 text-base font-extralight font-geologica tracking-wide">Add Restaurant</a>
            <a href="/login" className="mt-3 text-base font-extralight font-geologica tracking-wide">Log In</a>
            <a href="/signup" className="mt-3 text-base font-extralight font-geologica tracking-wide">Sign Up</a>
          </div>
        </div>
        <main className="relative flex flex-col items-center text-center pt-24">
          <div className="flex flex-col items-center mt-3">
            <img 
              src="/logo.png" 
              alt="Small decorative" 
              className="mb-4 w-72 h-auto"  
            />
            <h1 className="text-4xl font-extralight font-geologica tracking-normal mt-4">
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
