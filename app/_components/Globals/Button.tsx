import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`btn btn-secondary flex flex-grow justify-center items-center h-[4rem] m-3 text-white font-bold w-full rounded max-w-[50%] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
