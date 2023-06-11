import { useState } from "react";
import type { iProject } from "@/types/project";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { ArrowTr, Flash, GitHub } from "iconoir-react";
import clsx from "clsx";

const Project = (props: iProject) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col rounded-md border border-neutral-800 p-4">
      <div className="mb-2 flex items-center justify-between">
        {props.url ? (
          <a
            href={props.url}
            target="_blank"
            className="group text-xl font-medium"
          >
            <div className="flex items-center space-x-2 transition  hover:text-gray-400">
              <h1>{props.title}</h1>
              <ArrowTr
                width={12}
                height={12}
                name="Deploy"
                className="inline-block text-gray-500 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
                strokeWidth={3}
              />
            </div>
          </a>
        ) : (
          <h1 className="text-xl font-medium">{props.title}</h1>
        )}
        <div className="flex items-center space-x-3">
          {props.team.length > 1 && (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger name="Team">
                <Flash
                  width={20}
                  height={20}
                  className={clsx("text-gray-400 transition-colors duration-150 hover:text-yellow-400",
                    open && "text-yellow-400")}
                  name="Team"
                />
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col">
                  <p className="p-2 text-sm font-bold text-neutral-500">Team</p>
                  {props.team.sort((a, b) => a.localeCompare(b)).map((member: string) => (
                    <div key={member} className="flex items-center space-x-2 px-3 py-1 cursor-default hover:bg-neutral-800 duration-75 transition-all">
                      <a href={`https://github.com/${member}`} target="_blank" className="cursor-default">{member}</a>
                      <ArrowTr
                        width={10}
                        height={10}
                        name="Github Profile"
                        strokeWidth={3}
                        className="text-neutral-500"
                      />
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
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
