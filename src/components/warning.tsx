import CustomContainer from "@/ui/container";
import React from "react";

type Props = {};

const Warning = (props: Props) => {
  return (
    <div className="p-2 border-b dark:text-white border-neutral-200 dark:border-neutral-800">
      <CustomContainer>
        <p>🚧 Website under construction.</p>
      </CustomContainer>
    </div>
  );
};

export default Warning;
