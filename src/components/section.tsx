import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10">
      <div className="flex items-center mb-3 space-x-4">
        <h1 className="mb-2 text-2xl font-medium">{props.title}</h1>
      </div>
      {props.children}
    </div>
  );
};

export default Section;
