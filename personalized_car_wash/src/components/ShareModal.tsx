import React, { useState } from 'react';
import { X, Copy, Facebook, Twitter, Mail, Check } from 'lucide-react';
import { GeneratedSong } from '../contexts/AudioContext';

interface ShareModalProps {
  song: GeneratedSong;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ song, onClose }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/results?song=${song.id}`;
  const shareText = `🎵 Check out my personalized car wash song: "${song.title}"! Created with Sgt. Clean Car Wash Tunes - Your Car. Your Song. Your Shine. 🚗✨`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent('Check out my personalized car wash song!');
    const body = encodeURIComponent(`${shareText}\n\nListen here: ${shareUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Share Your Song
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Song Info */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
            {song.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {song.personalizedGreeting}
          </p>
        </div>

        {/* Copy Link */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Share Link
          </label>
          <div className="flex">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg text-sm text-gray-600 dark:text-gray-400"
            />
            <button
              onClick={copyToClipboard}
              className={`px-4 py-2 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-lg transition-colors duration-200 ${
                copied
                  ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                  : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-500'
              }`}
            >
              {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Share on Social Media
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={shareOnFacebook}
              className="flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              <Facebook className="h-5 w-5 mr-2" />
              Facebook
            </button>
            
            <button
              onClick={shareOnTwitter}
              className="flex items-center justify-center px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-200"
            >
              <Twitter className="h-5 w-5 mr-2" />
              Twitter
            </button>
            
            <button
              onClick={shareByEmail}
              className="flex items-center justify-center px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email
            </button>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            💡 <strong>Tip:</strong> Your friends can listen to your song and create their own personalized car wash experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;