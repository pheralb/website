import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <div className={`${props.className ? props.className : "mb-4 pt-7 "}`}>
      <div className="flex items-center mb-3 space-x-4">
        {props.icon ? props.icon : null}
        <h1 className="text-2xl dark:text-gray-300">{props.title}</h1>
      </div>
      {props.children}
    </div>
  );
};

export default Section;
