import CustomContainer from "@/ui/container";
import React from "react";

type Props = {};

const Warning = (props: Props) => {
  return (
    <div className="p-2 text-white bg-indigo-900/30">
      <CustomContainer>
        <p>🚧 Website under construction.</p>
      </CustomContainer>
    </div>
  );
};

export default Warning;
