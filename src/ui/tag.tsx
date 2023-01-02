import React from "react";

interface TagProps {
  children: React.ReactNode;
}

const Tag = (props: TagProps) => {
  return (
    <div className="px-2 py-1 font-mono text-xs border rounded-md dark:text-gray-300 dark:bg-neutral-900 dark:border-neutral-800">
      {props.children}
    </div>
  );
};

export default Tag;
