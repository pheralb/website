import Avatar from "./avatar";
import { GitHub, Npm, OpenNewWindow, Puzzle } from "iconoir-react";

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
              <h1 className="text-xl font-medium hover:text-gray-300">
                {props.title}
              </h1>
              <OpenNewWindow
                width={13}
                height={13}
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
      <p className="dark:text-gray-300">{props.description}</p>
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
        <div className="hidden md:flex items-center space-x-1">
          {props.team?.map((member: string) => (
            <a
              key={member}
              href={`https://github.com/${member}`}
              target="_blank"
              title={member}
              className="hover:-translate-y-0.5 duration-200"
            >
              <Avatar
                size={20}
                name={member}
                colors={["#F56565", "#ED8936", "#ECC94B", "#48BB78", "#4299E1"]}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
