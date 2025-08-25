import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

import { ArrowLeft, ArrowRight, Sparkles, User, Music, Heart, Car } from 'lucide-react';
import { generateSong } from '../services/api';
import { useCarSlider } from '../hooks/useCarSlider';
import Logo from '../SgtCleanLogo.png';

const genres = [
  { id: 'pop', name: 'Pop', emoji: '🎵', color: 'from-pink-500 to-rose-500' },
  { id: 'rock', name: 'Rock', emoji: '🎸', color: 'from-red-500 to-orange-500' },
  { id: 'electronic', name: 'Electronic', emoji: '🎛️', color: 'from-cyan-500 to-blue-500' },
  { id: 'jazz', name: 'Jazz', emoji: '🎺', color: 'from-purple-500 to-indigo-500' },
  { id: 'reggae', name: 'Reggae', emoji: '🌴', color: 'from-green-500 to-emerald-500' },
  { id: 'country', name: 'Country', emoji: '🤠', color: 'from-yellow-500 to-amber-500' },
  { id: 'hiphop', name: 'Hip-Hop', emoji: '🎤', color: 'from-gray-700 to-gray-900' },
  { id: 'classical', name: 'Classical', emoji: '🎼', color: 'from-violet-500 to-purple-500' }
];

const moods = ['Energetic', 'Relaxed', 'Happy', 'Chill', 'Upbeat', 'Peaceful'];

// Import car images
import toyotaImage from '../images/toyota.png';
import fordImage from '../images/ford.jpg';
import bmwImage from '../images/bmw.jpg';
import mercedesImage from '../images/mercedes.jpg';
import teslaImage from '../images/tesla.jpg';

const cars = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: '2022',
    photo: toyotaImage
  },
  {
    make: 'Ford',
    model: 'F-150',
    year: '2023',
    photo: fordImage
  },
  {
    make: 'BMW',
    model: '3 Series',
    year: '2022',
    photo: bmwImage
  },
  {
    make: 'Mercedes',
    model: 'C-Class',
    year: '2023',
    photo: mercedesImage
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    year: '2023',
    photo: teslaImage
  }
];

const GeneratePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const { preferences, updatePreferences } = useUser();

  const navigate = useNavigate();

  // Auto-select car based on user preferences
  const selectCarBasedOnPreferences = () => {
    const { genre, mood, artist } = preferences;

    // 1) Paired rules
    if (genre === 'hiphop' || artist?.toLowerCase().includes('eminem')) {
      return cars[2]; // BMW 3 Series (luxury, urban)
    }
    if (genre === 'pop' && mood === 'Energetic') {
      return cars[4]; // Tesla Model 3 (modern, electric)
    }
    if (genre === 'country' && mood === 'Relaxed') {
      return cars[0]; // Toyota Camry (reliable, comfortable)
    }
    if (genre === 'rock' && mood === 'Upbeat') {
      return cars[1]; // Ford F-150 (powerful, rugged)
    }
    if (genre === 'jazz' && mood === 'Chill') {
      return cars[3]; // Mercedes C-Class (elegant, sophisticated)
    }

    // 2) Genre-based fallbacks
    const genreCarMap: Record<string, typeof cars[0]> = {
      pop: cars[4], // Tesla
      electronic: cars[4], // Tesla
      rock: cars[1], // Ford F-150
      jazz: cars[3], // Mercedes
      classical: cars[3], // Mercedes
      hiphop: cars[2], // BMW
      country: cars[0], // Toyota
      reggae: cars[0], // Toyota
    };

    return genreCarMap[genre] || cars[0]; // Default to Toyota
  };

  // Initialize car slider with auto-selected car
  const getInitialCarIndex = () => {
    if (currentStep === 4 && preferences.genre) {
      const selectedCar = selectCarBasedOnPreferences();
      return cars.findIndex(car => 
        car.make === selectedCar.make && car.model === selectedCar.model
      );
    }
    return 0;
  };

  const carSlider = useCarSlider(cars, getInitialCarIndex());
  const { goToSlide, currentIndex } = carSlider;
  const displayCar = preferences.selectedCar ?? selectCarBasedOnPreferences();

  // Auto-select car when reaching Step 4 (recompute once per preference change)
  useEffect(() => {
    if (currentStep !== 4 || !preferences.genre) return;

    const selectedCar = selectCarBasedOnPreferences();

    // Only update context if car actually changed
    const prev = preferences.selectedCar;
    const changed = !prev || prev.make !== selectedCar.make || prev.model !== selectedCar.model;
    if (changed) {
      updatePreferences({ selectedCar });
    }

    // Align slider index if needed
    const idx = cars.findIndex(car => car.make === selectedCar.make && car.model === selectedCar.model);
    if (idx !== -1 && currentIndex !== idx) {
      goToSlide(idx);
    }
  }, [currentStep, preferences.genre, preferences.mood, preferences.artist, preferences.selectedCar, currentIndex, goToSlide, updatePreferences]);



  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    if (!preferences.name || !preferences.genre) return;

    // Use the currently selected car (either auto-selected or manually changed)
    // Don't override user's manual selection
    if (!preferences.selectedCar) {
      const selectedCar = selectCarBasedOnPreferences();
      updatePreferences({ selectedCar });
    }

    // Navigate to confirmation page
    navigate('/confirmation');
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return preferences.name.trim().length > 0;
      case 2: return preferences.genre.length > 0;
      case 3: return true;
      case 4: return preferences.selectedCar !== undefined;
      default: return false;
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center">
        <div className="container-mobile text-center text-white">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-spin">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
            <div className="absolute inset-4 bg-white/20 rounded-full flex items-center justify-center">
              <Music className="h-12 w-12 text-white animate-bounce-mobile" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Creating Your Song...</h1>
          <p className="text-xl mb-8 text-blue-100">AI is composing your 4-minute car wash anthem!</p>
          
          <div className="card-mobile bg-white/10 backdrop-blur-sm">
            <p className="text-lg">🎵 Each song is unique and personalized just for you!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container-mobile pt-8 pb-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-blue-400 mr-2" />
            <h1 className="text-3xl font-bold text-white">Create Your Song</h1>
          </div>
          
          {/* Progress */}
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  step === currentStep ? 'bg-blue-600' : step < currentStep ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-300">Step {currentStep} of 4</p>
        </div>

        {/* Step Content */}
        <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10">
            <img src={Logo} alt="" className="h-10 w-10" />
          </div>
          {/* Step 1: Name */}
          {currentStep === 1 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">What's Your Name?</h2>
              <p className="text-gray-300 mb-6">We'll personalize your song with a special greeting!</p>
              
              <input
                type="text"
                value={preferences.name}
                onChange={(e) => updatePreferences({ name: e.target.value })}
                placeholder="Enter your first name"
                className="input-mobile text-center"
                maxLength={50}
                autoFocus
              />
              
              {preferences.name && (
                              <div className="mt-4 p-4 bg-blue-900/20 rounded-xl">
                <p className="text-blue-300">
                  Perfect! Your song will include: <strong>"Welcome {preferences.name}!"</strong>
                </p>
              </div>
              )}
            </div>
          )}

          {/* Step 2: Genre */}
          {currentStep === 2 && (
            <div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Choose Your Genre</h2>
                <p className="text-gray-300">What music style fits your vibe?</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {genres.map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() => updatePreferences({ genre: genre.id })}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 touch-target ${
                      preferences.genre === genre.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${genre.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <span className="text-xl">{genre.emoji}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{genre.name}</h3>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Preferences */}
          {currentStep === 3 && (
            <div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Add Your Touch</h2>
                <p className="text-gray-300">Optional: Make it even more personal</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    What's your mood?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {moods.map((mood) => (
                      <button
                        key={mood}
                        onClick={() => updatePreferences({ mood: preferences.mood === mood ? '' : mood })}
                        className={`p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 touch-target ${
                          preferences.mood === mood
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                            : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Favorite artist? (Optional)
                  </label>
                  <input
                    type="text"
                    value={preferences.artist || ''}
                    onChange={(e) => updatePreferences({ artist: e.target.value })}
                    placeholder="e.g., Taylor Swift, The Beatles..."
                    className="input-mobile"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Car Selection */}
          {currentStep === 4 && (
            <div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                {/* <h2 className="text-2xl font-bold text-white mb-2">Your Car Details</h2> */}
                {/* <p className="text-gray-300">Based on your preferences, here's your ideal car selection</p> */}
              </div>
              
              {/* Car Details Display */}
              <div key={`${displayCar.make}-${displayCar.model}`} className="car-details-display mb-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Your Car Details</h3>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <p className="text-blue-300 text-sm">Brand</p>
                      <p className="text-white font-semibold transition-all duration-300">{displayCar.make}</p>
                    </div>
                    <div className="w-px h-8 bg-blue-500/30"></div>
                    <div className="text-center">
                      <p className="text-blue-300 text-sm">Model</p>
                      <p className="text-white font-semibold transition-all duration-300">{displayCar.model}</p>
                    </div>
                    <div className="w-px h-8 bg-blue-500/30"></div>
                    <div className="text-center">
                      <p className="text-blue-300 text-sm">Year</p>
                      <p className="text-white font-semibold transition-all duration-300">{displayCar.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Car Slider */}
              <div className="car-slider-container">
                <div className="car-slider">
                  <div 
                    className={`car-slide active`}
                  >
                    <img 
                      src={displayCar.photo} 
                      alt={`${displayCar.make} ${displayCar.model}`}
                      className="car-slide-image"
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
                    <div className="car-slide-content">
                      <h3 className="car-slide-title">{displayCar.make} {displayCar.model}</h3>
                      <p className="car-slide-year">{displayCar.year}</p>
                      <p className="car-slide-description">
                        {displayCar.make === 'Toyota' && 'Reliable and comfortable for your journey'}
                        {displayCar.make === 'Ford' && 'Powerful and rugged for adventure'}
                        {displayCar.make === 'BMW' && 'Luxury and performance combined'}
                        {displayCar.make === 'Mercedes' && 'Elegant sophistication for the refined'}
                        {displayCar.make === 'Tesla' && 'Modern electric innovation for the future'}
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Auto-selection info */}
              <div className="mt-6 p-4 bg-blue-900/20 rounded-xl border border-blue-500/30">
                <p className="text-blue-300 text-center">
                  <strong>Smart Selection:</strong> We've matched your {preferences.genre} music 
                  {preferences.mood && ` and ${preferences.mood.toLowerCase()} mood`} 
                  {preferences.artist && ` with ${preferences.artist}`} with your perfect car!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 touch-target ${
              currentStep === 1
                ? 'text-gray-500 cursor-not-allowed bg-gray-700'
                : 'text-white bg-gray-700 hover:bg-gray-600 border border-gray-600'
            }`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 touch-target ${
                canProceed()
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={!canProceed()}
              className={`flex items-center px-8 py-3 rounded-full font-bold transition-all duration-200 touch-target ${
                canProceed()
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Create My 4-Min Song!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;