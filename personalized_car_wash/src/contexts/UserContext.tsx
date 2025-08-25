import React, { createContext, useContext, useState } from 'react';

export interface Car {
  make: string;
  model: string;
  year: string;
  photo: string;
}

export interface UserPreferences {
  name: string;
  genre: string;
  mood?: string;
  artist?: string;
  vibe?: string;
  selectedCar?: Car;
}

interface UserContextType {
  preferences: UserPreferences;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  resetPreferences: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

const initialPreferences: UserPreferences = {
  name: '',
  genre: '',
  mood: '',
  artist: '',
  vibe: ''
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(initialPreferences);

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...updates }));
  };

  const resetPreferences = () => {
    setPreferences(initialPreferences);
  };

  return (
    <UserContext.Provider value={{ preferences, updatePreferences, resetPreferences }}>
      {children}
    </UserContext.Provider>
  );
};