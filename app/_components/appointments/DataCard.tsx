import React, { ReactNode } from 'react';

interface ButtonProps {
  bodyText: string;
  onClick?: () => void;
  className?: string; // Add className prop
  cardType?: "square" | "rect";
  title?:string;
  footer?:string;
}


const DataCard: React.FC<ButtonProps> = ({ title="title",  onClick, cardType = "square", className = "", bodyText, footer="" }) => {
    let aspectRatio = "aspect-square";
    let col_span = "col-span-1"
    let warning = ""
    if (cardType !== "square"){
        aspectRatio = "aspect-[2/1]";
        col_span = "col-span-2"
    }

    if (bodyText === ""){
      warning = "border-red-500 border-2"
    }

    return (
          <button className={`
            ${className} ${warning} ${aspectRatio} ${col_span}
            flex flex-col justify-between items-center
            bg-[rgb(255,255,255)]  rounded-2xl text-left text-black
          `} 
          onClick={onClick}>
            <div className='flex items-center justify-center font-bold'>
              {title}
            </div>
            <div className='flex items-center justify-center'>{bodyText}</div>
            <div>{footer}</div>
          </button>
        );

};

export default DataCard;
