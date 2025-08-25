import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {Math.round(progress)}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        <span>Your Info</span>
        <span>Music Style</span>
        <span>Perfect Touch</span>
      </div>
    </div>
  );
};

export default ProgressBar;