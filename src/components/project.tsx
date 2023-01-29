import {
  BoxIso,
  GitHub,
  Npm,
  NpmSquare,
  OpenNewWindow,
  Svg3DSelectPoint,
  Svg3DSelectSolid,
} from "iconoir-react";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  gh?: string;
  type: string;
  tags?: string[];
}

const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-col p-4 border rounded-md border-neutral-800">
      <div className="flex items-center justify-between mb-2">
        {props.url ? (
          <a href={props.url}>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-medium hover:text-gray-300">
                {props.title}
              </h1>
              <OpenNewWindow width={13} height={13} />
            </div>
          </a>
        ) : (
          <h1 className="text-xl font-medium">{props.title}</h1>
        )}
        <a href={props.gh ? props.gh : ""}>
          <GitHub
            width={20}
            height={20}
            className="text-gray-400 transition-colors duration-150 hover:text-gray-100"
            name="Github"
          />
        </a>
      </div>
      <p className="dark:text-gray-300">{props.description}</p>
      <div className="flex items-center mt-3 space-x-2">
        <div className="hidden md:block">
          {props.type === "Library" ? (
            <Npm width={23} height={23} name="Library" className="text-red-400" />
          ) : (
            <BoxIso width={20} height={20} name="App" className="text-blue-400" />
          )}
        </div>
        {props.tags?.map((tag: string) => (
          <div
            className="px-2 py-1 text-xs font-mono truncate border rounded-md bg-neutral-900 border-neutral-800 cursor-pointer"
            title={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
