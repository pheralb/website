import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-neutral-900 rounded-md hover:bg-neutral-900 dark:hover:bg-neutral-800 border dark:border-neutral-800 ${props.className}`}
      type={props.type}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
