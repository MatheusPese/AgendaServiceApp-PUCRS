import React, { ReactNode } from 'react';

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void;
  className?: string; // Add className prop
  cardType?: "square" | "rect";
  title?:string;
  footer?:string;
}


const DataCard: React.FC<ButtonProps> = ({ title="title",  onClick, cardType = "square", className = "", children, footer="" }) => {
    let col_span = "col-span-1"
    let warning = ""
    if (cardType !== "square"){
        col_span = "col-span-2"
    }

    if (!children){
      warning = "border-red-500 border-2"
    }

    return (
          <div className={`
            ${className} ${warning} ${col_span}
            flex flex-col justify-between items-center
            bg-[rgb(255,255,255)]  rounded-2xl text-left text-black w-full h-full p-4
          `} 
          onClick={onClick}>
            <div className='flex items-center justify-center font-bold w-full'>
              {title}
            </div>
            <div className='w-full'>{children}</div>
            <div className="w-full">{footer}</div>
          </div>
        );

};

export default DataCard;
