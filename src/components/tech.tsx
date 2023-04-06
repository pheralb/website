import clsx from "clsx";
import type { iTechnology } from "../data/technologies";

const Tech = (props: iTechnology) => {
  return (
    <div
      className={clsx(
        `flex max-w-xs flex-col items-center space-y-2 rounded-lg border border-neutral-800 p-4`,
        `bg-[${"#5544"}]`
      )}
    >
      <div>{props.icon}</div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Tech;
