import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Music, Sparkles, ArrowRight, Car } from 'lucide-react';
import Logo from '../SgtCleanLogo.png';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section - Mobile First */}
      <section className="container-mobile pt-8 pb-12">
        <div className="text-center">
          {/* Hero Icon */}
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-mobile relative">
            <Car className="h-12 w-12 text-blue-600" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src={Logo} alt="" className="h-5 w-5 rounded" />
            </div>
          </div>
          
          {/* Hero Text */}
          <h1 className="text-hero text-white mb-4 leading-tight">
            Your Car.<br />
            Your Song.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Your Shine.
            </span>
          </h1>
          
          <p className="text-subtitle text-gray-300 mb-8 px-4">
            Get personalized music selected just for your car wash experience
          </p>
          
          {/* CTA Button */}
          <Link to="/generate" className="btn-primary inline-flex items-center justify-center mb-6">
            <Play className="h-6 w-6 mr-3" />
            Select My Music
            <ArrowRight className="h-6 w-6 ml-3" />
          </Link>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">10K+</div>
              <div className="text-sm text-gray-300">Songs Made</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">4min</div>
              <div className="text-sm text-gray-300">Perfect Length</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-300">Unique</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section className="container-mobile py-12 relative">
        <div className="absolute top-4 right-4 opacity-10">
          <img src={Logo} alt="" className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          3 Simple Steps
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-4 flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Enter Your Name</h3>
              <p className="text-gray-300 text-sm">We'll personalize your song</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-4 flex items-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Pick Your Style</h3>
              <p className="text-gray-300 text-sm">Choose your preferred music genre</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-4 flex items-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Enjoy & Share</h3>
              <p className="text-gray-300 text-sm">Play, download, and share</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Mobile Optimized */}
      <section className="py-12">
        <div className="container-mobile relative">
          <div className="absolute top-4 right-4 opacity-10">
            <img src={Logo} alt="" className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            Why Choose Sgt. Clean Car Wash Tunes?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-4">
              <div className="flex items-center mb-3">
                <Sparkles className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="font-semibold text-white">Curated Collection</h3>
              </div>
              <p className="text-gray-300">Hand-picked music from our premium collection</p>
            </div>
            
            <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-4">
              <div className="flex items-center mb-3">
                <Music className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="font-semibold text-white">Perfect Timing</h3>
              </div>
              <p className="text-gray-300">Great music for your car wash experience</p>
            </div>
            
            <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-4">
              <div className="flex items-center mb-3">
                <ArrowRight className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="font-semibold text-white">Easy Sharing</h3>
              </div>
              <p className="text-gray-300">Download and share your personalized anthem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-mobile py-12">
        <div className="bg-gray-800 rounded-3xl shadow-lg p-6 text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10">
            <img src={Logo} alt="" className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Create?</h2>
          <p className="mb-6 text-gray-300">Join thousands who've made their car wash musical</p>
          <Link to="/generate" className="inline-flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all duration-200 min-h-[56px] text-lg">
            <Sparkles className="h-5 w-5 mr-2" />
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;