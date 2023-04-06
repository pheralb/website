import { ArrowTr, GitHub } from "iconoir-react";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  gh?: string;
  type: string;
  tags?: string[];
  team?: string[];
}

const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-col p-4 border rounded-md border-neutral-800">
      <div className="flex items-center justify-between mb-2">
        {props.url ? (
          <a href={props.url} target="_blank">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-medium hover:text-gray-400 duration-150">
                {props.title}
              </h1>
              <ArrowTr
                width={14}
                height={14}
                name="Deploy"
                className="text-gray-400"
              />
            </div>
          </a>
        ) : (
          <h1 className="text-xl font-medium">{props.title}</h1>
        )}
        <a href={props.gh ? props.gh : ""} target="_blank" title="Repository">
          <GitHub
            width={20}
            height={20}
            className="text-gray-400 transition-colors duration-150 hover:text-gray-100"
            name="Github"
          />
        </a>
      </div>
      <p className="text-gray-400">{props.description}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center space-x-2">
          {props.tags?.map((tag: string) => (
            <div
              className="px-2 py-1 text-xs font-mono truncate border rounded-md bg-neutral-900 border-neutral-800"
              title={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
