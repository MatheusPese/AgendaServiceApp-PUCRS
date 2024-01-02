import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string; // Add className prop
  cardType?: "square" | "rect";
}


// TODO: Differentiate the render based on the cardType

const AgendaCard: React.FC<ButtonProps> = ({ children, onClick, cardType = "square", className = "" }) => {
    if (cardType === "square"){
      return (
            // TODO: Change styles to match cardType to square
            <button className={`${className} flex-1 w-full justify-center bg-[rgba(0,0,0,0.3)] text-left p-10`} onClick={onClick}>
              {children}
            </button>
          );
    }
    else{
      return (
            // TODO: Change styles to match cardType to rect
            <button className={`${className}`} onClick={onClick}>
              {children}
            </button>
          );
    }

};

export default AgendaCard;
