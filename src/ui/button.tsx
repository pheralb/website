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
        "rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-white transition-colors duration-100 hover:border-neutral-700",
        props.className
      )}
    >
      <div className="flex items-center">
        <div className="mr-3">{props.icon}</div>
        {props.children}
      </div>
    </button>
  );
};

export default Button;
