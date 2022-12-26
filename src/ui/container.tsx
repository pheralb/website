import React from "react";

interface CustomContainerProps {
  children: React.ReactNode;
}

const CustomContainer = (props: CustomContainerProps) => {
  return <div className="max-w-6xl mx-auto">{props.children}</div>;
};

export default CustomContainer;
