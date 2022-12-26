import React from "react";

interface TagProps {
  children: React.ReactNode;
}

const Tag = (props: TagProps) => {
  return (
    <div className="px-2 py-1 font-mono text-xs text-gray-300 border rounded-md bg-neutral-900 border-neutral-800">
      {props.children}
    </div>
  );
};

export default Tag;
