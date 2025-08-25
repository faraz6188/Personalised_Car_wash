import React, { createContext, useContext, useState, useRef } from 'react';

export interface GeneratedSong {
  id: string;
  title: string;
  audioUrl: string;
  duration: number;
  personalizedGreeting: string;
  createdAt: Date;
}

interface AudioContextType {
  currentSong: GeneratedSong | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isLoading: boolean;
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  setSong: (song: GeneratedSong) => void;
  setLoading: (loading: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<GeneratedSong | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const [isLoading, setIsLoading] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const setVolume = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolumeState(newVolume);
    }
  };

  const setSong = (song: GeneratedSong) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setCurrentSong(song);
    setIsPlaying(false);
    setCurrentTime(0);
    
    // Create new audio element
    const audio = new Audio(song.audioUrl);
    audioRef.current = audio;
    
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });
    
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });
    
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });
    
    audio.volume = volume;
  };

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <AudioContext.Provider value={{
      currentSong,
      isPlaying,
      currentTime,
      duration,
      volume,
      isLoading,
      play,
      pause,
      seek,
      setVolume,
      setSong,
      setLoading
    }}>
      {children}
    </AudioContext.Provider>
  );
};