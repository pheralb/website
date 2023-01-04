import React from "react";

interface PageSectionProps {
  title?: string;
}

const PageSection = (props: PageSectionProps) => {
  return (
    <div className="flex flex-col py-8">
      <h2 className="text-4xl font-medium">
        {props.title ? props.title : "Page Section"}
      </h2>
    </div>
  );
};

export default PageSection;
