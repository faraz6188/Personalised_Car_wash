import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../SgtCleanLogo.png';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container-mobile">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Sgt. Clean Car Wash Tunes" className="h-12 w-12 rounded-lg shadow-lg" />
            <span className="font-bold text-2xl text-white">Sgt. Clean Car Wash Tunes</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {location.pathname !== '/' && (
          <div className="pb-4">
            <nav className="flex justify-center space-x-6">
              <Link
                to="/"
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/generate"
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Create
              </Link>
              <Link
                to="/partners"
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Partners
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;