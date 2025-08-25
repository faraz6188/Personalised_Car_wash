import React, { useState, useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import Logo from '../SgtCleanLogo.png';

const AudioPlayer: React.FC = () => {
  const { 
    currentSong, 
    isPlaying, 
    currentTime, 
    duration, 
    volume, 
    play, 
    pause, 
    seek, 
    setVolume 
  } = useAudio();

  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);

  if (!currentSong) return null;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    const newTime = clickRatio * duration;
    seek(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };

  const skipTime = (seconds: number) => {
    const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
    seek(newTime);
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 relative">
      {/* Subtle Logo */}
      <div className="absolute top-4 right-4 opacity-10">
        <img src={Logo} alt="" className="h-8 w-8" />
      </div>
      
      {/* Song Info */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
          <Play className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
          Now Playing
        </h3>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div 
          className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full cursor-pointer"
          onClick={handleProgressClick}
        >
          <div 
            className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full ml-auto -mt-1 transform translate-x-2 shadow-lg"></div>
          </div>
        </div>
        
        <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-6 mb-6">
        <button
          onClick={() => skipTime(-10)}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          title="Skip back 10s"
        >
          <SkipBack className="h-6 w-6" />
        </button>

        <button
          onClick={isPlaying ? pause : play}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {isPlaying ? (
            <Pause className="h-8 w-8" />
          ) : (
            <Play className="h-8 w-8 ml-1" />
          )}
        </button>

        <button
          onClick={() => skipTime(10)}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          title="Skip forward 10s"
        >
          <SkipForward className="h-6 w-6" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center justify-center space-x-3">
        <button
          onClick={toggleMute}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
        
        <div className="flex-1 max-w-32">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <span className="text-sm text-gray-600 dark:text-gray-400 w-10 text-right">
          {Math.round((isMuted ? 0 : volume) * 100)}%
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;