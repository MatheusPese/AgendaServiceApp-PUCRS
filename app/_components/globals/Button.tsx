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
  ? style = "btn-secondary bg-[gray]"
  : customStyle === "success"
  ? style ="bg-[green]"
  : customStyle === "danger"
  ? style = "bg-[red]"
  : customStyle === "transparent"
  ? style = "bg-[#00000033] hover:bg-[#00000066]"
  : style = "btn-primary bg-[#337bff]"

  return (
    <button
      type = {type}
      onClick={onClick}
      className={`btn py-2 px-8 ${style} ${className}
      ${size === "tiny"   ? "text-[0.8rem]" : 
      size === "small"  ? "text-[1rem]" : 
      size === "medium" ? "text-[1.2rem]"   : 
      size === "large"  ?  "text-[2rem]"  : 
    ""}
      `}

      {...props}
    >
      <div
        className={`[font-family:'Inter',Helvetica] text-white relative text-center
          ${customStyle === "danger" ? "underline font-bold" : ""} 

        `}
      >
        {buttonText}
        {children}
      </div>
    </button>
  );
};

export default Button;