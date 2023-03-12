import clsx from "clsx";
import type { ReactNode } from "react";

interface iButton {
  children: ReactNode;
  icon?: ReactNode;
  onClick: () => void;
  className?: string;
}

const Button = (props: iButton) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "px-4 py-2 rounded-md text-white border border-neutral-800 bg-neutral-900 hover:border-neutral-700 duration-100 transition-colors text-sm",
        props.className
      )}
    >
      <div className="flex items-center">
        <div className="mr-2">{props.icon}</div>
        {props.children}
      </div>
    </button>
  );
};

export default Button;
