import React from 'react';

interface RandomButtonProps {
  buttonTitle?: string;
  buttonUrl?: string;
}

const RandomButton: React.FC<RandomButtonProps> = ({ buttonTitle, buttonUrl }) => {
  if (!buttonTitle) {
    return null; 
  }

  return (
    <div className="text-center mt-4">
      <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-100 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            {buttonTitle}
          </div>
        </button>
      </a>
    </div>
  );
};

export default RandomButton;
