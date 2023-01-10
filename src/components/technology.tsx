import React from "react";

interface TechnologyProps {
  name: string;
  icon: React.ReactNode;
}

const Technology = (props: TechnologyProps) => {
  return (
    <div className="p-3 flex items-center flex-col space-y-2 bg-neutral-100 font-medium dark:bg-neutral-900 rounded-lg w-40">
      {props.icon}
      <p>{props.name}</p>
    </div>
  );
};

export default Technology;
