// components/Button.tsx

import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string; // Add className prop
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-gray-400 hover:bg-gray-500 bg-opacity-70 text-white font-bold py-5 w-full rounded max-w-[14rem] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;