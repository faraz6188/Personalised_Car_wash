import { useState, useEffect, useCallback } from 'react';

interface Car {
  make: string;
  model: string;
  year: string;
  photo: string;
}

export const useCarSlider = (cars: Car[], initialIndex: number = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  }, [cars.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  }, [cars.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return {
    currentIndex,
    currentCar: cars[currentIndex],
    nextSlide,
    prevSlide,
    goToSlide,
  };
}; 