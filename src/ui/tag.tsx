import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Tag = (props: TagProps) => {
  return (
    <div
      className={`px-2 py-1 font-mono truncate border rounded-md dark:text-gray-300 dark:bg-neutral-900 dark:border-neutral-800 ${
        props.className
      } ${props.onClick ? "cursor-pointer" : ""}`}
      onClick={props.onClick}
      title={`${props.children}`}
    >
      {props.children}
    </div>
  );
};

export default Tag;
