import React, { ReactNode } from 'react';

type Styles = "danger" | "success" | "secondary" | "primary" | "transparent" | undefined;

interface Props  {

  onClick?: () => void;
  buttonText?: string;
  customStyle: Styles;
  type: "button" | "submit" | "reset";
  className?: any;
  size: "tiny" | "small" | "medium" | "large";
  [props: string]: any;

  children?: ReactNode;
}

const Button: React.FC<Props> = ({ buttonText = "", customStyle, size="small", type, onClick, className, children, ...props}) => {
  let style = "";
  customStyle === "secondary"
  ? style = "btn-secondary"
  : customStyle === "success"
  ? style ="btn-success"
  : customStyle === "danger"
  ? style = "btn-danger"
  : customStyle === "transparent"
  ? style = "bg-[#00000033] hover:bg-[#00000066]"
  : style = "btn-primary"

  return (
    <button
      type = {type}
      onClick={onClick}
      className={`btn py-2 px-8 ${style} ${className}`}
      {...props}
    >
      <div
        className={`[font-family:'Inter',Helvetica] text-white relative text-center
          ${customStyle === "danger" ? "underline font-bold" : ""} 
          ${size === "tiny" ? "text-[1vh]": 
            size === "small" ? "text-[2vh]": 
            size === "medium" ? "text-[3vh]" : 
            size === "large" ? "text-[4vh]" : ""
        }
        `}
      >
        {buttonText}
        {children}
      </div>
    </button>
  );
};

export default Button;