import React, { useState, useEffect } from 'react';
import { Sparkles, Music, Car, Headphones, Clock } from 'lucide-react';

const tips = [
  "🎵 Did you know? Each song is completely unique and generated just for you!",
  "🚗 Perfect timing: Your song will be exactly 4 minutes - ideal for most car washes!",
  "✨ Our AI considers your name, genre, and preferences to create something special.",
  "🎧 You'll be able to download and share your personalized car wash anthem.",
  "🌟 Over 10,000 unique songs have been generated for happy customers!",
  "🎼 Each song includes a personalized greeting with your name.",
  "🎨 The AI blends multiple musical elements to match your exact preferences."
];

const GeneratingStep: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cycle through tips
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 3;
      });
    }, 200);

    return () => {
      clearInterval(tipInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        {/* Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer spinning circle */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-spin">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
            
            {/* Inner pulsing circle */}
            <div className="absolute inset-4 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Music className="h-12 w-12 text-white animate-bounce" />
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-4 -left-4 animate-float-slow">
              <Sparkles className="h-6 w-6 text-yellow-300" />
            </div>
            <div className="absolute -top-4 -right-4 animate-float-delayed">
              <Car className="h-6 w-6 text-yellow-300" />
            </div>
            <div className="absolute -bottom-4 -left-4 animate-float-delayed">
              <Headphones className="h-6 w-6 text-yellow-300" />
            </div>
            <div className="absolute -bottom-4 -right-4 animate-float-slow">
              <Clock className="h-6 w-6 text-yellow-300" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
          Creating Your Song...
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Our AI is composing your personalized car wash anthem!
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-white/20 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-blue-100 text-sm">
            {Math.round(progress)}% complete
          </p>
        </div>

        {/* Rotating Tips */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-h-[100px] flex items-center justify-center">
          <p className="text-lg text-white/90 transition-opacity duration-500">
            {tips[currentTip]}
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default GeneratingStep;