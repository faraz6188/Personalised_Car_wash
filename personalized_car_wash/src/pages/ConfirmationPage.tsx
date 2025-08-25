import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useAudio } from '../contexts/AudioContext';
import { ArrowLeft, Sparkles, User, Music, Heart, Car, Check } from 'lucide-react';
import { generateSong } from '../services/api';
import Logo from '../SgtCleanLogo.png';

const ConfirmationPage: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { preferences } = useUser();
  const { setSong, setLoading } = useAudio();
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!preferences.name || !preferences.genre || !preferences.selectedCar) return;

    setIsGenerating(true);
    setLoading(true);

    try {
      const song = await generateSong(preferences);
      setSong(song);
      navigate('/results');
    } catch (error) {
      console.error('Error generating song:', error);
      alert('Sorry, there was an error generating your song. Please try again.');
    } finally {
      setIsGenerating(false);
      setLoading(false);
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
            <Check className="h-8 w-8 text-green-400 mr-2" />
            <h1 className="text-3xl font-bold text-white">Confirm Your Choices</h1>
          </div>
          <p className="text-gray-300">Review your selections before creating your song</p>
        </div>

        {/* User Choices Summary */}
        <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-8 relative overflow-hidden border border-gray-700">
          <div className="absolute top-4 right-4 opacity-10">
            <img src={Logo} alt="" className="h-10 w-10" />
          </div>

          {/* Name */}
          <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-700 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Name</h3>
              <p className="text-blue-400">{preferences.name}</p>
            </div>
          </div>

          {/* Genre */}
          <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-700 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <Music className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Music Genre</h3>
              <p className="text-purple-400 capitalize">{preferences.genre}</p>
            </div>
          </div>

          {/* Mood & Artist */}
          {(preferences.mood || preferences.artist) && (
            <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-700 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Preferences</h3>
                {preferences.mood && <p className="text-green-400">Mood: {preferences.mood}</p>}
                {preferences.artist && <p className="text-green-400">Artist: {preferences.artist}</p>}
              </div>
            </div>
          )}

          {/* Car */}
          {preferences.selectedCar && (
            <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-12 h-12 bg-gray-600 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={preferences.selectedCar.photo} 
                    alt={`${preferences.selectedCar.make} ${preferences.selectedCar.model}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <Car class="h-6 w-6 text-gray-400" />
                        </div>
                      `;
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Recognized Car</h3>
                  <p className="text-indigo-400">{preferences.selectedCar.make} {preferences.selectedCar.model} ({preferences.selectedCar.year})</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGenerate}
            className="w-full flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-200 touch-target bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Create My 4-Min Song!
          </button>

          <button
            onClick={() => navigate('/generate')}
            className="w-full flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 touch-target text-white bg-gray-700 hover:bg-gray-600 border border-gray-600"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage; 