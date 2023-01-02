import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <div className="mb-4 pt-7">
      <h1 className="mb-3 text-2xl dark:text-gray-300">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Section;
