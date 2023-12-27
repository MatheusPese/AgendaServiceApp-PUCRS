import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string; // Add className prop
}

const AgendaCard: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`${className} flex-1 w-full bg-[rgba(0,0,0,0.3)] text-left p-10`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AgendaCard;
