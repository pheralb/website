import React from "react";
import Down from "./animations/down";
import Up from "./animations/up";

interface HeadingProps {
  title: string;
  classTitle?: string;
  children: React.ReactNode;
}

const Heading = (props: HeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-14 bg-neutral-900">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div>
          <Down>
            <h1 className={`mb-5 text-5xl font-bold ${props.classTitle}`}>
              {props.title}
            </h1>
          </Down>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Heading;
