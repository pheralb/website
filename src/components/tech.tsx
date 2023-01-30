import type { iTechnology } from "../data/technologies";

const Tech = (props: iTechnology) => {
  return (
    <div className="flex flex-col items-center space-y-2 max-w-xs border border-neutral-800 rounded-lg p-4">
      <div>{props.icon}</div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Tech;
