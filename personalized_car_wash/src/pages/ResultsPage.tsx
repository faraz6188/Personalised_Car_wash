import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAudio } from '../contexts/AudioContext';
import { useUser } from '../contexts/UserContext';
import { Download, Share2, RotateCcw, Heart, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import ShareModal from '../components/ShareModal';
import Logo from '../SgtCleanLogo.png';

const ResultsPage: React.FC = () => {
  const { currentSong, isPlaying, currentTime, duration, volume, play, pause, seek, setVolume } = useAudio();
  const { preferences } = useUser();
  const [showShareModal, setShowShareModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  if (!currentSong) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="container-mobile text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No song generated yet</h1>
          <Link to="/generate" className="btn-primary">Create Your Song</Link>
        </div>
      </div>
    );
  }

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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentSong.audioUrl;
    link.download = `${currentSong.title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(0.8);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePercentage = Math.round((isMuted ? 0 : volume) * 100);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container-mobile pt-8 pb-12">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-mobile">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Song is Ready! 🎉</h1>
          <p className="text-lg text-gray-300">{currentSong.personalizedGreeting}</p>
        </div>



        {/* Song Card */}
        <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-6 relative overflow-hidden border border-gray-700">
          <div className="absolute top-4 right-4 opacity-10">
            <img src={Logo} alt="" className="h-10 w-10" />
          </div>
          {/* Song Info */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{currentSong.title}</h2>
            <p className="text-gray-400">
              Duration: {Math.floor(currentSong.duration / 60)}:{(currentSong.duration % 60).toString().padStart(2, '0')}
            </p>
          </div>

          {/* Audio Player */}
          <div className="bg-gray-700 rounded-3xl p-6 shadow-inner mb-6">
            {/* Progress Bar */}
            <div className="mb-4">
              <div 
                className="w-full h-2 bg-gray-600 rounded-full overflow-hidden cursor-pointer"
                onClick={handleProgressClick}
              >
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-300">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Play Controls */}
            <div className="flex items-center justify-center space-x-6 mb-4">
              <button
                onClick={isPlaying ? pause : play}
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 touch-target"
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={toggleMute}
                className="p-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 touch-target"
              >
                {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <div className="flex-1 max-w-32 relative">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${volumePercentage}%, #6b7280 ${volumePercentage}%, #6b7280 100%)`,
                  }}
                />
              </div>
              <span className="text-sm text-gray-300 w-10 text-right">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <button
            onClick={handleDownload}
            className="btn-primary bg-gradient-to-r from-blue-600 to-blue-700"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Song
          </button>

          <button
            onClick={() => setShowShareModal(true)}
            className="btn-secondary border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            <Share2 className="h-5 w-5 mr-2" />
            Share Song
          </button>

          <Link to="/generate" className="inline-flex items-center justify-center w-full py-4 px-6 bg-white border-2 border-green-300 text-green-700 font-semibold rounded-2xl hover:bg-green-50 active:scale-95 transition-all duration-200 min-h-[56px] text-base">
            <RotateCcw className="h-5 w-5 mr-2" />
            Create Another
          </Link>
        </div>

        {/* Fun Facts */}
        <div className="bg-gray-800 rounded-3xl shadow-lg p-6 border border-gray-700 relative">
          <div className="absolute top-4 right-4 opacity-10">
            <img src={Logo} alt="" className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">🎵 Fun Facts</h3>
          <div className="space-y-3 text-sm">
            <p className="text-gray-300">
              ✨ This song is 100% unique and will never be generated exactly the same way again!
            </p>
            <p className="text-gray-300">
              ⏱️ Perfect 4-minute timing matches most car wash cycles.
            </p>
            <p className="text-gray-300">
              🤖 Created using advanced AI that analyzed thousands of musical patterns.
            </p>
            <p className="text-gray-300">
              🎤 Your personalized greeting makes this song exclusively yours!
            </p>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <ShareModal
          song={currentSong}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
};

export default ResultsPage;