import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Heart } from 'lucide-react';
import Logo from '../SgtCleanLogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container-mobile py-8">
        {/* Brand */}
        <div className="text-center mb-6 relative">
          <div className="flex items-center justify-center mb-3">
            <img src={Logo} alt="Sgt. Clean Car Wash Tunes" className="h-8 w-8 rounded mr-2" />
            <h3 className="text-xl font-bold">Sgt. Clean Car Wash Tunes</h3>
          </div>
          <p className="text-gray-400 text-sm">Your Car. Your Song. Your Shine.</p>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link 
            to="/privacy" 
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            <Shield className="h-4 w-4 mr-1" />
            Privacy
          </Link>
          <Link 
            to="/partners" 
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            <Heart className="h-4 w-4 mr-1" />
            Partners
          </Link>
          <a 
            href="mailto:support@sgtcleancarwashtunes.com" 
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            <Mail className="h-4 w-4 mr-1" />
            Support
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">© 2025 Sgt. Clean Car Wash Tunes. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-1">Made with AI and ♪ for car wash experiences</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;