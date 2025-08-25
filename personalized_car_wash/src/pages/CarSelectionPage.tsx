import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useAudio } from '../contexts/AudioContext';
import { ArrowLeft, ArrowRight, Check, Car } from 'lucide-react';
import Logo from '../SgtCleanLogo.png';

const cars = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: '2022',
    photo: 'https://145.79.6.199/srgcleanapp/toyota-camry-2022.jpg'
  },
  {
    make: 'Ford',
    model: 'F-150',
    year: '2023',
    photo: 'https://145.79.6.199/srgcleanapp/ford-f-150-2023.jpg'
  },
  {
    make: 'BMW',
    model: '3 Series',
    year: '2022',
    photo: 'https://145.79.6.199/srgcleanapp/bmw-3series-2022.jpg'
  },
  {
    make: 'Mercedes',
    model: 'C-Class',
    year: '2023',
    photo: 'https://145.79.6.199/srgcleanapp/mercedes-c-class-2023.jpg'
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    year: '2023',
    photo: 'https://145.79.6.199/srgcleanapp/tesla-model3-2023.jpg'
  }
];

const CarSelectionPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
  const { preferences, updatePreferences } = useUser();
  const { currentSong } = useAudio();
  const navigate = useNavigate();

  // Auto-select a random car on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cars.length);
    setCurrentIndex(randomIndex);
    setSelectedCar(cars[randomIndex]);
  }, []);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? cars.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedCar(cars[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === cars.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedCar(cars[newIndex]);
  };

  const handleConfirm = () => {
    if (selectedCar) {
      // Update user preferences with selected car
      updatePreferences({ selectedCar });
      navigate('/results');
    }
  };

  const currentCar = cars[currentIndex];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container-mobile pt-8 pb-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-8 w-8 text-blue-400 mr-2" />
            <h1 className="text-3xl font-bold text-white">Select Your Car</h1>
          </div>
          <p className="text-gray-300">Choose the car for your personalized experience</p>
        </div>

        {/* Car Display Card */}
        <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-8 relative overflow-hidden border border-gray-700">
          <div className="absolute top-4 right-4 opacity-10">
            <img src={Logo} alt="" className="h-10 w-10" />
          </div>
          
          {/* Car Image */}
          <div className="mb-6">
            <div className="w-full h-48 bg-gray-700 rounded-2xl overflow-hidden mb-4">
              <img 
                src={currentCar.photo} 
                alt={`${currentCar.make} ${currentCar.model}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <Car class="h-16 w-16 text-gray-400" />
                    </div>
                  `;
                }}
              />
            </div>
          </div>

          {/* Car Details */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {currentCar.make} {currentCar.model}
            </h2>
            <p className="text-xl text-blue-400 mb-2">{currentCar.year}</p>
            <p className="text-gray-300">
              Perfect car for your personalized car wash experience!
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-6">
            {cars.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePrevious}
            className="flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 touch-target text-white bg-gray-700 hover:bg-gray-600 border border-gray-600"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous
          </button>

          <span className="text-gray-300 text-sm">
            {currentIndex + 1} of {cars.length}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 touch-target text-white bg-gray-700 hover:bg-gray-600 border border-gray-600"
          >
            Next
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-200 touch-target bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        >
          <Check className="h-5 w-5 mr-2" />
          Confirm Selection & Continue
        </button>

        {/* Back to Generate */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/generate')}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            ← Back to Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarSelectionPage; 