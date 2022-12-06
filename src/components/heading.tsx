import React from "react";

interface HeadingProps {
  title: string;
  children: React.ReactNode;
}

const Heading = (props: HeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-12 border-b bg-neutral-900 border-neutral-800">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div>
          <h1 className="mb-5 text-5xl font-bold">{props.title}</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Heading;
