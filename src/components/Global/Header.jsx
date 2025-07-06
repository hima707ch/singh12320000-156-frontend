import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg fixed w-full top-0 z-50">
      <div id="Header_2" className="container mx-auto px-4">
        <div id="Header_3" className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img id="Header_4" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full hover:opacity-80 transition-opacity" />
            <span id="Header_5" className="text-2xl font-bold hover:text-blue-200 transition-colors">PropertyHub</span>
          </Link>

          <div id="Header_6" className="hidden md:flex items-center space-x-8">
            <nav id="Header_7" className="flex space-x-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'Properties', path: '/propertylistingpage' },
                { name: 'Profile', path: '/userprofilepage' },
                { name: 'Contact', path: '/contactpage' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-blue-200 transition-colors ${location.pathname === item.path ? 'border-b-2 border-white' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <form id="Header_8" onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 w-48"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800">
                🔍
              </button>
            </form>

            <div id="Header_9" className="flex space-x-4">
              <Link
                to="/loginpage"
                className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="px-4 py-2 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>

          <button
            id="Header_10"
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div id="Header_11" className="md:hidden pb-4">
            <nav id="Header_12" className="flex flex-col space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Properties', path: '/propertylistingpage' },
                { name: 'Profile', path: '/userprofilepage' },
                { name: 'Contact', path: '/contactpage' },
                { name: 'Login', path: '/loginpage' },
                { name: 'Register', path: '/registerpage' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-blue-200 transition-colors ${location.pathname === item.path ? 'border-b-2 border-white' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <form id="Header_13" onSubmit={handleSearch} className="mt-4">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;