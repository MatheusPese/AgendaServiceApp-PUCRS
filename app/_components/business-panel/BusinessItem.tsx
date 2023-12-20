import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string; // Add className prop
}

const businessItem: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`${className} w-full bg-black bg-opacity-20 p-5 text-left`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default businessItem;
