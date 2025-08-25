import React from 'react';
import { useUser } from '../../contexts/UserContext';
import { User, Sparkles } from 'lucide-react';

const NameStep: React.FC = () => {
  const { preferences, updatePreferences } = useUser();

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          What's Your Name?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          We'll personalize your song with a special greeting just for you!
        </p>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          value={preferences.name}
          onChange={(e) => updatePreferences({ name: e.target.value })}
          placeholder="Enter your first name"
          className="w-full px-6 py-4 text-xl text-center bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          maxLength={50}
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Sparkles className="h-6 w-6 text-blue-500" />
        </div>
      </div>

      {preferences.name && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 mb-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Perfect! Your song will include: 
            <span className="font-bold text-blue-600 dark:text-blue-400">
              "Welcome {preferences.name}!"
            </span>
          </p>
        </div>
      )}

      <div className="text-sm text-gray-500 dark:text-gray-400">
        <p>💡 Tip: Use the name you'd like to hear in your personalized song intro!</p>
      </div>
    </div>
  );
};

export default NameStep;