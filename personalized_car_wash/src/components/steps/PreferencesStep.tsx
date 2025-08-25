import React from 'react';
import { useUser } from '../../contexts/UserContext';
import { Heart, Star, Zap } from 'lucide-react';

const moods = [
  'Energetic', 'Relaxed', 'Happy', 'Chill', 'Upbeat', 'Mellow', 'Pumped', 'Peaceful'
];

const vibes = [
  'Morning Drive', 'Weekend Vibes', 'Road Trip', 'City Cruise', 'Sunset Drive', 
  'Party Time', 'Workout Energy', 'Coffee Shop'
];

const PreferencesStep: React.FC = () => {
  const { preferences, updatePreferences } = useUser();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Star className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Fine-tune Your Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          These are optional, but they'll help us create the perfect song for you!
        </p>
      </div>

      <div className="space-y-8">
        {/* Mood Selection */}
        <div>
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-red-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              What's your mood?
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => updatePreferences({ 
                  mood: preferences.mood === mood ? '' : mood 
                })}
                className={`p-3 rounded-xl border-2 font-medium transition-all duration-200 ${
                  preferences.mood === mood
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Favorite Artist */}
        <div>
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Favorite artist or band? (Optional)
            </h3>
          </div>
          
          <input
            type="text"
            value={preferences.artist || ''}
            onChange={(e) => updatePreferences({ artist: e.target.value })}
            placeholder="e.g., The Beatles, Taylor Swift, Daft Punk..."
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-800 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Vibe Selection */}
        <div>
          <div className="flex items-center mb-4">
            <Star className="h-6 w-6 text-purple-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              What vibe are you going for?
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {vibes.map((vibe) => (
              <button
                key={vibe}
                onClick={() => updatePreferences({ 
                  vibe: preferences.vibe === vibe ? '' : vibe 
                })}
                className={`p-3 rounded-xl border-2 font-medium transition-all duration-200 ${
                  preferences.vibe === vibe
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {vibe}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      {(preferences.mood || preferences.artist || preferences.vibe) && (
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Your preferences:</h4>
          <div className="space-y-1 text-gray-700 dark:text-gray-300">
            {preferences.mood && <p>• Mood: <span className="font-medium">{preferences.mood}</span></p>}
            {preferences.artist && <p>• Inspired by: <span className="font-medium">{preferences.artist}</span></p>}
            {preferences.vibe && <p>• Vibe: <span className="font-medium">{preferences.vibe}</span></p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PreferencesStep;