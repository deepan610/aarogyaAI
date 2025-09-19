
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <svg
          className="h-10 w-10 text-blue-600 mr-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L12 2C17.52 2 22 6.48 22 12L22 12C22 17.52 17.52 22 12 22L12 22C6.48 22 2 17.52 2 12L2 12C2 6.48 6.48 2 12 2L12 2z" />
          <path d="M12 8L12 16" />
          <path d="M8 12L16 12" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800">
          Aarogya<span className="text-blue-600">AI</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
