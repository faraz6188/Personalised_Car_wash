import React from 'react';
import { useUser } from '../../contexts/UserContext';
import { Music } from 'lucide-react';

const genres = [
  { 
    id: 'pop', 
    name: 'Pop', 
    description: 'Upbeat and catchy',
    color: 'from-pink-500 to-rose-500',
    emoji: '🎵'
  },
  { 
    id: 'rock', 
    name: 'Rock', 
    description: 'Energetic and powerful',
    color: 'from-red-500 to-orange-500',
    emoji: '🎸'
  },
  { 
    id: 'electronic', 
    name: 'Electronic', 
    description: 'Modern and synthesized',
    color: 'from-cyan-500 to-blue-500',
    emoji: '🎛️'
  },
  { 
    id: 'jazz', 
    name: 'Jazz', 
    description: 'Smooth and sophisticated',
    color: 'from-purple-500 to-indigo-500',
    emoji: '🎺'
  },
  { 
    id: 'reggae', 
    name: 'Reggae', 
    description: 'Laid-back and groovy',
    color: 'from-green-500 to-emerald-500',
    emoji: '🌴'
  },
  { 
    id: 'country', 
    name: 'Country', 
    description: 'Warm and storytelling',
    color: 'from-yellow-500 to-amber-500',
    emoji: '🤠'
  },
  { 
    id: 'hiphop', 
    name: 'Hip-Hop', 
    description: 'Rhythmic and urban',
    color: 'from-gray-700 to-gray-900',
    emoji: '🎤'
  },
  { 
    id: 'classical', 
    name: 'Classical', 
    description: 'Elegant and timeless',
    color: 'from-violet-500 to-purple-500',
    emoji: '🎼'
  }
];

const GenreStep: React.FC = () => {
  const { preferences, updatePreferences } = useUser();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Music className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Choose Your Genre
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          What kind of music gets you in the mood for a sparkling clean car?
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => updatePreferences({ genre: genre.id })}
            className={`relative p-4 rounded-2xl border-2 transition-all duration-200 transform hover:scale-105 ${
              preferences.genre === genre.id
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800 hover:shadow-md'
            }`}
          >
            {preferences.genre === genre.id && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            
            <div className={`w-12 h-12 bg-gradient-to-br ${genre.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
              <span className="text-2xl">{genre.emoji}</span>
            </div>
            
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              {genre.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {genre.description}
            </p>
          </button>
        ))}
      </div>

      {preferences.genre && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-4 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Excellent choice! We'll create a 
            <span className="font-bold text-purple-600 dark:text-purple-400 mx-1">
              {genres.find(g => g.id === preferences.genre)?.name}
            </span>
            masterpiece for your car wash experience.
          </p>
        </div>
      )}
    </div>
  );
};

export default GenreStep;