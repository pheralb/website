import React from "react";

interface CustomContainerProps {
  children: React.ReactNode;
}

const CustomContainer = (props: CustomContainerProps) => {
  return <div className="max-w-6xl p-4 mx-auto md:p-0">{props.children}</div>;
};

export default CustomContainer;
