import React, { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

type Styles = "danger" | "success" | "secondary" | "primary" | "transparent" | undefined;

interface Props  {
  children?: ReactNode;
  onClick?: () => void;
  buttonText?: string;
  customStyle: Styles;
  className?: any;
  [props: string]: any;
}

const Button: React.FC<Props> = ({ buttonText = "Button", customStyle, children, onClick, className, ...props }) => {
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
      onClick={onClick}
      className={`btn py-2 px-8 ${style} ${className}`}
      {...props}
    >
      <div
        className={`[font-family:'Inter',Helvetica] text-[20px] text-white relative text-center ${
          customStyle === "danger" ? "underline" : ""
        } ${customStyle === "danger" ? "font-bold" : "font-medium"}`}
      >
      {buttonText}
      {children}
      </div>
    </button>
  );
};

export default Button;