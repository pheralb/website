import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={`flex items-center justify-center pl-3 pr-3 py-2 transition-colors duration-200 rounded-lg hover:bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-neutral-900 focus:ring-neutral-500 ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon && <div className="mr-3">{props.icon}</div>}
      {props.children}
    </button>
  );
};

export default Button;
