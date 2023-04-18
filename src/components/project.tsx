import type { iProject } from "@/types/project";
import { ArrowTr, GitHub } from "iconoir-react";

const Project = (props: iProject) => {
  return (
    <div className="flex flex-col rounded-md border border-neutral-800 p-4">
      <div className="mb-2 flex items-center justify-between">
        {props.url ? (
          <a href={props.url} target="_blank">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-medium duration-150 hover:text-gray-400">
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
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {props.tags?.map((tag: string) => (
            <div
              className="truncate rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 font-mono text-xs"
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
